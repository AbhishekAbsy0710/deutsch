import { NextRequest, NextResponse } from "next/server";

// ── Azure TTS Configuration ──
const AZURE_SPEECH_KEY = process.env.AZURE_SPEECH_KEY;
const AZURE_SPEECH_REGION = process.env.AZURE_SPEECH_REGION || "westeurope";
const AZURE_VOICE = process.env.AZURE_SPEECH_VOICE || "de-DE-KatjaNeural";

// Token cache (Azure tokens last 10 minutes)
let cachedToken: { token: string; expiresAt: number } | null = null;

async function getAzureToken(): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expiresAt) {
    return cachedToken.token;
  }

  const res = await fetch(
    `https://${AZURE_SPEECH_REGION}.api.cognitive.microsoft.com/sts/v1.0/issueToken`,
    {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": AZURE_SPEECH_KEY!,
        "Content-Length": "0",
      },
    }
  );

  if (!res.ok) {
    throw new Error(`Azure token fetch failed: ${res.status}`);
  }

  const token = await res.text();
  cachedToken = { token, expiresAt: Date.now() + 9 * 60 * 1000 }; // 9 min
  return token;
}

function buildSSML(text: string, voice: string, rate: string = "0.95"): string {
  // Escape XML special characters
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  return `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="de-DE">
  <voice name="${voice}">
    <prosody rate="${rate}">${escaped}</prosody>
  </voice>
</speak>`;
}

export async function POST(request: NextRequest) {
  // No auth guard — TTS should be accessible for learning
  try {
    const body = await request.json();
    const { text, voice, rate } = body;

    if (!text || typeof text !== "string") {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    // Clean the text
    let cleaned = text
      .replace(/\*\*/g, "")
      .replace(/[^a-zA-ZäöüÄÖÜßàáâãèéêìíîòóôùúûñçÀÁÂÃÈÉÊÌÍÎÒÓÔÙÚÛÑÇ0-9.,!?;:'"()\-\s]/g, "")
      .replace(/\n+/g, ". ")
      .replace(/\s+/g, " ")
      .trim();

    if (!cleaned) {
      return NextResponse.json({ error: "No speakable text" }, { status: 400 });
    }

    if (cleaned.length > 600) {
      cleaned = cleaned.substring(0, 600);
    }

    // ── Azure Neural TTS ──
    if (AZURE_SPEECH_KEY) {
      try {
        const token = await getAzureToken();
        const selectedVoice = voice || AZURE_VOICE;
        const ssml = buildSSML(cleaned, selectedVoice, rate || "0.95");

        const ttsRes = await fetch(
          `https://${AZURE_SPEECH_REGION}.tts.speech.microsoft.com/cognitiveservices/v1`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/ssml+xml",
              "X-Microsoft-OutputFormat": "audio-24khz-96kbitrate-mono-mp3",
              "User-Agent": "DeutschLernen",
            },
            body: ssml,
          }
        );

        if (!ttsRes.ok) {
          throw new Error(`Azure TTS failed: ${ttsRes.status}`);
        }

        const audioBuffer = await ttsRes.arrayBuffer();

        return new NextResponse(new Uint8Array(audioBuffer), {
          headers: {
            "Content-Type": "audio/mpeg",
            "Content-Length": audioBuffer.byteLength.toString(),
            "Cache-Control": "public, max-age=3600",
          },
        });
      } catch (azureError) {
        console.error("[TTS] Azure failed, falling back to Google:", azureError);
        // Fall through to Google fallback
      }
    }

    // ── Google Translate Fallback ──
    const chunks: string[] = [];
    let remaining = cleaned;

    while (remaining.length > 0) {
      if (remaining.length <= 200) {
        chunks.push(remaining);
        break;
      }
      let breakPoint = remaining.lastIndexOf(". ", 200);
      if (breakPoint <= 0) breakPoint = remaining.lastIndexOf(" ", 200);
      if (breakPoint <= 0) breakPoint = 200;
      chunks.push(remaining.substring(0, breakPoint));
      remaining = remaining.substring(breakPoint).trimStart();
    }

    const results = await Promise.allSettled(
      chunks.filter(c => c.trim()).map(async (chunk) => {
        const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=de&client=tw-ob&q=${encodeURIComponent(chunk)}`;
        const res = await fetch(url, {
          headers: {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
            "Referer": "https://translate.google.com/",
          },
        });

        if (!res.ok) throw new Error(`Status ${res.status}`);

        const contentType = res.headers.get("content-type") || "";
        if (!contentType.includes("audio")) throw new Error("Not audio");

        const buf = await res.arrayBuffer();
        if (buf.byteLength === 0 || buf.byteLength > 5_000_000) throw new Error("Bad size");

        return new Uint8Array(buf);
      })
    );

    const audioBuffers: Uint8Array[] = [];
    for (const r of results) {
      if (r.status === "fulfilled") audioBuffers.push(r.value);
    }

    if (audioBuffers.length === 0) {
      return NextResponse.json({ error: "TTS service unavailable" }, { status: 503 });
    }

    const totalLength = audioBuffers.reduce((sum, buf) => sum + buf.length, 0);
    const combined = new Uint8Array(totalLength);
    let offset = 0;
    for (const buf of audioBuffers) {
      combined.set(buf, offset);
      offset += buf.length;
    }

    return new NextResponse(combined, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": totalLength.toString(),
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    console.error("[TTS] Error:", error);
    return NextResponse.json(
      { error: "TTS generation failed" },
      { status: 500 }
    );
  }
}

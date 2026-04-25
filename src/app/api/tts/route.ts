import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";

const VOICE = "de-DE-KatjaNeural";
const OUTPUT_FORMAT = "audio-24khz-96kbitrate-mono-mp3";

const TRUSTED_CLIENT_ID = randomUUID().replace(/-/g, "");

async function getWssUrl(): Promise<string> {
  const res = await fetch(
    "https://dev.virtualearth.net/REST/v1/Locations?key=0",
    { method: "HEAD" }
  ).catch(() => null);
  // The WSS endpoint doesn't actually require auth
  return `wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1?TrustedClientToken=${TRUSTED_CLIENT_ID}&ConnectionId=${randomUUID().replace(/-/g, "")}`;
}

function buildSSML(text: string, voice: string): string {
  // Escape XML special chars
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  return `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='de-DE'>
    <voice name='${voice}'>
      <prosody rate='-5%' pitch='+0Hz'>${escaped}</prosody>
    </voice>
  </speak>`;
}

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();

    if (!text || typeof text !== "string") {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    // Clean the text — keep English in brackets so it reads both German and English
    const cleaned = text
      .replace(/\*\*/g, "")
      .replace(/[\u{1F300}-\u{1F9FF}]/gu, "")   // Emojis block 1
      .replace(/[\u{2600}-\u{26FF}]/gu, "")      // Misc symbols
      .replace(/[\u{2700}-\u{27BF}]/gu, "")      // Dingbats
      .replace(/[\u{FE00}-\u{FE0F}]/gu, "")      // Variation selectors
      .replace(/[\u{200D}]/gu, "")               // Zero-width joiner
      .replace(/[\u{E0020}-\u{E007F}]/gu, "")    // Tags
      .replace(/[📖✏️➡️✅❌💡🇩🇪]/gu, "")        // Common tutor emojis
      .replace(/\n+/g, ". ")
      .replace(/\s+/g, " ")
      .trim();

    if (!cleaned) {
      return NextResponse.json({ error: "No speakable text" }, { status: 400 });
    }

    console.log("[TTS API] Generating audio for:", cleaned.substring(0, 60));

    // Use Google Translate TTS as a simple, reliable fallback
    // This is free and produces decent quality German speech
    const encodedText = encodeURIComponent(cleaned);
    
    // Google Translate TTS - split into chunks if needed (max ~200 chars per request)
    const maxChunkLen = 200;
    const chunks: string[] = [];
    let remaining = cleaned;
    
    while (remaining.length > 0) {
      if (remaining.length <= maxChunkLen) {
        chunks.push(remaining);
        break;
      }
      // Find a good break point
      let breakPoint = remaining.lastIndexOf(". ", maxChunkLen);
      if (breakPoint === -1) breakPoint = remaining.lastIndexOf(" ", maxChunkLen);
      if (breakPoint === -1) breakPoint = maxChunkLen;
      chunks.push(remaining.substring(0, breakPoint));
      remaining = remaining.substring(breakPoint).trimStart();
    }

    // Fetch audio for each chunk
    const audioChunks: ArrayBuffer[] = [];
    for (const chunk of chunks) {
      const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=de&client=tw-ob&q=${encodeURIComponent(chunk)}`;
      const res = await fetch(url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
          "Referer": "https://translate.google.com/",
        },
      });
      
      if (!res.ok) {
        console.error("[TTS API] Google TTS failed for chunk:", res.status);
        throw new Error(`Google TTS returned ${res.status}`);
      }
      
      audioChunks.push(await res.arrayBuffer());
    }

    // Concatenate audio chunks
    const totalLength = audioChunks.reduce((sum, buf) => sum + buf.byteLength, 0);
    const combined = new Uint8Array(totalLength);
    let offset = 0;
    for (const buf of audioChunks) {
      combined.set(new Uint8Array(buf), offset);
      offset += buf.byteLength;
    }

    console.log("[TTS API] Audio generated, size:", totalLength, "bytes");

    return new NextResponse(combined, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": totalLength.toString(),
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    console.error("[TTS API] Error:", error);
    return NextResponse.json(
      { error: "TTS generation failed" },
      { status: 500 }
    );
  }
}

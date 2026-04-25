import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();

    if (!text || typeof text !== "string") {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    // Clean the text — only keep speakable characters (letters, numbers, punctuation, spaces)
    const cleaned = text
      .replace(/\*\*/g, "")
      .replace(/[^a-zA-ZäöüÄÖÜßàáâãèéêìíîòóôùúûñçÀÁÂÃÈÉÊÌÍÎÒÓÔÙÚÛÑÇ0-9.,!?;:'"()\-\s]/g, "")
      .replace(/\n+/g, ". ")
      .replace(/\s+/g, " ")
      .trim();

    if (!cleaned) {
      return NextResponse.json({ error: "No speakable text" }, { status: 400 });
    }

    console.log("[TTS] Text:", cleaned.substring(0, 80));

    // Split into chunks (Google TTS has ~200 char limit per request)
    const chunks: string[] = [];
    let remaining = cleaned;

    while (remaining.length > 0) {
      if (remaining.length <= 200) {
        chunks.push(remaining);
        break;
      }
      let breakPoint = remaining.lastIndexOf(". ", 200);
      if (breakPoint === -1) breakPoint = remaining.lastIndexOf(" ", 200);
      if (breakPoint === -1) breakPoint = 200;
      chunks.push(remaining.substring(0, breakPoint));
      remaining = remaining.substring(breakPoint).trimStart();
    }

    // Fetch audio for each chunk from Google Translate TTS
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
        console.error("[TTS] Google TTS failed:", res.status, chunk.substring(0, 40));
        // Skip failed chunks instead of crashing the whole request
        continue;
      }

      audioChunks.push(await res.arrayBuffer());
    }

    if (audioChunks.length === 0) {
      return NextResponse.json({ error: "TTS service unavailable" }, { status: 503 });
    }

    // Concatenate audio chunks
    const totalLength = audioChunks.reduce((sum, buf) => sum + buf.byteLength, 0);
    const combined = new Uint8Array(totalLength);
    let offset = 0;
    for (const buf of audioChunks) {
      combined.set(new Uint8Array(buf), offset);
      offset += buf.byteLength;
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

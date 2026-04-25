import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();

    if (!text || typeof text !== "string") {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    // Clean the text — only keep speakable characters (letters, numbers, punctuation, spaces)
    let cleaned = text
      .replace(/\*\*/g, "")
      .replace(/[^a-zA-ZäöüÄÖÜßàáâãèéêìíîòóôùúûñçÀÁÂÃÈÉÊÌÍÎÒÓÔÙÚÛÑÇ0-9.,!?;:'"()\-\s]/g, "")
      .replace(/\n+/g, ". ")
      .replace(/\s+/g, " ")
      .trim();

    if (!cleaned) {
      return NextResponse.json({ error: "No speakable text" }, { status: 400 });
    }

    // Cap text length to prevent oversized requests (max ~800 chars)
    if (cleaned.length > 800) {
      cleaned = cleaned.substring(0, 800);
    }

    console.log("[TTS] Length:", cleaned.length, "Text:", cleaned.substring(0, 60));

    // Split into chunks (Google TTS has ~200 char limit per request)
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

    // Fetch audio for each chunk from Google Translate TTS
    const audioBuffers: Uint8Array[] = [];
    for (const chunk of chunks) {
      if (!chunk.trim()) continue;
      
      try {
        const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=de&client=tw-ob&q=${encodeURIComponent(chunk)}`;
        const res = await fetch(url, {
          headers: {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
            "Referer": "https://translate.google.com/",
          },
        });

        if (!res.ok) {
          console.error("[TTS] Chunk failed:", res.status);
          continue;
        }

        // Verify it's actually audio
        const contentType = res.headers.get("content-type") || "";
        if (!contentType.includes("audio")) {
          console.error("[TTS] Not audio:", contentType);
          continue;
        }

        const buf = await res.arrayBuffer();
        if (buf.byteLength > 0 && buf.byteLength < 5_000_000) {
          audioBuffers.push(new Uint8Array(buf));
        }
      } catch (chunkErr) {
        console.error("[TTS] Chunk error:", chunkErr);
        continue;
      }
    }

    if (audioBuffers.length === 0) {
      return NextResponse.json({ error: "TTS service unavailable" }, { status: 503 });
    }

    // Concatenate audio chunks safely
    const totalLength = audioBuffers.reduce((sum, buf) => sum + buf.length, 0);
    const combined = new Uint8Array(totalLength);
    let offset = 0;
    for (const buf of audioBuffers) {
      combined.set(buf, offset);
      offset += buf.length;
    }

    console.log("[TTS] Success:", totalLength, "bytes from", audioBuffers.length, "chunks");

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

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();

    if (!text || typeof text !== "string") {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    // Clean the text — only keep speakable characters
    let cleaned = text
      .replace(/\*\*/g, "")
      .replace(/[^a-zA-ZäöüÄÖÜßàáâãèéêìíîòóôùúûñçÀÁÂÃÈÉÊÌÍÎÒÓÔÙÚÛÑÇ0-9.,!?;:'"()\-\s]/g, "")
      .replace(/\n+/g, ". ")
      .replace(/\s+/g, " ")
      .trim();

    if (!cleaned) {
      return NextResponse.json({ error: "No speakable text" }, { status: 400 });
    }

    // Cap text to prevent oversized requests
    if (cleaned.length > 600) {
      cleaned = cleaned.substring(0, 600);
    }

    // Split into chunks (Google TTS has ~200 char limit)
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

    // Fetch ALL chunks in PARALLEL for speed
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

    // Collect successful results (in order)
    const audioBuffers: Uint8Array[] = [];
    for (const r of results) {
      if (r.status === "fulfilled") audioBuffers.push(r.value);
    }

    if (audioBuffers.length === 0) {
      return NextResponse.json({ error: "TTS service unavailable" }, { status: 503 });
    }

    // Concatenate
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

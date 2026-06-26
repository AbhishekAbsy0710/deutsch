import { streamText } from "ai";
import { createGroq } from "@ai-sdk/groq";
import { NextRequest } from "next/server";

export const maxDuration = 30;
export const runtime = 'edge';

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { messages, systemPrompt, authToken: bodyToken } = body;

  // Auth guard
  const authHeader = req.headers.get("authorization");
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (supabaseUrl && supabaseKey) {
    const token = authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : (bodyToken ?? null);
    if (!token) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }
    try {
      const res = await fetch(`${supabaseUrl}/auth/v1/user`, {
        headers: { Authorization: `Bearer ${token}`, apikey: supabaseKey },
      });
      if (!res.ok) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), {
          status: 401,
          headers: { "Content-Type": "application/json" },
        });
      }
    } catch {
      // If Supabase is unreachable, allow through
    }
  }

  // Process messages
  const coreMessages = messages.map((m: any) => {
    let content = m.content;
    if (!content && m.parts) {
      content = m.parts
        .filter((p: any) => p.type === 'text')
        .map((p: any) => p.text)
        .join("");
    }
    content = content || m.text || "";
    // Strip input source tags
    content = content.replace(/^\[INPUT:(voice|typed)\]\s*/i, "");
    return { role: m.role, content };
  });

  const result = streamText({
    model: groq("llama-3.3-70b-versatile"),
    system: systemPrompt,
    messages: coreMessages,
    maxRetries: 0,
  });

  return result.toUIMessageStreamResponse();
}

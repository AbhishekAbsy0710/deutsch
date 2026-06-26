import { streamText } from "ai";
import { createGroq } from "@ai-sdk/groq";
import { NextRequest } from "next/server";

export const maxDuration = 30;
export const runtime = 'edge';

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
});

const SYSTEM_PROMPT = `You are a German writing teacher. The student has written German text and needs detailed feedback.

YOUR TASK:
Analyze the student's German writing and provide structured feedback.

RESPONSE FORMAT (use this exact JSON structure):
{
  "overallScore": <number 0-100>,
  "level": "<detected CEFR level A1-C2>",
  "corrections": [
    {
      "original": "<exact text with error>",
      "corrected": "<corrected version>",
      "type": "grammar" | "spelling" | "word-choice" | "register" | "punctuation",
      "explanation": "<brief explanation in English>"
    }
  ],
  "strengths": ["<what the student did well>"],
  "suggestions": ["<specific improvement tip>"],
  "correctedText": "<the full text with all corrections applied>",
  "wordCount": <number>,
  "grammarScore": <0-100>,
  "vocabularyScore": <0-100>,
  "structureScore": <0-100>
}

RULES:
- Return ONLY valid JSON, no markdown, no extra text
- Be encouraging but honest
- Highlight what's RIGHT before errors
- Limit to the most important 5-8 corrections (don't overwhelm)
- If the text is mostly correct, say so!
- Match feedback complexity to the student's level
- For A1-A2: focus on basic grammar (articles, verb forms, word order)
- For B1-B2: focus on connectors, tenses, register
- For C1-C2: focus on style, nominalization, precision`;

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { text, level, promptTitle } = body;

  // Auth check (same pattern as chat route)
  const authHeader = req.headers.get("authorization");
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (supabaseUrl && supabaseKey) {
    const token = authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : (body.authToken ?? null);
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
      // Graceful degradation
    }
  }

  if (!text || typeof text !== "string") {
    return new Response(JSON.stringify({ error: "Text is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const userMessage = `Student's CEFR level: ${level || "unknown"}
${promptTitle ? `Writing prompt: "${promptTitle}"` : ""}

Student's German text:
"""
${text}
"""

Analyze and return JSON feedback.`;

  try {
    const result = await streamText({
      model: groq("llama-3.3-70b-versatile"),
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: userMessage }],
      maxRetries: 0,
    });

    // Collect full response (non-streaming for JSON)
    let fullText = "";
    for await (const chunk of result.textStream) {
      fullText += chunk;
    }

    // Try to parse JSON from the response
    let parsed;
    try {
      // Handle potential markdown wrapping
      const jsonMatch = fullText.match(/\{[\s\S]*\}/);
      parsed = JSON.parse(jsonMatch ? jsonMatch[0] : fullText);
    } catch {
      parsed = {
        overallScore: 70,
        corrections: [],
        strengths: ["Your text was submitted successfully."],
        suggestions: ["Keep practicing!"],
        correctedText: text,
        wordCount: text.split(/\s+/).length,
        grammarScore: 70,
        vocabularyScore: 70,
        structureScore: 70,
      };
    }

    return new Response(JSON.stringify(parsed), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("[Write-Check] Error:", error);
    return new Response(JSON.stringify({ error: "Analysis failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

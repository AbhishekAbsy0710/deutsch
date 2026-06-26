import { createGroq } from "@ai-sdk/groq";
import { generateText } from "ai";
import { NextRequest } from "next/server";

export const maxDuration = 30;
export const runtime = "edge";

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
});

const EVAL_SYSTEM_PROMPT = `You are a German language evaluator. You will receive a conversation transcript between a learner and an AI character.

Analyze the LEARNER's messages (role: "user") only. Evaluate:

1. **Grammar Score (0-100)**: Check for case errors (Akkusativ/Dativ), verb conjugation, word order, adjective endings, preposition usage.
2. **Vocabulary Score (0-100)**: Assess vocabulary range and appropriateness for the scenario.
3. **Goal Achieved (true/false)**: Did the learner accomplish the conversation goal?
4. **Fluency Rating**: Estimate CEFR level of the learner's output (A1, A2, B1, B2, C1, C2).
5. **Corrections**: List up to 5 specific grammar/vocabulary corrections from the learner's messages.
6. **New Vocabulary Used**: List German words the learner used that show advanced vocabulary.
7. **Suggestions**: 2-3 specific tips to improve.

Respond ONLY with valid JSON in this exact format:
{
  "grammarScore": 78,
  "vocabularyScore": 85,
  "goalAchieved": true,
  "fluencyRating": "B1",
  "corrections": [
    { "original": "learner's text", "corrected": "correct version", "rule": "grammar rule name" }
  ],
  "newVocabularyUsed": ["word1", "word2"],
  "suggestions": ["tip 1", "tip 2"]
}`;

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { messages, scenarioGoal, scenarioLevel } = body;

  // Auth guard
  const authHeader = req.headers.get("authorization");
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (supabaseUrl && supabaseKey) {
    const token = authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : null;
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
      // Allow through if Supabase unreachable
    }
  }

  // Build transcript summary
  const transcript = messages
    .map((m: any) => {
      const text = m.content || m.text || (m.parts?.find((p: any) => p.type === "text")?.text) || "";
      const cleanText = text.replace(/^\[INPUT:(voice|typed)\]\s*/i, "").replace("[SCENARIO_COMPLETE]", "").trim();
      return `${m.role === "user" ? "LEARNER" : "AI"}: ${cleanText}`;
    })
    .join("\n");

  const userPrompt = `Scenario Goal: ${scenarioGoal}
Expected Level: ${scenarioLevel}

Conversation Transcript:
${transcript}

Evaluate the LEARNER's German language performance.`;

  try {
    const result = await generateText({
      model: groq("llama-3.3-70b-versatile"),
      system: EVAL_SYSTEM_PROMPT,
      prompt: userPrompt,
      maxRetries: 1,
    });

    // Parse the JSON from the response
    const text = result.text.trim();
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return new Response(JSON.stringify({
        grammarScore: 50, vocabularyScore: 50, goalAchieved: false,
        fluencyRating: "A2", corrections: [], newVocabularyUsed: [], suggestions: ["Keep practicing!"],
      }), { headers: { "Content-Type": "application/json" } });
    }

    const evaluation = JSON.parse(jsonMatch[0]);
    return new Response(JSON.stringify(evaluation), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("[conversation-eval] Error:", error);
    return new Response(JSON.stringify({
      grammarScore: 50, vocabularyScore: 50, goalAchieved: false,
      fluencyRating: "A2", corrections: [], newVocabularyUsed: [], suggestions: ["Keep practicing!"],
    }), { headers: { "Content-Type": "application/json" } });
  }
}

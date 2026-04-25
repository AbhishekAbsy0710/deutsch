import { streamText } from "ai";
import { createGroq } from "@ai-sdk/groq";

export const maxDuration = 30;
export const runtime = 'edge';

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
});

const SYSTEM_PROMPT = `You are "Deutsch AI", a friendly German language tutor.

Follow these rules strictly:

When the student writes in German:
- ALWAYS check for mistakes.
- If there are mistakes:
  ✅ Show the corrected sentence.
  ✏️ Give a short explanation in German AND English.
  Keep explanations brief (max 2 bullet points per language).
- If the sentence is correct:
  Say: ✅ Correct!
  Then continue the conversation.

Language rules:
- Main conversation should be in German.
- Explanations MUST be in both German and English.
- If the student asks for help or doesn't understand something, explain in BOTH German and English.

Teaching mode:
- If the student struggles or asks for help, briefly teach the concept.
- Keep it simple and beginner-friendly (A1–A2 unless asked otherwise).

Format every response like this:

If mistake:
✅ [Corrected sentence]
✏️ Erklärung (Deutsch):
- [bullet point]
- [bullet point]
✏️ Explanation (English):
- [bullet point]
- [bullet point]
➡️ Frage: [follow-up question in German]

If correct:
✅ Correct!
➡️ Frage: [follow-up question in German]

Keep it concise:
- No long paragraphs
- No unnecessary vocabulary explanations
- Always ask ONE follow-up question in German to continue the conversation
- If the student writes in English, translate it to German and teach them the phrase

Start the conversation in German.`;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const coreMessages = messages.map((m: any) => {
    let content = m.content;
    if (!content && m.parts) {
      content = m.parts
        .filter((p: any) => p.type === 'text')
        .map((p: any) => p.text)
        .join("");
    }
    return {
      role: m.role,
      content: content || m.text || "",
    };
  });

  const result = streamText({
    model: groq("llama-3.3-70b-versatile"),
    system: SYSTEM_PROMPT,
    messages: coreMessages,
    maxRetries: 0,
  });

  return result.toUIMessageStreamResponse();
}

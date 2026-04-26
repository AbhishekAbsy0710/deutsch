import { Lesson } from "./lessons";

export const lessonsA2ExamSkills: Record<string, Lesson> = {
  "la2_51": {
    id: "la2_51",
    title: "Describing Pictures (Bildbeschreibung)",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "The Exam Speaking Task",
        explanation: "In both the A1 and A2 Goethe speaking exams, you will be shown a picture and asked to describe it or make up a story. Having ready-made phrases is essential for scoring well.",
        examples: [
          { de: "Auf dem Bild sehe ich...", en: "In the picture I see..." },
          { de: "Auf dem Foto sind... (Personen/Dinge)", en: "In the photo there are... (people/things)" },
          { de: "Das Bild zeigt...", en: "The picture shows..." },
          { de: "Im Hintergrund sehe ich...", en: "In the background I see..." }
        ]
      },
      {
        type: "grammar",
        title: "Location Words for Describing",
        explanation: "Use these words to describe WHERE things are in the picture.",
        examples: [
          { de: "links = on the left, rechts = on the right", en: "Links sehe ich einen Mann. / Rechts steht ein Baum." },
          { de: "oben = at the top, unten = at the bottom", en: "Oben ist der Himmel. / Unten ist die Straße." },
          { de: "in der Mitte = in the middle/center", en: "In der Mitte steht eine Frau." },
          { de: "im Vordergrund = in the foreground", en: "Im Vordergrund sehe ich ein Kind." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "Auf dem Bild sehe ich...", phonetic: "owf daim bilt zay-e ikh", meaning: "In the picture I see...", example: { de: "Auf dem Bild sehe ich eine Familie.", en: "In the picture I see a family." } },
          { word: "im Vordergrund", phonetic: "im for-der-groont", meaning: "in the foreground", example: { de: "Im Vordergrund sitzt ein Mann.", en: "In the foreground a man is sitting." } },
          { word: "im Hintergrund", phonetic: "im hin-ter-groont", meaning: "in the background", example: { de: "Im Hintergrund sieht man Berge.", en: "In the background you can see mountains." } },
          { word: "in der Mitte", phonetic: "in dair mit-te", meaning: "in the middle", example: { de: "In der Mitte steht ein Tisch.", en: "In the middle there is a table." } },
          { word: "Es sieht aus wie...", phonetic: "es zeet ows vee", meaning: "It looks like...", example: { de: "Es sieht aus wie ein Park.", en: "It looks like a park." } },
          { word: "Ich glaube / Ich denke", phonetic: "ikh glow-be / ikh den-ke", meaning: "I believe / I think", example: { de: "Ich glaube, die Frau ist glücklich.", en: "I believe the woman is happy." } },
          { word: "vielleicht", phonetic: "feel-lykht", meaning: "maybe / perhaps", example: { de: "Vielleicht sind sie im Urlaub.", en: "Maybe they are on vacation." } }
        ]
      },
      {
        type: "speaking",
        phrase: "Auf dem Bild sehe ich eine Familie in einem Park. Links sitzt ein Mann auf einer Bank. In der Mitte spielen zwei Kinder. Im Hintergrund sieht man Bäume. Ich glaube, es ist Sommer, weil die Sonne scheint.",
        translation: "In the picture I see a family in a park. On the left a man is sitting on a bench. In the middle two children are playing. In the background you can see trees. I believe it's summer because the sun is shining.",
        phonetic: "owf daim bilt zay-e ikh ay-ne fa-mee-lee-e in ay-nem park...",
        tip: "Practice this pattern with any picture! Start with 'Auf dem Bild sehe ich...', describe locations (links/rechts/Mitte), then add your opinion (Ich glaube/denke...)."
      }
    ]
  },
  "la2_52": {
    id: "la2_52",
    title: "Writing Emails for the Exam (Schreiben-Aufgabe)",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "The Email Structure Template",
        explanation: "The Goethe A2 Schreiben (writing) section asks you to write an email. You MUST follow this exact structure to get full marks. Missing any part costs you points!",
        examples: [
          { de: "1. Betreff: (Subject line)", en: "e.g., Betreff: Einladung zur Party" },
          { de: "2. Anrede: (Greeting)", en: "e.g., Liebe Maria, / Sehr geehrte Frau Schmidt," },
          { de: "3. Einleitung: (Opening sentence)", en: "e.g., vielen Dank für deine E-Mail." },
          { de: "4. Hauptteil: (Main content — answer ALL points!)", en: "Answer every bullet point from the task!" },
          { de: "5. Grußformel: (Closing)", en: "e.g., Viele Grüße / Mit freundlichen Grüßen" },
          { de: "6. Name: (Your name)", en: "e.g., Thomas" }
        ]
      },
      {
        type: "grammar",
        title: "Exam Tip: The Opening & Closing",
        explanation: "Memorize these opening and closing formulas. They work for EVERY email task and give you easy points.",
        examples: [
          { de: "Opening (informal): Vielen Dank für deine E-Mail / Nachricht.", en: "Thank you for your email/message." },
          { de: "Opening (formal): Ich schreibe Ihnen, weil...", en: "I'm writing to you because..." },
          { de: "Closing (informal): Ich freue mich auf deine Antwort!", en: "I look forward to your reply!" },
          { de: "Closing (formal): Vielen Dank im Voraus.", en: "Thank you in advance." }
        ]
      },
      {
        type: "grammar",
        title: "Sample Informal Email",
        explanation: "Here's a complete example email that would score well on the exam:",
        examples: [
          { de: "Betreff: Party am Samstag", en: "Subject: Party on Saturday" },
          { de: "Liebe Anna,", en: "Dear Anna," },
          { de: "vielen Dank für deine Einladung! Ich komme gerne zu deiner Party. Soll ich etwas mitbringen? Ich kann einen Kuchen backen.", en: "(body — answering the task points)" },
          { de: "Wann fängt die Party an? Ich freue mich!", en: "(asking a question — often required)" },
          { de: "Viele Grüße\nThomas", en: "Best regards, Thomas" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "der Betreff", phonetic: "be-tref", meaning: "subject line", example: { de: "Betreff: Terminänderung", en: "Subject: Appointment change" } },
          { word: "die Anrede", phonetic: "an-ray-de", meaning: "greeting/salutation", example: { de: "Die Anrede ist immer 'Liebe/r' oder 'Sehr geehrte/r'.", en: "The greeting is always 'Dear' (informal/formal)." } },
          { word: "die Grußformel", phonetic: "groos-for-mel", meaning: "closing formula", example: { de: "Viele Grüße / Mit freundlichen Grüßen", en: "Best regards / Yours sincerely" } },
          { word: "Vielen Dank für...", phonetic: "fee-len dank für", meaning: "Thank you for...", example: { de: "Vielen Dank für Ihre schnelle Antwort.", en: "Thank you for your quick reply." } },
          { word: "Ich freue mich auf...", phonetic: "ikh froy-e mikh owf", meaning: "I look forward to...", example: { de: "Ich freue mich auf das Treffen!", en: "I look forward to the meeting!" } },
          { word: "Könnten Sie mir sagen...", phonetic: "könn-ten zee meer zah-gen", meaning: "Could you tell me...", example: { de: "Könnten Sie mir sagen, wann der Kurs beginnt?", en: "Could you tell me when the course starts?" } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "In the Goethe A2 Schreiben task, what is the MOST common mistake?",
        options: [
          "Writing too many words",
          "Not answering ALL the task points",
          "Using too formal language",
          "Writing in English"
        ],
        correctIndex: 1,
        explanation: "The #1 mistake is not addressing every bullet point in the task. The exam gives you 3-4 things to write about — you MUST respond to ALL of them or you lose points, even if your German is perfect."
      }
    ]
  }
};

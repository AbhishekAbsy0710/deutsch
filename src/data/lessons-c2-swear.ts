import { Lesson } from "./lessons";

export const lessonsC2Swear: Record<string, Lesson> = {
  "c2-sw1": {
    id: "c2-sw1",
    title: "Expressing Frustration (Schimpfen)",
    module: "C2",
    blocks: [
      {
        type: "cultural-note",
        title: "The Art of German Complaining (Meckern)",
        content: "Germans are world-champions at complaining ('Meckern' or 'Nörgeln'). However, true swearing in a professional or public setting is frowned upon. Instead, Germans use colorful, localized exclamations that convey deep frustration without being purely vulgar.",
        emoji: "🤬"
      },
      {
        type: "vocabulary",
        word: "Mist!",
        translation: "Crap! / Darn!",
        example: "So ein Mist, ich habe den Zug verpasst.",
        audioUrl: "",
        phonetic: "mɪst"
      },
      {
        type: "vocabulary",
        word: "Verdammt!",
        translation: "Damn (it)!",
        example: "Verdammt, wo sind meine Schlüssel?",
        audioUrl: "",
        phonetic: "fɛɐ̯ˈdamt"
      },
      {
        type: "vocabulary",
        word: "Bescheuert",
        translation: "stupid / idiotic",
        example: "Das ist doch total bescheuert!",
        audioUrl: "",
        phonetic: "bəˈʃɔɪ̯ɐt"
      },
      {
        type: "vocabulary",
        word: "Ausflippen",
        translation: "to freak out / lose it",
        example: "Wenn das nochmal passiert, flippe ich aus.",
        audioUrl: "",
        phonetic: "ˈaʊ̯sˌflɪpən"
      },
      {
        type: "example-dialogue",
        title: "At the Train Station",
        context: "The train is delayed again.",
        lines: [
          { speaker: "Pendler", de: "Es ist zum Mäusemelken! Schon wieder 20 Minuten Verspätung.", en: "It's enough to drive you crazy! 20 minutes delay again." },
          { speaker: "Frau", de: "Total bescheuert. Und gestern ist er komplett ausgefallen.", en: "Totally stupid. And yesterday it was cancelled completely." },
          { speaker: "Pendler", de: "Verdammt noch mal, ich komme zu spät zum Meeting.", en: "Damn it, I'm going to be late for the meeting." }
        ]
      },
      {
        type: "quiz-mcq",
        question: "What is the polite/lighthearted way to say something drives you crazy?",
        options: ["Das ist zum Mäusemelken", "Das ist bodenlos", "Das ist ein Kater"],
        correctIndex: 0,
        explanation: "'Es ist zum Mäusemelken' translates literally to 'It's for milking mice' — it means something is incredibly frustrating or an exercise in futility."
      }
    ]
  }
};

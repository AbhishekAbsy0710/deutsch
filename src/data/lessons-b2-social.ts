import { Lesson } from "./lessons";

export const lessonsB2Social: Record<string, Lesson> = {
  "b2-so1": {
    id: "b2-so1",
    title: "Dating & Flirting",
    module: "B2",
    blocks: [
      {
        type: "cultural-note",
        title: "Dating in DACH",
        content: "Germans are notoriously direct, which translates to their dating culture. 'Ghosting' is less common than in the US, but small talk is also kept to a minimum. A classic first date involves taking a walk (Spazieren gehen) or grabbing a coffee/beer.",
        emoji: "🍻"
      },
      {
        type: "vocabulary",
        word: "jemanden ansprechen",
        translation: "to approach/hit on someone",
        example: "Ich habe mich nicht getraut, sie anzusprechen.",
        audioUrl: "",
        phonetic: "ˈanˌʃpʁɛçən"
      },
      {
        type: "vocabulary",
        word: "der Flirt",
        translation: "the flirt",
        example: "Es war nur ein kurzer Flirt auf der Party.",
        audioUrl: "",
        phonetic: "flœːɐ̯t"
      },
      {
        type: "vocabulary",
        word: "verknallt sein",
        translation: "to have a crush",
        example: "Ich glaube, ich bin ein bisschen in ihn verknallt.",
        audioUrl: "",
        phonetic: "fɛɐ̯ˈknalt"
      },
      {
        type: "vocabulary",
        word: "sich verabreden",
        translation: "to make a date/appointment",
        example: "Wollen wir uns auf einen Kaffee verabreden?",
        audioUrl: "",
        phonetic: "fɛɐ̯ˈʔapʁeːdən"
      },
      {
        type: "example-dialogue",
        title: "At the Bar",
        context: "Two people striking up a conversation at a crowded bar.",
        lines: [
          { speaker: "Max", de: "Ist der Platz hier noch frei?", en: "Is this seat taken?" },
          { speaker: "Anna", de: "Nein, setz dich gern.", en: "No, feel free to sit." },
          { speaker: "Max", de: "Danke. Ich bin übrigens Max. Darf ich dich auf ein Getränk einladen?", en: "Thanks. I'm Max, by the way. Can I buy you a drink?" },
          { speaker: "Anna", de: "Sehr gern, ich nehme ein Radler.", en: "I'd love that, I'll take a Radler (shandy)." }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Ich habe mich nicht getraut, ihn ",
        sentenceAfter: " (to approach).",
        missingWord: "anzusprechen",
        translation: "I didn't dare to approach him."
      }
    ]
  },
  "b2-so2": {
    id: "b2-so2",
    title: "Clubbing & Nightlife",
    module: "B2",
    blocks: [
      {
        type: "cultural-note",
        title: "Feierabendbier & Clubs",
        content: "The 'Feierabendbier' (after-work beer) is a sacred tradition. When clubbing (especially in Berlin techno clubs), the door policy can be strict. The key is to dress casually (often in black) and stay quiet in line.",
        emoji: "🪩"
      },
      {
        type: "vocabulary",
        word: "der Türsteher",
        translation: "the bouncer",
        example: "Der Türsteher hat uns nicht reingelassen.",
        audioUrl: "",
        phonetic: "ˈtyːɐ̯ˌʃteːɐ"
      },
      {
        type: "vocabulary",
        word: "die Schlange",
        translation: "the line / queue",
        example: "Wir standen zwei Stunden in der Schlange.",
        audioUrl: "",
        phonetic: "ˈʃlaŋə"
      },
      {
        type: "vocabulary",
        word: "einen Kater haben",
        translation: "to have a hangover",
        example: "Ich trinke heute nichts, ich will morgen keinen Kater haben.",
        audioUrl: "",
        phonetic: "ˈkaːtɐ"
      },
      {
        type: "quiz-mcq",
        question: "If you drank too much yesterday, what do you have today?",
        options: ["eine Katze", "einen Kater", "einen Hund"],
        correctIndex: 1,
        explanation: "'Einen Kater haben' is the German idiom for having a hangover (literally: to have a tomcat)."
      }
    ]
  }
};

import { Lesson } from "./lessons";

export const lessonsC1Grammar7: Record<string, Lesson> = {
  "c1-g32": {
    id: "c1-g32",
    title: "Syntax: Das Nachfeld (The After-Field)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Breaking the Verb Bracket",
        explanation: "German uses the 'Satzklammer' (verb bracket), meaning the second verb goes at the very end. However, native speakers often place elements AFTER the final verb. This position is called the 'Nachfeld'.",
        examples: [
          { de: "Standard: Ich habe ihn gestern [auf dem Bahnhof] gesehen.", en: "I saw him at the train station yesterday." },
          { de: "Nachfeld: Ich habe ihn gestern gesehen, [auf dem Bahnhof].", en: "I saw him yesterday, at the train station. (Used for emphasis or as an afterthought)" },
        ]
      },
      {
        type: "grammar",
        title: "Obligatory Nachfeld",
        explanation: "Comparisons with 'als' and 'wie', as well as long infinitive clauses, MUST go into the Nachfeld to avoid making the middle of the sentence too dense (Ausklammerung).",
        examples: [
          { de: "Er ist viel schneller gelaufen [als ich].", en: "He ran much faster than me." },
          { de: "Ich habe mich entschlossen, [diesen Kurs zu belegen].", en: "I have decided to take this course." },
        ]
      },
      {
        type: "quiz-mcq",
        question: "Which of the following elements MUST go into the Nachfeld (after the final verb)?",
        options: [
          "Short prepositional phrases like 'im Kino'.",
          "Time expressions like 'am Freitag'.",
          "Comparisons with 'als' and 'wie'.",
          "Direct objects in the accusative case."
        ],
        correctIndex: 2,
        explanation: "Comparisons ('schneller als ich') and long 'zu'-infinitive clauses must be moved to the Nachfeld so they don't break the flow of the sentence."
      }
    ]
  },
  "c1-g33": {
    id: "c1-g33",
    title: "Phonetik: Der Knacklaut (Glottal Stop)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "The Hard Attack",
        explanation: "To sound like a native German speaker, you must master the 'Knacklaut' (Glottal Stop). Unlike English or French where words flow together, German sharply separates words that start with a vowel by closing and popping the vocal cords.",
        examples: [
          { de: "der [ʔ]Apfel", en: "Not 'de-rapfel' (like in French), but 'der' ... 'Apfel' with a sharp break." },
          { de: "ver[ʔ]eisen", en: "To freeze. The sharp break distinguishes it from 'verreisen' (to travel)." },
          { de: "Spiegel[ʔ]ei", en: "Fried egg. You must break between Spiegel and Ei." },
        ]
      },
      {
        type: "quiz-mcq",
        question: "How do you pronounce 'Spiegelei' natively?",
        options: [
          "Shpee-ge-lye (flowing together smoothly)",
          "Shpee-gel ... eye (with a sharp break between 'l' and 'e')",
          "Shpee-ge-lay",
          "Shpee-gley"
        ],
        correctIndex: 1,
        explanation: "German uses the Glottal Stop (Knacklaut) before vowels that start a new morpheme. 'Spiegel-ei' has a sharp stop before the 'e'."
      }
    ]
  },
  "c1-g34": {
    id: "c1-g34",
    title: "Phonetik: Die R-Vokalisierung",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "When 'R' becomes an 'A'",
        explanation: "At the end of a syllable or word, the German 'R' is almost never pronounced as a harsh consonant. Instead, it vocalizes into a sound similar to a short, open 'a' (the Tiefschwa).",
        examples: [
          { de: "Vater -> sounds like [Va-ta]", en: "father" },
          { de: "Wasser -> sounds like [Vas-sa]", en: "water" },
          { de: "wir -> sounds like [via]", en: "we" },
          { de: "erklären -> sounds like [e-a-klä-ren]", en: "to explain (the 'er' prefix vocalizes)" },
        ]
      },
      {
        type: "quiz-mcq",
        question: "How is the 'er' in 'Wasser' pronounced?",
        options: [
          "Like a rolling 'r'",
          "Like the English 'er' in 'water'",
          "Like a short, open 'a'",
          "It is silent."
        ],
        correctIndex: 2,
        explanation: "The 'er' suffix in German is vocalized into a short, open 'a' sound (Tiefschwa). So 'Wasser' sounds like 'Vas-sa'."
      }
    ]
  },
  "c1-g35": {
    id: "c1-g35",
    title: "Phonetik: Assimilation & Elision",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Native Rapid Speech",
        explanation: "In fast, colloquial native speech, sounds merge (Assimilation) or are dropped entirely (Elision). If you don't know these patterns, native speakers will sound like they are mumbling.",
        examples: [
          { de: "Haben wir -> Ham wir -> Hamma", en: "Do we have" },
          { de: "Gehen wir -> Gemma", en: "Let's go" },
          { de: "Hast du das -> Haste das / Hasses", en: "Do you have that?" },
          { de: "Guten Tag -> G'n Tach", en: "Good day" },
        ]
      },
      {
        type: "cultural-note",
        title: "Dropping the final 'e'",
        content: "In spoken German, the first-person singular 'e' is almost always dropped. 'Ich gehe' becomes 'Ich geh'. 'Ich habe' becomes 'Ich hab'. Using the full 'e' in spoken conversation sounds very formal or robotic.",
        emoji: "🤖"
      },
      {
        type: "flashcard",
        cards: [
          { word: "Hamma", phonetic: "ham-ma", meaning: "Haben wir (Do we have / We have)", example: { de: "Hamma noch Milch?", en: "Do we still have milk?" } },
          { word: "Gemma", phonetic: "gem-ma", meaning: "Gehen wir (Let's go)", example: { de: "Gemma essen?", en: "Shall we go eat?" } },
          { word: "Haste", phonetic: "has-te", meaning: "Hast du (Do you have)", example: { de: "Haste mal 'ne Minute?", en: "Do you have a minute?" } },
          { word: "Isso", phonetic: "is-so", meaning: "Es ist so (That's the way it is)", example: { de: "Isso.", en: "That's just how it is." } }
        ]
      }
    ]
  }
};

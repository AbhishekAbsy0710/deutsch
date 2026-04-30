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
      }
    ]
  }
};

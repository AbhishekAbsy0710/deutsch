import { Lesson } from "./lessons";

export const lessonsC2Style: Record<string, Lesson> = {
  "c2-s1": {
    id: "c2-s1",
    title: "Deliberate Rule-Breaking",
    module: "C2",
    blocks: [
      {
        type: "grammar",
        title: "Breaking the Rules Like a Pro",
        explanation: "At C2, you know all the rules. Now you need to learn when natives break them. Deliberate grammatical errors are often used to sound more casual, aggressive, or poetic.",
        examples: [
          { de: "Ich bleibe, weil ich bin müde.", en: "I'm staying because I'm tired. (Using Hauptsatz order after 'weil' instead of putting the verb at the end)" },
          { de: "Das Auto von meinem Vater", en: "The car of my father. (Dropping the Genitive in favor of von + Dative)" }
        ]
      },
      {
        type: "example-dialogue",
        title: "A casual chat",
        context: "Discussing party plans.",
        lines: [
          { speaker: "Lena", de: "Warum kommst du nicht zur Party?", en: "Why aren't you coming to the party?" },
          { speaker: "Tom", de: "Ich bleib zu Hause, weil... ich hab echt keine Lust heute.", en: "I'm staying home because... I really don't feel like it today." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "die Lust", phonetic: "/lʊst/", meaning: "desire / mood", example: { de: "Ich habe keine Lust.", en: "I don't feel like it." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Is 'weil ich bin müde' grammatically correct according to strict textbooks?",
        options: ["Yes, it is perfectly correct", "No, 'weil' requires the verb at the end, but natives say it anyway", "Yes, but only in Switzerland", "No, and nobody ever says it"],
        correctIndex: 1,
        explanation: "Strictly speaking, 'weil' is a subordinating conjunction (verb at the end). However, in spoken German, using regular word order after 'weil' is extremely common."
      }
    ]
  },
  "c2-s2": {
    id: "c2-s2",
    title: "Flawless Nuance: Synonyms",
    module: "C2",
    blocks: [
      {
        type: "grammar",
        title: "The Burden of Choice",
        explanation: "German is precise. Often, English has one word where German has five, each carrying a different flavor. Choosing the wrong synonym can drastically alter the tone of your sentence.",
        examples: [
          { de: "Vorschlagen", en: "A neutral, concrete proposal." },
          { de: "Nahelegen", en: "To strongly advise or imply that someone *should* do something." },
          { de: "Andeuten", en: "To hint at or insinuate." }
        ]
      },
      {
        type: "example-dialogue",
        title: "Discussing an employee's resignation",
        context: "HR talking to the CEO.",
        lines: [
          { speaker: "HR-Manager", de: "Hat er freiwillig gekündigt?", en: "Did he quit voluntarily?" },
          { speaker: "CEO", de: "Nicht direkt. Ich habe ihm einen Wechsel nahegelegt.", en: "Not exactly. I strongly advised him to make a change." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "nahelegen", phonetic: "/ˈnaːəˌleːɡn̩/", meaning: "to strongly advise", example: { de: "Ich lege dir das nahe.", en: "I strongly advise you to do that." } },
          { word: "andeuten", phonetic: "/ˈanˌdɔɪ̯tn̩/", meaning: "to hint / insinuate", example: { de: "Er hat es nur angedeutet.", en: "He only hinted at it." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "If your boss 'legt dir nahe' to take a vacation, what does it mean?",
        options: ["They are casually suggesting a nice trip", "They are strongly advising you to leave before you burn out or get fired", "They are forbidding you from taking a vacation", "They are paying for your vacation"],
        correctIndex: 1,
        explanation: "'Nahelegen' is a polite but very forceful suggestion. It is often used in corporate speak to mean 'you really need to do this, or else'."
      }
    ]
  },
  "c2-s3": {
    id: "c2-s3",
    title: "The Art of the 'Schachtelsatz'",
    module: "C2",
    blocks: [
      {
        type: "grammar",
        title: "The Monster Sentences",
        explanation: "A 'Schachtelsatz' (box sentence) is a sentence with so many subordinate clauses nested inside each other that it resembles a set of Russian Matryoshka dolls.",
        examples: [
          { de: "Der Mann, der den Hund, welcher den Knochen gestohlen hatte, jagte, fiel hin.", en: "The man, who chased the dog, which had stolen the bone, fell down." }
        ]
      },
      {
        type: "example-dialogue",
        title: "A typical legal notice",
        context: "Reading a government letter.",
        lines: [
          { speaker: "Bescheid", de: "Der Antragsteller, der die Frist, welche am letzten Tag des Monats abläuft, versäumt hat, verliert seinen Anspruch.", en: "The applicant who missed the deadline, which expires on the last day of the month, loses their claim." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "verschachtelt", phonetic: "/fɛɐ̯ˈʃaxtl̩t/", meaning: "nested / convoluted", example: { de: "Ein verschachtelter Satz.", en: "A nested sentence." } },
          { word: "versäumen", phonetic: "/fɛɐ̯ˈzɔɪ̯mən/", meaning: "to miss / fail to do", example: { de: "Die Frist versäumen.", en: "To miss the deadline." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "What is the best strategy for translating a 'Schachtelsatz'?",
        options: ["Read it backwards word by word", "Find the main subject and the final verb first, ignoring the clauses in between", "Guess the meaning from the first three words", "Translate every single word in order"],
        correctIndex: 1,
        explanation: "To decode a highly nested sentence, you must find the main subject and then look all the way to the end of the sentence for the main verb to establish the core action."
      }
    ]
  }
};

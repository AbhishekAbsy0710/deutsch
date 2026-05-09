import { Lesson } from "./lessons";

export const lessonsC1MicroSkills: Record<string, Lesson> = {
  "c1-m1": {
    id: "c1-m1",
    title: "Akademische Abkürzungen (Abbreviations)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Reading the Code",
        explanation: "German academic and professional writing is packed with abbreviations. You must know how to read them out loud.",
        examples: [
          { de: "bzw. (beziehungsweise)", en: "or / respectively (Extremely common alternative to 'oder')" },
          { de: "d. h. (das heißt)", en: "i.e. / that means" },
          { de: "ggf. (gegebenenfalls)", en: "if applicable / if necessary" },
          { de: "u. a. (unter anderem)", en: "among other things" },
          { de: "z. T. (zum Teil)", en: "partly" },
        ]
      },
      {
        type: "quiz-mcq",
        question: "What does the abbreviation 'bzw.' stand for?",
        options: [
          "beziehungsweise (or / respectively)",
          "besonders zur (especially for)",
          "bis zum Weiteren (until further notice)",
          "bezüglich (regarding)"
        ],
        correctIndex: 0,
        explanation: "'bzw.' stands for 'beziehungsweise', which is used incredibly often in formal German as an alternative to 'oder' or to mean 'respectively'."
      }
    ]
  },
  "c1-m2": {
    id: "c1-m2",
    title: "Denglisch (Pseudo-Anglicisms)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "English words that aren't English",
        explanation: "Germans love using English words, but they often invent new meanings for them. These are not 'false friends', they are 'pseudo-anglicisms'.",
        examples: [
          { de: "das Handy", en: "mobile phone (cell phone)" },
          { de: "der Beamer", en: "video projector" },
          { de: "das Public Viewing", en: "watching a sports game on a big screen in public (In English, this means viewing a dead body!)" },
          { de: "das Mobbing", en: "bullying (at school or work)" },
          { de: "das Homeoffice", en: "working from home (Ich mache heute Homeoffice.)" },
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "das Handy", phonetic: "hen-dee", meaning: "mobile phone / cell phone", example: { de: "Ich habe mein Handy vergessen.", en: "I forgot my cell phone." } },
          { word: "das Public Viewing", phonetic: "pub-lik vyoo-ing", meaning: "watching a sports game in public", example: { de: "Gehen wir heute zum Public Viewing?", en: "Are we going to watch the game in public today?" } },
          { word: "der Beamer", phonetic: "bee-mer", meaning: "video projector", example: { de: "Kann jemand den Beamer einschalten?", en: "Can someone turn on the projector?" } },
          { word: "das Mobbing", phonetic: "mob-bing", meaning: "bullying", example: { de: "Mobbing am Arbeitsplatz ist ein großes Problem.", en: "Bullying in the workplace is a big problem." } }
        ]
      }
    ]
  },
  "c1-m3": {
    id: "c1-m3",
    title: "Brüche, Dezimalen & Mathematik",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Fractions and Decimals",
        explanation: "Describing data in C1 exams requires knowing how to pronounce math. Germans use commas for decimals, and points for thousands!",
        examples: [
          { de: "ein Viertel / zwei Drittel", en: "one quarter (1/4) / two thirds (2/3)" },
          { de: "die Hälfte", en: "the half" },
          { de: "3,5 (drei Komma fünf)", en: "3.5 (three point five)" },
          { de: "10.000 (zehntausend)", en: "10,000 (ten thousand)" },
        ]
      },
      {
        type: "grammar",
        title: "Basic Operations",
        explanation: "Simple math vocabulary is essential for daily office life and data analysis.",
        examples: [
          { de: "plus, minus, mal, geteilt durch", en: "plus, minus, times, divided by" },
        ]
      },
      {
        type: "quiz-mcq",
        question: "How do you correctly pronounce '3,5' in German?",
        options: [
          "drei Punkt fünf",
          "drei Komma fünf",
          "drei und fünf",
          "dreieinhalb"
        ],
        correctIndex: 1,
        explanation: "Germans use a comma (Komma) for decimals. '3,5' is spoken as 'drei Komma fünf'. A point is used for thousands (10.000)."
      }
    ]
  },
  "c1-m4": {
    id: "c1-m4",
    title: "Klassische Sprichwörter (Proverbs)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Cultural Wisdom",
        explanation: "Proverbs show a deep integration into the culture. Using one appropriately in a C1 speaking exam will severely impress the examiners.",
        examples: [
          { de: "Morgenstund hat Gold im Mund.", en: "The early bird catches the worm." },
          { de: "Wer rastet, der rostet.", en: "He who rests, rusts (You must stay active)." },
          { de: "Da liegt der Hund begraben.", en: "That's the crux of the matter (That's where the dog is buried)." },
          { de: "Aller Anfang ist schwer.", en: "Every beginning is difficult." },
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Morgenstund hat ",
        sentenceAfter: " im Mund.",
        missingWord: "Gold",
        translation: "The early bird catches the worm. (Literally: Morning hour has gold in the mouth.)"
      }
    ]
  }
};

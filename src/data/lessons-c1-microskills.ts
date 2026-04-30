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
      }
    ]
  }
};

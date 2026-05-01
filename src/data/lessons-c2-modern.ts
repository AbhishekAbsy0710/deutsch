import { Lesson } from "./lessons";

export const lessonsC2Modern: Record<string, Lesson> = {
  "c2-m1": {
    id: "c2-m1",
    title: "Gendersprache (Gender-Inclusive German)",
    module: "C2",
    blocks: [
      {
        type: "grammar",
        title: "Modern Inclusivity",
        explanation: "Modern German universities and government agencies mandate gender-inclusive language. You must know how to read and write these forms, as traditional generic masculine forms (e.g., 'die Studenten') are often rejected.",
        examples: [
          { de: "Das Gendersternchen: Schüler*innen", en: "Students (male, female, non-binary). Pronounced with a short pause (Glottal Stop) at the star." },
          { de: "Der Doppelpunkt: Schüler:innen", en: "Students (Preferred by screen readers for the visually impaired)." },
          { de: "Das Binnen-I: SchülerInnen", en: "Students (The older feminist standard from the 1990s)." },
        ]
      },
      {
        type: "grammar",
        title: "Partizipialformen (Neutralization)",
        explanation: "To avoid punctuation entirely, many institutions turn verbs into nouns using the present participle, which is gender-neutral in the plural.",
        examples: [
          { de: "die Studenten -> die Studierenden", en: "the students (literally: the studying ones)" },
          { de: "die Lehrer -> die Lehrenden", en: "the teachers (literally: the teaching ones)" },
          { de: "die Mitarbeiter -> die Mitarbeitenden", en: "the employees (literally: the cooperating ones)" },
        ]
      }
    ]
  },
  "c2-m2": {
    id: "c2-m2",
    title: "Behördendeutsch (Extreme Bureaucracy)",
    module: "C2",
    blocks: [
      {
        type: "grammar",
        title: "The Language of the State",
        explanation: "The German government uses hyper-specific, entirely humorless compound nouns to avoid any legal ambiguity. Standard German words are replaced by bureaucratic monstrosities.",
        examples: [
          { de: "die Lichtzeichenanlage", en: "Bureaucratic for 'die Ampel' (Traffic light)" },
          { de: "die Personensorgeberechtigten", en: "Bureaucratic for 'die Eltern' (Parents / Legal guardians)" },
          { de: "die Nichtlebendgeburt", en: "Bureaucratic for 'die Fehlgeburt' (Stillbirth)" },
          { de: "der Fahrtrichtungsanzeiger", en: "Bureaucratic for 'der Blinker' (Turn signal on a car)" },
        ]
      }
    ]
  },
  "c2-m3": {
    id: "c2-m3",
    title: "DDR-Wortschatz (East German Lexicon)",
    module: "C2",
    blocks: [
      {
        type: "cultural-note",
        title: "The Divided Language",
        content: "Because Germany was divided from 1949 to 1989, East Germany (the DDR) developed its own vocabulary influenced by the Soviet system and planned economy. These words are still used in Eastern states today and are vital for reading modern historical literature.",
        emoji: "🧱"
      },
      {
        type: "grammar",
        title: "Ostdeutsch vs. Westdeutsch",
        explanation: "Some everyday objects have completely different names in the East and West. Using these words correctly shows a deep, nuanced understanding of German cultural history.",
        examples: [
          { de: "der Broiler", en: "Roasted chicken (West: das Brathähnchen)" },
          { de: "die Kaufhalle", en: "Supermarket (West: der Supermarkt)" },
          { de: "die Plaste", en: "Plastic (West: das Plastik)" },
          { de: "der Plattenbau", en: "Prefabricated concrete apartment block (Iconic East German architecture)" },
        ]
      }
    ]
  }
};

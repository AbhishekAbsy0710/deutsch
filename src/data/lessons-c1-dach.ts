import { Lesson } from "./lessons";

export const lessonsC1Dach: Record<string, Lesson> = {
  "c1-d1": {
    id: "c1-d1",
    title: "DACH-Region: Austriazismen (Austria)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Standard Austrian German",
        explanation: "In C1 listening exams, you will hear speakers from Austria. You must know standard Austrian vocabulary (Austriazismen), which differs from Germany's standard German.",
        examples: [
          { de: "der Jänner / der Feber", en: "January / February (Germany: Januar / Februar)" },
          { de: "die Matura", en: "High school diploma (Germany: das Abitur)" },
          { de: "der Kasten", en: "Closet / Wardrobe (Germany: der Schrank)" },
          { de: "der Topfen", en: "Quark cheese (Germany: der Quark)" },
          { de: "das Spital", en: "Hospital (Germany: das Krankenhaus)" },
        ]
      }
    ]
  },
  "c1-d2": {
    id: "c1-d2",
    title: "DACH-Region: Helvetismen (Switzerland)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Standard Swiss German",
        explanation: "Swiss High German (Helvetismen) is also tested at C1. Note: This is NOT Swiss dialect (Schwiizerdütsch), but the official written standard in Switzerland.",
        examples: [
          { de: "das Velo", en: "Bicycle (Germany: das Fahrrad)" },
          { de: "das Billett", en: "Ticket (Germany: die Fahrkarte)" },
          { de: "parkieren", en: "To park (Germany: parken)" },
          { de: "grillieren", en: "To grill/barbecue (Germany: grillen)" },
          { de: "das Natel", en: "Mobile phone (Germany: das Handy)" },
        ]
      },
      {
        type: "cultural-note",
        title: "Swiss Spelling Exception",
        content: "In Switzerland, the letter 'ß' (Eszett) does not exist! They always write 'ss'. So 'Straße' is 'Strasse', and 'Fußball' is 'Fussball'.",
        emoji: "🇨🇭"
      }
    ]
  },
  "c1-d3": {
    id: "c1-d3",
    title: "Grammatik: Konnektoren-Feinheiten",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Position 0 vs Position 1",
        explanation: "At C1, confusing 'aber' (Pos 0) with 'allerdings' (Pos 1) is a major error. Adverbial connectors push the subject to Pos 2.",
        examples: [
          { de: "Er ist krank, aber er geht arbeiten. (Pos 0)", en: "He is sick, but he goes to work." },
          { de: "Er ist krank. Allerdings geht er arbeiten. (Pos 1 -> Verb -> Subject)", en: "He is sick. However, he goes to work." },
          { de: "Er ist krank. Er geht allerdings arbeiten. (Pos 3)", en: "He is sick. He goes to work, however." },
        ]
      }
    ]
  }
};

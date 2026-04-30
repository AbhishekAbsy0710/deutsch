import { Lesson } from "./lessons";

export const lessonsC1Writing2: Record<string, Lesson> = {
  "c1-w9": {
    id: "c1-w9",
    title: "Advanced Kommasetzung (Comma Rules)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Infinitiv- und Partizipialgruppen",
        explanation: "At C1, missing commas in complex clauses will cost you points. You MUST use a comma when an infinitive group is introduced by 'um', 'ohne', 'statt', 'anstatt', 'außer', or 'als'.",
        examples: [
          { de: "Er ging nach Hause, ohne sich zu verabschieden.", en: "He went home without saying goodbye." },
          { de: "Wir haben nichts zu tun, außer zu warten.", en: "We have nothing to do but wait." },
        ]
      },
      {
        type: "grammar",
        title: "Appositionen (Appositions)",
        explanation: "An apposition is an explanatory noun phrase that sits next to another noun. It must be framed by commas on BOTH sides.",
        examples: [
          { de: "Herr Müller, der Leiter der Abteilung, hat gekündigt.", en: "Mr. Müller, the head of the department, has resigned." },
          { de: "Meine Schwester, eine begabte Pianistin, gibt morgen ein Konzert.", en: "My sister, a gifted pianist, is giving a concert tomorrow." },
        ]
      }
    ]
  },
  "c1-w10": {
    id: "c1-w10",
    title: "Groß- und Kleinschreibung (Capitalization)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Nominalization Traps",
        explanation: "In C1 texts, you must recognize when an adjective or verb has become a noun and must be capitalized, often triggered by prepositions or hidden articles (im, beim, zum).",
        examples: [
          { de: "Er hat das im Allgemeinen gut gemacht. (Allgemeinen = capitalized)", en: "He did that well in general." },
          { de: "Wir bereiten uns auf das Schlimmste vor.", en: "We are preparing for the worst." },
          { de: "Beim Laufen höre ich Musik.", en: "While running, I listen to music." },
        ]
      },
      {
        type: "grammar",
        title: "Pronouns in Letters",
        explanation: "The formal 'Sie'/'Ihnen' is always capitalized. The informal 'du'/'ihr' can be capitalized in letters to show respect, but lowercase is also accepted. However, it MUST be consistent.",
        examples: [
          { de: "Ich danke Ihnen für Ihre Antwort.", en: "I thank you for your reply." },
          { de: "Ich hoffe, es geht Dir/dir gut.", en: "I hope you are doing well." },
        ]
      }
    ]
  },
  "c1-w11": {
    id: "c1-w11",
    title: "Zitierregeln (Quoting and Attribution)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Indirect Speech with Konjunktiv I",
        explanation: "When quoting an author or a study in a C1 essay, you do not use quotation marks. Instead, you use 'dass' or Konjunktiv I to show you are reporting someone else's claim.",
        examples: [
          { de: "Der Autor behauptet, die Maßnahme sei ineffektiv.", en: "The author claims the measure is ineffective. (Konjunktiv I)" },
          { de: "Laut der Studie liege die Fehlerquote bei 5%.", en: "According to the study, the error rate is 5%." },
        ]
      },
      {
        type: "grammar",
        title: "German Quotation Marks",
        explanation: "If you do quote directly, German quotation marks open at the bottom and close at the top („...“). French-style guillemets («...») are also used in books.",
        examples: [
          { de: "Er sagte: „Das ist unmöglich.“", en: "He said: 'That is impossible.'" },
        ]
      }
    ]
  }
};

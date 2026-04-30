import { Lesson } from "./lessons";

export const lessonsC1Kultur: Record<string, Lesson> = {
  "c1-k1": {
    id: "c1-k1",
    title: "Landeskunde: Das Politische System",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Federalism in Germany",
        explanation: "To pass the Einbürgerungstest (Citizenship Test), you must know that Germany is a federal republic (Bundesrepublik) consisting of 16 states (Bundesländer). Each state has its own government for education and police.",
        examples: [
          { de: "der Bundestag", en: "The federal parliament (elected by the people)." },
          { de: "der Bundesrat", en: "The federal council (representatives of the 16 states)." },
        ]
      },
      {
        type: "grammar",
        title: "Kanzler vs. Präsident",
        explanation: "The Bundeskanzler (Chancellor) holds the actual political power and runs the government. The Bundespräsident (President) is the head of state, but their role is mostly ceremonial.",
        examples: [
          { de: "Der Bundeskanzler wird vom Bundestag gewählt.", en: "The Chancellor is elected by the parliament." },
        ]
      }
    ]
  },
  "c1-k2": {
    id: "c1-k2",
    title: "Landeskunde: Wichtige Geschichte",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "1949 and 1989",
        explanation: "Two dates are essential in modern German history: 1949 (the founding of West and East Germany, and the writing of the Grundgesetz) and 1989 (the fall of the Berlin Wall).",
        examples: [
          { de: "das Grundgesetz", en: "The German Constitution (written in 1949)." },
          { de: "die Wende / der Mauerfall", en: "The fall of the Berlin wall (1989) and subsequent reunification (Wiedervereinigung)." },
        ]
      },
      {
        type: "cultural-note",
        title: "Article 1",
        content: "The most important sentence in German law is Article 1 of the Grundgesetz: 'Die Würde des Menschen ist unantastbar' (Human dignity is inviolable). This was written as a direct response to the atrocities of WWII.",
        emoji: "📖"
      }
    ]
  },
  "c1-k3": {
    id: "c1-k3",
    title: "Karriere: Der deutsche Lebenslauf",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Strict Formatting Rules",
        explanation: "Applying for a job in Germany is highly formalized. Unlike US/UK resumes, a traditional German 'Lebenslauf' expects personal details.",
        examples: [
          { de: "Bewerbungsfoto", en: "A professional application photo (highly recommended, though legally optional)." },
          { de: "Persönliche Daten", en: "Often includes birth date, place of birth, and sometimes nationality/marital status." },
          { de: "Tabellarischer Lebenslauf", en: "Must be strictly tabular, usually reverse-chronological, and signed with a pen at the bottom." },
        ]
      }
    ]
  },
  "c1-k4": {
    id: "c1-k4",
    title: "Karriere: Das Arbeitszeugnis",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "The Secret Language of HR",
        explanation: "In Germany, employers must give departing employees an 'Arbeitszeugnis' (reference letter). By law, it must sound positive. Therefore, HR uses a secret coded language to convey the real truth.",
        examples: [
          { de: "Er hat die Aufgaben stets zu unserer vollsten Zufriedenheit erledigt.", en: "Grade A+ (Excellent). Look for 'stets' (always) and 'vollsten' (fullest)." },
          { de: "Er hat die Aufgaben zu unserer vollen Zufriedenheit erledigt.", en: "Grade B (Good)." },
          { de: "Er hat sich stets bemüht, die Aufgaben zu erledigen.", en: "Grade F (He tried, but completely failed). 'Bemüht' is the ultimate red flag in a German reference letter!" },
        ]
      }
    ]
  }
};

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
      },
      {
        type: "quiz-mcq",
        question: "In the German political system, who holds the actual political power to run the government?",
        options: [
          "Der Bundespräsident (Federal President)",
          "Der Bundeskanzler (Federal Chancellor)",
          "Der Bundesrat (Federal Council)",
          "Die Bundesversammlung"
        ],
        correctIndex: 1,
        explanation: "The Bundeskanzler (Chancellor) is the head of government and holds the real political power. The Bundespräsident is the head of state, but the role is mostly ceremonial."
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
      },
      {
        type: "quiz-mcq",
        question: "What does 'die Wende' refer to in modern German history?",
        options: [
          "The founding of the Federal Republic in 1949.",
          "The drafting of the Grundgesetz.",
          "The fall of the Berlin Wall in 1989 and subsequent reunification.",
          "The end of World War II."
        ],
        correctIndex: 2,
        explanation: "'Die Wende' (The turning point) specifically refers to the events of 1989/1990 leading to the fall of the Wall and the reunification of East and West Germany."
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
      },
      {
        type: "quiz-mcq",
        question: "Which of the following is highly expected on a traditional German Lebenslauf (resume), unlike in the US/UK?",
        options: [
          "A list of references from previous bosses.",
          "A professional application photo and personal details (like birth date).",
          "A creative, non-tabular design.",
          "Salary expectations for the previous three jobs."
        ],
        correctIndex: 1,
        explanation: "A traditional German application expects a professional photo and personal details like date of birth. It should also be strictly tabular."
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
      },
      {
        type: "flashcard",
        cards: [
          { word: "stets zu unserer vollsten Zufriedenheit", phonetic: "shteyts tsoo oon-ze-rer fol-sten tsoo-free-den-hyt", meaning: "Grade A+ (He always did everything perfectly)", example: { de: "Note 1 im Zeugnis.", en: "Grade 1 (A) on the certificate." } },
          { word: "zu unserer vollen Zufriedenheit", phonetic: "tsoo oon-ze-rer fol-len tsoo-free-den-hyt", meaning: "Grade B (Good)", example: { de: "Note 2 im Zeugnis.", en: "Grade 2 (B) on the certificate." } },
          { word: "Er hat sich bemüht...", phonetic: "er hat zikh be-müht", meaning: "Grade F (He tried... but failed)", example: { de: "Achtung: Das ist ein sehr schlechtes Zeugnis!", en: "Warning: This is a very bad reference!" } },
          { word: "Er war sehr gesellig.", phonetic: "er var zeyr ge-zel-likh", meaning: "Grade F (He drank too much / talked too much)", example: { de: "Versteckte Kritik an der Arbeitsmoral.", en: "Hidden criticism of work ethic." } }
        ]
      }
    ]
  }
};

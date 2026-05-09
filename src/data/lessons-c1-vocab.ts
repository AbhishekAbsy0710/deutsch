import { Lesson } from "./lessons";

export const lessonsC1Vocab: Record<string, Lesson> = {
  "c1-v1": {
    id: "c1-v1",
    title: "Fachsprache: Recht & Verwaltung (Law & Admin)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Legal Terminology",
        explanation: "Key terms for legal texts and news.",
        examples: [
          { de: "die Gesetzgebung", en: "legislation" },
          { de: "verfassungswidrig", en: "unconstitutional" },
          { de: "der Kläger / der Angeklagte", en: "the plaintiff / the defendant" },
          { de: "das Urteil fällen", en: "to pass a verdict" },
          { de: "in Kraft treten", en: "to come into effect (law)" },
        ]
      },
      {
        type: "grammar",
        title: "Administrative Jargon (Amtsdeutsch)",
        explanation: "Words you will see in official German letters.",
        examples: [
          { de: "die Zuständigkeit", en: "jurisdiction / responsibility" },
          { de: "fristgerecht einreichen", en: "to submit before the deadline" },
          { de: "der Bescheid", en: "official notification/decision" },
          { de: "widersprechen (+ Dat)", en: "to formally object/appeal" },
        ]
      },
      {
        type: "cultural-note",
        title: "Behördendeutsch",
        content: "German administration uses a highly nominalized, complex language called 'Behördendeutsch' or 'Amtsdeutsch'. It is notoriously difficult even for native speakers. Words like 'Bescheinigung' (certificate) and 'Vorschrift' (regulation) are everywhere.",
        emoji: "🏛️"
      },
      {
        type: "flashcard",
        cards: [
          { word: "die Gesetzgebung", phonetic: "ge-zets-gey-boong", meaning: "legislation", example: { de: "Die neue Gesetzgebung tritt bald in Kraft.", en: "The new legislation comes into effect soon." } },
          { word: "verfassungswidrig", phonetic: "fer-fas-soongs-vee-drikh", meaning: "unconstitutional", example: { de: "Das Gesetz wurde für verfassungswidrig erklärt.", en: "The law was declared unconstitutional." } },
          { word: "der Bescheid", phonetic: "be-shyt", meaning: "official notification / decision", example: { de: "Ich warte noch auf den Bescheid vom Amt.", en: "I am still waiting for the official notification from the office." } },
          { word: "widersprechen", phonetic: "vee-der-shpre-khen", meaning: "to formally object / appeal (+ Dativ)", example: { de: "Ich werde diesem Bescheid widersprechen.", en: "I will formally object to this decision." } }
        ]
      }
    ]
  },
  "c1-v2": {
    id: "c1-v2",
    title: "Fachsprache: Medizin (Medicine)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Medical Professionals & Facilities",
        explanation: "Essential vocabulary for the healthcare sector.",
        examples: [
          { de: "der Chefarzt", en: "chief physician" },
          { de: "die Überweisung", en: "referral" },
          { de: "die Intensivstation", en: "intensive care unit (ICU)" },
          { de: "die Diagnose stellen", en: "to make a diagnosis" },
        ]
      },
      {
        type: "grammar",
        title: "Symptoms & Treatments",
        explanation: "Describing medical conditions formally.",
        examples: [
          { de: "die Nebenwirkung", en: "side effect" },
          { de: "chronisch vs. akut", en: "chronic vs. acute" },
          { de: "die Entzündung", en: "inflammation" },
          { de: "vorbeugende Maßnahmen", en: "preventative measures" },
          { de: "das Immunsystem stärken", en: "to strengthen the immune system" },
        ]
      }
    ]
  },
  "c1-v3": {
    id: "c1-v3",
    title: "Fachsprache: Wirtschaft Advanced (Business & Economy)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Macroeconomics",
        explanation: "Terms used in economic reports.",
        examples: [
          { de: "das Bruttoinlandsprodukt (BIP)", en: "Gross Domestic Product (GDP)" },
          { de: "die Inflation / die Deflation", en: "inflation / deflation" },
          { de: "die Kaufkraft", en: "purchasing power" },
          { de: "die Konjunktur", en: "economic cycle/climate" },
        ]
      },
      {
        type: "grammar",
        title: "Corporate Finance & Markets",
        explanation: "Business vocabulary.",
        examples: [
          { de: "der Umsatz", en: "revenue/turnover" },
          { de: "die Gewinnmarge", en: "profit margin" },
          { de: "die Aktiengesellschaft (AG)", en: "public limited company (PLC/Corp)" },
          { de: "Insolvenz anmelden", en: "to file for bankruptcy" },
          { de: "Angebot und Nachfrage", en: "supply and demand" },
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "das Bruttoinlandsprodukt (BIP)", phonetic: "broot-toh-in-lands-pro-dookt", meaning: "Gross Domestic Product (GDP)", example: { de: "Das BIP ist dieses Jahr gesunken.", en: "The GDP decreased this year." } },
          { word: "die Kaufkraft", phonetic: "kowf-kraft", meaning: "purchasing power", example: { de: "Die Inflation senkt die Kaufkraft der Konsumenten.", en: "Inflation lowers the purchasing power of consumers." } },
          { word: "der Umsatz", phonetic: "oom-zats", meaning: "revenue / turnover", example: { de: "Das Unternehmen hat seinen Umsatz verdoppelt.", en: "The company doubled its revenue." } },
          { word: "die Insolvenz", phonetic: "in-zol-vents", meaning: "bankruptcy", example: { de: "Die Firma musste Insolvenz anmelden.", en: "The company had to file for bankruptcy." } }
        ]
      }
    ]
  },
  "c1-v4": {
    id: "c1-v4",
    title: "Fachsprache: Wissenschaft & Technik (Science & Tech)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Research & Methodology",
        explanation: "Academic terminology.",
        examples: [
          { de: "die Hypothese aufstellen", en: "to formulate a hypothesis" },
          { de: "empirische Daten", en: "empirical data" },
          { de: "die Stichprobe", en: "random sample" },
          { de: "die Variable (abhängig/unabhängig)", en: "variable (dependent/independent)" },
          { de: "die Schlussfolgerung", en: "conclusion" },
        ]
      },
      {
        type: "grammar",
        title: "Technology & Innovation",
        explanation: "Tech terminology.",
        examples: [
          { de: "die künstliche Intelligenz (KI)", en: "Artificial Intelligence (AI)" },
          { de: "der Algorithmus", en: "algorithm" },
          { de: "der Datenschutz", en: "data protection / privacy" },
          { de: "die Verschlüsselung", en: "encryption" },
        ]
      }
    ]
  },
  "c1-v5": {
    id: "c1-v5",
    title: "Deutsche Literatur (Kafka, Brecht, Goethe)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Literary Giants",
        explanation: "To truly understand German culture, you must recognize references to Goethe (Faust), Brecht (Epic Theater), and Kafka (Absurdity/Bureaucracy).",
        examples: [
          { de: "Das ist ja reinste Kafkaeske!", en: "That is pure Kafkaesque! (meaning: absurdly bureaucratic and oppressive)" },
          { de: "Des Pudels Kern", en: "The core of the poodle (meaning: the true essence of the matter - from Goethe's Faust)" },
        ]
      },
      {
        type: "grammar",
        title: "Literary Terms",
        explanation: "Words for literary analysis.",
        examples: [
          { de: "der Protagonist", en: "protagonist" },
          { de: "die Metapher", en: "metaphor" },
          { de: "die Epoche", en: "era / epoch" },
          { de: "die Novelle", en: "novella" },
          { de: "das Motiv", en: "motif" },
        ]
      }
    ]
  },
  "c1-v6": {
    id: "c1-v6",
    title: "Philosophie & Ethikdiskussionen",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Moral Reasoning",
        explanation: "High-level vocabulary for philosophical debates.",
        examples: [
          { de: "die moralische Verpflichtung", en: "moral obligation" },
          { de: "das Gewissen", en: "conscience" },
          { de: "das Dilemma", en: "dilemma" },
          { de: "die Menschenwürde", en: "human dignity (Article 1 of the German Constitution)" },
          { de: "zweckmäßig vs. ethisch", en: "utilitarian vs. ethical" },
        ]
      },
      {
        type: "cultural-note",
        title: "Die Würde des Menschen",
        content: "'Die Würde des Menschen ist unantastbar' (Human dignity is inviolable) is the first sentence of the Grundgesetz (German constitution). It forms the basis of all ethical and legal debates in Germany.",
        emoji: "⚖️"
      }
    ]
  },
  "c1-v7": {
    id: "c1-v7",
    title: "Humor, Ironie & Sarkasmus",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "German Humor Exists!",
        explanation: "German humor relies heavily on wordplay, irony, and dry sarcasm (trockener Humor). Tone of voice and Modalpartikeln are crucial for detecting it.",
        examples: [
          { de: "Das hast du ja toll gemacht.", en: "You did that *great*. (Heavy sarcasm, marked by 'ja')" },
          { de: "Ironie des Schicksals", en: "Irony of fate" },
          { de: "Schadenfreude", en: "Malicious joy (pleasure derived from another's misfortune)" },
        ]
      },
      {
        type: "grammar",
        title: "Types of Humor",
        explanation: "Describing comedic situations.",
        examples: [
          { de: "der schwarze Humor", en: "dark humor" },
          { de: "die Schlagfertigkeit", en: "quick-wittedness" },
          { de: "das Wortspiel", en: "pun / wordplay" },
          { de: "sich über jemanden lustig machen", en: "to make fun of someone" },
        ]
      },
      {
        type: "quiz-mcq",
        question: "What does 'Schadenfreude' mean?",
        options: [
          "Joy from helping others.",
          "Malicious joy derived from another person's misfortune.",
          "Dark humor.",
          "The irony of fate."
        ],
        correctIndex: 1,
        explanation: "'Schadenfreude' literally translates to 'damage-joy'. It means taking pleasure in someone else's bad luck or misfortune."
      }
    ]
  },
  "c1-v8": {
    id: "c1-v8",
    title: "Dialekte: Bayern, Österreich, Schweiz",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "The DACH Region Varieties",
        explanation: "At C1, you should be able to passively understand major regional differences in vocabulary and pronunciation across Germany (D), Austria (A), and Switzerland (CH).",
        examples: [
          { de: "Hochdeutsch: Guten Tag / Auf Wiedersehen", en: "Standard German" },
          { de: "Bayerisch/Österreichisch: Grüß Gott / Servus", en: "Bavaria/Austria" },
          { de: "Schweizerdeutsch: Grüezi / Uf Wiederluege", en: "Switzerland" },
          { de: "Norddeutschland: Moin / Tschüss", en: "Northern Germany" },
        ]
      },
      {
        type: "grammar",
        title: "Regional Vocabulary",
        explanation: "Common regional food and item words.",
        examples: [
          { de: "die Tomate (D) -> der Paradeiser (A)", en: "tomato" },
          { de: "die Kartoffel (D) -> der Erdapfel (A)", en: "potato" },
          { de: "das Fahrrad (D) -> das Velo (CH)", en: "bicycle" },
          { de: "das Brötchen (D) -> die Semmel (A/Bayern)", en: "bread roll" },
        ]
      },
      {
        type: "quiz-mcq",
        question: "If someone in Switzerland says 'Grüezi' and rides a 'Velo', what are they doing?",
        options: [
          "Saying 'Good morning' and riding a horse.",
          "Saying 'Hello' and riding a bicycle.",
          "Saying 'Goodbye' and driving a car.",
          "Saying 'Cheers' and eating a tomato."
        ],
        correctIndex: 1,
        explanation: "In Swiss German, 'Grüezi' means hello, and 'das Velo' (from French) is used instead of 'das Fahrrad' for bicycle."
      }
    ]
  }
};

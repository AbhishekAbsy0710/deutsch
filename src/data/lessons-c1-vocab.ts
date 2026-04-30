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
      }
    ]
  }
};

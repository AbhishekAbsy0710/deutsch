import { genderWordsExpanded } from "./games-data-expanded";

// ── Der/Die/Das Challenge Data ────────────────────────────
export interface GenderWord {
  word: string;
  article: "der" | "die" | "das";
  meaning: string;
  level: string;
}

export const genderWords: GenderWord[] = [
  // A1
  { word: "Hund", article: "der", meaning: "dog", level: "A1" },
  { word: "Katze", article: "die", meaning: "cat", level: "A1" },
  { word: "Haus", article: "das", meaning: "house", level: "A1" },
  { word: "Mann", article: "der", meaning: "man", level: "A1" },
  { word: "Frau", article: "die", meaning: "woman", level: "A1" },
  { word: "Kind", article: "das", meaning: "child", level: "A1" },
  { word: "Tisch", article: "der", meaning: "table", level: "A1" },
  { word: "Lampe", article: "die", meaning: "lamp", level: "A1" },
  { word: "Buch", article: "das", meaning: "book", level: "A1" },
  { word: "Stuhl", article: "der", meaning: "chair", level: "A1" },
  { word: "Tasche", article: "die", meaning: "bag", level: "A1" },
  { word: "Auto", article: "das", meaning: "car", level: "A1" },
  { word: "Apfel", article: "der", meaning: "apple", level: "A1" },
  { word: "Milch", article: "die", meaning: "milk", level: "A1" },
  { word: "Brot", article: "das", meaning: "bread", level: "A1" },
  { word: "Bruder", article: "der", meaning: "brother", level: "A1" },
  { word: "Schwester", article: "die", meaning: "sister", level: "A1" },
  { word: "Mädchen", article: "das", meaning: "girl", level: "A1" },
  { word: "Lehrer", article: "der", meaning: "teacher (m)", level: "A1" },
  { word: "Schule", article: "die", meaning: "school", level: "A1" },
  { word: "Telefon", article: "das", meaning: "telephone", level: "A1" },
  { word: "Schlüssel", article: "der", meaning: "key", level: "A1" },
  { word: "Uhr", article: "die", meaning: "clock/watch", level: "A1" },
  { word: "Fenster", article: "das", meaning: "window", level: "A1" },
  // A2
  { word: "Bahnhof", article: "der", meaning: "train station", level: "A2" },
  { word: "Straßenbahn", article: "die", meaning: "tram", level: "A2" },
  { word: "Fahrrad", article: "das", meaning: "bicycle", level: "A2" },
  { word: "Kühlschrank", article: "der", meaning: "fridge", level: "A2" },
  { word: "Waschmaschine", article: "die", meaning: "washing machine", level: "A2" },
  { word: "Krankenhaus", article: "das", meaning: "hospital", level: "A2" },
  { word: "Vermieter", article: "der", meaning: "landlord", level: "A2" },
  { word: "Wohnung", article: "die", meaning: "apartment", level: "A2" },
  { word: "Konto", article: "das", meaning: "bank account", level: "A2" },
  { word: "Führerschein", article: "der", meaning: "driver's license", level: "A2" },
  { word: "Rechnung", article: "die", meaning: "bill/invoice", level: "A2" },
  { word: "Rezept", article: "das", meaning: "prescription/recipe", level: "A2" },
  // B1
  { word: "Zusammenhang", article: "der", meaning: "context/connection", level: "B1" },
  { word: "Gelegenheit", article: "die", meaning: "opportunity", level: "B1" },
  { word: "Ergebnis", article: "das", meaning: "result", level: "B1" },
  { word: "Vorschlag", article: "der", meaning: "suggestion", level: "B1" },
  { word: "Erfahrung", article: "die", meaning: "experience", level: "B1" },
  { word: "Verhalten", article: "das", meaning: "behavior", level: "B1" },
  { word: "Einfluss", article: "der", meaning: "influence", level: "B1" },
  { word: "Gesellschaft", article: "die", meaning: "society", level: "B1" },
  { word: "Bewusstsein", article: "das", meaning: "consciousness/awareness", level: "B1" },
  // B2+
  { word: "Widerspruch", article: "der", meaning: "contradiction", level: "B2" },
  { word: "Voraussetzung", article: "die", meaning: "prerequisite", level: "B2" },
  { word: "Gutachten", article: "das", meaning: "expert opinion/report", level: "B2" },
  { word: "Sachverhalt", article: "der", meaning: "facts/circumstances", level: "B2" },
  { word: "Stellungnahme", article: "die", meaning: "position statement", level: "B2" },
  { word: "Verhältnis", article: "das", meaning: "relationship/ratio", level: "B2" },
  ...genderWordsExpanded,
];

// ── Sentence Builder Data ────────────────────────────────
export interface SentenceChallenge {
  id: string;
  level: string;
  words: string[];
  correctOrder: string[];
  translation: string;
  hint?: string;
}

export const sentenceChallenges: SentenceChallenge[] = [
  // A1 — Basic V2
  { id: "sb-a1-1", level: "A1", words: ["gehe", "Ich", "Schule", "zur"], correctOrder: ["Ich", "gehe", "zur", "Schule"], translation: "I go to school.", hint: "Verb in position 2!" },
  { id: "sb-a1-2", level: "A1", words: ["heißt", "du", "Wie", "?"], correctOrder: ["Wie", "heißt", "du", "?"], translation: "What is your name?", hint: "W-question: W-word + verb" },
  { id: "sb-a1-3", level: "A1", words: ["trinke", "Ich", "gern", "Kaffee"], correctOrder: ["Ich", "trinke", "gern", "Kaffee"], translation: "I like drinking coffee." },
  { id: "sb-a1-4", level: "A1", words: ["spielt", "Er", "Fußball", "gern"], correctOrder: ["Er", "spielt", "gern", "Fußball"], translation: "He likes playing football." },
  { id: "sb-a1-5", level: "A1", words: ["Morgen", "gehe", "ich", "einkaufen"], correctOrder: ["Morgen", "gehe", "ich", "einkaufen"], translation: "Tomorrow I go shopping.", hint: "When time is first, subject and verb swap!" },
  // A2 — Separable verbs + Perfekt
  { id: "sb-a2-1", level: "A2", words: ["heute", "stehe", "ich", "auf", "früh"], correctOrder: ["Heute", "stehe", "ich", "früh", "auf"], translation: "Today I get up early.", hint: "Separable verb: prefix goes to end" },
  { id: "sb-a2-2", level: "A2", words: ["habe", "Ich", "Kuchen", "einen", "gebacken"], correctOrder: ["Ich", "habe", "einen", "Kuchen", "gebacken"], translation: "I baked a cake.", hint: "Perfekt: haben + ... + Partizip II" },
  { id: "sb-a2-3", level: "A2", words: ["ist", "Sie", "Berlin", "nach", "gefahren"], correctOrder: ["Sie", "ist", "nach", "Berlin", "gefahren"], translation: "She drove to Berlin." },
  // B1 — Subordinate clauses
  { id: "sb-b1-1", level: "B1", words: ["gehe", "ich", "weil", "müde", "bin", "ich", "schlafen", ","], correctOrder: ["Ich", "gehe", "schlafen", ",", "weil", "ich", "müde", "bin"], translation: "I'm going to sleep because I'm tired.", hint: "weil → verb to the END" },
  { id: "sb-b1-2", level: "B1", words: ["dass", "glaube", "er", "Ich", "kommt", ","], correctOrder: ["Ich", "glaube", ",", "dass", "er", "kommt"], translation: "I think that he's coming.", hint: "dass → verb to the END" },
  { id: "sb-b1-3", level: "B1", words: ["hatte", "Nachdem", "gegessen", "ich", "ging", "ich", "spazieren", ","], correctOrder: ["Nachdem", "ich", "gegessen", "hatte", ",", "ging", "ich", "spazieren"], translation: "After I had eaten, I went for a walk." },
  // B2 — Complex structures
  { id: "sb-b2-1", level: "B2", words: ["wäre", "Wenn", "hätte", "ich", "Zeit", "ich", "geholfen", "dir", ","], correctOrder: ["Wenn", "ich", "Zeit", "hätte", ",", "hätte", "ich", "dir", "geholfen"], translation: "If I had time, I would have helped you.", hint: "Konjunktiv II: wenn ... hätte, hätte ... geholfen" },
];

// ── Conjugation Race Data ─────────────────────────────────
export interface ConjugationChallenge {
  verb: string;
  meaning: string;
  tense: string;
  level: string;
  conjugations: Record<string, string>;
}

export const conjugationChallenges: ConjugationChallenge[] = [
  { verb: "sein", meaning: "to be", tense: "Präsens", level: "A1", conjugations: { "ich": "bin", "du": "bist", "er/sie/es": "ist", "wir": "sind", "ihr": "seid", "sie/Sie": "sind" } },
  { verb: "haben", meaning: "to have", tense: "Präsens", level: "A1", conjugations: { "ich": "habe", "du": "hast", "er/sie/es": "hat", "wir": "haben", "ihr": "habt", "sie/Sie": "haben" } },
  { verb: "gehen", meaning: "to go", tense: "Präsens", level: "A1", conjugations: { "ich": "gehe", "du": "gehst", "er/sie/es": "geht", "wir": "gehen", "ihr": "geht", "sie/Sie": "gehen" } },
  { verb: "fahren", meaning: "to drive", tense: "Präsens", level: "A1", conjugations: { "ich": "fahre", "du": "fährst", "er/sie/es": "fährt", "wir": "fahren", "ihr": "fahrt", "sie/Sie": "fahren" } },
  { verb: "lesen", meaning: "to read", tense: "Präsens", level: "A1", conjugations: { "ich": "lese", "du": "liest", "er/sie/es": "liest", "wir": "lesen", "ihr": "lest", "sie/Sie": "lesen" } },
  { verb: "sprechen", meaning: "to speak", tense: "Präsens", level: "A2", conjugations: { "ich": "spreche", "du": "sprichst", "er/sie/es": "spricht", "wir": "sprechen", "ihr": "sprecht", "sie/Sie": "sprechen" } },
  { verb: "werden", meaning: "to become", tense: "Präsens", level: "A2", conjugations: { "ich": "werde", "du": "wirst", "er/sie/es": "wird", "wir": "werden", "ihr": "werdet", "sie/Sie": "werden" } },
  { verb: "sein", meaning: "to be", tense: "Präteritum", level: "A2", conjugations: { "ich": "war", "du": "warst", "er/sie/es": "war", "wir": "waren", "ihr": "wart", "sie/Sie": "waren" } },
  { verb: "haben", meaning: "to have", tense: "Präteritum", level: "A2", conjugations: { "ich": "hatte", "du": "hattest", "er/sie/es": "hatte", "wir": "hatten", "ihr": "hattet", "sie/Sie": "hatten" } },
  { verb: "können", meaning: "can", tense: "Präsens", level: "A2", conjugations: { "ich": "kann", "du": "kannst", "er/sie/es": "kann", "wir": "können", "ihr": "könnt", "sie/Sie": "können" } },
  { verb: "müssen", meaning: "must", tense: "Konjunktiv II", level: "B1", conjugations: { "ich": "müsste", "du": "müsstest", "er/sie/es": "müsste", "wir": "müssten", "ihr": "müsstet", "sie/Sie": "müssten" } },
  { verb: "geben", meaning: "to give", tense: "Perfekt", level: "B1", conjugations: { "ich": "habe gegeben", "du": "hast gegeben", "er/sie/es": "hat gegeben", "wir": "haben gegeben", "ihr": "habt gegeben", "sie/Sie": "haben gegeben" } },
];

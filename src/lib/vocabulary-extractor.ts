import type { VocabEntry } from "@/store/useProgressStore";

/**
 * Extract vocabulary from conversation scenario's target vocabulary list.
 * Only adds words that were actually used by the learner.
 */
export function extractConversationVocab(
  usedWords: string[],
  scenarioLevel: string,
  meanings?: Record<string, string>
): VocabEntry[] {
  const today = new Date().toISOString();
  return usedWords.map(word => ({
    word,
    meaning: meanings?.[word.toLowerCase()] || word, // Fallback to word itself
    source: "conversation" as const,
    level: scenarioLevel,
    addedDate: today,
  }));
}

/**
 * Extract vocabulary from dictation sentences after completion.
 * Picks out significant words (nouns, verbs, adjectives — anything ≥5 chars
 * and not a common stop word).
 */
const GERMAN_STOP_WORDS = new Set([
  "der", "die", "das", "ein", "eine", "einen", "einem", "einer",
  "und", "oder", "aber", "denn", "weil", "dass", "wenn", "als",
  "ist", "sind", "war", "hat", "haben", "wird", "werden", "kann",
  "nicht", "auch", "noch", "schon", "sehr", "mehr", "nur", "hier",
  "dort", "nach", "über", "unter", "vor", "mit", "von", "aus",
  "bei", "für", "auf", "ich", "du", "er", "sie", "es", "wir",
  "ihr", "sich", "mich", "dich", "uns", "euch", "mir", "dir",
  "ihm", "ihr", "ihnen", "mein", "dein", "sein", "unser", "euer",
  "kein", "keine", "keinen", "keinem", "dieses", "diese", "diesem",
  "jetzt", "dann", "immer", "schon", "mal",
]);

export function extractDictationVocab(
  sentence: string,
  translation: string,
  level: string
): VocabEntry[] {
  const today = new Date().toISOString();
  const words = sentence
    .replace(/[.,!?;:"""'']/g, "")
    .split(/\s+/)
    .filter(w => w.length >= 4 && !GERMAN_STOP_WORDS.has(w.toLowerCase()));

  // Deduplicate
  const unique = [...new Set(words.map(w => w.toLowerCase()))];

  return unique.slice(0, 5).map(word => ({
    word: word.charAt(0).toUpperCase() + word.slice(1), // Capitalize
    meaning: `From: "${translation}"`,
    source: "listening" as const,
    level,
    addedDate: today,
  }));
}

/**
 * Extract vocabulary from reading passage — looks for words wrapped in 
 * bold markers or vocabulary sections.
 */
export function extractReadingVocab(
  passage: string,
  level: string
): VocabEntry[] {
  const today = new Date().toISOString();
  // Extract significant words (same approach as dictation)
  const words = passage
    .replace(/[.,!?;:"""''()\[\]]/g, "")
    .split(/\s+/)
    .filter(w => w.length >= 6 && !GERMAN_STOP_WORDS.has(w.toLowerCase()));

  const unique = [...new Set(words.map(w => w.toLowerCase()))];

  // Pick up to 10 per passage
  return unique.slice(0, 10).map(word => ({
    word: word.charAt(0).toUpperCase() + word.slice(1),
    meaning: "(from reading passage)",
    source: "reading" as const,
    level,
    addedDate: today,
  }));
}

/**
 * Convert AI evaluation's newVocabularyUsed array into VocabEntry format.
 */
export function extractEvalVocab(
  newWords: string[],
  level: string
): VocabEntry[] {
  const today = new Date().toISOString();
  return newWords.map(word => ({
    word,
    meaning: "(used in conversation)",
    source: "conversation" as const,
    level,
    addedDate: today,
  }));
}

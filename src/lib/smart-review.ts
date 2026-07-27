/**
 * Smart Review Session Builder
 * 
 * Combines data from 5 sources (SRS vocab, writing errors, weak grammar,
 * dictation, pronunciation) into a single interleaved review session.
 * 
 * Pure logic module — no UI, no hooks, fully testable.
 */

import { lessonData, type LessonBlock } from "@/data/lessons";
import { dictationSentences } from "@/data/listening-data";
import type { SRSData, LessonProgress, VocabEntry } from "@/store/useProgressStore";

// ── Review Item Types ─────────────────────────────────────────
export type ReviewItem =
  | { type: "vocab"; word: string; meaning: string; gender?: string; example?: { de: string; en: string }; lessonId: string }
  | { type: "writing-error"; pattern: string; correction: string; count: number }
  | { type: "grammar-mcq"; question: string; options: string[]; correctIndex: number; explanation: string; lessonId: string }
  | { type: "grammar-fill"; sentenceBefore: string; sentenceAfter: string; missingWord: string; translation: string; lessonId: string }
  | { type: "dictation"; text: string; translation: string; level: string }
  | { type: "pronunciation"; text: string; translation: string; level: string };

// ── Module / Level Ordering ───────────────────────────────────
const MODULE_ORDER = ["A0", "A1", "A2", "B1", "B2", "C1", "C2"];

function getLevelIndex(level: string): number {
  return MODULE_ORDER.indexOf(level);
}

// ── Extract correct sentences from lesson data ────────────────
// Used by Error Hunt (Phase 3) and pronunciation items
export function extractCorrectSentences(
  level: string
): { text: string; translation: string; source: string }[] {
  const results: { text: string; translation: string; source: string }[] = [];

  for (const [lessonId, lesson] of Object.entries(lessonData)) {
    if (lesson.module !== level) continue;

    for (const block of lesson.blocks) {
      if (block.type === "grammar" && "examples" in block) {
        for (const ex of block.examples) {
          // Strip parenthetical teaching notes: "Er ging. (gehen → ging)" → "Er ging."
          const cleaned = ex.de.replace(/\s*\([^)]*\)\s*$/g, "").trim();
          if (cleaned.split(/\s+/).length >= 3) {
            results.push({ text: cleaned, translation: ex.en, source: `grammar:${lessonId}` });
          }
        }
      }
      if (block.type === "speaking" && "phrase" in block) {
        const cleaned = block.phrase.replace(/\s*\([^)]*\)\s*$/g, "").trim();
        if (cleaned.split(/\s+/).length >= 3) {
          results.push({ text: cleaned, translation: block.translation, source: `speaking:${lessonId}` });
        }
      }
      if (block.type === "flashcard" && "cards" in block) {
        for (const card of block.cards) {
          if (card.example) {
            const cleaned = card.example.de.replace(/\s*\([^)]*\)\s*$/g, "").trim();
            if (cleaned.split(/\s+/).length >= 3) {
              results.push({ text: cleaned, translation: card.example.en, source: `flashcard:${lessonId}` });
            }
          }
        }
      }
      if (block.type === "example-dialogue" && "lines" in block) {
        for (const line of (block as Extract<LessonBlock, { type: "example-dialogue" }>).lines) {
          const cleaned = line.de.replace(/\s*\([^)]*\)\s*$/g, "").trim();
          if (cleaned.split(/\s+/).length >= 3) {
            results.push({ text: cleaned, translation: line.en, source: `dialogue:${lessonId}` });
          }
        }
      }
    }
  }

  return results;
}

// ── Extract quiz blocks from lessons ──────────────────────────
interface QuizMCQ { type: "quiz-mcq"; question: string; options: string[]; correctIndex: number; explanation: string; lessonId: string }
interface QuizFill { type: "quiz-fill"; sentenceBefore: string; sentenceAfter: string; missingWord: string; translation: string; lessonId: string }

function extractQuizBlocks(lessonIds: string[]): (QuizMCQ | QuizFill)[] {
  const quizzes: (QuizMCQ | QuizFill)[] = [];

  for (const lessonId of lessonIds) {
    const lesson = lessonData[lessonId];
    if (!lesson) continue;

    for (const block of lesson.blocks) {
      if (block.type === "quiz-mcq") {
        quizzes.push({
          type: "quiz-mcq",
          question: block.question,
          options: block.options,
          correctIndex: block.correctIndex,
          explanation: block.explanation,
          lessonId,
        });
      }
      if (block.type === "quiz-fill") {
        quizzes.push({
          type: "quiz-fill",
          sentenceBefore: block.sentenceBefore,
          sentenceAfter: block.sentenceAfter,
          missingWord: block.missingWord,
          translation: block.translation,
          lessonId,
        });
      }
    }
  }

  return quizzes;
}

// ── Cascading quiz fallback ───────────────────────────────────
// If the weakest lesson has no quiz blocks, try module → level → level below
function findQuizBlocksWithFallback(
  weakLessonIds: string[],
  userLevel: string
): (QuizMCQ | QuizFill)[] {
  // 1. Try weak lessons directly
  const fromWeak = extractQuizBlocks(weakLessonIds);
  if (fromWeak.length > 0) return fromWeak;

  // 2. Try same module as weakest lesson
  if (weakLessonIds.length > 0) {
    const weakLesson = lessonData[weakLessonIds[0]];
    if (weakLesson) {
      const sameModule = Object.keys(lessonData).filter(
        id => lessonData[id].module === weakLesson.module && !weakLessonIds.includes(id)
      );
      const fromModule = extractQuizBlocks(sameModule);
      if (fromModule.length > 0) return fromModule;
    }
  }

  // 3. Try any lesson at user's current level
  const sameLevelIds = Object.keys(lessonData).filter(
    id => lessonData[id].module === userLevel
  );
  const fromLevel = extractQuizBlocks(sameLevelIds);
  if (fromLevel.length > 0) return fromLevel;

  // 4. Try one level below
  const levelIdx = getLevelIndex(userLevel);
  if (levelIdx > 0) {
    const lowerLevel = MODULE_ORDER[levelIdx - 1];
    const lowerIds = Object.keys(lessonData).filter(
      id => lessonData[id].module === lowerLevel
    );
    const fromLower = extractQuizBlocks(lowerIds);
    if (fromLower.length > 0) return fromLower;
  }

  // 5. Last resort: any level (should never reach here given 256+ quiz blocks)
  return extractQuizBlocks(Object.keys(lessonData));
}

// ── Shuffle helpers ───────────────────────────────────────────
function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Interleave: no two items of the same type in a row
function interleave(items: ReviewItem[]): ReviewItem[] {
  if (items.length <= 1) return items;

  // Group by type
  const groups: Map<string, ReviewItem[]> = new Map();
  for (const item of items) {
    const key = item.type;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(item);
  }

  // Round-robin from each group
  const result: ReviewItem[] = [];
  const queues = Array.from(groups.values()).map(g => shuffleArray(g));
  // Sort by size descending so largest group gets placed first
  queues.sort((a, b) => b.length - a.length);

  let lastType = "";
  while (queues.some(q => q.length > 0)) {
    let placed = false;
    for (const queue of queues) {
      if (queue.length > 0 && queue[0].type !== lastType) {
        const item = queue.shift()!;
        result.push(item);
        lastType = item.type;
        placed = true;
        break;
      }
    }
    // If all remaining items are same type, just place them
    if (!placed) {
      for (const queue of queues) {
        if (queue.length > 0) {
          result.push(queue.shift()!);
          break;
        }
      }
    }
  }

  return result;
}

// ── Main Session Builder ──────────────────────────────────────
const MAX_SESSION_SIZE = 20;

export interface BuildSmartSessionOpts {
  srs: Record<string, SRSData>;
  writingErrors: { pattern: string; correction: string; count: number; lastDate: string }[];
  lessons: Record<string, LessonProgress>;
  vocabularyBank: Record<string, VocabEntry>;
  level: string;
  isOnline: boolean;
}

export function buildSmartSession(opts: BuildSmartSessionOpts): ReviewItem[] {
  const { srs, writingErrors, lessons, vocabularyBank, level, isOnline } = opts;
  const userLevel = level || "A1";
  const items: ReviewItem[] = [];

  // ── 1. SRS Vocab (up to 8) ─────────────────────────────────
  const now = new Date();
  const dueWords: ReviewItem[] = [];
  const unseenWords: ReviewItem[] = [];

  // Collect from lesson flashcards + vocab bank
  const allVocabWords = new Map<string, { word: string; meaning: string; gender?: string; example?: { de: string; en: string }; lessonId: string }>();

  for (const [lessonId, lesson] of Object.entries(lessonData)) {
    const lp = lessons[lessonId];
    if (!lp || lp.status === "locked") continue;
    for (const block of lesson.blocks) {
      if (block.type === "flashcard" && "cards" in block) {
        for (const card of block.cards) {
          if (!allVocabWords.has(card.word)) {
            allVocabWords.set(card.word, {
              word: card.word,
              meaning: card.meaning,
              gender: (card as any).gender,
              example: card.example,
              lessonId,
            });
          }
        }
      }
    }
  }

  // Also include vocab bank words
  for (const entry of Object.values(vocabularyBank)) {
    if (!allVocabWords.has(entry.word)) {
      allVocabWords.set(entry.word, {
        word: entry.word,
        meaning: entry.meaning,
        gender: entry.gender,
        example: entry.example,
        lessonId: "vocab-bank",
      });
    }
  }

  for (const [word, data] of allVocabWords) {
    const srsEntry = srs[word];
    const vocabItem: ReviewItem = { type: "vocab", ...data };

    if (!srsEntry) {
      unseenWords.push(vocabItem);
    } else if (new Date(srsEntry.nextReviewDate) <= now) {
      dueWords.push(vocabItem);
    }
  }

  // Due first, then unseen (shuffled)
  const vocabItems = [...shuffleArray(dueWords), ...shuffleArray(unseenWords)].slice(0, 8);
  items.push(...vocabItems);

  // ── 2. Writing Errors (up to 4) ────────────────────────────
  const recurringErrors = writingErrors
    .filter(e => e.count >= 2)
    .sort((a, b) => b.count - a.count)
    .slice(0, 4)
    .map(e => ({
      type: "writing-error" as const,
      pattern: e.pattern,
      correction: e.correction,
      count: e.count,
    }));
  items.push(...recurringErrors);

  // ── 3. Weak Grammar (up to 4) ──────────────────────────────
  const completedLessons = Object.entries(lessons)
    .filter(([, lp]) => lp.status === "completed" && lp.score !== undefined)
    .sort(([, a], [, b]) => (a.score ?? 100) - (b.score ?? 100));

  const weakLessonIds = completedLessons.slice(0, 5).map(([id]) => id);
  const allQuizzes = findQuizBlocksWithFallback(weakLessonIds, userLevel);
  const selectedQuizzes = shuffleArray(allQuizzes).slice(0, 4);

  for (const q of selectedQuizzes) {
    if (q.type === "quiz-mcq") {
      items.push({
        type: "grammar-mcq",
        question: q.question,
        options: q.options,
        correctIndex: q.correctIndex,
        explanation: q.explanation,
        lessonId: q.lessonId,
      });
    } else {
      items.push({
        type: "grammar-fill",
        sentenceBefore: q.sentenceBefore,
        sentenceAfter: q.sentenceAfter,
        missingWord: q.missingWord,
        translation: q.translation,
        lessonId: q.lessonId,
      });
    }
  }

  // ── 4 & 5. Dictation + Pronunciation (if online) ──────────
  if (isOnline) {
    // Dictation: 2 random sentences at user's level
    const levelDictation = dictationSentences.filter(d => d.level === userLevel);
    const selectedDictation = shuffleArray(levelDictation).slice(0, 2);
    for (const d of selectedDictation) {
      items.push({ type: "dictation", text: d.text, translation: d.translation, level: d.level });
    }

    // Pronunciation: 2 random sentences from grammar examples at user's level
    const sentences = extractCorrectSentences(userLevel);
    const selectedPronunciation = shuffleArray(sentences).slice(0, 2);
    for (const s of selectedPronunciation) {
      items.push({ type: "pronunciation", text: s.text, translation: s.translation, level: userLevel });
    }
  } else {
    // Offline: fill those 4 slots with extra grammar/vocab
    const extraQuizzes = shuffleArray(allQuizzes)
      .filter(q => !selectedQuizzes.includes(q))
      .slice(0, 2);
    for (const q of extraQuizzes) {
      if (q.type === "quiz-mcq") {
        items.push({
          type: "grammar-mcq",
          question: q.question,
          options: q.options,
          correctIndex: q.correctIndex,
          explanation: q.explanation,
          lessonId: q.lessonId,
        });
      } else {
        items.push({
          type: "grammar-fill",
          sentenceBefore: q.sentenceBefore,
          sentenceAfter: q.sentenceAfter,
          missingWord: q.missingWord,
          translation: q.translation,
          lessonId: q.lessonId,
        });
      }
    }
    // Extra unseen vocab
    const extraVocab = shuffleArray(unseenWords)
      .filter(v => !vocabItems.includes(v))
      .slice(0, 2);
    items.push(...extraVocab);
  }

  // ── Cold-start fallback ────────────────────────────────────
  if (items.length < 10) {
    // Fill with intro quiz-mcq from user's level
    const introIds = Object.keys(lessonData).filter(
      id => lessonData[id].module === userLevel
    );
    const introQuizzes = extractQuizBlocks(introIds);
    const needed = 10 - items.length;
    const filler = shuffleArray(introQuizzes).slice(0, needed);
    for (const q of filler) {
      if (q.type === "quiz-mcq") {
        items.push({
          type: "grammar-mcq",
          question: q.question,
          options: q.options,
          correctIndex: q.correctIndex,
          explanation: q.explanation,
          lessonId: q.lessonId,
        });
      } else {
        items.push({
          type: "grammar-fill",
          sentenceBefore: q.sentenceBefore,
          sentenceAfter: q.sentenceAfter,
          missingWord: q.missingWord,
          translation: q.translation,
          lessonId: q.lessonId,
        });
      }
    }
  }

  // Trim to max and interleave
  return interleave(items.slice(0, MAX_SESSION_SIZE));
}

// ── Levenshtein distance for dictation scoring ────────────────
export function levenshteinSimilarity(a: string, b: string): number {
  const la = a.toLowerCase().trim();
  const lb = b.toLowerCase().trim();
  if (la === lb) return 100;
  if (la.length === 0 || lb.length === 0) return 0;

  const matrix: number[][] = [];
  for (let i = 0; i <= la.length; i++) {
    matrix[i] = [i];
    for (let j = 1; j <= lb.length; j++) {
      if (i === 0) {
        matrix[i][j] = j;
      } else {
        const cost = la[i - 1] === lb[j - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,      // deletion
          matrix[i][j - 1] + 1,      // insertion
          matrix[i - 1][j - 1] + cost // substitution
        );
      }
    }
  }

  const distance = matrix[la.length][lb.length];
  const maxLen = Math.max(la.length, lb.length);
  return Math.round(((maxLen - distance) / maxLen) * 100);
}

// ── Get count of due items (for badge display) ────────────────
export function getDueItemCount(
  srs: Record<string, SRSData>,
  writingErrors: { pattern: string; correction: string; count: number; lastDate: string }[]
): number {
  const now = new Date();
  let count = 0;

  // Due SRS items
  for (const entry of Object.values(srs)) {
    if (new Date(entry.nextReviewDate) <= now) count++;
  }

  // Recurring writing errors
  count += writingErrors.filter(e => e.count >= 2).length;

  return count;
}

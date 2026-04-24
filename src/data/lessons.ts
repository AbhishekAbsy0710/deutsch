import { lessonsA0 } from "./lessons-a0";
import { lessonsA1 } from "./lessons-a1";
import { lessonsA2 } from "./lessons-a2";
import { lessonsB1 } from "./lessons-b1";
import { lessonsB2 } from "./lessons-b2";

export type LessonBlock = 
  | { type: "vocabulary", word: string, translation: string, example: string, audioUrl?: string, phonetic: string }
  | { type: "grammar", title: string, explanation: string, examples: { de: string, en: string }[] }
  | { type: "quiz-mcq", question: string, options: string[], correctIndex: number, explanation: string }
  | { type: "speaking", phrase: string, translation: string, phonetic: string, tip: string }
  | { type: "quiz-fill", sentenceBefore: string, sentenceAfter: string, missingWord: string, translation: string }
  | { type: "flashcard", cards: { word: string, phonetic: string, meaning: string, gender?: string, plural?: string, example: { de: string, en: string } }[] }
  | { type: "conjugation-drill", verb: string, translation: string, tense: string, pronouns: string[], correctForms: string[], hint?: string }
  | { type: "listening", phrase: string, translation: string, speed: "slow" | "normal" };

export type Lesson = {
  id: string;
  title: string;
  module: string;
  blocks: LessonBlock[];
};

export const lessonData: Record<string, Lesson> = {
  ...lessonsA0,
  ...lessonsA1,
  ...lessonsA2,
  ...lessonsB1,
  ...lessonsB2,
};

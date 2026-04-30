import { lessonsA0 } from "./lessons-a0";
import { lessonsA1 } from "./lessons-a1";
import { lessonsA1New } from "./lessons-a1-new";
import { lessonsA1New2 } from "./lessons-a1-new2";
import { lessonsA1New3 } from "./lessons-a1-new3";
import { lessonsA1New4 } from "./lessons-a1-new4";
import { lessonsA1New5, lessonsA2New9 } from "./lessons-final-gaps";
import { lessonsA1Final, lessonsA2Final } from "./lessons-final-gaps2";
import { lessonsA2ExamSkills } from "./lessons-a2-exam";
import { lessonsA2 } from "./lessons-a2";
import { lessonsA2New } from "./lessons-a2-new";
import { lessonsA2New2 } from "./lessons-a2-new2";
import { lessonsA2New3 } from "./lessons-a2-new3";
import { lessonsA2New4 } from "./lessons-a2-new4";
import { lessonsA2New5 } from "./lessons-a2-new5";
import { lessonsA2New6 } from "./lessons-a2-new6";
import { lessonsA2New7 } from "./lessons-a2-new7";
import { lessonsA2New8 } from "./lessons-a2-new8";
import { lessonsB1 } from "./lessons-b1";
import { lessonsB1Grammar1 } from "./lessons-b1-grammar1";
import { lessonsB1Grammar2 } from "./lessons-b1-grammar2";
import { lessonsB1Grammar3 } from "./lessons-b1-grammar3";
import { lessonsB1Grammar4 } from "./lessons-b1-grammar4";
import { lessonsB1Vocab1 } from "./lessons-b1-vocab1";
import { lessonsB1Vocab2 } from "./lessons-b1-vocab2";
import { lessonsB1Comm } from "./lessons-b1-comm";
import { lessonsB1Exam } from "./lessons-b1-exam";
import { lessonsB1Final } from "./lessons-b1-final";
import { lessonsB2 } from "./lessons-b2";
import { lessonsB2Grammar1 } from "./lessons-b2-grammar1";
import { lessonsB2Grammar2 } from "./lessons-b2-grammar2";
import { lessonsB2Grammar3 } from "./lessons-b2-grammar3";
import { lessonsB2Vocab1 } from "./lessons-b2-vocab1";
import { lessonsB2Vocab2 } from "./lessons-b2-vocab2";
import { lessonsB2Exam } from "./lessons-b2-exam";
import { lessonsB2Comm } from "./lessons-b2-comm";
import { lessonsB2Final } from "./lessons-b2-final";
import { lessonsB2Supplement } from "./lessons-b2-supplement";
import { lessonsC1Partikeln } from "./lessons-c1-partikeln";
import { lessonsC1Grammar } from "./lessons-c1-grammar";
import { lessonsC1Grammar2 } from "./lessons-c1-grammar2";
import { lessonsC1Writing } from "./lessons-c1-writing";
import { lessonsC1Vocab } from "./lessons-c1-vocab";
import { lessonsC1Exam } from "./lessons-c1-exam";

export type LessonBlock = 
  | { type: "vocabulary", word: string, translation: string, example: string, audioUrl?: string, phonetic: string }
  | { type: "grammar", title: string, explanation: string, examples: { de: string, en: string }[] }
  | { type: "quiz-mcq", question: string, options: string[], correctIndex: number, explanation: string }
  | { type: "speaking", phrase: string, translation: string, phonetic: string, tip: string }
  | { type: "quiz-fill", sentenceBefore: string, sentenceAfter: string, missingWord: string, translation: string }
  | { type: "flashcard", cards: { word: string, phonetic: string, meaning: string, gender?: string, plural?: string, example: { de: string, en: string } }[] }
  | { type: "conjugation-drill", verb: string, translation: string, tense: string, pronouns: string[], correctForms: string[], hint?: string }
  | { type: "listening", phrase: string, translation: string, speed: "slow" | "normal" }
  | { type: "cultural-note", title: string, content: string, emoji: string }
  | { type: "example-dialogue", title: string, lines: { speaker: string, de: string, en: string }[], context: string }
  | { type: "summary", points: string[] };

export type Lesson = {
  id: string;
  title: string;
  module: string;
  blocks: LessonBlock[];
};

export const lessonData: Record<string, Lesson> = {
  ...lessonsA0,
  ...lessonsA1,
  ...lessonsA1New,
  ...lessonsA1New2,
  ...lessonsA1New3,
  ...lessonsA1New4,
  ...lessonsA1New5,
  ...lessonsA1Final,
  ...lessonsA2,
  ...lessonsA2New,
  ...lessonsA2New2,
  ...lessonsA2New3,
  ...lessonsA2New4,
  ...lessonsA2New5,
  ...lessonsA2New6,
  ...lessonsA2New7,
  ...lessonsA2New8,
  ...lessonsA2New9,
  ...lessonsA2Final,
  ...lessonsA2ExamSkills,
  ...lessonsB1,
  ...lessonsB1Grammar1,
  ...lessonsB1Grammar2,
  ...lessonsB1Grammar3,
  ...lessonsB1Grammar4,
  ...lessonsB1Vocab1,
  ...lessonsB1Vocab2,
  ...lessonsB1Comm,
  ...lessonsB1Exam,
  ...lessonsB1Final,
  ...lessonsB2,
  ...lessonsB2Grammar1,
  ...lessonsB2Grammar2,
  ...lessonsB2Grammar3,
  ...lessonsB2Vocab1,
  ...lessonsB2Vocab2,
  ...lessonsB2Exam,
  ...lessonsB2Comm,
  ...lessonsB2Final,
  ...lessonsB2Supplement,
  ...lessonsC1Partikeln,
  ...lessonsC1Grammar,
  ...lessonsC1Grammar2,
  ...lessonsC1Writing,
  ...lessonsC1Vocab,
  ...lessonsC1Exam,
};

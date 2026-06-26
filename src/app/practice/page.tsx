"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell, CheckCircle2, XCircle, Volume2, ArrowRight, RotateCcw, Filter, ChevronDown, Zap, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useProgressStore } from "@/store/useProgressStore";
import { lessonData } from "@/data/lessons";
import { speakGermanNeural } from "@/lib/tts";

type QuizType = "mcq" | "fill" | "flashcard";
type Category = "all" | "grammar" | "vocabulary";

interface PracticeQuestion {
  type: QuizType;
  question: string;
  options?: string[];
  correctIndex?: number;
  correctAnswer?: string;
  explanation?: string;
  word?: string;
  meaning?: string;
  module: string;
  lessonTitle: string;
}

function collectQuestions(completedIds: Set<string>, category: Category): PracticeQuestion[] {
  const questions: PracticeQuestion[] = [];

  for (const [lessonId, lesson] of Object.entries(lessonData)) {
    if (!completedIds.has(lessonId)) continue;

    for (const block of lesson.blocks) {
      if (block.type === "quiz-mcq" && "question" in block && "options" in block) {
        if (category === "vocabulary") continue; // Skip grammar MCQs when filtering vocab
        questions.push({
          type: "mcq",
          question: (block as any).question,
          options: (block as any).options,
          correctIndex: (block as any).correctIndex,
          explanation: (block as any).explanation,
          module: lesson.module,
          lessonTitle: lesson.title,
        });
      }

      if (block.type === "quiz-fill" && "question" in block) {
        if (category === "vocabulary") continue;
        questions.push({
          type: "fill",
          question: (block as any).question,
          correctAnswer: (block as any).answer,
          explanation: (block as any).explanation,
          module: lesson.module,
          lessonTitle: lesson.title,
        });
      }

      if (block.type === "flashcard" && "cards" in block) {
        if (category === "grammar") continue;
        for (const card of (block as any).cards) {
          questions.push({
            type: "flashcard",
            question: `What does "${card.word}" mean?`,
            word: card.word,
            meaning: card.meaning,
            options: [],  // Will generate distractors
            correctIndex: 0,
            module: lesson.module,
            lessonTitle: lesson.title,
          });
        }
      }
    }
  }

  return questions;
}

function generateVocabMCQ(q: PracticeQuestion, allQuestions: PracticeQuestion[]): PracticeQuestion {
  if (q.type !== "flashcard" || !q.meaning) return q;

  // Collect other flashcard meanings as distractors
  const otherMeanings = allQuestions
    .filter(oq => oq.type === "flashcard" && oq.meaning && oq.meaning !== q.meaning)
    .map(oq => oq.meaning!)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  if (otherMeanings.length < 2) return q;

  const options = [...otherMeanings.slice(0, 3), q.meaning].sort(() => Math.random() - 0.5);
  return {
    ...q,
    type: "mcq",
    options,
    correctIndex: options.indexOf(q.meaning),
  };
}

export default function PracticePage() {
  const { lessons } = useProgressStore();

  const completedIds = useMemo(() =>
    new Set(Object.entries(lessons).filter(([, l]) => l.status === "completed").map(([id]) => id)),
    [lessons]
  );

  const [category, setCategory] = useState<Category>("all");
  const [showFilter, setShowFilter] = useState(false);
  const [sessionActive, setSessionActive] = useState(false);

  const allQuestions = useMemo(() => collectQuestions(completedIds, category), [completedIds, category]);

  const [queue, setQueue] = useState<PracticeQuestion[]>([]);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [streak, setStreak] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [fillAnswer, setFillAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);

  const startSession = useCallback(() => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 50);
    // Convert flashcard questions into MCQs
    const processed = shuffled.map(q => generateVocabMCQ(q, allQuestions));
    setQueue(processed);
    setIdx(0);
    setScore(0);
    setTotal(0);
    setStreak(0);
    setSelectedAnswer(null);
    setFillAnswer("");
    setShowResult(false);
    setSessionActive(true);
  }, [allQuestions]);

  const handleMCQAnswer = (answerIdx: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIdx);
    setShowResult(true);
    setTotal(t => t + 1);
    const q = queue[idx];
    if (answerIdx === q.correctIndex) {
      setScore(s => s + 1);
      setStreak(s => s + 1);
    } else {
      setStreak(0);
    }
  };

  const handleFillCheck = () => {
    if (showResult) return;
    setShowResult(true);
    setTotal(t => t + 1);
    const q = queue[idx];
    if (fillAnswer.trim().toLowerCase() === q.correctAnswer?.toLowerCase()) {
      setScore(s => s + 1);
      setStreak(s => s + 1);
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    if (idx + 1 < queue.length) {
      setIdx(i => i + 1);
      setSelectedAnswer(null);
      setFillAnswer("");
      setShowResult(false);
    } else {
      setSessionActive(false);
    }
  };

  // ── Landing / Start ──
  if (!sessionActive) {
    const justFinished = total > 0;
    return (
      <div className="flex-1 p-6 md:p-10 max-w-2xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight flex items-center gap-3">
            <Dumbbell className="w-8 h-8 text-primary" /> Übungsmodus
          </h1>
          <p className="text-muted-foreground mt-2">Infinite practice from your completed lessons</p>
        </div>

        {justFinished && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="bg-card border-2 border-border p-8 text-center space-y-4">
            <div className="text-6xl">{score >= total * 0.8 ? "🏆" : score >= total * 0.5 ? "👏" : "💪"}</div>
            <h2 className="text-3xl font-black">{score}/{total}</h2>
            <p className="text-muted-foreground">
              {score >= total * 0.8 ? "Outstanding! You're mastering this content." :
               score >= total * 0.5 ? "Good work! Keep practicing to improve." :
               "Don't worry — review your lessons and try again!"}
            </p>
          </motion.div>
        )}

        {/* Category Filter */}
        <div className="relative">
          <button onClick={() => setShowFilter(!showFilter)}
            className="flex items-center gap-2 px-4 py-3 bg-card border-2 border-border font-bold hover:bg-secondary transition-colors">
            <Filter className="w-4 h-4" />
            {category === "all" ? "All Topics" : category === "grammar" ? "Grammar Only" : "Vocabulary Only"}
            <ChevronDown className="w-4 h-4" />
          </button>
          <AnimatePresence>
            {showFilter && (
              <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                className="absolute z-50 mt-1 bg-card border-2 border-border shadow-lg">
                {(["all", "grammar", "vocabulary"] as Category[]).map(c => (
                  <button key={c} onClick={() => { setCategory(c); setShowFilter(false); }}
                    className={cn("block w-full px-6 py-3 text-left font-medium hover:bg-secondary transition-colors capitalize",
                      c === category && "bg-primary text-primary-foreground")}>
                    {c === "all" ? "All Topics" : c === "grammar" ? "Grammar Only" : "Vocabulary Only"}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="bg-card border-2 border-border p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Available questions</span>
            <span className="font-bold text-lg">{allQuestions.length}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">From completed lessons</span>
            <span className="font-bold text-lg">{completedIds.size}</span>
          </div>
        </div>

        <Button onClick={startSession} disabled={allQuestions.length < 3}
          className="w-full py-6 text-lg font-black">
          {allQuestions.length < 3 ? "Complete more lessons first" :
            <><Dumbbell className="w-5 h-5 mr-2" /> Start Practice (up to 50 questions)</>}
        </Button>
      </div>
    );
  }

  // ── Active Quiz Session ──
  const question = queue[idx];

  return (
    <div className="flex-1 p-6 md:p-10 max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-sm font-mono"><Zap className="w-4 h-4 text-primary" />{score}</span>
          {streak > 1 && <span className="text-sm font-bold text-orange-500"><Flame className="w-4 h-4 inline" /> {streak}</span>}
        </div>
        <span className="text-sm text-muted-foreground font-mono">{idx + 1}/{queue.length}</span>
        <Button variant="ghost" size="sm" onClick={() => setSessionActive(false)} className="text-xs">End Session</Button>
      </div>

      {/* Progress */}
      <div className="w-full bg-muted h-1.5">
        <motion.div className="bg-primary h-full" animate={{ width: `${((idx + (showResult ? 1 : 0)) / queue.length) * 100}%` }} />
      </div>

      {/* Source info */}
      <div className="text-xs text-muted-foreground">
        {question.module} · {question.lessonTitle}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
          {/* MCQ */}
          {question.type === "mcq" && question.options && (
            <div className="space-y-4">
              <div className="bg-card border-2 border-border p-6">
                <p className="text-lg font-bold">{question.question}</p>
                {question.word && (
                  <button onClick={() => speakGermanNeural(question.word!)}
                    className="flex items-center gap-2 text-sm text-primary mt-2 hover:underline">
                    <Volume2 className="w-3 h-3" /> {question.word}
                  </button>
                )}
              </div>
              <div className="space-y-2">
                {question.options.map((opt, oi) => {
                  const isCorrect = oi === question.correctIndex;
                  const isSelected = oi === selectedAnswer;
                  return (
                    <motion.button key={oi} whileTap={!showResult ? { scale: 0.98 } : {}}
                      onClick={() => handleMCQAnswer(oi)} disabled={showResult}
                      className={cn("w-full text-left p-4 border-2 transition-all text-sm",
                        showResult && isCorrect && "border-green-500 bg-green-500/10",
                        showResult && isSelected && !isCorrect && "border-red-500 bg-red-500/10",
                        !showResult && "border-border hover:border-primary")}>
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 shrink-0 flex items-center justify-center text-xs font-bold border-2 border-current">
                          {String.fromCharCode(65 + oi)}
                        </span>
                        <span>{opt}</span>
                        {showResult && isCorrect && <CheckCircle2 className="w-4 h-4 ml-auto text-green-500" />}
                        {showResult && isSelected && !isCorrect && <XCircle className="w-4 h-4 ml-auto text-red-500" />}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Fill-in */}
          {question.type === "fill" && (
            <div className="space-y-4">
              <div className="bg-card border-2 border-border p-6">
                <p className="text-lg font-bold">{question.question}</p>
              </div>
              <div className="flex gap-2">
                <input type="text" value={fillAnswer} onChange={e => setFillAnswer(e.target.value)}
                  onKeyDown={e => { if (e.key === "Enter" && !showResult) handleFillCheck(); }}
                  disabled={showResult}
                  className={cn("flex-1 px-4 py-3 bg-card border-2 font-mono focus:outline-none transition-colors",
                    showResult && fillAnswer.trim().toLowerCase() === question.correctAnswer?.toLowerCase()
                      ? "border-green-500 bg-green-500/5"
                      : showResult ? "border-red-500 bg-red-500/5" : "border-border focus:border-primary")}
                  placeholder="Type your answer..."
                />
                {!showResult && (
                  <Button onClick={handleFillCheck} disabled={!fillAnswer.trim()}>Check</Button>
                )}
              </div>
              {showResult && fillAnswer.trim().toLowerCase() !== question.correctAnswer?.toLowerCase() && (
                <p className="text-sm text-red-500">Correct answer: <span className="font-bold">{question.correctAnswer}</span></p>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Feedback + Next */}
      {showResult && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
          {question.explanation && (
            <div className="p-3 bg-muted/50 text-sm">
              <p className="text-muted-foreground">{question.explanation}</p>
            </div>
          )}
          <Button onClick={handleNext} className="w-full font-bold">
            {idx + 1 < queue.length ? <>Next <ArrowRight className="w-4 h-4 ml-2" /></> : "Finish Session"}
          </Button>
        </motion.div>
      )}
    </div>
  );
}

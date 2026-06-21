"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { lessonData } from "@/data/lessons";
import { useProgressStore } from "@/store/useProgressStore";
import { cn } from "@/lib/utils";

type ChallengeType = "translate" | "meaning" | "fill";

interface Challenge {
  type: ChallengeType;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

function generateDailyChallenge(level: string): Challenge {
  // Use the date as a seed for consistent daily challenge
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  
  // Collect all quiz blocks from lessons at the user's level
  const quizBlocks: any[] = [];
  Object.values(lessonData).forEach(lesson => {
    if (lesson.module === level || (level === "A0" && lesson.module === "A1")) {
      lesson.blocks.forEach(block => {
        if (block.type === "quiz-mcq" && "question" in block && "options" in block) {
          quizBlocks.push(block);
        }
      });
    }
  });

  // If no quiz blocks at this level, fall back to A1
  if (quizBlocks.length === 0) {
    Object.values(lessonData).forEach(lesson => {
      if (lesson.module === "A1") {
        lesson.blocks.forEach(block => {
          if (block.type === "quiz-mcq" && "question" in block && "options" in block) {
            quizBlocks.push(block);
          }
        });
      }
    });
  }

  if (quizBlocks.length === 0) {
    return {
      type: "meaning",
      question: "Was bedeutet 'Hund'?",
      options: ["Cat", "Dog", "Bird"],
      correctIndex: 1,
      explanation: "Hund means dog in German. Der Hund ist groß!"
    };
  }

  const block = quizBlocks[seed % quizBlocks.length];
  return {
    type: "meaning",
    question: block.question,
    options: block.options,
    correctIndex: block.correctIndex,
    explanation: block.explanation || "Great job practicing!"
  };
}

export function DailyChallenge() {
  const { level, xp, dailyChallengeDate, completeDailyChallenge } = useProgressStore();
  const [selected, setSelected] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const today = new Date().toISOString().split("T")[0];
  const isCompletedToday = dailyChallengeDate === today;

  const challenge = useMemo(() => generateDailyChallenge(level || "A1"), [level]);

  const handleSelect = (index: number) => {
    if (selected !== null) return; // Already answered
    setSelected(index);
    const correct = index === challenge.correctIndex;
    setIsCorrect(correct);
    setShowExplanation(true);

    if (correct) {
      // Award XP and mark daily challenge complete
      completeDailyChallenge();
    }
  };

  if (isCompletedToday) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-2 border-primary bg-primary/5 p-6"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary flex items-center justify-center text-primary-foreground">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <p className="font-bold text-lg">Daily Challenge Complete! ✨</p>
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                +50 XP earned · Come back tomorrow
              </p>
            </div>
          </div>
          <Zap size={20} className="text-primary" />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-2 border-foreground bg-card p-6 space-y-5"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap size={16} className="text-yellow-500" />
          <span className="font-mono text-xs uppercase tracking-widest font-bold text-yellow-600 dark:text-yellow-400">
            Daily Challenge
          </span>
        </div>
        <span className="font-mono text-xs text-muted-foreground border border-border px-2 py-0.5">
          +50 XP
        </span>
      </div>

      {/* Question */}
      <h3 className="text-xl font-bold leading-snug">{challenge.question}</h3>

      {/* Options */}
      <div className="grid gap-2">
        {challenge.options.map((option, i) => {
          const isSelected = selected === i;
          const isAnswer = i === challenge.correctIndex;
          const showResult = selected !== null;

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={selected !== null}
              className={cn(
                "text-left p-4 border-2 font-medium transition-all duration-200",
                !showResult && "border-border hover:border-foreground hover:bg-secondary cursor-pointer",
                showResult && isAnswer && "border-green-500 bg-green-500/10 text-green-700 dark:text-green-400",
                showResult && isSelected && !isAnswer && "border-red-500 bg-red-500/10 text-red-700 dark:text-red-400",
                showResult && !isSelected && !isAnswer && "border-border opacity-50"
              )}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {showResult && isAnswer && <CheckCircle2 size={18} className="text-green-500" />}
                {showResult && isSelected && !isAnswer && <XCircle size={18} className="text-red-500" />}
              </div>
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      <AnimatePresence>
        {showExplanation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className={cn(
              "p-4 border-2 text-sm",
              isCorrect
                ? "border-green-500 bg-green-500/5"
                : "border-orange-500 bg-orange-500/5"
            )}>
              <p className="font-bold mb-1">
                {isCorrect ? "🎉 Richtig! (Correct!)" : "💡 Not quite — keep learning!"}
              </p>
              <p className="text-muted-foreground">{challenge.explanation}</p>
              {isCorrect && (
                <p className="font-mono text-xs text-primary mt-2 font-bold">+50 XP earned!</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

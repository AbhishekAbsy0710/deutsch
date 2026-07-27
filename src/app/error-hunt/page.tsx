"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Timer, Trophy, RotateCcw, Check, X, Zap, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { extractCorrectSentences } from "@/lib/smart-review";
import { injectError } from "@/lib/error-templates";
import { useProgressStore } from "@/store/useProgressStore";

const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
const ROUND_SIZE = 10;
const TIMED_SECONDS = 180; // 3 minutes

interface ErrorItem {
  original: string;
  errorSentence: string;
  errorWord: string;
  correction: string;
  explanation: string;
  category: string;
  templateId: string;
  translation: string;
}

type GameMode = "untimed" | "timed";
type GameState = "menu" | "playing" | "feedback" | "results";

export default function ErrorHuntPage() {
  const { level: storedLevel } = useProgressStore();
  const [selectedLevel, setSelectedLevel] = useState(storedLevel || "A1");
  const [gameMode, setGameMode] = useState<GameMode>("untimed");
  const [gameState, setGameState] = useState<GameState>("menu");
  const [items, setItems] = useState<ErrorItem[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedWordIdx, setSelectedWordIdx] = useState<number | null>(null);
  const [userCorrection, setUserCorrection] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIMED_SECONDS);
  const [results, setResults] = useState<{ item: ErrorItem; correct: boolean; userAnswer: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Timer countdown for timed mode — expiry handled inside callback
  useEffect(() => {
    if (gameState !== "playing" || gameMode !== "timed" || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timer);
          setGameState("results");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [gameState, gameMode, timeLeft]);

  const generateRound = useCallback(() => {
    const sentences = extractCorrectSentences(selectedLevel);
    const shuffled = sentences.sort(() => Math.random() - 0.5);
    const generated: ErrorItem[] = [];

    for (const s of shuffled) {
      if (generated.length >= ROUND_SIZE) break;
      const result = injectError(s.text, selectedLevel);
      if (result) {
        generated.push({
          original: s.text,
          errorSentence: result.errorSentence,
          errorWord: result.errorWord,
          correction: result.correction,
          explanation: result.explanation,
          category: result.category,
          templateId: result.templateId,
          translation: s.translation,
        });
      }
    }
    return generated;
  }, [selectedLevel]);

  const startGame = () => {
    const round = generateRound();
    if (round.length === 0) return;
    setItems(round);
    setCurrentIdx(0);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setTimeLeft(TIMED_SECONDS);
    setResults([]);
    setSubmitted(false);
    setSelectedWordIdx(null);
    setUserCorrection("");
    setGameState("playing");
  };

  const current = items[currentIdx];
  const words = current?.errorSentence.split(/\s+/) || [];

  const handleWordClick = (idx: number) => {
    if (submitted) return;
    setSelectedWordIdx(idx);
    setUserCorrection("");
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const handleSubmit = () => {
    if (selectedWordIdx === null || !current) return;
    setSubmitted(true);

    const clickedWord = words[selectedWordIdx].replace(/[.,!?;:]/g, "");
    const isCorrectWord = clickedWord.toLowerCase() === current.errorWord.toLowerCase();
    const isCorrectFix = userCorrection.toLowerCase().replace(/[.,!?;:]/g, "") === current.correction.toLowerCase().replace(/[.,!?;:]/g, "");
    const correct = isCorrectWord && isCorrectFix;

    if (correct) {
      const streakBonus = streak >= 2 ? Math.min(streak, 5) : 0;
      setScore(s => s + 10 + streakBonus);
      setStreak(s => s + 1);
      setBestStreak(b => Math.max(b, streak + 1));
    } else {
      setStreak(0);
    }

    setResults(prev => [...prev, { item: current, correct, userAnswer: userCorrection }]);
    setGameState("feedback");
  };

  const handleNext = () => {
    if (currentIdx + 1 >= items.length) {
      setGameState("results");
    } else {
      setCurrentIdx(i => i + 1);
      setSubmitted(false);
      setSelectedWordIdx(null);
      setUserCorrection("");
      setGameState("playing");
    }
  };

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  // ── Menu ─────────────────────────────────────────────────────
  if (gameState === "menu") {
    return (
      <div className="max-w-4xl mx-auto p-4 sm:p-8">
        <header className="mb-8 pb-4 border-b-4 border-foreground">
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter flex items-center gap-3">
            <Target className="w-8 h-8 md:w-10 md:h-10" /> Error Hunt
          </h1>
          <p className="font-mono text-muted-foreground text-sm uppercase tracking-widest mt-1">
            Find the Grammar Error. Fix It. Learn Why.
          </p>
        </header>

        <div className="space-y-6">
          {/* Level Selection */}
          <div className="border-2 border-foreground p-6">
            <p className="font-mono text-xs uppercase text-muted-foreground mb-3">Select Level</p>
            <div className="flex border-2 border-foreground">
              {LEVELS.map(l => (
                <button
                  key={l}
                  onClick={() => setSelectedLevel(l)}
                  className={cn(
                    "px-4 py-2 font-mono text-sm tracking-widest transition-colors flex-1",
                    selectedLevel === l ? "bg-foreground text-background" : "hover:bg-foreground/10",
                    l !== "A1" && "border-l-2 border-foreground"
                  )}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Mode Selection */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => { setGameMode("untimed"); startGame(); }}
              className="border-2 border-foreground p-6 text-left hover:bg-foreground/5 transition-colors group"
            >
              <Target size={32} className="mb-3 group-hover:text-green-500 transition-colors" />
              <p className="font-black text-lg">Practice</p>
              <p className="text-sm text-muted-foreground mt-1">10 sentences. No time limit. Learn at your pace.</p>
            </button>
            <button
              onClick={() => { setGameMode("timed"); startGame(); }}
              className="border-2 border-foreground p-6 text-left hover:bg-foreground/5 transition-colors group"
            >
              <Zap size={32} className="mb-3 group-hover:text-amber-500 transition-colors" />
              <p className="font-black text-lg">Speed Hunt</p>
              <p className="text-sm text-muted-foreground mt-1">3 minutes. Fix as many as you can. Streak bonuses!</p>
            </button>
          </div>

          {/* How to play */}
          <div className="border-2 border-border p-6 space-y-3">
            <p className="font-mono text-xs uppercase text-muted-foreground font-bold">How to Play</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <span className="font-black text-2xl text-foreground/20">1</span>
                <p>Read the sentence. One word has a grammar error.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-black text-2xl text-foreground/20">2</span>
                <p>Tap the incorrect word to select it.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-black text-2xl text-foreground/20">3</span>
                <p>Type the correction and submit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Results ──────────────────────────────────────────────────
  if (gameState === "results") {
    const accuracy = results.length > 0 ? Math.round((results.filter(r => r.correct).length / results.length) * 100) : 0;
    const categoryStats: Record<string, { correct: number; total: number }> = {};
    for (const r of results) {
      const cat = r.item.category;
      if (!categoryStats[cat]) categoryStats[cat] = { correct: 0, total: 0 };
      categoryStats[cat].total++;
      if (r.correct) categoryStats[cat].correct++;
    }

    return (
      <div className="max-w-4xl mx-auto p-4 sm:p-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="border-2 border-foreground p-8 text-center">
            <Trophy size={48} className="mx-auto mb-4 text-amber-500" />
            <p className="text-5xl font-black mb-2">{score}</p>
            <p className="font-mono text-sm uppercase text-muted-foreground">Points</p>
            <div className="flex items-center justify-center gap-6 mt-4 text-sm font-mono">
              <span>{accuracy}% accuracy</span>
              <span>{results.length} answered</span>
              <span>🔥 {bestStreak} streak</span>
            </div>
          </div>

          {/* Category breakdown */}
          <div className="border-2 border-border p-6 space-y-3">
            <p className="font-mono text-xs uppercase text-muted-foreground font-bold">Performance by Category</p>
            {Object.entries(categoryStats).map(([cat, stats]) => (
              <div key={cat} className="flex items-center gap-3">
                <span className="font-mono text-sm w-32 capitalize">{cat.replace("-", " ")}</span>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={cn("h-full rounded-full",
                      stats.correct / stats.total >= 0.7 ? "bg-green-500" : stats.correct / stats.total >= 0.4 ? "bg-amber-500" : "bg-red-500"
                    )}
                    style={{ width: `${(stats.correct / stats.total) * 100}%` }}
                  />
                </div>
                <span className="font-mono text-xs w-12 text-right">{stats.correct}/{stats.total}</span>
              </div>
            ))}
          </div>

          {/* Individual results */}
          <div className="space-y-2">
            {results.map((r, i) => (
              <div key={i} className={cn("border-2 p-3 text-sm", r.correct ? "border-green-500/30" : "border-red-500/30")}>
                <div className="flex items-center gap-2 mb-1">
                  {r.correct ? <Check size={14} className="text-green-500" /> : <X size={14} className="text-red-500" />}
                  <span className="font-bold">{r.item.original}</span>
                </div>
                {!r.correct && (
                  <p className="text-xs text-muted-foreground ml-5">
                    Error: &quot;{r.item.errorWord}&quot; → &quot;{r.item.correction}&quot; ({r.item.category})
                  </p>
                )}
              </div>
            ))}
          </div>

          <Button
            onClick={() => setGameState("menu")}
            className="w-full border-2 border-foreground font-mono text-sm uppercase gap-2"
          >
            <RotateCcw size={14} /> Play Again
          </Button>
        </motion.div>
      </div>
    );
  }

  // ── Playing / Feedback ───────────────────────────────────────
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-muted-foreground">
            {currentIdx + 1}/{items.length}
          </span>
          <span className="px-2 py-0.5 border border-border font-mono text-xs">{selectedLevel}</span>
        </div>
        <div className="flex items-center gap-4 font-mono text-sm">
          {gameMode === "timed" && (
            <span className={cn("flex items-center gap-1", timeLeft <= 30 ? "text-red-500 animate-pulse" : "text-muted-foreground")}>
              <Timer size={14} /> {formatTime(timeLeft)}
            </span>
          )}
          {streak >= 2 && (
            <span className="text-amber-500 font-bold">🔥 {streak}x</span>
          )}
          <span className="font-bold">{score} pts</span>
        </div>
      </div>

      {/* Sentence with clickable words */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <div className="border-2 border-foreground p-6 md:p-8 mb-6">
            <p className="text-xs font-mono text-muted-foreground uppercase mb-4">
              Tap the word with the error:
            </p>
            <div className="flex flex-wrap gap-2">
              {words.map((word, i) => (
                <button
                  key={i}
                  onClick={() => handleWordClick(i)}
                  disabled={submitted}
                  className={cn(
                    "px-3 py-2 text-lg md:text-xl font-bold border-2 transition-all",
                    submitted && word.replace(/[.,!?;:]/g, "").toLowerCase() === current.errorWord.toLowerCase()
                      ? "border-red-500 bg-red-500/10 text-red-500"
                      : selectedWordIdx === i
                        ? "border-primary bg-primary/10 ring-2 ring-primary/30"
                        : "border-border hover:border-foreground hover:bg-foreground/5",
                    submitted && "cursor-default"
                  )}
                >
                  {word}
                </button>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">{current.translation}</p>
          </div>

          {/* Correction input */}
          {selectedWordIdx !== null && !submitted && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
              <div className="border-2 border-foreground p-4 space-y-3">
                <p className="font-mono text-xs uppercase text-muted-foreground">
                  Selected: <span className="text-foreground font-bold">&quot;{words[selectedWordIdx]}&quot;</span> — Type the correction:
                </p>
                <div className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={userCorrection}
                    onChange={e => setUserCorrection(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && userCorrection && handleSubmit()}
                    placeholder="Type correct word..."
                    className="flex-1 px-3 py-2 border-2 border-border bg-transparent font-mono text-lg focus:border-foreground outline-none"
                    autoComplete="off"
                    autoCapitalize="off"
                  />
                  <Button
                    onClick={handleSubmit}
                    disabled={!userCorrection}
                    className="border-2 border-foreground font-mono text-sm uppercase px-6"
                  >
                    <Check size={16} />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Feedback */}
          {gameState === "feedback" && results.length > 0 && (() => {
            const lastResult = results[results.length - 1];
            return (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                <div className={cn(
                  "border-2 p-4 space-y-3",
                  lastResult.correct ? "border-green-500 bg-green-500/10" : "border-red-500 bg-red-500/10"
                )}>
                  <div className="flex items-center gap-2 font-bold">
                    {lastResult.correct
                      ? <><Check size={18} className="text-green-500" /> Correct! +{10 + (streak > 2 ? Math.min(streak - 1, 5) : 0)} pts</>
                      : <><X size={18} className="text-red-500" /> Not quite</>
                    }
                  </div>

                  <div className="space-y-1 text-sm">
                    <p><strong>Original:</strong> {current.original}</p>
                    <p>
                      <strong>Error:</strong>{" "}
                      <span className="text-red-500 line-through">{current.errorWord}</span>{" → "}
                      <span className="text-green-500 font-bold">{current.correction}</span>
                    </p>
                  </div>

                  <div className="border-t border-current/20 pt-2">
                    <p className="text-sm">💡 {current.explanation}</p>
                    <p className="text-xs font-mono text-muted-foreground mt-1 uppercase">
                      Category: {current.category.replace("-", " ")}
                    </p>
                  </div>
                </div>

                <Button onClick={handleNext} className="w-full border-2 border-foreground font-mono text-sm uppercase gap-2">
                  {currentIdx + 1 >= items.length ? "See Results" : "Next"} <ChevronRight size={14} />
                </Button>
              </motion.div>
            );
          })()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

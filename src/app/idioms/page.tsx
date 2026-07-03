"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Languages, Volume2, Plus, Check, ChevronDown, Filter, Shuffle, ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { idioms, Idiom } from "@/data/idioms-redewendungen";
import { useProgressStore } from "@/store/useProgressStore";
import { speakGermanNeural } from "@/lib/tts";

const LEVELS = ["B1", "B2", "C1", "C2"];
const CATEGORIES: { value: Idiom["category"]; label: string }[] = [
  { value: "everyday", label: "Everyday" },
  { value: "business", label: "Business" },
  { value: "academic", label: "Academic" },
  { value: "literary", label: "Literary" },
];

type Mode = "browse" | "quiz";

export default function IdiomsPage() {
  const { addToVocabularyBank, vocabularyBank } = useProgressStore();
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Idiom["category"] | null>(null);
  const [mode, setMode] = useState<Mode>("browse");
  const [showLevelPicker, setShowLevelPicker] = useState(false);

  // Quiz state
  const [quizIdioms, setQuizIdioms] = useState<Idiom[]>([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);

  const filtered = useMemo(() => {
    let result = idioms;
    if (selectedLevel) result = result.filter(i => i.level === selectedLevel);
    if (selectedCategory) result = result.filter(i => i.category === selectedCategory);
    return result;
  }, [selectedLevel, selectedCategory]);

  const isInBank = (word: string) => vocabularyBank[word.toLowerCase()] !== undefined;

  const handleAddToBank = (idiom: Idiom) => {
    addToVocabularyBank([{
      word: idiom.idiom,
      meaning: idiom.meaning,
      example: { de: idiom.example, en: idiom.exampleTranslation },
      source: "manual",
      level: idiom.level,
      addedDate: new Date().toISOString(),
    }]);
  };

  const startQuiz = () => {
    const shuffled = [...filtered].sort(() => Math.random() - 0.5).slice(0, 10);
    setQuizIdioms(shuffled);
    setQuizIndex(0);
    setQuizAnswer(null);
    setQuizScore(0);
    setMode("quiz");
  };

  const getQuizOptions = (idiom: Idiom): string[] => {
    const correct = idiom.meaning;
    const others = idioms
      .filter(i => i.id !== idiom.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(i => i.meaning);
    const options = [correct, ...others].sort(() => Math.random() - 0.5);
    return options;
  };

  const [quizOptions, setQuizOptionsState] = useState<string[]>([]);
  useMemo(() => {
    if (mode === "quiz" && quizIdioms[quizIndex]) {
      setQuizOptionsState(getQuizOptions(quizIdioms[quizIndex]));
    }
  }, [quizIndex, mode, quizIdioms]);

  // ── Quiz Mode ──
  if (mode === "quiz" && quizIdioms.length > 0) {
    const current = quizIdioms[quizIndex];
    const isLast = quizIndex >= quizIdioms.length - 1;
    const isComplete = quizAnswer !== null && isLast;

    if (!current || (quizAnswer !== null && isLast && quizIndex === quizIdioms.length)) {
      return (
        <div className="flex-1 p-6 md:p-10 max-w-3xl mx-auto space-y-8 text-center">
          <h1 className="text-4xl font-black">Quiz Complete!</h1>
          <p className="text-4xl sm:text-6xl font-black text-primary">{quizScore}/{quizIdioms.length}</p>
          <Button onClick={() => setMode("browse")} className="border-2 border-foreground font-bold text-lg px-8 py-4">
            Back to Idioms
          </Button>
        </div>
      );
    }

    return (
      <div className="flex-1 p-6 md:p-10 max-w-3xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-black">Idiom Quiz</h2>
          <span className="text-muted-foreground font-bold">{quizIndex + 1} / {quizIdioms.length}</span>
        </div>

        <div className="border-2 border-foreground bg-card p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
          <p className="text-sm text-muted-foreground font-bold mb-2">What does this idiom mean?</p>
          <p className="text-2xl font-black flex items-center gap-3">
            {current.idiom}
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => speakGermanNeural(current.idiom)}>
              <Volume2 size={16} />
            </Button>
          </p>
          <p className="text-muted-foreground text-sm mt-2 italic">
            Literally: {current.literalTranslation}
          </p>
        </div>

        <div className="grid gap-3">
          {quizOptions.map((opt, idx) => {
            const isCorrect = opt === current.meaning;
            const isSelected = quizAnswer === idx;
            const showResult = quizAnswer !== null;
            return (
              <button
                key={idx}
                disabled={showResult}
                onClick={() => {
                  setQuizAnswer(idx);
                  if (isCorrect) setQuizScore(s => s + 1);
                }}
                className={cn(
                  "w-full text-left p-4 border-2 border-foreground font-medium transition-all",
                  "shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)]",
                  !showResult && "hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:bg-muted cursor-pointer",
                  showResult && isCorrect && "bg-green-50 dark:bg-green-950 border-green-500",
                  showResult && isSelected && !isCorrect && "bg-red-50 dark:bg-red-950 border-red-500",
                )}
              >
                <div className="flex items-center justify-between">
                  <span>{opt}</span>
                  {showResult && isCorrect && <CheckCircle2 className="text-green-600" size={20} />}
                  {showResult && isSelected && !isCorrect && <XCircle className="text-red-600" size={20} />}
                </div>
              </button>
            );
          })}
        </div>

        {quizAnswer !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="bg-muted p-4 border-2 border-foreground mb-4">
              <p className="font-bold text-sm mb-1">Example:</p>
              <p className="font-medium">{current.example}</p>
              <p className="text-muted-foreground text-sm">{current.exampleTranslation}</p>
            </div>
            <Button
              onClick={() => {
                if (isLast) {
                  setQuizIndex(quizIdioms.length);
                  return;
                }
                setQuizIndex(i => i + 1);
                setQuizAnswer(null);
              }}
              className="w-full border-2 border-foreground font-bold gap-2"
            >
              {isLast ? "See Results" : "Next"} <ArrowRight size={16} />
            </Button>
          </motion.div>
        )}
      </div>
    );
  }

  // ── Browse Mode ──
  return (
    <div className="flex-1 p-6 md:p-10 max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight flex items-center gap-3">
          <Languages className="text-primary" size={32} />
          Redewendungen
        </h1>
        <p className="text-muted-foreground mt-2">
          {filtered.length} German idioms — learn the expressions that make you sound native
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-3 items-center">
        {/* Level */}
        <div className="relative">
          <Button
            variant="outline"
            className="border-2 border-foreground font-bold gap-2"
            onClick={() => setShowLevelPicker(!showLevelPicker)}
          >
            <Filter size={16} />
            {selectedLevel || "All Levels"}
            <ChevronDown size={14} className={cn("transition-transform", showLevelPicker && "rotate-180")} />
          </Button>
          <AnimatePresence>
            {showLevelPicker && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="absolute top-12 left-0 z-50 bg-card border-2 border-foreground p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
              >
                <button
                  onClick={() => { setSelectedLevel(null); setShowLevelPicker(false); }}
                  className={cn("block w-full text-left px-4 py-2 font-bold transition-colors", !selectedLevel ? "bg-primary text-primary-foreground" : "hover:bg-muted")}
                >
                  All Levels
                </button>
                {LEVELS.map(l => (
                  <button
                    key={l}
                    onClick={() => { setSelectedLevel(l); setShowLevelPicker(false); }}
                    className={cn("block w-full text-left px-4 py-2 font-bold transition-colors", l === selectedLevel ? "bg-primary text-primary-foreground" : "hover:bg-muted")}
                  >
                    {l}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Category */}
        <div className="flex gap-2 flex-wrap">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            className={cn("border-2 border-foreground font-bold", selectedCategory === null && "bg-primary text-primary-foreground")}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </Button>
          {CATEGORIES.map(c => (
            <Button
              key={c.value}
              variant={selectedCategory === c.value ? "default" : "outline"}
              className={cn("border-2 border-foreground font-bold", selectedCategory === c.value && "bg-primary text-primary-foreground")}
              onClick={() => setSelectedCategory(c.value)}
            >
              {c.label}
            </Button>
          ))}
        </div>

        {/* Quiz Button */}
        <Button
          onClick={startQuiz}
          disabled={filtered.length < 4}
          className="border-2 border-foreground font-bold gap-2 bg-primary text-primary-foreground ml-auto"
        >
          <Shuffle size={16} /> Quiz Me ({Math.min(filtered.length, 10)})
        </Button>
      </div>

      {/* Idiom Cards */}
      <div className="grid gap-4">
        {filtered.map((idiom, i) => {
          const saved = isInBank(idiom.idiom);
          return (
            <motion.div
              key={idiom.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.03, 0.4) }}
              className="border-2 border-foreground bg-card p-5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-black">{idiom.idiom}</h3>
                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0 shrink-0" onClick={() => speakGermanNeural(idiom.idiom)}>
                      <Volume2 size={14} />
                    </Button>
                    <span className="text-xs font-bold px-2 py-0.5 bg-muted border border-foreground/20">{idiom.level}</span>
                    <span className="text-xs font-medium text-muted-foreground capitalize">{idiom.category}</span>
                  </div>
                  <p className="text-muted-foreground text-sm italic">
                    Literally: {idiom.literalTranslation}
                  </p>
                  <p className="font-bold text-primary">{idiom.meaning}</p>
                  <div className="bg-muted p-3 mt-2">
                    <p className="font-medium text-sm">{idiom.example}</p>
                    <p className="text-muted-foreground text-xs mt-1">{idiom.exampleTranslation}</p>
                  </div>
                </div>
                <Button
                  variant={saved ? "ghost" : "outline"}
                  size="sm"
                  disabled={saved}
                  onClick={() => handleAddToBank(idiom)}
                  className={cn("shrink-0 h-8 border-2 font-bold text-xs", saved && "text-green-600")}
                >
                  {saved ? <Check size={14} /> : <><Plus size={14} /> Learn</>}
                </Button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

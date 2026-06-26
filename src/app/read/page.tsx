"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ChevronDown, ArrowLeft, ArrowRight, CheckCircle2, XCircle, Volume2, HelpCircle, Eye, EyeOff, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { readingPassages, ReadingPassage } from "@/data/reading-passages";
import { useProgressStore } from "@/store/useProgressStore";
import { speakGermanNeural } from "@/lib/tts";

function VocabTooltip({ word, meaning }: { word: string; meaning: string }) {
  return (
    <span className="group relative cursor-help border-b-2 border-dashed border-primary/40 hover:border-primary transition-colors">
      {word}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-foreground text-background text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-lg">
        {meaning}
      </span>
    </span>
  );
}

export default function ReadPage() {
  const { level: storedLevel, addToVocabularyBank, vocabularyBank } = useProgressStore();
  const [selectedLevel, setSelectedLevel] = useState(storedLevel || "A1");
  const [selectedPassage, setSelectedPassage] = useState<ReadingPassage | null>(null);
  const [showLevelPicker, setShowLevelPicker] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [showVocab, setShowVocab] = useState(true);
  const [vocabSaved, setVocabSaved] = useState(false);

  const levels = [...new Set(readingPassages.map(p => p.level))];
  const passages = readingPassages.filter(p => p.level === selectedLevel);

  const handleAnswer = (idx: number) => {
    if (showResult) return;
    setSelectedAnswer(idx);
    setShowResult(true);
    if (selectedPassage && idx === selectedPassage.questions[currentQuestion].correctIndex) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (!selectedPassage) return;
    if (currentQuestion + 1 < selectedPassage.questions.length) {
      setCurrentQuestion(q => q + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleReset = () => {
    setSelectedPassage(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
    setVocabSaved(false);
  };

  // Highlight vocab words in text
  const highlightedText = useMemo(() => {
    if (!selectedPassage || !showVocab) return selectedPassage?.text || "";
    return selectedPassage.text;
  }, [selectedPassage, showVocab]);

  // ── Passage Selection ──
  if (!selectedPassage) {
    return (
      <div className="flex-1 p-6 md:p-10 max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-primary" /> Leseverständnis
          </h1>
          <p className="text-muted-foreground mt-2">Read German texts and test your comprehension</p>
        </div>

        {/* Level Picker */}
        <div className="relative">
          <button onClick={() => setShowLevelPicker(!showLevelPicker)}
            className="flex items-center gap-2 px-4 py-3 bg-card border-2 border-border font-bold text-lg hover:bg-secondary transition-colors">
            Level: {selectedLevel} <ChevronDown className="w-4 h-4" />
          </button>
          <AnimatePresence>
            {showLevelPicker && (
              <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                className="absolute z-50 mt-1 bg-card border-2 border-border shadow-lg">
                {levels.map(l => (
                  <button key={l} onClick={() => { setSelectedLevel(l); setShowLevelPicker(false); }}
                    className={cn("block w-full px-6 py-3 text-left font-medium hover:bg-secondary transition-colors",
                      l === selectedLevel && "bg-primary text-primary-foreground")}>
                    {l}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Passage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {passages.map(passage => (
            <motion.button key={passage.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedPassage(passage)}
              className="text-left p-6 bg-card border-2 border-border hover:border-primary transition-colors space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-2 py-1 bg-muted">
                  {passage.category}
                </span>
                <span className="text-xs text-muted-foreground">{passage.wordCount} words</span>
              </div>
              <h3 className="text-lg font-bold">{passage.titleDe}</h3>
              <p className="text-sm text-muted-foreground">{passage.title}</p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>{passage.questions.length} questions</span>
                <span>·</span>
                <span>{passage.vocabulary.length} vocab words</span>
              </div>
            </motion.button>
          ))}
          {passages.length === 0 && (
            <div className="col-span-2 text-center py-16 text-muted-foreground">
              <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p>No passages available for {selectedLevel} yet.</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  const question = selectedPassage.questions[currentQuestion];

  // ── Reading + Quiz View ──
  return (
    <div className="flex-1 p-6 md:p-10 max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={handleReset} className="font-bold">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </Button>
        <div className="flex-1">
          <h1 className="text-2xl font-black">{selectedPassage.titleDe}</h1>
          <p className="text-sm text-muted-foreground">{selectedPassage.level} · {selectedPassage.category} · {selectedPassage.wordCount} words</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Reading Text */}
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-card border-2 border-border p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-bold">Text</h2>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={() => speakGermanNeural(selectedPassage.text)}>
                  <Volume2 className="w-4 h-4 mr-1" /> Listen
                </Button>
                <Button variant="ghost" size="sm" onClick={() => setShowVocab(!showVocab)}>
                  {showVocab ? <Eye className="w-4 h-4 mr-1" /> : <EyeOff className="w-4 h-4 mr-1" />}
                  Vocab
                </Button>
              </div>
            </div>
            <div className="text-base leading-relaxed whitespace-pre-wrap">
              {selectedPassage.text}
            </div>
          </div>

          {/* Vocabulary Section */}
          <AnimatePresence>
            {showVocab && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                className="bg-card border-2 border-border p-4 space-y-3 overflow-hidden">
                <h3 className="font-bold text-sm flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-primary" /> Key Vocabulary
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {selectedPassage.vocabulary.map((v, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm p-2 bg-muted/50">
                      <button onClick={() => speakGermanNeural(v.word)} className="text-primary hover:text-primary/80">
                        <Volume2 className="w-3 h-3" />
                      </button>
                      <span className="font-bold">{v.word}</span>
                      <span className="text-muted-foreground">— {v.meaning}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Quiz Panel */}
        <div className="lg:col-span-2 space-y-4">
          <AnimatePresence mode="wait">
            {!quizComplete ? (
              <motion.div key={currentQuestion} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }} className="bg-card border-2 border-border p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold">Question {currentQuestion + 1}/{selectedPassage.questions.length}</h3>
                  <span className="text-sm text-primary font-bold">{score} correct</span>
                </div>

                <div className="w-full bg-muted h-1.5">
                  <motion.div className="bg-primary h-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion + (showResult ? 1 : 0)) / selectedPassage.questions.length) * 100}%` }}
                  />
                </div>

                <p className="text-base font-medium">{question.question}</p>

                <div className="space-y-2">
                  {question.options.map((opt, idx) => {
                    const isCorrect = idx === question.correctIndex;
                    const isSelected = idx === selectedAnswer;
                    return (
                      <motion.button key={idx} whileTap={!showResult ? { scale: 0.98 } : {}}
                        onClick={() => handleAnswer(idx)}
                        disabled={showResult}
                        className={cn(
                          "w-full text-left p-4 border-2 transition-all text-sm",
                          showResult && isCorrect && "border-green-500 bg-green-500/10",
                          showResult && isSelected && !isCorrect && "border-red-500 bg-red-500/10",
                          !showResult && "border-border hover:border-primary",
                          !showResult && isSelected && "border-primary bg-primary/5",
                        )}>
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 shrink-0 flex items-center justify-center text-xs font-bold border-2 border-current">
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span>{opt}</span>
                          {showResult && isCorrect && <CheckCircle2 className="w-4 h-4 ml-auto text-green-500" />}
                          {showResult && isSelected && !isCorrect && <XCircle className="w-4 h-4 ml-auto text-red-500" />}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                {showResult && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    className="space-y-3">
                    <div className={cn("p-3 text-sm",
                      selectedAnswer === question.correctIndex
                        ? "bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20"
                        : "bg-red-500/10 text-red-700 dark:text-red-400 border border-red-500/20")}>
                      {selectedAnswer === question.correctIndex ? "✅ Richtig!" : "❌ Leider falsch."}
                      <p className="mt-1 opacity-80">{question.explanation}</p>
                    </div>
                    <Button onClick={handleNext} className="w-full font-bold">
                      {currentQuestion + 1 < selectedPassage.questions.length ? (
                        <>Next Question <ArrowRight className="w-4 h-4 ml-2" /></>
                      ) : "See Results"}
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="bg-card border-2 border-border p-8 space-y-6 text-center">
                <div className="text-6xl">
                  {score === selectedPassage.questions.length ? "🎉" :
                   score >= selectedPassage.questions.length / 2 ? "👏" : "💪"}
                </div>
                <h2 className="text-2xl font-black">
                  {score}/{selectedPassage.questions.length} Correct
                </h2>
                <p className="text-muted-foreground">
                  {score === selectedPassage.questions.length ? "Perfekt! You understood everything!" :
                   score >= selectedPassage.questions.length / 2 ? "Gut gemacht! Keep reading to improve." :
                   "Keep practicing! Try reading the text again slowly."}
                </p>
                <div className="flex gap-3">
                  <Button onClick={handleReset} variant="outline" className="flex-1 font-bold">
                    <ArrowLeft className="w-4 h-4 mr-2" /> More Texts
                  </Button>
                  <Button onClick={() => { setCurrentQuestion(0); setSelectedAnswer(null); setShowResult(false); setScore(0); setQuizComplete(false); }}
                    className="flex-1 font-bold">
                    Try Again
                  </Button>
                </div>

                {/* Save vocabulary to bank */}
                {selectedPassage.vocabulary.length > 0 && (
                  <Button
                    variant="outline"
                    className={cn("w-full font-mono text-xs uppercase", vocabSaved && "border-green-500 text-green-500")}
                    disabled={vocabSaved}
                    onClick={() => {
                      const newWords = selectedPassage.vocabulary
                        .filter(v => !vocabularyBank[v.word.toLowerCase()])
                        .map(v => ({
                          word: v.word,
                          meaning: v.meaning,
                          source: "reading" as const,
                          level: selectedPassage.level,
                          addedDate: new Date().toISOString(),
                        }));
                      if (newWords.length > 0) addToVocabularyBank(newWords);
                      setVocabSaved(true);
                    }}
                  >
                    {vocabSaved ? (
                      <><CheckCircle2 className="w-4 h-4 mr-2" /> Vocabulary Saved!</>
                    ) : (
                      <><Plus className="w-4 h-4 mr-2" /> Save {selectedPassage.vocabulary.length} Words to Bank</>
                    )}
                  </Button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

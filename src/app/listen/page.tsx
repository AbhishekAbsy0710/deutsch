"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Headphones, Play, RotateCcw, Check, X, ArrowRight, ChevronDown, Gauge, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { speakGermanNeural } from "@/lib/tts";
import { dictationSentences, comprehensionDialogues, type DictationSentence, type ComprehensionDialogue } from "@/data/listening-data";
import { useProgressStore } from "@/store/useProgressStore";
import { extractDictationVocab } from "@/lib/vocabulary-extractor";
import { PronunciationDrill } from "@/components/PronunciationDrill";

type Mode = "dictation" | "comprehension" | "pronunciation";

const LEVELS = ["A1", "A2", "B1", "B2", "C1"];

export default function ListenPage() {
  const [mode, setMode] = useState<Mode>("dictation");
  const { level } = useProgressStore();
  const [filterLevel, setFilterLevel] = useState<string>(level || "A1");

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-8">
      {/* Header */}
      <header className="mb-8 pb-4 border-b-4 border-foreground">
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter flex items-center gap-3">
          <Headphones className="w-8 h-8 md:w-10 md:h-10" /> Listening Lab
        </h1>
        <p className="font-mono text-muted-foreground text-sm uppercase tracking-widest mt-1">
          Train Your German Ear
        </p>
      </header>

      {/* Mode tabs + level */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="flex border-2 border-foreground">
          <button
            onClick={() => setMode("dictation")}
            className={cn("px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors",
              mode === "dictation" ? "bg-foreground text-background" : "hover:bg-foreground/10"
            )}
          >
            ✏️ Dictation
          </button>
          <button
            onClick={() => setMode("comprehension")}
            className={cn("px-4 py-2 font-mono text-xs uppercase tracking-widest border-l-2 border-foreground transition-colors",
              mode === "comprehension" ? "bg-foreground text-background" : "hover:bg-foreground/10"
            )}
          >
            🎧 Comprehension
          </button>
          <button
            onClick={() => setMode("pronunciation")}
            className={cn("px-4 py-2 font-mono text-xs uppercase tracking-widest border-l-2 border-foreground transition-colors",
              mode === "pronunciation" ? "bg-foreground text-background" : "hover:bg-foreground/10"
            )}
          >
            🎤 Pronunciation
          </button>
        </div>

        <div className="flex gap-1 ml-auto">
          {LEVELS.map(l => (
            <button key={l} onClick={() => setFilterLevel(l)}
              className={cn("px-3 py-1.5 border-2 font-mono text-xs transition-colors",
                filterLevel === l ? "bg-foreground text-background border-foreground" : "border-border hover:border-foreground"
              )}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {mode === "dictation" ? (
          <motion.div key="dictation" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
            <DictationMode level={filterLevel} />
          </motion.div>
        ) : mode === "comprehension" ? (
          <motion.div key="comprehension" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <ComprehensionMode level={filterLevel} />
          </motion.div>
        ) : (
          <motion.div key="pronunciation" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <PronunciationMode level={filterLevel} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Dictation Mode ───────────────────────────────────────
function DictationMode({ level }: { level: string }) {
  const sentences = useMemo(() => {
    return dictationSentences.filter(s => s.level === level).sort(() => Math.random() - 0.5);
  }, [level]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [replaysLeft, setReplaysLeft] = useState(3);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Reset when level changes
  useEffect(() => {
    setCurrentIndex(0);
    setUserInput("");
    setSubmitted(false);
    setReplaysLeft(3);
    setScore(0);
    setTotal(0);
  }, [level]);

  const current = sentences[currentIndex];

  const playAudio = useCallback(async (slow = false) => {
    if (!current || isSpeaking) return;
    setIsSpeaking(true);
    try {
      await speakGermanNeural(current.text, slow ? { rate: "0.7" } : undefined);
    } catch {
      // Fallback handled inside speakGermanNeural
    }
    setIsSpeaking(false);
  }, [current, isSpeaking]);

  const { recordDictation, addToVocabularyBank } = useProgressStore();

  const handleSubmit = () => {
    if (!userInput.trim()) return;
    setSubmitted(true);
    setTotal(t => t + 1);
    // Score: simple word-level accuracy
    const correctWords = current.text.toLowerCase().replace(/[.,!?]/g, "").split(/\s+/);
    const userWords = userInput.toLowerCase().replace(/[.,!?]/g, "").split(/\s+/);
    let matches = 0;
    correctWords.forEach((w, i) => {
      if (userWords[i] === w) matches++;
    });
    const accuracy = Math.round((matches / correctWords.length) * 100);
    if (accuracy >= 80) setScore(s => s + 1);
    // Record to store
    recordDictation(accuracy);
    // Extract vocabulary
    addToVocabularyBank(extractDictationVocab(current.text, current.translation, level));
  };

  const handleNext = () => {
    setCurrentIndex(i => Math.min(i + 1, sentences.length - 1));
    setUserInput("");
    setSubmitted(false);
    setReplaysLeft(3);
  };

  if (!current) {
    return (
      <div className="text-center py-16 text-muted-foreground">
        <p className="text-xl font-bold mb-2">No dictation exercises for {level}</p>
        <p className="text-sm">Try another level.</p>
      </div>
    );
  }

  // Diff display
  const renderDiff = () => {
    const correctWords = current.text.split(/\s+/);
    const userWords = userInput.split(/\s+/);
    return (
      <div className="flex flex-wrap gap-1 mt-4">
        {correctWords.map((word, i) => {
          const userWord = userWords[i] || "";
          const isCorrect = userWord.toLowerCase().replace(/[.,!?]/g, "") === word.toLowerCase().replace(/[.,!?]/g, "");
          const isMissing = !userWords[i];
          return (
            <span key={i} className={cn(
              "px-1.5 py-0.5 font-mono text-sm border",
              isCorrect ? "border-green-500 bg-green-500/10 text-green-600" :
                isMissing ? "border-yellow-500 bg-yellow-500/10 text-yellow-600" :
                  "border-red-500 bg-red-500/10 text-red-600"
            )}>
              {isCorrect ? word : isMissing ? `[${word}]` : (
                <span>
                  <s className="opacity-50">{userWord}</s> → {word}
                </span>
              )}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      {/* Progress */}
      <div className="flex items-center justify-between mb-6">
        <span className="font-mono text-xs text-muted-foreground uppercase">
          {currentIndex + 1} / {sentences.length}
        </span>
        <span className="font-mono text-xs text-muted-foreground uppercase">
          Score: {score}/{total}
        </span>
      </div>

      {/* Card */}
      <div className="border-2 border-foreground p-6 md:p-8 mb-6">
        {/* Play buttons */}
        <div className="flex items-center gap-3 mb-8">
          <Button onClick={() => { if (replaysLeft > 0 || !submitted) { playAudio(false); if (!submitted) setReplaysLeft(r => r); else setReplaysLeft(r => Math.max(0, r - 1)); } }}
            disabled={submitted && replaysLeft <= 0}
            className="border-2 gap-2 font-mono text-xs uppercase"
            variant="outline"
          >
            {isSpeaking ? <Volume2 size={16} className="animate-pulse" /> : <Play size={16} />}
            Play {!submitted && `(${replaysLeft})`}
          </Button>
          <Button onClick={() => { if (replaysLeft > 0) { playAudio(true); if (submitted) setReplaysLeft(r => Math.max(0, r - 1)); } }}
            disabled={submitted && replaysLeft <= 0}
            className="border-2 gap-2 font-mono text-xs uppercase"
            variant="outline"
          >
            <Gauge size={16} /> Slow
          </Button>
          <span className="text-xs text-muted-foreground font-mono ml-auto">
            {submitted ? `Replays: ${replaysLeft}` : "Listen carefully, then type what you hear"}
          </span>
        </div>

        {/* Input */}
        {!submitted ? (
          <div>
            <textarea
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              placeholder="Type what you heard..."
              className="w-full border-2 border-border p-4 bg-background outline-none focus:border-primary transition-colors font-mono text-base resize-none h-24"
              onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSubmit(); } }}
            />
            <Button onClick={handleSubmit} disabled={!userInput.trim()}
              className="mt-3 border-2 font-mono text-xs uppercase gap-2 w-full sm:w-auto"
            >
              <Check size={14} /> Check
            </Button>
          </div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* Correct answer */}
            <div className="mb-4">
              <p className="font-mono text-xs text-muted-foreground uppercase mb-1">Correct</p>
              <p className="text-lg font-bold">{current.text}</p>
              <p className="text-sm text-muted-foreground mt-1">{current.translation}</p>
            </div>

            {/* Diff */}
            <div>
              <p className="font-mono text-xs text-muted-foreground uppercase mb-1">Your Answer</p>
              {renderDiff()}
            </div>

            {/* Next */}
            {currentIndex < sentences.length - 1 && (
              <Button onClick={handleNext} className="mt-6 border-2 font-mono text-xs uppercase gap-2">
                <ArrowRight size={14} /> Next
              </Button>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}

// ── Comprehension Mode ───────────────────────────────────
function ComprehensionMode({ level }: { level: string }) {
  const dialogues = useMemo(() => comprehensionDialogues.filter(d => d.level === level), [level]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<"listen" | "quiz" | "result">("listen");
  const [hasPlayed, setHasPlayed] = useState(false);
  const [replaysLeft, setReplaysLeft] = useState(1);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const abortRef = useRef(false);

  useEffect(() => {
    setCurrentIndex(0);
    setPhase("listen");
    setHasPlayed(false);
    setReplaysLeft(1);
    setAnswers([]);
  }, [level]);

  const current = dialogues[currentIndex];

  const playDialogue = useCallback(async () => {
    if (!current || isPlaying) return;
    setIsPlaying(true);
    abortRef.current = false;
    for (const line of current.lines) {
      if (abortRef.current) break;
      await speakGermanNeural(line.text);
      // Small pause between speakers
      await new Promise(r => setTimeout(r, 800));
    }
    setIsPlaying(false);
    setHasPlayed(true);
  }, [current, isPlaying]);

  const handleReplay = () => {
    if (replaysLeft > 0) {
      setReplaysLeft(r => r - 1);
      playDialogue();
    }
  };

  const startQuiz = () => {
    setPhase("quiz");
    setAnswers(new Array(current.questions.length).fill(-1));
  };

  const handleAnswer = (qIndex: number, aIndex: number) => {
    setAnswers(prev => {
      const next = [...prev];
      next[qIndex] = aIndex;
      return next;
    });
  };

  const { recordComprehension } = useProgressStore();

  const submitQuiz = () => {
    setPhase("result");
    // Record completion
    const total = current.questions.length;
    const correct = current.questions.filter((q, i) => answers[i] === q.correctIndex).length;
    recordComprehension(correct, total);
  };

  const correctCount = useMemo(() => {
    if (!current) return 0;
    return current.questions.filter((q, i) => answers[i] === q.correctIndex).length;
  }, [answers, current]);

  if (!current) {
    return (
      <div className="text-center py-16 text-muted-foreground">
        <p className="text-xl font-bold mb-2">No comprehension exercises for {level}</p>
        <p className="text-sm">Try A1, A2, B1, B2, or C1.</p>
      </div>
    );
  }

  return (
    <div>
      {/* Title */}
      <div className="mb-6">
        <h2 className="text-xl font-bold">{current.titleDe}</h2>
        <p className="text-sm text-muted-foreground">{current.title} • {current.category}</p>
      </div>

      <AnimatePresence mode="wait">
        {phase === "listen" && (
          <motion.div key="listen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="border-2 border-foreground p-6 md:p-8"
          >
            <div className="text-center py-8">
              <Headphones className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <p className="text-lg font-medium mb-6">Listen to the dialogue, then answer questions</p>
              <p className="text-sm text-muted-foreground mb-8">You will not see the text. Concentrate!</p>

              <div className="flex items-center justify-center gap-3">
                {!hasPlayed ? (
                  <Button onClick={playDialogue} disabled={isPlaying}
                    className="border-2 gap-2 font-mono text-sm uppercase px-8 py-3"
                  >
                    {isPlaying ? <Volume2 size={18} className="animate-pulse" /> : <Play size={18} />}
                    {isPlaying ? "Playing..." : "Play Dialogue"}
                  </Button>
                ) : (
                  <>
                    <Button onClick={handleReplay} disabled={replaysLeft <= 0 || isPlaying} variant="outline"
                      className="border-2 gap-2 font-mono text-xs uppercase"
                    >
                      <RotateCcw size={14} /> Replay ({replaysLeft})
                    </Button>
                    <Button onClick={startQuiz}
                      className="border-2 gap-2 font-mono text-xs uppercase bg-primary text-primary-foreground"
                    >
                      <ArrowRight size={14} /> Start Quiz
                    </Button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {phase === "quiz" && (
          <motion.div key="quiz" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="space-y-6">
              {current.questions.map((q, qi) => (
                <div key={qi} className="border-2 border-border p-5">
                  <p className="font-bold mb-3">{qi + 1}. {q.question}</p>
                  <div className="space-y-2">
                    {q.options.map((opt, oi) => (
                      <button key={oi} onClick={() => handleAnswer(qi, oi)}
                        className={cn(
                          "w-full text-left p-3 border-2 transition-colors text-sm",
                          answers[qi] === oi
                            ? "bg-foreground text-background border-foreground"
                            : "border-border hover:border-foreground"
                        )}
                      >
                        {String.fromCharCode(97 + oi)}) {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <Button onClick={submitQuiz} disabled={answers.includes(-1)}
                className="border-2 font-mono text-xs uppercase gap-2 w-full"
              >
                <Check size={14} /> Submit Answers
              </Button>
            </div>
          </motion.div>
        )}

        {phase === "result" && (
          <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {/* Score */}
            <div className={cn("border-2 p-6 mb-6",
              correctCount === current.questions.length ? "border-green-500 bg-green-500/10" : "border-foreground"
            )}>
              <div className="text-center">
                <p className="text-5xl font-black mb-2">{correctCount}/{current.questions.length}</p>
                <p className="font-mono text-sm text-muted-foreground uppercase">
                  {correctCount === current.questions.length ? "Perfect! 🎉" :
                    correctCount >= current.questions.length * 0.7 ? "Good job! 👏" : "Keep practicing 💪"}
                </p>
              </div>
            </div>

            {/* Review */}
            <div className="space-y-4">
              {current.questions.map((q, qi) => {
                const isCorrect = answers[qi] === q.correctIndex;
                return (
                  <div key={qi} className={cn("border-2 p-4", isCorrect ? "border-green-500/50" : "border-red-500/50")}>
                    <div className="flex items-start gap-2">
                      {isCorrect ? <Check size={16} className="text-green-500 mt-0.5" /> : <X size={16} className="text-red-500 mt-0.5" />}
                      <div>
                        <p className="font-bold text-sm">{q.question}</p>
                        {!isCorrect && (
                          <p className="text-sm mt-1">
                            <span className="text-red-500 line-through">{q.options[answers[qi]]}</span>
                            {" → "}
                            <span className="text-green-500 font-bold">{q.options[q.correctIndex]}</span>
                          </p>
                        )}
                        <p className="text-xs text-muted-foreground mt-1">{q.explanation}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Next dialogue */}
            {currentIndex < dialogues.length - 1 && (
              <Button onClick={() => { setCurrentIndex(i => i + 1); setPhase("listen"); setHasPlayed(false); setReplaysLeft(1); setAnswers([]); }}
                className="mt-6 border-2 font-mono text-xs uppercase gap-2"
              >
                <ArrowRight size={14} /> Next Dialogue
              </Button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Pronunciation Mode ──────────────────────────────────────
function PronunciationMode({ level }: { level: string }) {
  const sentences = useMemo(
    () => dictationSentences
      .filter(s => s.level === level)
      .sort(() => Math.random() - 0.5)
      .slice(0, 10)
      .map(s => ({ text: s.text, translation: s.translation, level: s.level })),
    [level]
  );

  if (sentences.length === 0) {
    return (
      <div className="text-center py-16 text-muted-foreground">
        <p className="text-xl font-bold mb-2">No pronunciation exercises for {level}</p>
        <p className="text-sm">Try A1, A2, B1, B2, or C1.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold">Pronunciation Practice</h2>
        <p className="text-sm text-muted-foreground">Read the sentence aloud. We&apos;ll compare your pronunciation.</p>
      </div>
      <PronunciationDrill sentences={sentences} />
    </div>
  );
}

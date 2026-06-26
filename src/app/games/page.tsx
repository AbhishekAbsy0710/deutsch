"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, Timer, Trophy, ArrowLeft, CheckCircle2, XCircle, Zap, RotateCcw, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { genderWords, GenderWord, sentenceChallenges, SentenceChallenge, conjugationChallenges, ConjugationChallenge } from "@/data/games-data";
import { useProgressStore } from "@/store/useProgressStore";
import { speakGermanNeural } from "@/lib/tts";

type GameType = "gender" | "sentence" | "conjugation";

const GAMES = [
  { id: "gender" as GameType, title: "Der / Die / Das", titleDe: "Artikel-Challenge", icon: "🎯", description: "Guess the gender of German nouns — speed counts!", color: "border-blue-500 hover:bg-blue-500/5" },
  { id: "sentence" as GameType, title: "Sentence Builder", titleDe: "Satzbau", icon: "🏗️", description: "Arrange words in the correct German word order", color: "border-teal-500 hover:bg-teal-500/5" },
  { id: "conjugation" as GameType, title: "Conjugation Race", titleDe: "Konjugation", icon: "⚡", description: "Conjugate verbs against the clock", color: "border-orange-500 hover:bg-orange-500/5" },
];

// ── Gender Game Component ────────────────────────────────
function GenderGame({ level, onBack }: { level: string; onBack: () => void }) {
  const words = useMemo(() => {
    const pool = genderWords.filter(w => {
      const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
      return levels.indexOf(w.level) <= levels.indexOf(level);
    });
    return pool.sort(() => Math.random() - 0.5).slice(0, 20);
  }, [level]);

  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const [answered, setAnswered] = useState(0);

  useEffect(() => {
    if (gameOver) return;
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { setGameOver(true); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [gameOver]);

  const handleGuess = (article: "der" | "die" | "das") => {
    if (feedback || gameOver) return;
    const word = words[idx];
    if (article === word.article) {
      setScore(s => s + 1);
      setStreak(s => { const n = s + 1; if (n > bestStreak) setBestStreak(n); return n; });
      setFeedback("correct");
    } else {
      setStreak(0);
      setFeedback("wrong");
    }
    setAnswered(a => a + 1);
    setTimeout(() => {
      setFeedback(null);
      if (idx + 1 < words.length) setIdx(i => i + 1);
      else setGameOver(true);
    }, 800);
  };

  if (gameOver) {
    return (
      <div className="max-w-md mx-auto text-center space-y-6 py-12">
        <div className="text-6xl">{score >= words.length * 0.8 ? "🏆" : score >= words.length * 0.5 ? "👏" : "💪"}</div>
        <h2 className="text-3xl font-black">{score}/{answered}</h2>
        <p className="text-muted-foreground">Best streak: {bestStreak} 🔥</p>
        <div className="flex gap-3">
          <Button onClick={onBack} variant="outline" className="flex-1 font-bold"><ArrowLeft className="w-4 h-4 mr-2" /> Games</Button>
          <Button onClick={() => { setIdx(0); setScore(0); setStreak(0); setBestStreak(0); setFeedback(null); setTimeLeft(60); setGameOver(false); setAnswered(0); }}
            className="flex-1 font-bold"><RotateCcw className="w-4 h-4 mr-2" /> Again</Button>
        </div>
      </div>
    );
  }

  const word = words[idx];

  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onBack} className="font-bold"><ArrowLeft className="w-4 h-4 mr-2" /> Back</Button>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-sm font-mono"><Zap className="w-4 h-4 text-primary" />{score}</span>
          {streak > 1 && <span className="text-sm font-bold text-orange-500">🔥{streak}</span>}
          <span className={cn("flex items-center gap-1 font-mono text-sm font-bold", timeLeft <= 10 ? "text-red-500 animate-pulse" : "text-muted-foreground")}>
            <Timer className="w-4 h-4" />{timeLeft}s
          </span>
        </div>
      </div>

      {/* Progress */}
      <div className="w-full bg-muted h-1.5">
        <motion.div className="bg-primary h-full" animate={{ width: `${(idx / words.length) * 100}%` }} />
      </div>

      {/* Word Card */}
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          className={cn("bg-card border-2 p-10 text-center space-y-4 transition-colors",
            feedback === "correct" ? "border-green-500 bg-green-500/5" :
            feedback === "wrong" ? "border-red-500 bg-red-500/5" : "border-border")}>
          <button onClick={() => speakGermanNeural(word.word)} className="text-4xl md:text-5xl font-black hover:text-primary transition-colors">
            {word.word}
          </button>
          <p className="text-muted-foreground text-sm">{word.meaning}</p>
          {feedback === "wrong" && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-red-500 font-bold">{word.article} {word.word}</motion.p>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Article Buttons */}
      <div className="grid grid-cols-3 gap-3">
        {(["der", "die", "das"] as const).map(article => (
          <motion.button key={article} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={() => handleGuess(article)}
            disabled={!!feedback}
            className={cn("py-5 text-xl font-black border-2 transition-all",
              article === "der" ? "border-blue-500 text-blue-600 hover:bg-blue-500/10" :
              article === "die" ? "border-pink-500 text-pink-600 hover:bg-pink-500/10" :
              "border-green-500 text-green-600 hover:bg-green-500/10",
              feedback && "opacity-50")}>
            {article}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ── Sentence Builder Component ───────────────────────────
function SentenceGame({ level, onBack }: { level: string; onBack: () => void }) {
  const challenges = useMemo(() => {
    const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
    return sentenceChallenges
      .filter(c => levels.indexOf(c.level) <= levels.indexOf(level))
      .sort(() => Math.random() - 0.5);
  }, [level]);

  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [available, setAvailable] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (idx < challenges.length) {
      setAvailable([...challenges[idx].words].sort(() => Math.random() - 0.5));
      setSelected([]);
      setFeedback(null);
    }
  }, [idx, challenges]);

  const handleWordClick = (word: string, fromSelected: boolean) => {
    if (feedback) return;
    if (fromSelected) {
      setSelected(s => { const i = s.indexOf(word); const n = [...s]; n.splice(i, 1); return n; });
      setAvailable(a => [...a, word]);
    } else {
      setAvailable(a => { const i = a.indexOf(word); const n = [...a]; n.splice(i, 1); return n; });
      setSelected(s => [...s, word]);
    }
  };

  const handleCheck = () => {
    const challenge = challenges[idx];
    const isCorrect = JSON.stringify(selected) === JSON.stringify(challenge.correctOrder);
    setFeedback(isCorrect ? "correct" : "wrong");
    if (isCorrect) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (idx + 1 < challenges.length) setIdx(i => i + 1);
  };

  if (idx >= challenges.length || challenges.length === 0) {
    return (
      <div className="max-w-md mx-auto text-center space-y-6 py-12">
        <div className="text-6xl">🏗️</div>
        <h2 className="text-3xl font-black">{score}/{challenges.length}</h2>
        <p className="text-muted-foreground">Great practice with German word order!</p>
        <Button onClick={onBack} className="font-bold"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Games</Button>
      </div>
    );
  }

  const challenge = challenges[idx];

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onBack} className="font-bold"><ArrowLeft className="w-4 h-4 mr-2" /> Back</Button>
        <span className="text-sm font-mono">{idx + 1}/{challenges.length} · {score} ✓</span>
      </div>

      <div className="bg-card border-2 border-border p-6 space-y-2">
        <p className="text-sm text-muted-foreground">Translate into correct German word order:</p>
        <p className="text-lg font-medium">{challenge.translation}</p>
        {challenge.hint && <p className="text-xs text-primary">💡 {challenge.hint}</p>}
      </div>

      {/* Selected words (answer area) */}
      <div className={cn("min-h-16 p-4 border-2 border-dashed flex flex-wrap gap-2 transition-colors",
        feedback === "correct" ? "border-green-500 bg-green-500/5" :
        feedback === "wrong" ? "border-red-500 bg-red-500/5" : "border-border")}>
        {selected.length === 0 && <span className="text-muted-foreground text-sm">Click words below to build your sentence...</span>}
        {selected.map((word, i) => (
          <motion.button key={`s-${i}`} layout initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            onClick={() => handleWordClick(word, true)}
            disabled={!!feedback}
            className="px-4 py-2 bg-primary text-primary-foreground font-bold text-sm border-2 border-primary">
            {word}
          </motion.button>
        ))}
      </div>

      {/* Available words */}
      <div className="flex flex-wrap gap-2 justify-center">
        {available.map((word, i) => (
          <motion.button key={`a-${i}`} layout whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={() => handleWordClick(word, false)}
            disabled={!!feedback}
            className="px-4 py-2 bg-card border-2 border-border font-bold text-sm hover:border-primary transition-colors">
            {word}
          </motion.button>
        ))}
      </div>

      {/* Feedback */}
      {feedback && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className={cn("p-4 border text-sm space-y-2",
            feedback === "correct" ? "bg-green-500/10 border-green-500/20 text-green-700 dark:text-green-400" :
            "bg-red-500/10 border-red-500/20 text-red-700 dark:text-red-400")}>
          <p className="font-bold">{feedback === "correct" ? "✅ Richtig!" : "❌ Not quite!"}</p>
          {feedback === "wrong" && <p className="font-mono">{challenge.correctOrder.join(" ")}</p>}
        </motion.div>
      )}

      {/* Actions */}
      <div className="flex gap-3">
        {!feedback && selected.length > 0 && (
          <Button onClick={handleCheck} className="flex-1 font-bold">
            <CheckCircle2 className="w-4 h-4 mr-2" /> Check
          </Button>
        )}
        {feedback && idx + 1 < challenges.length && (
          <Button onClick={handleNext} className="flex-1 font-bold">Next →</Button>
        )}
      </div>
    </div>
  );
}

// ── Conjugation Race Component ───────────────────────────
function ConjugationGame({ level, onBack }: { level: string; onBack: () => void }) {
  const challenges = useMemo(() => {
    const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
    return conjugationChallenges
      .filter(c => levels.indexOf(c.level) <= levels.indexOf(level))
      .sort(() => Math.random() - 0.5);
  }, [level]);

  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);

  const challenge = challenges[idx];
  const pronouns = challenge ? Object.keys(challenge.conjugations) : [];

  const handleCheck = () => {
    let correct = 0;
    for (const pronoun of pronouns) {
      if (answers[pronoun]?.trim().toLowerCase() === challenge.conjugations[pronoun].toLowerCase()) {
        correct++;
      }
    }
    setTotalCorrect(t => t + correct);
    setScore(s => s + (correct === pronouns.length ? 1 : 0));
    setShowResults(true);
  };

  const handleNext = () => {
    if (idx + 1 < challenges.length) {
      setIdx(i => i + 1);
      setAnswers({});
      setShowResults(false);
    }
  };

  if (!challenge || idx >= challenges.length) {
    return (
      <div className="max-w-md mx-auto text-center space-y-6 py-12">
        <div className="text-6xl">⚡</div>
        <h2 className="text-3xl font-black">{score}/{challenges.length} perfect</h2>
        <p className="text-muted-foreground">{totalCorrect} total correct conjugations</p>
        <Button onClick={onBack} className="font-bold"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Games</Button>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onBack} className="font-bold"><ArrowLeft className="w-4 h-4 mr-2" /> Back</Button>
        <span className="text-sm font-mono">{idx + 1}/{challenges.length}</span>
      </div>

      <div className="bg-card border-2 border-border p-6 text-center space-y-2">
        <p className="text-3xl font-black">{challenge.verb}</p>
        <p className="text-muted-foreground">{challenge.meaning}</p>
        <span className="inline-block px-3 py-1 bg-muted text-xs font-bold uppercase">{challenge.tense}</span>
      </div>

      <div className="space-y-3">
        {pronouns.map(pronoun => {
          const isCorrect = showResults && answers[pronoun]?.trim().toLowerCase() === challenge.conjugations[pronoun].toLowerCase();
          const isWrong = showResults && !isCorrect;
          return (
            <div key={pronoun} className="flex items-center gap-3">
              <span className="w-20 text-right font-bold text-sm shrink-0">{pronoun}</span>
              <input
                type="text"
                value={answers[pronoun] || ""}
                onChange={e => setAnswers(a => ({ ...a, [pronoun]: e.target.value }))}
                disabled={showResults}
                className={cn("flex-1 px-4 py-2 bg-card border-2 text-sm font-mono focus:outline-none transition-colors",
                  isCorrect ? "border-green-500 bg-green-500/5" :
                  isWrong ? "border-red-500 bg-red-500/5" : "border-border focus:border-primary")}
                placeholder="..."
              />
              {showResults && isCorrect && <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />}
              {showResults && isWrong && (
                <div className="shrink-0 flex items-center gap-1">
                  <XCircle className="w-4 h-4 text-red-500" />
                  <span className="text-xs text-red-500 font-bold">{challenge.conjugations[pronoun]}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!showResults ? (
        <Button onClick={handleCheck} className="w-full font-bold"
          disabled={Object.keys(answers).length < pronouns.length}>
          <CheckCircle2 className="w-4 h-4 mr-2" /> Check All
        </Button>
      ) : idx + 1 < challenges.length ? (
        <Button onClick={handleNext} className="w-full font-bold">Next Verb →</Button>
      ) : (
        <Button onClick={onBack} className="w-full font-bold"><Trophy className="w-4 h-4 mr-2" /> See Results</Button>
      )}
    </div>
  );
}

// ── Main Games Hub ───────────────────────────────────────
export default function GamesPage() {
  const { level: storedLevel } = useProgressStore();
  const [activeGame, setActiveGame] = useState<GameType | null>(null);
  const [selectedLevel, setSelectedLevel] = useState(storedLevel || "A1");
  const [showLevelPicker, setShowLevelPicker] = useState(false);

  const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];

  if (activeGame === "gender") return <div className="flex-1 p-6 md:p-10"><GenderGame level={selectedLevel} onBack={() => setActiveGame(null)} /></div>;
  if (activeGame === "sentence") return <div className="flex-1 p-6 md:p-10"><SentenceGame level={selectedLevel} onBack={() => setActiveGame(null)} /></div>;
  if (activeGame === "conjugation") return <div className="flex-1 p-6 md:p-10"><ConjugationGame level={selectedLevel} onBack={() => setActiveGame(null)} /></div>;

  return (
    <div className="flex-1 p-6 md:p-10 max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight flex items-center gap-3">
          <Gamepad2 className="w-8 h-8 text-primary" /> Sprachspiele
        </h1>
        <p className="text-muted-foreground mt-2">Learn German grammar through interactive games</p>
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

      {/* Game Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {GAMES.map(game => (
          <motion.button key={game.id} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            onClick={() => setActiveGame(game.id)}
            className={cn("text-left p-8 bg-card border-2 transition-all space-y-4", game.color)}>
            <div className="text-5xl">{game.icon}</div>
            <div>
              <h3 className="text-xl font-black">{game.title}</h3>
              <p className="text-sm text-muted-foreground font-medium">{game.titleDe}</p>
            </div>
            <p className="text-sm text-muted-foreground">{game.description}</p>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, Volume2, Trophy, ArrowRight, RotateCcw, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PronunciationDrill } from "@/components/PronunciationDrill";
import { dictationSentences } from "@/data/listening-data";
import { tongueTwisters, type TongueTwister } from "@/data/tongue-twisters";
import { useProgressStore } from "@/store/useProgressStore";
import { speakGermanNeural } from "@/lib/tts";
import { useSpeechRecognition, comparePronunciation } from "@/hooks/useSpeechRecognition";

type Mode = "practice" | "twisters" | "challenge";
const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
const DIFFICULTIES = ["easy", "medium", "hard"] as const;

export default function SpeakPage() {
  const { level: storedLevel } = useProgressStore();
  const [mode, setMode] = useState<Mode>("practice");
  const [filterLevel, setFilterLevel] = useState(storedLevel || "A1");

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-8">
      {/* Header */}
      <header className="mb-8 pb-4 border-b-4 border-foreground">
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter flex items-center gap-3">
          <Mic className="w-8 h-8 md:w-10 md:h-10" /> Speaking Studio
        </h1>
        <p className="font-mono text-muted-foreground text-sm uppercase tracking-widest mt-1">
          Speak German. Get Scored. Improve.
        </p>
      </header>

      {/* Mode tabs */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="flex border-2 border-foreground">
          <button
            onClick={() => setMode("practice")}
            className={cn("px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors",
              mode === "practice" ? "bg-foreground text-background" : "hover:bg-foreground/10"
            )}
          >
            🎯 Practice
          </button>
          <button
            onClick={() => setMode("twisters")}
            className={cn("px-4 py-2 font-mono text-xs uppercase tracking-widest border-l-2 border-foreground transition-colors",
              mode === "twisters" ? "bg-foreground text-background" : "hover:bg-foreground/10"
            )}
          >
            🌀 Tongue Twisters
          </button>
          <button
            onClick={() => setMode("challenge")}
            className={cn("px-4 py-2 font-mono text-xs uppercase tracking-widest border-l-2 border-foreground transition-colors",
              mode === "challenge" ? "bg-foreground text-background" : "hover:bg-foreground/10"
            )}
          >
            ⚡ Speed Challenge
          </button>
        </div>

        {mode === "practice" && (
          <div className="flex border-2 border-foreground ml-auto">
            {LEVELS.map(l => (
              <button
                key={l}
                onClick={() => setFilterLevel(l)}
                className={cn("px-3 py-2 font-mono text-xs tracking-widest transition-colors",
                  filterLevel === l ? "bg-foreground text-background" : "hover:bg-foreground/10",
                  l !== "A1" && "border-l-2 border-foreground"
                )}
              >
                {l}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {mode === "practice" && (
          <motion.div key="practice" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <PracticeMode level={filterLevel} />
          </motion.div>
        )}
        {mode === "twisters" && (
          <motion.div key="twisters" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <TwisterMode />
          </motion.div>
        )}
        {mode === "challenge" && (
          <motion.div key="challenge" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <ChallengeMode />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Practice Mode ──────────────────────────────────────────
function PracticeMode({ level }: { level: string }) {
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
        <p className="text-xl font-bold mb-2">No sentences available for {level}</p>
        <p className="text-sm">Try another level.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold">Pronunciation Practice</h2>
        <p className="text-sm text-muted-foreground">Read each sentence aloud. We compare your pronunciation word-by-word.</p>
      </div>
      <PronunciationDrill sentences={sentences} />
    </div>
  );
}

// ── Tongue Twister Mode ────────────────────────────────────
function TwisterMode() {
  const [filterDifficulty, setFilterDifficulty] = useState<typeof DIFFICULTIES[number] | "all">("all");
  const [activeTwister, setActiveTwister] = useState<TongueTwister | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const filtered = useMemo(() =>
    filterDifficulty === "all"
      ? tongueTwisters
      : tongueTwisters.filter(t => t.difficulty === filterDifficulty),
    [filterDifficulty]
  );

  const playTwister = async (text: string) => {
    if (isSpeaking) return;
    setIsSpeaking(true);
    try { await speakGermanNeural(text, { rate: "0.75" }); } catch { /* fallback */ }
    setIsSpeaking(false);
  };

  if (activeTwister) {
    return (
      <TwisterDrill
        twister={activeTwister}
        onBack={() => setActiveTwister(null)}
      />
    );
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Zungenbrecher</h2>
          <p className="text-sm text-muted-foreground">German tongue twisters to train tricky sounds.</p>
        </div>
        <div className="flex border-2 border-foreground">
          {(["all", ...DIFFICULTIES] as const).map(d => (
            <button
              key={d}
              onClick={() => setFilterDifficulty(d as typeof filterDifficulty)}
              className={cn("px-3 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors",
                filterDifficulty === d ? "bg-foreground text-background" : "hover:bg-foreground/10",
                d !== "all" && "border-l-2 border-foreground"
              )}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map(t => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-2 border-foreground p-4 hover:bg-foreground/5 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className={cn(
                    "px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest border",
                    t.difficulty === "easy" ? "border-green-500 text-green-500" :
                    t.difficulty === "medium" ? "border-amber-500 text-amber-500" :
                    "border-red-500 text-red-500"
                  )}>
                    {t.difficulty}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">
                    {t.targetSounds.join(" / ")}
                  </span>
                </div>
                <p className="font-bold text-sm md:text-base">{t.text}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.translation}</p>
                <p className="text-xs text-amber-500 mt-1">💡 {t.tip}</p>
              </div>
              <div className="flex flex-col gap-2 shrink-0">
                <button
                  onClick={() => playTwister(t.text)}
                  disabled={isSpeaking}
                  className="p-2 border-2 border-foreground hover:bg-foreground hover:text-background transition-colors disabled:opacity-50"
                >
                  <Volume2 size={16} />
                </button>
                <button
                  onClick={() => setActiveTwister(t)}
                  className="p-2 border-2 border-foreground hover:bg-foreground hover:text-background transition-colors"
                >
                  <Mic size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ── Individual Twister Drill ───────────────────────────────
function TwisterDrill({ twister, onBack }: { twister: TongueTwister; onBack: () => void }) {
  const sentences = useMemo(() => [{
    text: twister.text,
    translation: twister.translation,
    level: twister.difficulty === "easy" ? "A2" : twister.difficulty === "medium" ? "B1" : "C1",
  }], [twister]);

  return (
    <div>
      <button onClick={onBack} className="mb-4 font-mono text-xs uppercase text-muted-foreground hover:text-foreground">
        ← Back to list
      </button>
      <div className="border-2 border-amber-500/30 bg-amber-500/5 p-4 mb-6">
        <p className="text-xs font-mono text-amber-500 uppercase mb-1">Target Sounds</p>
        <div className="flex gap-2">
          {twister.targetSounds.map(s => (
            <span key={s} className="px-2 py-1 border border-amber-500/30 font-mono text-sm text-amber-400">{s}</span>
          ))}
        </div>
        <p className="text-sm mt-2 text-amber-500/80">💡 {twister.tip}</p>
      </div>
      <PronunciationDrill sentences={sentences} />
    </div>
  );
}

// ── Speed Challenge Mode ───────────────────────────────────
function ChallengeMode() {
  const [started, setStarted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [scores, setScores] = useState<{ text: string; score: number; time: number }[]>([]);
  const [startTime, setStartTime] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const { status, transcript, startListening, stopListening, isSupported } = useSpeechRecognition();

  const challengeSentences = useMemo(() =>
    dictationSentences
      .filter(s => ["A1", "A2", "B1"].includes(s.level))
      .sort(() => Math.random() - 0.5)
      .slice(0, 5),
    []
  );

  const current = challengeSentences[currentIdx];
  const isDone = currentIdx >= challengeSentences.length;

  const handleStart = () => {
    setStarted(true);
    setStartTime(Date.now());
  };

  const handleListen = async () => {
    if (!current || isSpeaking) return;
    setIsSpeaking(true);
    try { await speakGermanNeural(current.text, { rate: "0.9" }); } catch { /* */ }
    setIsSpeaking(false);
  };

  const handleRecord = () => {
    if (status === "listening") {
      stopListening();
    } else {
      setStartTime(Date.now());
      startListening();
    }
  };

  // Process result
  if (status === "done" && transcript && !isDone) {
    const comparison = comparePronunciation(transcript, current.text);
    const elapsed = Math.round((Date.now() - startTime) / 1000);
    setScores(prev => [...prev, { text: current.text, score: comparison.score, time: elapsed }]);
    setCurrentIdx(prev => prev + 1);
  }

  if (!isSupported) {
    return (
      <div className="text-center p-8 border-2 border-border">
        <p className="text-muted-foreground">Speech recognition is not supported in this browser.</p>
        <p className="text-sm text-muted-foreground mt-2">Please use Chrome or Edge.</p>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="text-center py-16">
        <Zap size={48} className="mx-auto mb-4 text-amber-500" />
        <h2 className="text-2xl font-black mb-2">Speed Challenge</h2>
        <p className="text-muted-foreground mb-6">5 sentences. Say them as fast and accurately as you can.</p>
        <Button onClick={handleStart} className="border-2 border-foreground font-mono text-sm uppercase px-8 py-3">
          Start Challenge
        </Button>
      </div>
    );
  }

  if (isDone) {
    const avgScore = scores.length > 0 ? Math.round(scores.reduce((s, r) => s + r.score, 0) / scores.length) : 0;
    const totalTime = scores.reduce((s, r) => s + r.time, 0);

    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        <div className="border-2 border-foreground p-6 text-center">
          <p className="text-5xl font-black mb-1">{avgScore}%</p>
          <p className="font-mono text-sm uppercase text-muted-foreground">Average Score</p>
          <p className="font-mono text-xs text-muted-foreground mt-1">Total time: {totalTime}s</p>
        </div>
        <div className="space-y-2">
          {scores.map((r, i) => (
            <div key={i} className="border-2 border-border p-3 flex items-center justify-between">
              <p className="font-bold text-sm flex-1">{r.text}</p>
              <div className="flex items-center gap-3 shrink-0">
                <span className="font-mono text-xs text-muted-foreground">{r.time}s</span>
                <span className={cn("font-mono font-bold",
                  r.score >= 80 ? "text-green-500" : r.score >= 50 ? "text-amber-500" : "text-red-500"
                )}>
                  {r.score}%
                </span>
              </div>
            </div>
          ))}
        </div>
        <Button
          onClick={() => { setStarted(false); setCurrentIdx(0); setScores([]); }}
          className="w-full border-2 border-foreground font-mono text-sm uppercase gap-2"
        >
          <RotateCcw size={14} /> Try Again
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
        <span>{currentIdx + 1} / {challengeSentences.length}</span>
        <span className="px-2 py-0.5 border border-border">{current.level}</span>
      </div>

      <div className="border-2 border-foreground p-6 md:p-8 text-center">
        <p className="text-2xl md:text-3xl font-black mb-3">{current.text}</p>
        <p className="text-sm text-muted-foreground">{current.translation}</p>
        <button
          onClick={handleListen}
          disabled={isSpeaking}
          className="mt-4 mx-auto flex items-center gap-2 text-sm font-mono text-primary hover:underline disabled:opacity-50"
        >
          <Volume2 size={16} /> Listen
        </button>
      </div>

      <div className="flex flex-col items-center gap-4">
        <button
          onClick={handleRecord}
          className={cn(
            "w-20 h-20 rounded-full border-4 flex items-center justify-center transition-all",
            status === "listening"
              ? "border-red-500 bg-red-500/10 animate-pulse"
              : "border-foreground hover:bg-foreground hover:text-background"
          )}
        >
          <Mic size={32} />
        </button>
        <p className="font-mono text-xs text-muted-foreground uppercase">
          {status === "listening" ? "Listening... Tap to stop" : "Tap to speak"}
        </p>
      </div>
    </div>
  );
}

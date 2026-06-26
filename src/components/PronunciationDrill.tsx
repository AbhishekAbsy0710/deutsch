"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, Volume2, RotateCcw, Check, X, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSpeechRecognition, comparePronunciation } from "@/hooks/useSpeechRecognition";
import { speakGermanNeural } from "@/lib/tts";
import { germanPhonemes, type PhonemeGuide } from "@/data/german-phonetics";

interface PronunciationDrillProps {
  sentences: { text: string; translation: string; level: string }[];
  onComplete?: (results: { text: string; score: number }[]) => void;
}

export function PronunciationDrill({ sentences, onComplete }: PronunciationDrillProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<{ text: string; score: number; feedback: string; spoken: string }[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showIPA, setShowIPA] = useState(false);

  const { status, transcript, confidence, startListening, stopListening, isSupported } = useSpeechRecognition();

  const current = sentences[currentIndex];
  const isDone = currentIndex >= sentences.length;

  // Detect which phonemes are present in the current sentence
  const relevantPhonemes = useMemo(() => {
    if (!current) return [];
    const text = current.text.toLowerCase();
    const found: PhonemeGuide[] = [];
    const checks: [string, RegExp][] = [
      ["ü (long)", /ü/],
      ["ö (long)", /ö/],
      ["ä (long)", /ä/],
      ["ch (ich-Laut)", /(?:ich|lich|icht|ech|eich|euch|ölch|ülch|ilch)/],
      ["ch (ach-Laut)", /(?:ach|och|uch|auch|auch)/],
      ["r (uvular)", /^r|\br/],
      ["r (vocalic -er)", /er\b|er$/],
      ["z / ts", /z/],
      ["sch", /sch/],
      ["ß (Eszett)", /ß/],
      ["w", /\bw/],
    ];
    for (const [sound, rx] of checks) {
      if (rx.test(text)) {
        const p = germanPhonemes.find(g => g.sound === sound);
        if (p) found.push(p);
      }
    }
    return found;
  }, [current]);

  const playTarget = useCallback(async () => {
    if (!current || isSpeaking) return;
    setIsSpeaking(true);
    try {
      await speakGermanNeural(current.text, { rate: "0.8" });
    } catch { /* fallback handled */ }
    setIsSpeaking(false);
  }, [current, isSpeaking]);

  // Process result when transcript changes
  const handleResult = useCallback(() => {
    if (!transcript || !current) return;
    const comparison = comparePronunciation(transcript, current.text);
    setResults(prev => [...prev, {
      text: current.text,
      score: comparison.score,
      feedback: comparison.feedback,
      spoken: transcript,
    }]);
    setShowResult(true);
  }, [transcript, current]);

  // When speech recognition completes, process the result
  if (status === "done" && transcript && !showResult) {
    handleResult();
  }

  const handleNext = () => {
    setShowResult(false);
    if (currentIndex + 1 >= sentences.length) {
      onComplete?.(results.map(r => ({ text: r.text, score: r.score })));
      setCurrentIndex(currentIndex + 1); // triggers isDone
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleRetry = () => {
    setShowResult(false);
    setResults(prev => prev.slice(0, -1)); // Remove last result
  };

  if (!isSupported) {
    return (
      <div className="text-center p-8 border-2 border-border">
        <p className="text-muted-foreground">Speech recognition is not supported in this browser.</p>
        <p className="text-sm text-muted-foreground mt-2">Please use Chrome or Edge.</p>
      </div>
    );
  }

  if (isDone) {
    const avgScore = results.length > 0 ? Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length) : 0;
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        <div className="border-2 border-foreground p-6 text-center">
          <p className="text-5xl font-black mb-2">{avgScore}%</p>
          <p className="font-mono text-sm uppercase text-muted-foreground">Average Pronunciation Score</p>
        </div>
        <div className="space-y-2">
          {results.map((r, i) => (
            <div key={i} className="border-2 border-border p-3 flex items-center justify-between">
              <div>
                <p className="font-bold text-sm">{r.text}</p>
                <p className="text-xs text-muted-foreground">You said: &quot;{r.spoken}&quot;</p>
              </div>
              <span className={cn("font-mono font-bold text-lg", r.score >= 80 ? "text-green-500" : r.score >= 50 ? "text-amber-500" : "text-red-500")}>
                {r.score}%
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
        <span>{currentIndex + 1} / {sentences.length}</span>
        <span className="px-2 py-0.5 border border-border">{current.level}</span>
      </div>

      {/* Target sentence */}
      <div className="border-2 border-foreground p-6 md:p-8 text-center">
        <p className="text-2xl md:text-3xl font-black mb-3">{current.text}</p>
        <p className="text-sm text-muted-foreground">{current.translation}</p>

        <button
          onClick={playTarget}
          disabled={isSpeaking}
          className="mt-4 mx-auto flex items-center gap-2 text-sm font-mono text-primary hover:underline disabled:opacity-50"
        >
          <Volume2 size={16} /> Listen
        </button>

        {relevantPhonemes.length > 0 && (
          <button
            onClick={() => setShowIPA(!showIPA)}
            className="mt-2 mx-auto flex items-center gap-2 text-sm font-mono text-amber-500 hover:underline"
          >
            <BookOpen size={16} /> {showIPA ? "Hide" : "Show"} Pronunciation Guide
          </button>
        )}
      </div>

      {/* IPA Guide Panel */}
      <AnimatePresence>
        {showIPA && relevantPhonemes.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-2 border-amber-500/30 bg-amber-500/5 p-4 space-y-3 overflow-hidden"
          >
            <p className="text-xs font-mono uppercase text-amber-500 font-bold">🗣 Pronunciation Tips</p>
            {relevantPhonemes.map((p) => (
              <div key={p.sound} className="border-b border-amber-500/20 pb-2 last:border-0 last:pb-0">
                <div className="flex items-baseline gap-2">
                  <span className="font-bold text-amber-400">{p.sound}</span>
                  <span className="font-mono text-xs text-amber-500/80">{p.ipa}</span>
                </div>
                <p className="text-sm mt-1">👄 {p.mouthTip}</p>
                <p className="text-xs text-red-400 mt-0.5">⚠ {p.commonMistake}</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {p.examples.map(ex => (
                    <span key={ex.word} className="text-xs font-mono px-1.5 py-0.5 bg-amber-500/10 border border-amber-500/20">
                      {ex.word} <span className="text-amber-500/60">{ex.ipa}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mic + result */}
      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div key="mic" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4"
          >
            <button
              onClick={status === "listening" ? stopListening : startListening}
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
          </motion.div>
        ) : (
          <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Score */}
            {results.length > 0 && (() => {
              const lastResult = results[results.length - 1];
              return (
                <div className={cn(
                  "border-2 p-4",
                  lastResult.score >= 80 ? "border-green-500 bg-green-500/10" :
                  lastResult.score >= 50 ? "border-amber-500 bg-amber-500/10" :
                  "border-red-500 bg-red-500/10"
                )}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="flex items-center gap-2 font-bold">
                      {lastResult.score >= 80 ? <Check size={18} className="text-green-500" /> : <X size={18} className="text-red-500" />}
                      {lastResult.score}% Match
                    </span>
                    {confidence > 0 && (
                      <span className="text-xs font-mono text-muted-foreground">
                        Confidence: {confidence}%
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{lastResult.feedback}</p>

                  {/* Word-level comparison */}
                  <div className="mt-3 flex flex-wrap gap-1">
                    {current.text.split(/\s+/).map((word, wi) => {
                      const spokenWords = lastResult.spoken.toLowerCase().replace(/[.,!?]/g, "").split(/\s+/);
                      const match = spokenWords[wi]?.toLowerCase() === word.toLowerCase().replace(/[.,!?]/g, "");
                      return (
                        <span key={wi} className={cn("px-1.5 py-0.5 font-mono text-sm border", match ? "border-green-500 text-green-500" : "border-red-500 text-red-500")}>
                          {word}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })()}

            <div className="flex gap-2">
              <Button variant="outline" onClick={handleRetry} className="flex-1 gap-2 border-2 font-mono text-xs uppercase">
                <RotateCcw size={14} /> Retry
              </Button>
              <Button onClick={handleNext} className="flex-1 gap-2 border-2 font-mono text-xs uppercase">
                Next <ArrowRight size={14} />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

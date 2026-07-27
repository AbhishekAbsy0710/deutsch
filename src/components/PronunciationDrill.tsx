"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, Volume2, RotateCcw, Check, X, ArrowRight, BookOpen, ChevronDown, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePronunciation, type WordResult } from "@/hooks/usePronunciation";
import { useSpeechRecognition, comparePronunciation } from "@/hooks/useSpeechRecognition";
import { speakGermanNeural } from "@/lib/tts";
import { germanPhonemes, type PhonemeGuide } from "@/data/german-phonetics";

interface PronunciationDrillProps {
  sentences: { text: string; translation: string; level: string }[];
  onComplete?: (results: { text: string; score: number }[]) => void;
}

/** Map IPA phonemes to practical tips for English speakers */
const PHONEME_TIPS: Record<string, string> = {
  "yː": "Round your lips like 'oo' but say 'ee' — German ü",
  "y": "Short version of ü — quick rounded 'ee'",
  "øː": "Round your lips like 'oh' but say 'ay' — German ö",
  "œ": "Short version of ö — quick rounded 'eh'",
  "ɛː": "Like the 'a' in 'care' — German ä",
  "ç": "Like a gentle 'sh' through a smile — ich-Laut",
  "x": "Like clearing your throat gently — ach-Laut",
  "ʁ": "Gargle lightly in the back of your throat — German r",
  "ts": "Like 'ts' in 'cats' — German z",
  "ʃ": "Like 'sh' in 'ship' — German sch",
  "pf": "Say 'p' and 'f' together quickly",
  "ŋ": "Like 'ng' in 'sing'",
  "aɪ": "Like 'eye' — German ei",
  "aʊ": "Like 'ow' in 'cow' — German au",
  "ɔʏ": "Like 'oy' in 'boy' — German eu/äu",
};

export function PronunciationDrill({ sentences, onComplete }: PronunciationDrillProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<{ text: string; score: number; words: WordResult[]; isFallback: boolean; spoken?: string; feedback?: string }[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showIPA, setShowIPA] = useState(false);
  const [expandedWord, setExpandedWord] = useState<number | null>(null);

  // Azure pronunciation (primary)
  const pron = usePronunciation();
  // Browser SpeechRecognition (fallback for unsupported browsers)
  const speechRec = useSpeechRecognition();

  const useAzure = pron.isSupported;
  const current = sentences[currentIndex];
  const isDone = currentIndex >= sentences.length;

  // Detect relevant phonemes for IPA guide
  const relevantPhonemes = useMemo(() => {
    if (!current) return [];
    const text = current.text.toLowerCase();
    const found: PhonemeGuide[] = [];
    const checks: [string, RegExp][] = [
      ["ü (long)", /ü/],
      ["ö (long)", /ö/],
      ["ä (long)", /ä/],
      ["ch (ich-Laut)", /(?:ich|lich|icht|ech|eich|euch|ölch|ülch|ilch)/],
      ["ch (ach-Laut)", /(?:ach|och|uch|auch)/],
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

  // Handle Azure result
  useEffect(() => {
    if (pron.result && !showResult && !pron.isScoring) {
      const score = pron.result.overall.pronunciation || pron.result.overall.accuracy;
      setResults(prev => [...prev, {
        text: current?.text || "",
        score: Math.round(score),
        words: pron.result!.words,
        isFallback: pron.result!.isFallback,
      }]);
      setShowResult(true);
      setExpandedWord(null);
    }
  }, [pron.result, pron.isScoring, showResult, current]);

  // Handle browser SpeechRecognition fallback
  useEffect(() => {
    if (!useAzure && speechRec.status === "done" && speechRec.transcript && !showResult) {
      const comparison = comparePronunciation(speechRec.transcript, current?.text || "");
      setResults(prev => [...prev, {
        text: current?.text || "",
        score: comparison.score,
        words: [],
        isFallback: true,
        spoken: speechRec.transcript,
        feedback: comparison.feedback,
      }]);
      setShowResult(true);
    }
  }, [useAzure, speechRec.status, speechRec.transcript, showResult, current]);

  const handleMicClick = useCallback(() => {
    if (useAzure) {
      if (pron.isRecording) {
        pron.stopAndScore();
      } else {
        pron.startAssessment(current?.text || "");
      }
    } else {
      if (speechRec.status === "listening") {
        speechRec.stopListening();
      } else {
        speechRec.startListening();
      }
    }
  }, [useAzure, pron, speechRec, current]);

  const isListening = useAzure ? pron.isRecording : speechRec.status === "listening";

  const handleNext = () => {
    setShowResult(false);
    if (currentIndex + 1 >= sentences.length) {
      onComplete?.(results.map(r => ({ text: r.text, score: r.score })));
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleRetry = () => {
    setShowResult(false);
    setResults(prev => prev.slice(0, -1));
  };

  if (!pron.isSupported && !speechRec.isSupported) {
    return (
      <div className="text-center p-8 border-2 border-border">
        <p className="text-muted-foreground">Speech input is not supported in this browser.</p>
        <p className="text-sm text-muted-foreground mt-2">Please use Chrome, Edge, or Safari.</p>
      </div>
    );
  }

  if (isDone) {
    const avgScore = results.length > 0 ? Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length) : 0;
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        <div className="border-2 border-foreground p-6 text-center">
          <p className="text-3xl sm:text-5xl font-black mb-2">{avgScore}%</p>
          <p className="font-mono text-sm uppercase text-muted-foreground">Average Pronunciation Score</p>
        </div>
        <div className="space-y-2">
          {results.map((r, i) => (
            <div key={i} className="border-2 border-border p-3">
              <div className="flex items-center justify-between mb-2">
                <p className="font-bold text-sm">{r.text}</p>
                <span className={cn("font-mono font-bold text-lg", r.score >= 80 ? "text-green-500" : r.score >= 50 ? "text-amber-500" : "text-red-500")}>
                  {r.score}%
                </span>
              </div>
              {/* Per-word colored chips in summary */}
              {r.words.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {r.words.filter(w => w.error !== "Insertion").map((w, wi) => (
                    <span
                      key={wi}
                      className={cn(
                        "px-1.5 py-0.5 font-mono text-xs border",
                        w.error === "Omission" ? "border-red-500/50 text-red-400 line-through" :
                        w.accuracy >= 80 ? "border-green-500 text-green-500" :
                        w.accuracy >= 50 ? "border-amber-500 text-amber-500" :
                        "border-red-500 text-red-500"
                      )}
                    >
                      {w.word}
                    </span>
                  ))}
                </div>
              )}
              {r.spoken && (
                <p className="text-xs text-muted-foreground mt-1">You said: &quot;{r.spoken}&quot;</p>
              )}
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
        <div className="flex items-center gap-2">
          {useAzure && (
            <span className="px-1.5 py-0.5 bg-blue-500/10 border border-blue-500/30 text-blue-500 text-[10px]">
              AZURE AI
            </span>
          )}
          <span className="px-2 py-0.5 border border-border">{current.level}</span>
        </div>
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
            {/* Amplitude ring */}
            <div className="relative">
              {isListening && useAzure && (
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-red-500/40"
                  animate={{ scale: 1 + pron.amplitude * 0.8 }}
                  transition={{ duration: 0.1 }}
                />
              )}
              <button
                onClick={handleMicClick}
                disabled={pron.isScoring}
                className={cn(
                  "w-20 h-20 rounded-full border-4 flex items-center justify-center transition-all relative z-10",
                  pron.isScoring ? "border-muted bg-muted/10" :
                  isListening
                    ? "border-red-500 bg-red-500/10 animate-pulse"
                    : "border-foreground hover:bg-foreground hover:text-background"
                )}
              >
                {pron.isScoring ? <Loader2 size={32} className="animate-spin" /> : <Mic size={32} />}
              </button>
            </div>

            <div className="text-center">
              <p className="font-mono text-xs text-muted-foreground uppercase">
                {pron.isScoring ? "Analyzing pronunciation..." :
                 isListening ? `Listening... ${pron.duration}s — Tap to stop` :
                 "Tap to speak"}
              </p>
              {isListening && useAzure && (
                <div className="mt-2 h-1 w-32 mx-auto bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-red-500"
                    animate={{ width: `${pron.amplitude * 100}%` }}
                    transition={{ duration: 0.05 }}
                  />
                </div>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {results.length > 0 && (() => {
              const lastResult = results[results.length - 1];
              return (
                <div className={cn(
                  "border-2 p-4",
                  lastResult.score >= 80 ? "border-green-500 bg-green-500/10" :
                  lastResult.score >= 50 ? "border-amber-500 bg-amber-500/10" :
                  "border-red-500 bg-red-500/10"
                )}>
                  {/* Overall score */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="flex items-center gap-2 font-bold">
                      {lastResult.score >= 80 ? <Check size={18} className="text-green-500" /> : <X size={18} className="text-red-500" />}
                      {lastResult.score}% {lastResult.isFallback ? "Match" : "Pronunciation"}
                    </span>
                    {lastResult.isFallback && (
                      <span className="text-[10px] font-mono text-muted-foreground px-1.5 py-0.5 border border-muted">
                        BASIC MODE
                      </span>
                    )}
                  </div>

                  {/* Per-word colored chips (Azure) */}
                  {lastResult.words.length > 0 ? (
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-1.5">
                        {lastResult.words.filter(w => w.error !== "Insertion").map((w, wi) => (
                          <button
                            key={wi}
                            onClick={() => setExpandedWord(expandedWord === wi ? null : wi)}
                            className={cn(
                              "px-2 py-1 font-mono text-sm border-2 transition-all cursor-pointer",
                              w.error === "Omission" ? "border-red-500/50 text-red-400 line-through opacity-60" :
                              w.accuracy >= 80 ? "border-green-500 text-green-400 hover:bg-green-500/10" :
                              w.accuracy >= 50 ? "border-amber-500 text-amber-400 hover:bg-amber-500/10" :
                              "border-red-500 text-red-400 hover:bg-red-500/10",
                              expandedWord === wi && "ring-2 ring-offset-1 ring-offset-background"
                            )}
                          >
                            <span className="mr-1">{w.word}</span>
                            <span className="text-[10px] opacity-70">{w.accuracy}</span>
                            {w.phonemes.length > 0 && <ChevronDown size={10} className={cn("inline ml-0.5 transition-transform", expandedWord === wi && "rotate-180")} />}
                          </button>
                        ))}
                      </div>

                      {/* Expanded phoneme breakdown */}
                      <AnimatePresence>
                        {expandedWord !== null && (() => {
                          const w = lastResult.words.filter(w => w.error !== "Insertion")[expandedWord];
                          if (!w?.phonemes?.length) return null;
                          return (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="border border-border p-3 space-y-1.5 overflow-hidden"
                            >
                              <p className="text-xs font-mono uppercase text-muted-foreground font-bold">
                                Phoneme Breakdown — &quot;{w.word}&quot; ({w.accuracy}/100)
                              </p>
                              {w.phonemes.map((p, pi) => (
                                <div key={pi} className="flex items-center gap-3">
                                  <span className={cn(
                                    "font-mono text-sm w-10 text-right",
                                    p.accuracy >= 80 ? "text-green-500" : p.accuracy >= 50 ? "text-amber-500" : "text-red-500"
                                  )}>
                                    /{p.phoneme}/
                                  </span>
                                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                                    <div
                                      className={cn(
                                        "h-full rounded-full transition-all",
                                        p.accuracy >= 80 ? "bg-green-500" : p.accuracy >= 50 ? "bg-amber-500" : "bg-red-500"
                                      )}
                                      style={{ width: `${p.accuracy}%` }}
                                    />
                                  </div>
                                  <span className="font-mono text-xs w-8 text-right">{p.accuracy}</span>
                                  {p.accuracy < 70 && PHONEME_TIPS[p.phoneme] && (
                                    <span className="text-xs text-amber-400 max-w-[200px]">
                                      💡 {PHONEME_TIPS[p.phoneme]}
                                    </span>
                                  )}
                                </div>
                              ))}
                            </motion.div>
                          );
                        })()}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <>
                      {/* Fallback: text comparison */}
                      <p className="text-sm text-muted-foreground">{lastResult.feedback}</p>
                      {lastResult.spoken && (
                        <div className="mt-3 flex flex-wrap gap-1">
                          {current.text.split(/\s+/).map((word, wi) => {
                            const spokenWords = lastResult.spoken!.toLowerCase().replace(/[.,!?]/g, "").split(/\s+/);
                            const match = spokenWords[wi]?.toLowerCase() === word.toLowerCase().replace(/[.,!?]/g, "");
                            return (
                              <span key={wi} className={cn("px-1.5 py-0.5 font-mono text-sm border", match ? "border-green-500 text-green-500" : "border-red-500 text-red-500")}>
                                {word}
                              </span>
                            );
                          })}
                        </div>
                      )}
                    </>
                  )}
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

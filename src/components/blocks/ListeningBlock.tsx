"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Volume2, Check, X, RotateCcw, Gauge } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  phrase: string;
  translation: string;
  speed: "slow" | "normal";
};

export default function ListeningBlock({ phrase, translation, speed }: Props) {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [currentSpeed, setCurrentSpeed] = useState<"slow" | "normal">(speed === "slow" ? "slow" : "normal");

  const speak = useCallback((rate: number) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(phrase);
    u.lang = "de-DE";
    u.rate = rate;
    const voices = window.speechSynthesis.getVoices();
    const deVoice = voices.find(v => v.lang === "de-DE");
    if (deVoice) u.voice = deVoice;
    window.speechSynthesis.speak(u);
  }, [phrase]);

  const normalizeText = (t: string) => t.toLowerCase().trim()
    .replace(/[.,!?;:'"„"«»]/g, "")
    .replace(/\s+/g, " ");

  const isCorrect = normalizeText(input) === normalizeText(phrase);

  // Show diff between input and correct phrase
  const getDiff = () => {
    const correctWords = phrase.split(" ");
    const inputWords = input.trim().split(" ");

    return correctWords.map((word, i) => {
      const inputWord = inputWords[i] || "";
      const match = inputWord.toLowerCase() === word.toLowerCase();
      return { word, match, input: inputWord };
    });
  };

  return (
    <div className="border-4 border-foreground p-6 space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="font-black uppercase text-lg">🎧 Listening Exercise</h3>
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Dictation</span>
      </div>

      <div className="flex gap-3">
        <button onClick={() => { setCurrentSpeed("slow"); speak(0.6); }} className={cn("flex-1 border-2 py-3 flex items-center justify-center gap-2 font-mono text-sm font-bold uppercase transition-colors", currentSpeed === "slow" ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-foreground")}>
          <Gauge size={16} /> Slow
        </button>
        <button onClick={() => { setCurrentSpeed("normal"); speak(0.9); }} className={cn("flex-1 border-2 py-3 flex items-center justify-center gap-2 font-mono text-sm font-bold uppercase transition-colors", currentSpeed === "normal" ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-foreground")}>
          <Volume2 size={16} /> Normal
        </button>
      </div>

      <p className="text-center font-mono text-xs text-muted-foreground">Listen carefully, then type what you hear</p>

      <input
        type="text"
        value={input}
        onChange={(e) => { if (!submitted) setInput(e.target.value); }}
        disabled={submitted}
        onKeyDown={(e) => { if (e.key === "Enter" && input.trim()) setSubmitted(true); }}
        placeholder="Type what you heard..."
        className="w-full border-2 border-foreground px-4 py-3 font-mono text-lg bg-background outline-none focus:border-primary transition-colors disabled:opacity-70"
      />

      {!submitted ? (
        <button onClick={() => setSubmitted(true)} disabled={!input.trim()} className="w-full border-4 border-primary bg-primary text-primary-foreground py-3 font-black text-sm uppercase tracking-widest hover:opacity-90 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed">
          Check
        </button>
      ) : (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <div className={cn("border-2 p-4 flex items-start gap-3", isCorrect ? "border-green-500 bg-green-500/5" : "border-red-500 bg-red-500/5")}>
            {isCorrect ? <Check size={20} className="text-green-500 flex-shrink-0 mt-0.5" /> : <X size={20} className="text-red-500 flex-shrink-0 mt-0.5" />}
            <div>
              <p className="font-bold">{isCorrect ? "Perfekt! 🎉" : "Not quite — here's the correct version:"}</p>
              {!isCorrect && (
                <div className="mt-2 space-y-1">
                  <div className="flex flex-wrap gap-1">
                    {getDiff().map((d, i) => (
                      <span key={i} className={cn("font-mono text-sm px-1", d.match ? "text-green-600" : "text-red-600 font-bold underline")}>{d.word}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <button onClick={() => setShowTranslation(!showTranslation)} className="font-mono text-xs text-muted-foreground uppercase tracking-widest hover:text-primary transition-colors">
            {showTranslation ? "Hide translation" : "Show translation"}
          </button>
          {showTranslation && <p className="text-sm text-muted-foreground pl-4 border-l-2 border-primary">{translation}</p>}

          <button onClick={() => { setInput(""); setSubmitted(false); setShowTranslation(false); }} className="w-full border-2 border-foreground py-2 font-mono text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors flex items-center justify-center gap-2">
            <RotateCcw size={14} /> Try Again
          </button>
        </motion.div>
      )}
    </div>
  );
}

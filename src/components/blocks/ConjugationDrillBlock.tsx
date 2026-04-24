"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Volume2, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  verb: string;
  translation: string;
  tense: string;
  pronouns: string[];
  correctForms: string[];
  hint?: string;
};

export default function ConjugationDrillBlock({ verb, translation, tense, pronouns, correctForms, hint }: Props) {
  const [answers, setAnswers] = useState<string[]>(new Array(pronouns.length).fill(""));
  const [submitted, setSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const speak = (text: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "de-DE";
    u.rate = 0.85;
    const voices = window.speechSynthesis.getVoices();
    const deVoice = voices.find(v => v.lang === "de-DE");
    if (deVoice) u.voice = deVoice;
    window.speechSynthesis.speak(u);
  };

  const handleSubmit = () => setSubmitted(true);
  const handleReset = () => { setAnswers(new Array(pronouns.length).fill("")); setSubmitted(false); };

  const correct = submitted ? answers.filter((a, i) => a.toLowerCase().trim() === correctForms[i].toLowerCase()).length : 0;

  return (
    <div className="border-4 border-foreground p-6 space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-black uppercase">{verb}</h3>
          <p className="text-muted-foreground font-mono text-sm">{translation} — {tense}</p>
        </div>
        <button onClick={() => speak(verb)} className="border border-primary/30 p-2 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
          <Volume2 size={18} />
        </button>
      </div>

      {hint && (
        <div>
          <button onClick={() => setShowHint(!showHint)} className="font-mono text-xs text-muted-foreground uppercase tracking-widest hover:text-primary transition-colors">
            {showHint ? "Hide hint" : "Show hint 💡"}
          </button>
          {showHint && <p className="text-sm text-muted-foreground mt-1 pl-4 border-l-2 border-primary">{hint}</p>}
        </div>
      )}

      <div className="space-y-3">
        {pronouns.map((pronoun, i) => {
          const isCorrect = submitted && answers[i].toLowerCase().trim() === correctForms[i].toLowerCase();
          const isWrong = submitted && !isCorrect;

          return (
            <div key={pronoun} className="flex items-center gap-3">
              <span className="font-mono text-sm font-bold w-16 text-right uppercase">{pronoun}</span>
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={submitted && isWrong ? correctForms[i] : answers[i]}
                  onChange={(e) => {
                    if (submitted) return;
                    const newAnswers = [...answers];
                    newAnswers[i] = e.target.value;
                    setAnswers(newAnswers);
                  }}
                  disabled={submitted}
                  className={cn(
                    "w-full border-2 px-3 py-2 font-mono bg-background outline-none transition-colors",
                    submitted && isCorrect && "border-green-500 bg-green-500/5 text-green-700",
                    submitted && isWrong && "border-red-500 bg-red-500/5 text-red-700",
                    !submitted && "border-foreground focus:border-primary"
                  )}
                  placeholder="..."
                />
                {submitted && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2">
                    {isCorrect ? <Check size={16} className="text-green-500" /> : <X size={16} className="text-red-500" />}
                  </span>
                )}
              </div>
              {submitted && (
                <button onClick={() => speak(`${pronoun} ${correctForms[i]}`)} className="text-muted-foreground hover:text-primary transition-colors">
                  <Volume2 size={14} />
                </button>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex gap-3">
        {!submitted ? (
          <button onClick={handleSubmit} disabled={answers.some(a => !a.trim())} className="flex-1 border-4 border-primary bg-primary text-primary-foreground py-3 font-black text-sm uppercase tracking-widest hover:opacity-90 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed">
            Check Answers
          </button>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 space-y-3">
            <div className="text-center font-mono text-lg font-bold">
              {correct}/{pronouns.length} correct {correct === pronouns.length ? "🏆" : correct >= pronouns.length / 2 ? "👍" : "💪"}
            </div>
            <button onClick={handleReset} className="w-full border-2 border-foreground py-2 font-mono text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors flex items-center justify-center gap-2">
              <RotateCcw size={14} /> Try Again
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

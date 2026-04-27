"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { speakGermanNeural } from "@/lib/tts";

type Card = {
  word: string;
  phonetic: string;
  meaning: string;
  gender?: string;
  plural?: string;
  example: { de: string; en: string };
};

type Props = {
  cards: Card[];
  onComplete?: (results: { word: string; correct: boolean }[]) => void;
};

export default function FlashcardBlock({ cards, onComplete }: Props) {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [results, setResults] = useState<{ word: string; correct: boolean }[]>([]);
  const [done, setDone] = useState(false);

  const card = cards[idx];

  const speak = (text: string) => {
    speakGermanNeural(text);
  };

  const handleAnswer = (correct: boolean) => {
    const newResults = [...results, { word: card.word, correct }];
    setResults(newResults);
    setFlipped(false);

    if (idx >= cards.length - 1) {
      setDone(true);
      onComplete?.(newResults);
    } else {
      setIdx(idx + 1);
    }
  };

  if (done) {
    const correct = results.filter(r => r.correct).length;
    return (
      <div className="border-4 border-foreground p-8 text-center space-y-4">
        <div className="text-5xl">{correct === cards.length ? "🏆" : correct >= cards.length / 2 ? "👍" : "💪"}</div>
        <h3 className="text-2xl font-black uppercase">Flashcards Complete</h3>
        <p className="font-mono text-lg">{correct}/{cards.length} correct</p>
        <div className="flex gap-2 flex-wrap justify-center mt-4">
          {results.map((r, i) => (
            <span key={i} className={cn("px-2 py-1 font-mono text-xs border", r.correct ? "border-green-500 text-green-600 bg-green-500/10" : "border-red-500 text-red-600 bg-red-500/10")}>{r.word}</span>
          ))}
        </div>
        <button onClick={() => { setIdx(0); setResults([]); setDone(false); setFlipped(false); }} className="border-2 border-foreground px-4 py-2 font-mono text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors mt-4 flex items-center gap-2 mx-auto">
          <RotateCcw size={14} /> Retry
        </button>
      </div>
    );
  }

  const genderColor = card.gender === "der" ? "text-blue-500" : card.gender === "die" ? "text-pink-500" : card.gender === "das" ? "text-green-500" : "";

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Card {idx + 1}/{cards.length}</span>
        <div className="h-1.5 flex-1 mx-4 bg-secondary overflow-hidden">
          <div className="h-full bg-primary transition-all duration-300" style={{ width: `${((idx) / cards.length) * 100}%` }} />
        </div>
      </div>

      <motion.div
        className="relative cursor-pointer min-h-[280px] border-4 border-foreground"
        onClick={() => setFlipped(!flipped)}
        whileTap={{ scale: 0.98 }}
      >
        <AnimatePresence mode="wait">
          {!flipped ? (
            <motion.div key="front" initial={{ rotateY: 90 }} animate={{ rotateY: 0 }} exit={{ rotateY: -90 }} transition={{ duration: 0.25 }} className="p-8 flex flex-col items-center justify-center min-h-[280px] text-center">
              {card.gender && <span className={cn("font-mono text-sm font-bold uppercase mb-2", genderColor)}>{card.gender}</span>}
              <h2 className="text-4xl md:text-5xl font-black">{card.word}</h2>
              <p className="text-muted-foreground font-mono text-lg mt-2">/{card.phonetic}/</p>
              <button onClick={(e) => { e.stopPropagation(); speak(card.word); }} className="mt-4 border border-primary/30 px-3 py-1.5 flex items-center gap-2 text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-mono text-xs">
                <Volume2 size={14} /> Listen
              </button>
              <p className="font-mono text-xs text-muted-foreground mt-6 uppercase tracking-widest">Tap to flip</p>
            </motion.div>
          ) : (
            <motion.div key="back" initial={{ rotateY: 90 }} animate={{ rotateY: 0 }} exit={{ rotateY: -90 }} transition={{ duration: 0.25 }} className="p-8 flex flex-col items-center justify-center min-h-[280px] text-center bg-secondary/30">
              <p className="text-2xl font-bold">{card.meaning}</p>
              {card.plural && <p className="text-muted-foreground font-mono text-sm mt-1">Plural: {card.plural}</p>}
              <div className="border-t border-border mt-6 pt-4 w-full max-w-md">
                <p className="text-lg font-bold">{card.example.de}</p>
                <p className="text-muted-foreground text-sm mt-1">{card.example.en}</p>
              </div>
              <button onClick={(e) => { e.stopPropagation(); speak(card.example.de); }} className="mt-4 border border-primary/30 px-3 py-1.5 flex items-center gap-2 text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-mono text-xs">
                <Volume2 size={14} /> Listen to example
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {flipped && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-4">
          <button onClick={() => handleAnswer(false)} className="flex-1 border-4 border-red-500 text-red-600 py-4 font-black text-lg uppercase tracking-widest hover:bg-red-500 hover:text-white transition-colors">
            <ChevronLeft className="inline mr-2" size={20} /> Forgot
          </button>
          <button onClick={() => handleAnswer(true)} className="flex-1 border-4 border-green-500 text-green-600 py-4 font-black text-lg uppercase tracking-widest hover:bg-green-500 hover:text-white transition-colors">
            Knew it <ChevronRight className="inline ml-2" size={20} />
          </button>
        </motion.div>
      )}
    </div>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, ChevronLeft, ChevronRight, RotateCcw, Trophy, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { getBoxLabel, getBoxColor } from "@/lib/srs";
import Link from "next/link";

// Temporary local storage for flashcard reviews until Supabase is configured
type LocalReview = {
  word_id: string;
  word: string;
  phonetic: string;
  meaning: string;
  gender?: string;
  example: { de: string; en: string };
  box: number;
  next_review: string;
};

function getStoredReviews(): LocalReview[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem("flashcard_reviews") || "[]");
  } catch { return []; }
}

function saveReviews(reviews: LocalReview[]) {
  localStorage.setItem("flashcard_reviews", JSON.stringify(reviews));
}

// Sample vocabulary to seed the review system
const SEED_VOCABULARY: Omit<LocalReview, "box" | "next_review">[] = [
  { word_id: "hallo", word: "Hallo", phonetic: "ha-loh", meaning: "Hello", example: { de: "Hallo, wie geht es dir?", en: "Hello, how are you?" } },
  { word_id: "tschuess", word: "Tschüss", phonetic: "chüss", meaning: "Goodbye", example: { de: "Tschüss, bis morgen!", en: "Bye, see you tomorrow!" } },
  { word_id: "bitte", word: "Bitte", phonetic: "bi-tuh", meaning: "Please / You're welcome", example: { de: "Ein Wasser, bitte.", en: "A water, please." } },
  { word_id: "danke", word: "Danke", phonetic: "dan-kuh", meaning: "Thank you", example: { de: "Danke schön!", en: "Thank you very much!" } },
  { word_id: "ja", word: "Ja", phonetic: "yah", meaning: "Yes", example: { de: "Ja, ich verstehe.", en: "Yes, I understand." } },
  { word_id: "nein", word: "Nein", phonetic: "nine", meaning: "No", example: { de: "Nein, danke.", en: "No, thank you." } },
  { word_id: "gut", word: "Gut", phonetic: "goot", meaning: "Good", example: { de: "Mir geht es gut.", en: "I'm doing well." } },
  { word_id: "schlecht", word: "Schlecht", phonetic: "shlesht", meaning: "Bad", example: { de: "Das Wetter ist schlecht.", en: "The weather is bad." } },
  { word_id: "der_hund", word: "der Hund", phonetic: "hoont", meaning: "the dog", gender: "der", example: { de: "Der Hund ist groß.", en: "The dog is big." } },
  { word_id: "die_katze", word: "die Katze", phonetic: "ka-tsuh", meaning: "the cat", gender: "die", example: { de: "Die Katze schläft.", en: "The cat is sleeping." } },
  { word_id: "das_haus", word: "das Haus", phonetic: "house", meaning: "the house", gender: "das", example: { de: "Das Haus ist groß.", en: "The house is big." } },
  { word_id: "ich_bin", word: "Ich bin", phonetic: "ikh bin", meaning: "I am", example: { de: "Ich bin Student.", en: "I am a student." } },
  { word_id: "entschuldigung", word: "Entschuldigung", phonetic: "ent-shool-di-gung", meaning: "Excuse me / Sorry", example: { de: "Entschuldigung, wo ist der Bahnhof?", en: "Excuse me, where is the train station?" } },
  { word_id: "sprechen", word: "sprechen", phonetic: "shpre-khen", meaning: "to speak", example: { de: "Ich spreche Deutsch.", en: "I speak German." } },
  { word_id: "lernen", word: "lernen", phonetic: "ler-nen", meaning: "to learn", example: { de: "Ich lerne Deutsch.", en: "I am learning German." } },
];

export default function ReviewPage() {
  const [reviews, setReviews] = useState<LocalReview[]>([]);
  const [dueCards, setDueCards] = useState<LocalReview[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [sessionResults, setSessionResults] = useState<{ word: string; correct: boolean }[]>([]);
  const [sessionComplete, setSessionComplete] = useState(false);

  useEffect(() => {
    let stored = getStoredReviews();
    if (stored.length === 0) {
      // Seed with initial vocabulary
      const today = new Date().toISOString().split("T")[0];
      stored = SEED_VOCABULARY.map(v => ({ ...v, box: 1, next_review: today }));
      saveReviews(stored);
    }
    setReviews(stored);
    const today = new Date().toISOString().split("T")[0];
    setDueCards(stored.filter(r => r.next_review <= today));
  }, []);

  const speak = useCallback((text: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "de-DE";
    u.rate = 0.85;
    const voices = window.speechSynthesis.getVoices();
    const deVoice = voices.find(v => v.lang === "de-DE");
    if (deVoice) u.voice = deVoice;
    window.speechSynthesis.speak(u);
  }, []);

  const handleAnswer = (correct: boolean) => {
    const card = dueCards[currentIdx];
    const BOX_INTERVALS = [1, 3, 7, 14, 30];
    const newBox = correct ? Math.min(card.box + 1, 5) : 1;
    const interval = BOX_INTERVALS[newBox - 1];
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + interval);

    // Update reviews
    const updated = reviews.map(r => r.word_id === card.word_id ? { ...r, box: newBox, next_review: nextDate.toISOString().split("T")[0] } : r);
    setReviews(updated);
    saveReviews(updated);

    const newResults = [...sessionResults, { word: card.word, correct }];
    setSessionResults(newResults);
    setFlipped(false);

    if (currentIdx >= dueCards.length - 1) {
      setSessionComplete(true);
    } else {
      setCurrentIdx(currentIdx + 1);
    }
  };

  if (dueCards.length === 0) {
    const mastered = reviews.filter(r => r.box >= 4).length;
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <Trophy size={64} className="text-primary mb-6" />
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">All caught up!</h1>
        <p className="text-muted-foreground font-mono text-sm max-w-md">
          No cards due for review today. Come back tomorrow!
        </p>
        <div className="mt-8 grid grid-cols-3 gap-4 font-mono text-sm">
          <div className="border-2 border-foreground p-4 text-center">
            <div className="text-3xl font-black">{reviews.length}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest">Total Cards</div>
          </div>
          <div className="border-2 border-green-500 p-4 text-center">
            <div className="text-3xl font-black text-green-600">{mastered}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest">Mastered</div>
          </div>
          <div className="border-2 border-primary p-4 text-center">
            <div className="text-3xl font-black text-primary">{Math.round((mastered / Math.max(reviews.length, 1)) * 100)}%</div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest">Progress</div>
          </div>
        </div>
        <Link href="/learn" className="mt-8 border-2 border-foreground px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors flex items-center gap-2">
          <BookOpen size={16} /> Continue Learning
        </Link>
      </div>
    );
  }

  if (sessionComplete) {
    const correct = sessionResults.filter(r => r.correct).length;
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="text-6xl mb-6">{correct === sessionResults.length ? "🏆" : correct >= sessionResults.length / 2 ? "👍" : "💪"}</div>
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-2">Session Complete!</h1>
        <p className="font-mono text-2xl font-bold">{correct}/{sessionResults.length} correct</p>
        <div className="flex gap-2 flex-wrap justify-center mt-6 max-w-lg">
          {sessionResults.map((r, i) => (
            <span key={i} className={cn("px-2 py-1 font-mono text-xs border-2", r.correct ? "border-green-500 text-green-600" : "border-red-500 text-red-600")}>{r.word}</span>
          ))}
        </div>
        <div className="flex gap-4 mt-8">
          <button onClick={() => { setCurrentIdx(0); setSessionResults([]); setSessionComplete(false); setFlipped(false); const today = new Date().toISOString().split("T")[0]; setDueCards(reviews.filter(r => r.next_review <= today)); }} className="border-2 border-foreground px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors flex items-center gap-2">
            <RotateCcw size={14} /> Review Again
          </button>
          <Link href="/learn" className="border-2 border-primary bg-primary text-primary-foreground px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest hover:opacity-90 flex items-center gap-2">
            <BookOpen size={14} /> Continue Learning
          </Link>
        </div>
      </div>
    );
  }

  const card = dueCards[currentIdx];
  const genderColor = card.gender === "der" ? "text-blue-500" : card.gender === "die" ? "text-pink-500" : card.gender === "das" ? "text-green-500" : "";

  return (
    <div className="flex-1 flex flex-col px-6 md:px-16 py-12 max-w-3xl mx-auto w-full">
      <header className="mb-8 border-b-2 border-foreground pb-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-black uppercase tracking-tighter">📚 Daily Review</h1>
          <span className="font-mono text-sm text-muted-foreground">{currentIdx + 1} / {dueCards.length}</span>
        </div>
        <div className="h-2 bg-secondary overflow-hidden">
          <motion.div className="h-full bg-primary" animate={{ width: `${((currentIdx) / dueCards.length) * 100}%` }} transition={{ duration: 0.3 }} />
        </div>
        <div className="flex gap-4 mt-3 font-mono text-xs text-muted-foreground">
          <span style={{ color: getBoxColor(card.box) }}>● {getBoxLabel(card.box)}</span>
          <span>{dueCards.length - currentIdx} remaining</span>
        </div>
      </header>

      <motion.div
        className="flex-1 flex flex-col justify-center cursor-pointer"
        onClick={() => setFlipped(!flipped)}
        whileTap={{ scale: 0.98 }}
      >
        <div className="border-4 border-foreground min-h-[320px] relative">
          <AnimatePresence mode="wait">
            {!flipped ? (
              <motion.div key="front" initial={{ rotateY: 90 }} animate={{ rotateY: 0 }} exit={{ rotateY: -90 }} transition={{ duration: 0.25 }} className="p-10 flex flex-col items-center justify-center min-h-[320px] text-center">
                {card.gender && <span className={cn("font-mono text-sm font-bold uppercase mb-2", genderColor)}>{card.gender}</span>}
                <h2 className="text-5xl md:text-6xl font-black">{card.word}</h2>
                <p className="text-muted-foreground font-mono text-lg mt-3">/{card.phonetic}/</p>
                <button onClick={(e) => { e.stopPropagation(); speak(card.word); }} className="mt-6 border border-primary/30 px-4 py-2 flex items-center gap-2 text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-mono text-xs uppercase tracking-widest">
                  <Volume2 size={14} /> Listen
                </button>
                <p className="font-mono text-xs text-muted-foreground mt-8 uppercase tracking-widest">Tap to reveal</p>
              </motion.div>
            ) : (
              <motion.div key="back" initial={{ rotateY: 90 }} animate={{ rotateY: 0 }} exit={{ rotateY: -90 }} transition={{ duration: 0.25 }} className="p-10 flex flex-col items-center justify-center min-h-[320px] text-center bg-secondary/30">
                <p className="text-3xl font-bold">{card.meaning}</p>
                <div className="border-t border-border mt-8 pt-6 w-full max-w-md">
                  <p className="text-xl font-bold">{card.example.de}</p>
                  <p className="text-muted-foreground mt-2">{card.example.en}</p>
                </div>
                <button onClick={(e) => { e.stopPropagation(); speak(card.example.de); }} className="mt-6 border border-primary/30 px-4 py-2 flex items-center gap-2 text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-mono text-xs uppercase tracking-widest">
                  <Volume2 size={14} /> Listen
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {flipped && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-4 mt-6">
          <button onClick={() => handleAnswer(false)} className="flex-1 border-4 border-red-500 text-red-600 py-5 font-black text-lg uppercase tracking-widest hover:bg-red-500 hover:text-white transition-colors flex items-center justify-center gap-2">
            <ChevronLeft size={24} /> Forgot
          </button>
          <button onClick={() => handleAnswer(true)} className="flex-1 border-4 border-green-500 text-green-600 py-5 font-black text-lg uppercase tracking-widest hover:bg-green-500 hover:text-white transition-colors flex items-center justify-center gap-2">
            Knew it <ChevronRight size={24} />
          </button>
        </motion.div>
      )}
    </div>
  );
}

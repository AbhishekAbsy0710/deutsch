"use client";

import { useState, useMemo, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useProgressStore } from "@/store/useProgressStore";
import { lessonData } from "@/data/lessons";
import { speakGermanNeural } from "@/lib/tts";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Volume2, ArrowLeft, Brain, CheckCircle2, XCircle,
  Flame, Calendar, Trophy, BookOpen, Clock
} from "lucide-react";
import { cn } from "@/lib/utils";

// ── SM-2 quality ratings ─────────────────────────────────────
// 0 = complete blackout  1 = wrong  2 = wrong but remembered after
// 3 = correct with difficulty  4 = correct  5 = perfect
const RATING_LABELS: Record<number, { label: string; color: string; quality: number }> = {
  0: { label: "Again",    color: "border-red-500    bg-red-500/10    text-red-600",    quality: 1 },
  1: { label: "Hard",     color: "border-orange-500 bg-orange-500/10 text-orange-600", quality: 2 },
  2: { label: "Good",     color: "border-blue-500   bg-blue-500/10   text-blue-600",   quality: 4 },
  3: { label: "Easy",     color: "border-green-500  bg-green-500/10  text-green-600",  quality: 5 },
};

// ── Collect all flashcard items from ALL lessons ──────────────
interface ReviewCard {
  word: string;
  phonetic?: string;
  meaning: string;
  gender?: string;
  example?: { de: string; en: string };
  lessonId: string;
  lessonTitle: string;
  module: string;
}

function collectAllFlashcards(unlockedIds?: Set<string>): ReviewCard[] {
  const cards: ReviewCard[] = [];
  for (const [lessonId, lesson] of Object.entries(lessonData)) {
    // Skip locked lessons — only review what the user has actually unlocked
    if (unlockedIds && !unlockedIds.has(lessonId)) continue;
    for (const block of lesson.blocks) {
      if (block.type === "flashcard" && "cards" in block) {
        for (const card of block.cards) {
          cards.push({
            word:        card.word,
            phonetic:    card.phonetic,
            meaning:     card.meaning,
            gender:      (card as any).gender,
            example:     card.example,
            lessonId,
            lessonTitle: lesson.title,
            module:      lesson.module,
          });
        }
      }
    }
  }
  return cards;
}

// ── Determine which cards are due today ──────────────────────
function getDueCards(
  allCards: ReviewCard[],
  srsData: Record<string, { nextReviewDate: string; interval: number; easeFactor: number; repetitions: number }>,
  maxCards = 50
): ReviewCard[] {
  const now = new Date();
  const due: ReviewCard[] = [];
  const unseen: ReviewCard[] = [];

  for (const card of allCards) {
    const srs = srsData[card.word];
    if (!srs) {
      unseen.push(card);
    } else if (new Date(srs.nextReviewDate) <= now) {
      due.push(card);
    }
  }

  // Prioritise: overdue first, then new unseen cards
  const shuffledUnseen = unseen.sort(() => Math.random() - 0.5);
  return [...due, ...shuffledUnseen].slice(0, maxCards);
}

// ── Module colour ─────────────────────────────────────────────
const MODULE_COLOR: Record<string, string> = {
  A0: "bg-slate-500",  A1: "bg-blue-500",   A2: "bg-cyan-500",
  B1: "bg-teal-500",   B2: "bg-violet-500", C1: "bg-amber-500", C2: "bg-rose-500",
};

// ─────────────────────────────────────────────────────────────
export default function ReviewPage() {
  const router = useRouter();
  const { srs, updateSRS, xp, streak, lessons } = useProgressStore();

  // Only show cards from lessons the user has unlocked or completed
  const unlockedLessonIds = useMemo(
    () => new Set(Object.entries(lessons).filter(([, lp]) => lp.status !== "locked").map(([id]) => id)),
    [lessons]
  );

  const allCards   = useMemo(() => collectAllFlashcards(unlockedLessonIds), [unlockedLessonIds]);
  const dueCards   = useMemo(() => getDueCards(allCards, srs), [allCards, srs]);

  const [index,     setIndex]     = useState(0);
  const [flipped,   setFlipped]   = useState(false);
  const [done,      setDone]      = useState(false);
  const [session,   setSession]   = useState<{ word: string; quality: number }[]>([]);
  const [speaking,  setSpeaking]  = useState(false);
  const speakingRef = useRef(false);

  const card = dueCards[index];
  const progress = dueCards.length > 0 ? (index / dueCards.length) * 100 : 100;

  // Speak English via browser TTS
  const speakEnglish = useCallback((text: string): Promise<void> => {
    return new Promise<void>((resolve) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) { resolve(); return; }
      window.speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance(text);
      utt.lang = "en-US";
      utt.rate = 0.88;
      const voices = window.speechSynthesis.getVoices();
      const enVoice = voices.find(v => v.lang.startsWith("en"));
      if (enVoice) utt.voice = enVoice;
      utt.onend = () => resolve();
      utt.onerror = () => resolve();
      window.speechSynthesis.speak(utt);
    });
  }, []);

  // On reveal: German example → 600ms pause → English meaning
  const speakRevealSequence = useCallback(async (c: ReviewCard) => {
    if (speakingRef.current) return;
    speakingRef.current = true;
    setSpeaking(true);
    try {
      await speakGermanNeural(c.example?.de ?? c.word);
      await new Promise(r => setTimeout(r, 600));
      await speakEnglish(c.meaning);
    } catch { /* silent */ }
    speakingRef.current = false;
    setSpeaking(false);
  }, [speakEnglish]);

  const handleRate = useCallback((qualityKey: number) => {
    if (!card) return;
    const { quality } = RATING_LABELS[qualityKey];
    updateSRS(card.word, quality);
    setSession(prev => [...prev, { word: card.word, quality }]);
    if (index >= dueCards.length - 1) {
      setDone(true);
    } else {
      setIndex(i => i + 1);
      setFlipped(false);
    }
  }, [card, index, dueCards.length, updateSRS]);

  // Manual TTS button — speaks just the German word
  const handleSpeak = useCallback(async () => {
    if (!card || speaking) return;
    setSpeaking(true);
    try { await speakGermanNeural(card.word); } catch { /* silent */ }
    setSpeaking(false);
  }, [card, speaking]);

  // Stats for the sidebar
  const totalDue    = dueCards.length;
  const totalSeen   = Object.keys(srs).length;
  const totalCards  = allCards.length;
  const goodToday   = session.filter(s => s.quality >= 4).length;
  const againToday  = session.filter(s => s.quality < 3).length;

  // ── No cards due ──────────────────────────────────────────
  if (dueCards.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-6 max-w-md"
        >
          <div className="w-24 h-24 bg-green-500/10 border-2 border-green-500 flex items-center justify-center mx-auto rounded-2xl">
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          </div>
          <h1 className="text-4xl font-black uppercase tracking-tighter">All caught up!</h1>
          <p className="text-muted-foreground font-mono text-sm">
            No cards are due for review right now. Come back tomorrow or study a new lesson.
          </p>
          <div className="grid grid-cols-2 gap-4 text-left">
            <div className="border-2 border-border p-4">
              <p className="text-3xl font-black">{totalSeen.toLocaleString()}</p>
              <p className="text-xs font-mono uppercase text-muted-foreground mt-1">Words in SRS</p>
            </div>
            <div className="border-2 border-border p-4">
              <p className="text-3xl font-black">{(totalCards - totalSeen).toLocaleString()}</p>
              <p className="text-xs font-mono uppercase text-muted-foreground mt-1">Not yet seen</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Button size="lg" className="w-full border-2" onClick={() => router.push("/learn")}>
              <BookOpen className="mr-2 w-4 h-4" /> Study New Lesson
            </Button>
            <Button variant="outline" size="lg" className="w-full border-2" onClick={() => router.push("/")}>
              <ArrowLeft className="mr-2 w-4 h-4" /> Home
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  // ── Session complete ──────────────────────────────────────
  if (done) {
    const accuracy = session.length > 0 ? Math.round((goodToday / session.length) * 100) : 0;
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-8 max-w-sm"
        >
          <div className="w-24 h-24 bg-primary flex items-center justify-center mx-auto rounded-2xl shadow-xl shadow-primary/20">
            <Trophy className="w-12 h-12 text-primary-foreground" />
          </div>
          <h1 className="text-5xl font-black uppercase tracking-tighter">Session Done!</h1>

          <div className="grid grid-cols-2 gap-4">
            <div className="border-2 border-border p-4">
              <p className="text-4xl font-black text-primary">{accuracy}%</p>
              <p className="text-xs font-mono uppercase text-muted-foreground mt-1">Accuracy</p>
            </div>
            <div className="border-2 border-border p-4">
              <p className="text-4xl font-black">{session.length}</p>
              <p className="text-xs font-mono uppercase text-muted-foreground mt-1">Cards reviewed</p>
            </div>
            <div className="border-2 border-green-500 bg-green-500/5 p-4">
              <p className="text-4xl font-black text-green-600">{goodToday}</p>
              <p className="text-xs font-mono uppercase text-muted-foreground mt-1">Correct</p>
            </div>
            <div className="border-2 border-red-500 bg-red-500/5 p-4">
              <p className="text-4xl font-black text-red-600">{againToday}</p>
              <p className="text-xs font-mono uppercase text-muted-foreground mt-1">Again</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Button size="lg" className="w-full border-2" onClick={() => router.push("/learn")}>
              Continue Learning <BookOpen className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="w-full border-2" onClick={() => {
              setIndex(0); setFlipped(false); setDone(false); setSession([]);
            }}>
              Review Again
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  // ── Main review UI ────────────────────────────────────────
  return (
    <div className="flex flex-col min-h-screen max-w-2xl mx-auto w-full p-4 sm:p-8">
      {/* Header */}
      <header className="flex items-center gap-4 mb-6 pt-4">
        <Button variant="ghost" size="icon" onClick={() => router.push("/learn")}>
          <ArrowLeft className="w-5 h-5 text-muted-foreground" />
        </Button>
        <div className="bg-primary text-primary-foreground px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2">
          <Brain size={14} /> SRS Review
        </div>
        <Progress value={progress} className="h-2 flex-1" />
        <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
          {index + 1} / {totalDue}
        </span>
      </header>

      {/* Stats row */}
      <div className="flex gap-4 mb-6 text-xs font-mono">
        <div className="flex items-center gap-1 text-muted-foreground">
          <Flame size={12} className="text-orange-500" /> {streak} day streak
        </div>
        <div className="flex items-center gap-1 text-muted-foreground">
          <CheckCircle2 size={12} className="text-green-500" /> {goodToday} good
        </div>
        <div className="flex items-center gap-1 text-muted-foreground">
          <XCircle size={12} className="text-red-500" /> {againToday} again
        </div>
        <div className="flex items-center gap-1 text-muted-foreground ml-auto">
          <Clock size={12} /> {totalDue - index} left
        </div>
      </div>

      {/* Flashcard */}
      <main className="flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${card.word}-${flipped}`}
            initial={{ opacity: 0, rotateY: flipped ? -90 : 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "border-2 border-border rounded-2xl p-8 min-h-[340px] flex flex-col justify-between cursor-pointer select-none transition-colors",
              flipped ? "bg-secondary/30" : "bg-background hover:border-primary/50"
            )}
            onClick={() => { if (!flipped) { setFlipped(true); speakRevealSequence(card); } }}
          >
            {/* Module badge */}
            <div className="flex items-center justify-between">
              <span className={cn("text-white text-xs font-mono font-bold px-2 py-1 rounded", MODULE_COLOR[card.module] ?? "bg-muted")}>
                {card.module}
              </span>
              <button
                onClick={(e) => { e.stopPropagation(); handleSpeak(); }}
                className={cn(
                  "p-2 rounded-lg border-2 transition-colors",
                  speaking ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary text-muted-foreground hover:text-primary"
                )}
              >
                <Volume2 size={16} className={speaking ? "animate-pulse" : ""} />
              </button>
            </div>

            {/* Front / Back */}
            <div className="text-center space-y-3 flex-1 flex flex-col justify-center">
              {!flipped ? (
                <>
                  <p className="text-5xl sm:text-6xl font-black tracking-tight">{card.word}</p>
                  {card.phonetic && (
                    <p className="text-muted-foreground font-mono text-lg">/{card.phonetic}/</p>
                  )}
                  {card.gender && (
                    <span className="inline-block border border-border px-2 py-0.5 rounded font-mono text-xs text-muted-foreground">
                      {card.gender}
                    </span>
                  )}
                  {card.example && (
                    <p className="text-muted-foreground text-sm mt-3 italic border-t border-border/50 pt-3">
                      {card.example.de}
                    </p>
                  )}
                  <p className="text-muted-foreground font-mono text-sm mt-3 animate-pulse">
                    Tap to reveal →
                  </p>
                </>
              ) : (
                <>
                  <p className="text-lg font-bold text-muted-foreground">{card.word}</p>
                  <p className="text-4xl font-black text-primary mt-1">{card.meaning}</p>
                  {card.gender && (
                    <span className="inline-block border border-border px-2 py-0.5 rounded font-mono text-xs text-muted-foreground">
                      {card.gender}
                    </span>
                  )}
                  {card.example && (
                    <div className="mt-4 border-t border-border pt-4 space-y-1.5 text-left">
                      <p className="font-bold text-base">{card.example.de}</p>
                      <p className="text-primary/80 text-sm italic">{card.example.en}</p>
                    </div>
                  )}
                  <p className="text-muted-foreground font-mono text-xs mt-2 opacity-60">
                    from: {card.lessonTitle}
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Rating buttons — only show after flip */}
        <AnimatePresence>
          {flipped && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-4 gap-3 mt-6"
            >
              {Object.entries(RATING_LABELS).map(([key, { label, color }]) => (
                <button
                  key={key}
                  onClick={() => handleRate(Number(key))}
                  className={cn(
                    "border-2 rounded-xl py-3 font-bold text-sm transition-all hover:scale-105 active:scale-95",
                    color
                  )}
                >
                  {label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hint when not flipped */}
        {!flipped && (
          <p className="text-center text-muted-foreground font-mono text-xs mt-6">
            How well do you know this word? Tap the card to reveal.
          </p>
        )}
      </main>

      {/* SRS explanation footer */}
      <footer className="mt-8 pt-4 border-t border-border">
        <div className="flex justify-between text-xs font-mono text-muted-foreground">
          <span>Again → tomorrow</span>
          <span>Hard → +1-3d</span>
          <span>Good → ×ease</span>
          <span>Easy → ×ease+1.3</span>
        </div>
      </footer>
    </div>
  );
}

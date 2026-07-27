"use client";

import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useProgressStore } from "@/store/useProgressStore";
import { lessonData } from "@/data/lessons";
import { speakGermanNeural } from "@/lib/tts";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Volume2, ArrowLeft, ArrowRight, Brain, CheckCircle2, XCircle,
  Flame, Calendar, Trophy, BookOpen, Clock, Zap, WifiOff, Send
} from "lucide-react";
import { cn } from "@/lib/utils";
import { buildSmartSession, levenshteinSimilarity, getDueItemCount, type ReviewItem } from "@/lib/smart-review";

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
  const searchParams = useSearchParams();
  const { srs, updateSRS, xp, streak, lessons, vocabularyBank, level, writingErrors, recordSmartReview } = useProgressStore();
  const [activeTab, setActiveTab] = useState<"vocab" | "smart">(searchParams.get("tab") === "smart" ? "smart" : "vocab");

  // Only show cards from lessons the user has unlocked or completed
  const unlockedLessonIds = useMemo(
    () => new Set(Object.entries(lessons).filter(([, lp]) => lp.status !== "locked").map(([id]) => id)),
    [lessons]
  );

  // Merge lesson flashcards + vocabulary bank words into one unified card list
  const allCards = useMemo(() => {
    const lessonCards = collectAllFlashcards(unlockedLessonIds);
    const lessonWords = new Set(lessonCards.map(c => c.word.toLowerCase()));

    // Add vocabulary bank words that aren't already in lesson cards
    const bankCards: ReviewCard[] = Object.values(vocabularyBank)
      .filter(entry => !lessonWords.has(entry.word.toLowerCase()))
      .map(entry => ({
        word: entry.word,
        meaning: entry.meaning,
        gender: entry.gender,
        example: entry.example,
        lessonId: "vocab-bank",
        lessonTitle: "Vocabulary Bank",
        module: entry.level || "A1",
      }));

    return [...lessonCards, ...bankCards];
  }, [unlockedLessonIds, vocabularyBank]);
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

  // ── Tab toggle ──────────────────────────────────────────────
  if (activeTab === "smart") {
    return (
      <SmartSessionTab
        srs={srs}
        writingErrors={writingErrors}
        lessons={lessons}
        vocabularyBank={vocabularyBank}
        level={level || "A1"}
        streak={streak}
        updateSRS={updateSRS}
        recordSmartReview={recordSmartReview}
        onSwitchTab={() => setActiveTab("vocab")}
        onNavigate={(path: string) => router.push(path)}
      />
    );
  }

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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
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
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter">Session Done!</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      <header className="flex items-center gap-4 mb-4 pt-4">
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

      {/* Tab Toggle */}
      <div className="flex border-2 border-foreground mb-6">
        <button
          onClick={() => setActiveTab("vocab")}
          className={cn("flex-1 px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors",
            "bg-foreground text-background"
          )}
        >
          📚 Vocab Review
        </button>
        <button
          onClick={() => setActiveTab("smart")}
          className={cn("flex-1 px-4 py-2 font-mono text-xs uppercase tracking-widest border-l-2 border-foreground transition-colors",
            "hover:bg-foreground/10"
          )}
        >
          🧠 Smart Session
        </button>
      </div>

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
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6"
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

// ── Smart Session Tab Component ────────────────────────────────
interface SmartSessionProps {
  srs: Record<string, { nextReviewDate: string; interval: number; easeFactor: number; repetitions: number }>;
  writingErrors: { pattern: string; correction: string; count: number; lastDate: string }[];
  lessons: Record<string, { status: string; score?: number; completedAt?: string; attempts: number }>;
  vocabularyBank: Record<string, any>;
  level: string;
  streak: number;
  updateSRS: (word: string, quality: number) => void;
  recordSmartReview: (accuracy: number, categories: Record<string, number>, itemCount: number) => void;
  onSwitchTab: () => void;
  onNavigate: (path: string) => void;
}

function SmartSessionTab(props: SmartSessionProps) {
  const { srs, writingErrors, lessons, vocabularyBank, level, streak, updateSRS, recordSmartReview, onSwitchTab, onNavigate } = props;

  const [isOnline, setIsOnline] = useState(typeof navigator !== "undefined" ? navigator.onLine : true);
  useEffect(() => {
    const onOnline = () => setIsOnline(true);
    const onOffline = () => setIsOnline(false);
    window.addEventListener("online", onOnline);
    window.addEventListener("offline", onOffline);
    return () => { window.removeEventListener("online", onOnline); window.removeEventListener("offline", onOffline); };
  }, []);

  const session = useMemo(() => {
    return buildSmartSession({
      srs: srs as any,
      writingErrors,
      lessons: lessons as any,
      vocabularyBank: vocabularyBank as any,
      level,
      isOnline,
    });
  }, [srs, writingErrors, lessons, vocabularyBank, level, isOnline]);

  const [itemIndex, setItemIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [results, setResults] = useState<{ type: string; correct: boolean }[]>([]);
  const [flipped, setFlipped] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState<{ correct: boolean; message: string } | null>(null);
  const [speaking, setSpeaking] = useState(false);

  const currentItem = session[itemIndex];
  const progress = session.length > 0 ? ((itemIndex) / session.length) * 100 : 0;
  const hasRecordedRef = useRef(false);

  // Record smart review results when session completes (must be before conditional returns)
  useEffect(() => {
    if (!done || hasRecordedRef.current || results.length === 0) return;
    hasRecordedRef.current = true;

    const totalCorrect = results.filter(r => r.correct).length;
    const accuracy = results.length > 0 ? Math.round((totalCorrect / results.length) * 100) : 0;
    const catResults: Record<string, { correct: number; total: number }> = {};
    for (const r of results) {
      if (!catResults[r.type]) catResults[r.type] = { correct: 0, total: 0 };
      catResults[r.type].total++;
      if (r.correct) catResults[r.type].correct++;
    }
    const catAccuracy: Record<string, number> = {};
    for (const [type, data] of Object.entries(catResults)) {
      catAccuracy[type] = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
    }
    recordSmartReview(accuracy, catAccuracy, results.length);
  }, [done, results, recordSmartReview]);

  const recordResult = useCallback((type: string, correct: boolean) => {
    setResults(prev => [...prev, { type, correct }]);
  }, []);

  const nextItem = useCallback(() => {
    setFeedback(null);
    setUserInput("");
    setFlipped(false);
    if (itemIndex >= session.length - 1) {
      setDone(true);
    } else {
      setItemIndex(i => i + 1);
    }
  }, [itemIndex, session.length]);

  const handleSpeak = useCallback(async (text: string) => {
    if (speaking) return;
    setSpeaking(true);
    try { await speakGermanNeural(text); } catch { /* silent */ }
    setSpeaking(false);
  }, [speaking]);

  // Submit text input for writing-error, grammar-fill, dictation
  const handleSubmitInput = useCallback(() => {
    if (!currentItem || !userInput.trim()) return;

    let correct = false;
    let message = "";

    if (currentItem.type === "writing-error") {
      correct = userInput.trim().toLowerCase() === currentItem.correction.trim().toLowerCase();
      message = correct ? "✅ Correct!" : `❌ The correct answer is: ${currentItem.correction}`;
    } else if (currentItem.type === "grammar-fill") {
      correct = userInput.trim().toLowerCase() === currentItem.missingWord.trim().toLowerCase();
      message = correct ? "✅ Correct!" : `❌ The missing word is: ${currentItem.missingWord}`;
    } else if (currentItem.type === "dictation") {
      const similarity = levenshteinSimilarity(userInput, currentItem.text);
      correct = similarity >= 80;
      message = correct
        ? `✅ ${similarity}% match — Great!`
        : `❌ ${similarity}% match. Expected: "${currentItem.text}"`;
    } else if (currentItem.type === "pronunciation") {
      // Phase 2 will upgrade this; for now use Levenshtein on text
      const similarity = levenshteinSimilarity(userInput, currentItem.text);
      correct = similarity >= 70;
      message = correct
        ? `✅ ${similarity}% match`
        : `❌ ${similarity}% match. Expected: "${currentItem.text}"`;
    }

    setFeedback({ correct, message });
    recordResult(currentItem.type, correct);
  }, [currentItem, userInput, recordResult]);

  // ── Session complete ──────────────────────────────────────
  if (done) {
    const totalCorrect = results.filter(r => r.correct).length;
    const accuracy = results.length > 0 ? Math.round((totalCorrect / results.length) * 100) : 0;

    // Calculate per-category accuracy
    const catResults: Record<string, { correct: number; total: number }> = {};
    for (const r of results) {
      if (!catResults[r.type]) catResults[r.type] = { correct: 0, total: 0 };
      catResults[r.type].total++;
      if (r.correct) catResults[r.type].correct++;
    }
    const catAccuracy: Record<string, number> = {};
    for (const [type, data] of Object.entries(catResults)) {
      catAccuracy[type] = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
    }

    // Find weakest category
    let weakest = "";
    let weakestScore = 101;
    for (const [type, score] of Object.entries(catAccuracy)) {
      if (score < weakestScore) { weakest = type; weakestScore = score; }
    }

    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-8 max-w-sm w-full">
          <div className="w-24 h-24 bg-primary flex items-center justify-center mx-auto rounded-2xl shadow-xl shadow-primary/20">
            <Zap className="w-12 h-12 text-primary-foreground" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter">Smart Review Done!</h1>

          <div className="grid grid-cols-2 gap-4">
            <div className="border-2 border-border p-4">
              <p className="text-4xl font-black text-primary">{accuracy}%</p>
              <p className="text-xs font-mono uppercase text-muted-foreground mt-1">Accuracy</p>
            </div>
            <div className="border-2 border-border p-4">
              <p className="text-4xl font-black">{results.length}</p>
              <p className="text-xs font-mono uppercase text-muted-foreground mt-1">Items</p>
            </div>
            <div className="border-2 border-green-500 bg-green-500/5 p-4">
              <p className="text-4xl font-black text-green-600">{totalCorrect}</p>
              <p className="text-xs font-mono uppercase text-muted-foreground mt-1">Correct</p>
            </div>
            <div className="border-2 border-red-500 bg-red-500/5 p-4">
              <p className="text-4xl font-black text-red-600">{results.length - totalCorrect}</p>
              <p className="text-xs font-mono uppercase text-muted-foreground mt-1">Missed</p>
            </div>
          </div>

          {/* Per-category breakdown */}
          <div className="space-y-2 text-left">
            {Object.entries(catAccuracy).map(([type, score]) => (
              <div key={type} className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase w-28 text-muted-foreground">{type.replace("-", " ")}</span>
                <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${score}%` }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={cn("h-full rounded-full", score >= 80 ? "bg-green-500" : score >= 50 ? "bg-yellow-500" : "bg-red-500")}
                  />
                </div>
                <span className="font-mono text-xs w-10 text-right">{score}%</span>
              </div>
            ))}
          </div>

          {weakest && weakestScore < 80 && (
            <p className="text-sm font-mono text-muted-foreground border-t border-border pt-4">
              💡 Focus on <strong className="text-foreground">{weakest.replace("-", " ")}</strong> next — it&apos;s your weakest area at {weakestScore}%.
            </p>
          )}

          <div className="flex flex-col gap-3">
            <Button size="lg" className="w-full border-2" onClick={() => onNavigate("/learn")}>
              Continue Learning <BookOpen className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="w-full border-2" onClick={() => {
              setItemIndex(0); setDone(false); setResults([]); setFlipped(false); setUserInput(""); setFeedback(null);
            }}>
              Review Again
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  // ── Loading state ─────────────────────────────────────────
  if (!currentItem) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="animate-pulse space-y-4 w-full max-w-md">
          <div className="h-8 bg-muted rounded w-1/3" />
          <div className="h-64 bg-muted rounded-2xl" />
          <div className="h-12 bg-muted rounded" />
        </div>
      </div>
    );
  }

  // ── Per-item-type rendering ───────────────────────────────
  const renderItemContent = () => {
    switch (currentItem.type) {
      case "vocab":
        return (
          <div
            className={cn(
              "border-2 border-border rounded-2xl p-8 min-h-[280px] flex flex-col justify-center cursor-pointer select-none transition-colors",
              flipped ? "bg-secondary/30" : "bg-background hover:border-primary/50"
            )}
            onClick={() => { if (!flipped) { setFlipped(true); handleSpeak(currentItem.word); } }}
          >
            {!flipped ? (
              <div className="text-center space-y-3">
                <p className="text-5xl font-black tracking-tight">{currentItem.word}</p>
                {currentItem.gender && (
                  <span className="inline-block border border-border px-2 py-0.5 rounded font-mono text-xs text-muted-foreground">
                    {currentItem.gender}
                  </span>
                )}
                <p className="text-muted-foreground font-mono text-sm animate-pulse">Tap to reveal →</p>
              </div>
            ) : (
              <div className="text-center space-y-3">
                <p className="text-lg font-bold text-muted-foreground">{currentItem.word}</p>
                <p className="text-4xl font-black text-primary">{currentItem.meaning}</p>
                {currentItem.example && (
                  <div className="mt-4 border-t border-border pt-4 space-y-1.5 text-left">
                    <p className="font-bold text-base">{currentItem.example.de}</p>
                    <p className="text-primary/80 text-sm italic">{currentItem.example.en}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        );

      case "writing-error":
        return (
          <div className="border-2 border-border rounded-2xl p-8 min-h-[280px] flex flex-col justify-center space-y-4">
            <span className="inline-block bg-red-500/10 text-red-600 border border-red-500/30 px-3 py-1 rounded font-mono text-xs font-bold uppercase self-start">Error Pattern</span>
            <p className="text-2xl font-black text-red-500 line-through">{currentItem.pattern}</p>
            <p className="text-muted-foreground text-sm">What is the correct form?</p>
            <input
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && !feedback && handleSubmitInput()}
              placeholder="Type the correction..."
              className="w-full border-2 border-border rounded-xl px-4 py-3 bg-background text-lg font-mono focus:border-primary focus:outline-none"
              autoFocus
              disabled={!!feedback}
            />
          </div>
        );

      case "grammar-mcq":
        return (
          <div className="border-2 border-border rounded-2xl p-8 min-h-[280px] flex flex-col justify-center space-y-6">
            <span className="inline-block bg-blue-500/10 text-blue-600 border border-blue-500/30 px-3 py-1 rounded font-mono text-xs font-bold uppercase self-start">Grammar Quiz</span>
            <p className="text-xl font-bold">{currentItem.question}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentItem.options.map((opt, i) => {
                const isCorrect = i === currentItem.correctIndex;
                const isSelected = feedback !== null;
                return (
                  <button
                    key={i}
                    onClick={() => {
                      if (feedback) return;
                      const correct = i === currentItem.correctIndex;
                      setFeedback({ correct, message: correct ? "✅ Correct!" : `❌ Correct answer: ${currentItem.options[currentItem.correctIndex]}` });
                      recordResult("grammar-mcq", correct);
                    }}
                    className={cn(
                      "border-2 rounded-xl py-3 px-4 font-medium text-left transition-all",
                      isSelected && isCorrect ? "border-green-500 bg-green-500/10 text-green-600" :
                      isSelected && !isCorrect ? "border-border opacity-50" :
                      "border-border hover:border-primary hover:scale-[1.02] active:scale-95"
                    )}
                    disabled={!!feedback}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            {feedback && (
              <p className="text-sm text-muted-foreground italic border-t border-border pt-3">
                {currentItem.explanation}
              </p>
            )}
          </div>
        );

      case "grammar-fill":
        return (
          <div className="border-2 border-border rounded-2xl p-8 min-h-[280px] flex flex-col justify-center space-y-4">
            <span className="inline-block bg-cyan-500/10 text-cyan-600 border border-cyan-500/30 px-3 py-1 rounded font-mono text-xs font-bold uppercase self-start">Fill the Gap</span>
            <p className="text-xl font-bold">
              {currentItem.sentenceBefore} <span className="border-b-2 border-primary px-4">___</span> {currentItem.sentenceAfter}
            </p>
            <p className="text-sm text-muted-foreground italic">{currentItem.translation}</p>
            <input
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && !feedback && handleSubmitInput()}
              placeholder="Type the missing word..."
              className="w-full border-2 border-border rounded-xl px-4 py-3 bg-background text-lg font-mono focus:border-primary focus:outline-none"
              autoFocus
              disabled={!!feedback}
            />
          </div>
        );

      case "dictation":
        return (
          <div className="border-2 border-border rounded-2xl p-8 min-h-[280px] flex flex-col justify-center items-center space-y-6">
            <span className="inline-block bg-violet-500/10 text-violet-600 border border-violet-500/30 px-3 py-1 rounded font-mono text-xs font-bold uppercase">Mini Dictation</span>
            <button
              onClick={() => handleSpeak(currentItem.text)}
              className={cn("w-20 h-20 rounded-full border-4 flex items-center justify-center transition-all",
                speaking ? "border-primary bg-primary/10 animate-pulse" : "border-border hover:border-primary"
              )}
            >
              <Volume2 className="w-8 h-8" />
            </button>
            <p className="text-muted-foreground text-sm">Listen and type what you hear</p>
            <input
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && !feedback && handleSubmitInput()}
              placeholder="Type what you hear..."
              className="w-full border-2 border-border rounded-xl px-4 py-3 bg-background text-lg font-mono focus:border-primary focus:outline-none"
              disabled={!!feedback}
            />
          </div>
        );

      case "pronunciation":
        return (
          <div className="border-2 border-border rounded-2xl p-8 min-h-[280px] flex flex-col justify-center items-center space-y-6">
            <span className="inline-block bg-amber-500/10 text-amber-600 border border-amber-500/30 px-3 py-1 rounded font-mono text-xs font-bold uppercase">Pronunciation</span>
            <p className="text-2xl font-bold text-center">{currentItem.text}</p>
            <p className="text-sm text-muted-foreground italic">{currentItem.translation}</p>
            <button
              onClick={() => handleSpeak(currentItem.text)}
              className={cn("w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all mb-2",
                speaking ? "border-primary bg-primary/10 animate-pulse" : "border-border hover:border-primary"
              )}
            >
              <Volume2 className="w-6 h-6" />
            </button>
            <p className="text-muted-foreground text-xs">Listen, then type it from memory:</p>
            <input
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && !feedback && handleSubmitInput()}
              placeholder="Type the sentence..."
              className="w-full border-2 border-border rounded-xl px-4 py-3 bg-background text-lg font-mono focus:border-primary focus:outline-none"
              disabled={!!feedback}
            />
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen max-w-2xl mx-auto w-full p-4 sm:p-8">
      {/* Header */}
      <header className="flex items-center gap-4 mb-4 pt-4">
        <Button variant="ghost" size="icon" onClick={onSwitchTab}>
          <ArrowLeft className="w-5 h-5 text-muted-foreground" />
        </Button>
        <div className="bg-primary text-primary-foreground px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2">
          <Zap size={14} /> Smart Session
        </div>
        <Progress value={progress} className="h-2 flex-1" />
        <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
          {itemIndex + 1} / {session.length}
        </span>
      </header>

      {/* Offline banner */}
      {!isOnline && (
        <div className="flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-xl px-4 py-2 mb-4 font-mono text-xs text-yellow-600">
          <WifiOff size={14} /> Offline mode — listening &amp; speaking exercises will return when connected
        </div>
      )}

      {/* Stats */}
      <div className="flex gap-4 mb-6 text-xs font-mono">
        <div className="flex items-center gap-1 text-muted-foreground">
          <Flame size={12} className="text-orange-500" /> {streak} day streak
        </div>
        <div className="flex items-center gap-1 text-muted-foreground">
          <CheckCircle2 size={12} className="text-green-500" /> {results.filter(r => r.correct).length} correct
        </div>
        <div className="flex items-center gap-1 text-muted-foreground ml-auto">
          <Clock size={12} /> {session.length - itemIndex} left
        </div>
      </div>

      {/* Card */}
      <main className="flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentItem.type}-${itemIndex}`}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.2 }}
          >
            {renderItemContent()}
          </motion.div>
        </AnimatePresence>

        {/* Feedback + Next */}
        <AnimatePresence>
          {feedback && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-4 space-y-3"
            >
              <div className={cn(
                "p-4 rounded-xl border-2 font-medium text-center",
                feedback.correct ? "border-green-500 bg-green-500/10 text-green-600" : "border-red-500 bg-red-500/10 text-red-600"
              )}>
                {feedback.message}
              </div>
              <Button size="lg" className="w-full border-2" onClick={nextItem}>
                Next <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit button for text inputs (when no feedback shown yet) */}
        {!feedback && ["writing-error", "grammar-fill", "dictation", "pronunciation"].includes(currentItem.type) && (
          <Button size="lg" className="w-full border-2 mt-4" onClick={handleSubmitInput} disabled={!userInput.trim()}>
            <Send className="mr-2 w-4 h-4" /> Submit
          </Button>
        )}

        {/* Vocab rating buttons */}
        {currentItem.type === "vocab" && flipped && !feedback && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6"
          >
            {Object.entries(RATING_LABELS).map(([key, { label, color }]) => (
              <button
                key={key}
                onClick={() => {
                  const { quality } = RATING_LABELS[Number(key)];
                  updateSRS(currentItem.word, quality);
                  recordResult("vocab", quality >= 4);
                  setFeedback({ correct: quality >= 4, message: quality >= 4 ? "✅ Great!" : "🔄 Will review again soon" });
                }}
                className={cn(
                  "border-2 rounded-xl py-3 font-bold text-sm transition-all hover:scale-105 active:scale-95 min-h-[48px]",
                  color
                )}
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </main>
    </div>
  );
}

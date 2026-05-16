"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, ChevronLeft, ChevronRight, Trophy, BookOpen, Minus, ChevronDown, BookMarked, RotateCcw, Search, Filter } from "lucide-react";
import { cn } from "@/lib/utils";
import { speakGermanNeural } from "@/lib/tts";
import { useProgressStore } from "@/store/useProgressStore";
import { lessonData } from "@/data/lessons";
import Link from "next/link";

type ReviewCard = {
  word_id: string;
  word: string;
  phonetic: string;
  meaning: string;
  gender?: string;
  example: { de: string; en: string };
  module: string;
  lessonTitle: string;
};

const MODULE_ORDER = ["A0", "A1", "A2", "B1", "B2", "C1", "C2"];

/**
 * Extract ALL vocabulary from lessons up to and including the user's current learning level.
 */
function getVocabUpToLevel(lessons: Record<string, { status: string }>, userLevel: string | null): ReviewCard[] {
  const vocab: ReviewCard[] = [];
  const seen = new Set<string>();

  // Find the highest module the user has touched (completed or active)
  let highestModuleIdx = 0;
  if (userLevel) {
    const idx = MODULE_ORDER.indexOf(userLevel);
    if (idx >= 0) highestModuleIdx = idx;
  }
  // Also check actual lesson progress
  for (const [lessonId, lp] of Object.entries(lessons)) {
    if (lp.status === "completed" || lp.status === "active") {
      const lesson = lessonData[lessonId];
      if (lesson) {
        const idx = MODULE_ORDER.indexOf(lesson.module);
        if (idx > highestModuleIdx) highestModuleIdx = idx;
      }
    }
  }

  const includedModules = MODULE_ORDER.slice(0, highestModuleIdx + 1);

  for (const [lessonId, lesson] of Object.entries(lessonData)) {
    if (!includedModules.includes(lesson.module)) continue;
    // Only include completed or active lessons
    const lp = lessons[lessonId];
    if (!lp || (lp.status !== "completed" && lp.status !== "active")) continue;

    for (const block of lesson.blocks) {
      if (block.type === "flashcard") {
        for (const card of block.cards) {
          const id = card.word.toLowerCase().replace(/\s+/g, "_");
          if (seen.has(id)) continue;
          seen.add(id);
          vocab.push({
            word_id: id, word: card.word, phonetic: card.phonetic,
            meaning: card.meaning, gender: card.gender,
            example: card.example, module: lesson.module, lessonTitle: lesson.title,
          });
        }
      }
      if (block.type === "vocabulary") {
        const id = block.word.toLowerCase().replace(/\s+/g, "_");
        if (seen.has(id)) continue;
        seen.add(id);
        vocab.push({
          word_id: id, word: block.word, phonetic: block.phonetic,
          meaning: block.translation,
          example: { de: block.example, en: block.translation },
          module: lesson.module, lessonTitle: lesson.title,
        });
      }
    }
  }
  return vocab;
}

// === Session Storage helpers for review progress persistence ===
const SESSION_KEY = "deutsch-review-session";

type SessionState = {
  currentIdx: number;
  sessionResults: { word: string; correct: boolean }[];
  sessionComplete: boolean;
  dueCardIds: string[];
  startedAt: string;
};

function saveSession(state: SessionState) {
  try { sessionStorage.setItem(SESSION_KEY, JSON.stringify(state)); } catch {}
}

function loadSession(): SessionState | null {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as SessionState;
    // Expire sessions older than 2 hours
    const age = Date.now() - new Date(parsed.startedAt).getTime();
    if (age > 2 * 60 * 60 * 1000) { sessionStorage.removeItem(SESSION_KEY); return null; }
    return parsed;
  } catch { return null; }
}

function clearSession() {
  try { sessionStorage.removeItem(SESSION_KEY); } catch {}
}

// ===================== MAIN PAGE =====================
export default function ReviewPage() {
  const [view, setView] = useState<"dictionary" | "flashcards">("dictionary");
  const [allCards, setAllCards] = useState<ReviewCard[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterModule, setFilterModule] = useState<string>("all");

  const lessons = useProgressStore(s => s.lessons);
  const srs = useProgressStore(s => s.srs);
  const level = useProgressStore(s => s.level);

  useEffect(() => {
    const vocab = getVocabUpToLevel(lessons, level);
    setAllCards(vocab);
  }, [lessons, level]);

  const mastered = allCards.filter(c => srs?.[c.word_id]?.interval >= 14).length;
  const completedCount = Object.values(lessons || {}).filter(l => l.status === "completed").length;

  // Get modules that have words
  const availableModules = [...new Set(allCards.map(c => c.module))].sort(
    (a, b) => MODULE_ORDER.indexOf(a) - MODULE_ORDER.indexOf(b)
  );

  // Filter cards for dictionary
  const filteredCards = allCards.filter(c => {
    const matchesSearch = !searchQuery ||
      c.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.meaning.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesModule = filterModule === "all" || c.module === filterModule;
    return matchesSearch && matchesModule;
  });

  // Group by module for dictionary display
  const groupedByModule: Record<string, ReviewCard[]> = {};
  for (const card of filteredCards) {
    if (!groupedByModule[card.module]) groupedByModule[card.module] = [];
    groupedByModule[card.module].push(card);
  }

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Header */}
      <div className="px-6 md:px-16 py-12 max-w-[1000px] mx-auto w-full">
        <header className="mb-10 border-b-4 border-foreground pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="text-primary font-mono text-sm tracking-widest uppercase mb-4 flex items-center gap-4">
                <span className="w-12 h-[2px] bg-primary block"></span>
                Review & Dictionary
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.85]">
                Your<br />
                <span className="text-muted-foreground">Wörterbuch.</span>
              </h1>
            </div>
            <div className="flex gap-6 font-mono text-sm">
              <div className="flex flex-col items-center border-2 border-foreground px-4 py-3">
                <span className="text-2xl font-black">{allCards.length}</span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Words</span>
              </div>
              <div className="flex flex-col items-center border-2 border-green-500 px-4 py-3">
                <span className="text-2xl font-black text-green-600">{mastered}</span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Mastered</span>
              </div>
              <div className="flex flex-col items-center border-2 border-primary px-4 py-3">
                <span className="text-2xl font-black text-primary">{completedCount}</span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Lessons</span>
              </div>
            </div>
          </div>

          {/* View Toggle Buttons */}
          <div className="flex gap-3 mt-8">
            <button
              onClick={() => setView("dictionary")}
              className={cn(
                "flex items-center gap-2 px-5 py-3 font-mono text-sm font-bold uppercase tracking-widest transition-all border-2",
                view === "dictionary"
                  ? "border-foreground bg-foreground text-background"
                  : "border-foreground/30 hover:border-foreground"
              )}
            >
              <BookOpen size={16} /> Vocabulary Dictionary
            </button>
            <button
              onClick={() => setView("flashcards")}
              className={cn(
                "flex items-center gap-2 px-5 py-3 font-mono text-sm font-bold uppercase tracking-widest transition-all border-2",
                view === "flashcards"
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-primary/30 text-primary hover:border-primary"
              )}
            >
              <BookMarked size={16} /> Flashcard Review
            </button>
          </div>
        </header>

        {view === "dictionary" ? (
          <>
            {allCards.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <Trophy size={64} className="text-primary mb-6" />
                <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">No words yet!</h2>
                <p className="text-muted-foreground font-mono text-sm max-w-md">Complete some lessons first to build your vocabulary dictionary.</p>
                <Link href="/learn" className="mt-8 border-2 border-foreground px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors flex items-center gap-2">
                  <BookOpen size={16} /> Start Learning
                </Link>
              </div>
            ) : (
              <>
                {/* Search & Filter Bar */}
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <div className="flex-1 relative">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search words..."
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border-2 border-foreground/20 bg-background font-mono text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <Filter size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <select
                      value={filterModule}
                      onChange={e => setFilterModule(e.target.value)}
                      className="pl-10 pr-8 py-3 border-2 border-foreground/20 bg-background font-mono text-sm focus:outline-none focus:border-primary appearance-none cursor-pointer"
                    >
                      <option value="all">All Levels</option>
                      {availableModules.map(m => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Results count */}
                <p className="font-mono text-xs text-muted-foreground mb-6 uppercase tracking-widest">
                  {filteredCards.length} word{filteredCards.length !== 1 ? "s" : ""} found
                </p>

                {/* Dictionary grouped by module */}
                {MODULE_ORDER.filter(m => groupedByModule[m]).map(mod => (
                  <div key={mod} className="mb-10">
                    <h3 className="text-lg font-black uppercase tracking-wider mb-3 flex items-center gap-3">
                      <span className="bg-primary text-primary-foreground px-2 py-0.5 text-xs font-mono">{mod}</span>
                      <span className="text-muted-foreground font-mono text-xs">{groupedByModule[mod].length} words</span>
                    </h3>
                    <div className="border-2 border-foreground bg-background divide-y-2 divide-foreground/10">
                      {groupedByModule[mod].map(r => (
                        <DictionaryEntry key={r.word_id} card={r} srs={srs} />
                      ))}
                    </div>
                  </div>
                ))}
              </>
            )}
          </>
        ) : (
          <FlashcardReview allCards={allCards} />
        )}
      </div>
    </div>
  );
}

// ===================== DICTIONARY ENTRY =====================
function DictionaryEntry({ card: r, srs }: { card: ReviewCard; srs: Record<string, any> }) {
  const genderColor = r.gender === "der" ? "text-blue-500" : r.gender === "die" ? "text-pink-500" : r.gender === "das" ? "text-green-500" : "";
  const cardSrs = srs?.[r.word_id];
  const masteryStr = cardSrs ? (cardSrs.interval >= 14 ? "✓ Mastered" : `${cardSrs.interval}d interval`) : "New";
  const masteryColor = cardSrs ? (cardSrs.interval >= 14 ? "text-green-600 border-green-500" : "text-yellow-600 border-yellow-500") : "text-muted-foreground border-muted";

  return (
    <details className="group">
      <summary className="list-none hover:bg-muted/50 px-4 py-3 cursor-pointer transition-colors flex justify-between items-center outline-none group-open:bg-primary/5">
        <div className="flex flex-col text-left">
          <span className="text-lg font-black">{r.word}</span>
          <div className="flex gap-2 items-center">
            {r.gender && <span className={cn("font-mono text-[10px] uppercase tracking-widest font-bold", genderColor)}>{r.gender}</span>}
            <span className={cn("font-mono text-[10px] border px-1", masteryColor)}>{masteryStr}</span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground">
          <span className="font-mono text-sm max-w-[150px] truncate">{r.meaning}</span>
          <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
        </div>
      </summary>
      <div className="px-6 py-5 bg-secondary/20 border-t border-foreground/10">
        <div className="space-y-4">
          <div>
            <h4 className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Meaning</h4>
            <p className="text-xl font-bold">{r.meaning}</p>
          </div>
          <div>
            <h4 className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Phonetic</h4>
            <p className="text-base font-mono">/{r.phonetic}/</p>
          </div>
          {r.example?.de && (
            <div className="border-l-4 border-primary pl-4 py-1">
              <p className="font-bold">{r.example.de}</p>
              <p className="text-muted-foreground text-sm mt-1">{r.example.en}</p>
            </div>
          )}
          <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            From: {r.lessonTitle}
          </div>
        </div>
      </div>
    </details>
  );
}

// ===================== FLASHCARD REVIEW (with session persistence) =====================
function FlashcardReview({ allCards }: { allCards: ReviewCard[] }) {
  const srs = useProgressStore(s => s.srs);
  const updateSRS = useProgressStore(s => s.updateSRS);

  const [dueCards, setDueCards] = useState<ReviewCard[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [sessionResults, setSessionResults] = useState<{ word: string; correct: boolean }[]>([]);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const speak = useCallback((text: string) => { speakGermanNeural(text); }, []);

  // Initialize: restore session or compute due cards
  useEffect(() => {
    if (allCards.length === 0) { setInitialized(true); return; }

    const saved = loadSession();
    const today = new Date().toISOString().split("T")[0];

    if (saved && !saved.sessionComplete) {
      // Restore session — rebuild dueCards from saved IDs
      const cardMap = new Map(allCards.map(c => [c.word_id, c]));
      const restored = saved.dueCardIds.map(id => cardMap.get(id)).filter(Boolean) as ReviewCard[];
      if (restored.length > 0 && saved.currentIdx < restored.length) {
        setDueCards(restored);
        setCurrentIdx(saved.currentIdx);
        setSessionResults(saved.sessionResults);
        setSessionComplete(false);
        setInitialized(true);
        return;
      }
    }

    // Fresh session: compute due cards
    const due = allCards.filter(card => {
      const cardSrs = srs?.[card.word_id];
      if (!cardSrs) return true;
      const reviewDate = cardSrs.nextReviewDate.split("T")[0];
      return reviewDate <= today;
    });
    setDueCards(due);
    setCurrentIdx(0);
    setSessionResults([]);
    setSessionComplete(false);
    clearSession();
    setInitialized(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allCards]); // Only run on mount / when allCards changes

  // Persist session state on every change
  useEffect(() => {
    if (!initialized || dueCards.length === 0) return;
    saveSession({
      currentIdx,
      sessionResults,
      sessionComplete,
      dueCardIds: dueCards.map(c => c.word_id),
      startedAt: new Date().toISOString(),
    });
  }, [currentIdx, sessionResults, sessionComplete, dueCards, initialized]);

  const handleAnswer = (quality: number) => {
    const card = dueCards[currentIdx];
    updateSRS(card.word_id, quality);
    const isCorrect = quality >= 3;
    const newResults = [...sessionResults, { word: card.word, correct: isCorrect }];
    setSessionResults(newResults);
    setFlipped(false);

    if (currentIdx >= dueCards.length - 1) {
      setSessionComplete(true);
      clearSession();
    } else {
      setCurrentIdx(currentIdx + 1);
    }
  };

  const restartSession = () => {
    clearSession();
    const today = new Date().toISOString().split("T")[0];
    const due = allCards.filter(card => {
      const cardSrs = srs?.[card.word_id];
      if (!cardSrs) return true;
      const reviewDate = cardSrs.nextReviewDate.split("T")[0];
      return reviewDate <= today;
    });
    setDueCards(due);
    setCurrentIdx(0);
    setSessionResults([]);
    setSessionComplete(false);
    setFlipped(false);
  };

  if (!initialized) return null;

  // No due cards
  if (dueCards.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <Trophy size={64} className="text-primary mb-6" />
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">
          {allCards.length === 0 ? "No words to review yet!" : "All caught up!"}
        </h2>
        <p className="text-muted-foreground font-mono text-sm max-w-md">
          {allCards.length === 0
            ? "Complete some lessons first to unlock vocabulary for review."
            : "No cards due for review today. Come back tomorrow!"}
        </p>
        <Link href="/learn" className="mt-8 border-2 border-foreground px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors flex items-center gap-2">
          <BookOpen size={16} /> Continue Learning
        </Link>
      </div>
    );
  }

  // Session complete
  if (sessionComplete) {
    const correct = sessionResults.filter(r => r.correct).length;
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="text-6xl mb-6">{correct === sessionResults.length ? "🏆" : correct >= sessionResults.length / 2 ? "👍" : "💪"}</div>
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">Session Complete!</h2>
        <p className="font-mono text-2xl font-bold">{correct}/{sessionResults.length} correct</p>
        <div className="flex gap-2 flex-wrap justify-center mt-6 max-w-lg">
          {sessionResults.map((r, i) => (
            <span key={i} className={cn("px-2 py-1 font-mono text-xs border-2", r.correct ? "border-green-500 text-green-600" : "border-red-500 text-red-600")}>{r.word}</span>
          ))}
        </div>
        <div className="flex gap-4 mt-8">
          <button onClick={restartSession} className="border-2 border-foreground px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors flex items-center gap-2">
            <RotateCcw size={14} /> Review Again
          </button>
          <Link href="/learn" className="border-2 border-primary bg-primary text-primary-foreground px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest hover:opacity-90 flex items-center gap-2">
            <BookOpen size={14} /> Continue Learning
          </Link>
        </div>
      </div>
    );
  }

  // Active review card
  const card = dueCards[currentIdx];
  const genderColor = card.gender === "der" ? "text-blue-500" : card.gender === "die" ? "text-pink-500" : card.gender === "das" ? "text-green-500" : "";

  return (
    <div className="max-w-3xl mx-auto w-full">
      <div className="mb-8 border-b-2 border-foreground pb-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-black uppercase tracking-tighter">📚 Daily Review</h2>
          <span className="font-mono text-sm text-muted-foreground">{currentIdx + 1} / {dueCards.length}</span>
        </div>
        <div className="h-2 bg-secondary overflow-hidden">
          <motion.div className="h-full bg-primary" animate={{ width: `${((currentIdx) / dueCards.length) * 100}%` }} transition={{ duration: 0.3 }} />
        </div>
      </div>

      <motion.div
        className="flex-1 flex flex-col justify-center cursor-pointer"
        onClick={() => setFlipped(!flipped)}
        whileTap={{ scale: 0.98 }}
      >
        <div className="border-4 border-foreground min-h-[320px] relative bg-card">
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
                {card.example?.de && (
                  <>
                    <div className="border-t border-border mt-8 pt-6 w-full max-w-md">
                      <p className="text-xl font-bold">{card.example.de}</p>
                      <p className="text-muted-foreground mt-2">{card.example.en}</p>
                    </div>
                    <button onClick={(e) => { e.stopPropagation(); speak(card.example.de); }} className="mt-6 border border-primary/30 px-4 py-2 flex items-center gap-2 text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-mono text-xs uppercase tracking-widest">
                      <Volume2 size={14} /> Listen
                    </button>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {flipped && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-4 mt-6">
          <button onClick={() => handleAnswer(1)} className="flex-1 border-4 border-red-500 text-red-600 py-4 font-black text-sm uppercase tracking-widest hover:bg-red-500 hover:text-white transition-colors flex flex-col items-center justify-center gap-1">
            <ChevronLeft size={20} /> Forgot
          </button>
          <button onClick={() => handleAnswer(3)} className="flex-1 border-4 border-yellow-500 text-yellow-600 py-4 font-black text-sm uppercase tracking-widest hover:bg-yellow-500 hover:text-white transition-colors flex flex-col items-center justify-center gap-1">
            <Minus size={20} /> Hard
          </button>
          <button onClick={() => handleAnswer(5)} className="flex-1 border-4 border-green-500 text-green-600 py-4 font-black text-sm uppercase tracking-widest hover:bg-green-500 hover:text-white transition-colors flex flex-col items-center justify-center gap-1">
            <ChevronRight size={20} /> Easy
          </button>
        </motion.div>
      )}
    </div>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, ChevronLeft, ChevronRight, RotateCcw, Trophy, BookOpen, Minus, ChevronDown } from "lucide-react";
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
};

/**
 * Extract all vocabulary from completed lessons.
 */
function getVocabFromCompletedLessons(completedLessonIds: string[]): ReviewCard[] {
  const vocab: ReviewCard[] = [];
  const seen = new Set<string>();

  for (const lessonId of completedLessonIds) {
    const lesson = lessonData[lessonId];
    if (!lesson) continue;

    for (const block of lesson.blocks) {
      if (block.type === "flashcard") {
        for (const card of block.cards) {
          const id = card.word.toLowerCase().replace(/\s+/g, "_");
          if (seen.has(id)) continue;
          seen.add(id);
          vocab.push({
            word_id: id,
            word: card.word,
            phonetic: card.phonetic,
            meaning: card.meaning,
            gender: card.gender,
            example: card.example,
          });
        }
      }
      if (block.type === "vocabulary") {
        const id = block.word.toLowerCase().replace(/\s+/g, "_");
        if (seen.has(id)) continue;
        seen.add(id);
        vocab.push({
          word_id: id,
          word: block.word,
          phonetic: block.phonetic,
          meaning: block.translation,
          example: { de: block.example, en: block.translation },
        });
      }
    }
  }
  return vocab;
}

export default function ReviewPage() {
  const [allCards, setAllCards] = useState<ReviewCard[]>([]);
  const [dueCards, setDueCards] = useState<ReviewCard[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [sessionResults, setSessionResults] = useState<{ word: string; correct: boolean }[]>([]);
  const [sessionComplete, setSessionComplete] = useState(false);

  const lessons = useProgressStore(s => s.lessons);
  const srs = useProgressStore(s => s.srs);
  const updateSRS = useProgressStore(s => s.updateSRS);

  // Initialize Data
  useEffect(() => {
    const completedIds = Object.entries(lessons)
      .filter(([, lp]) => lp.status === "completed")
      .map(([id]) => id);

    const lessonVocab = getVocabFromCompletedLessons(completedIds);
    setAllCards(lessonVocab);

    const today = new Date().toISOString().split("T")[0];
    
    // Determine which cards are due.
    // A card is due if it has no SRS data (new), or its nextReviewDate <= today.
    const due = lessonVocab.filter(card => {
      const cardSrs = srs[card.word_id];
      if (!cardSrs) return true; // new card
      const reviewDate = cardSrs.nextReviewDate.split("T")[0];
      return reviewDate <= today;
    });

    setDueCards(due);
  }, [lessons, srs]); // React to store changes

  const speak = useCallback((text: string) => {
    speakGermanNeural(text);
  }, []);

  const handleAnswer = (quality: number) => {
    const card = dueCards[currentIdx];
    
    // Update global SRS store
    updateSRS(card.word_id, quality);

    const isCorrect = quality >= 3;
    const newResults = [...sessionResults, { word: card.word, correct: isCorrect }];
    setSessionResults(newResults);
    setFlipped(false);

    if (currentIdx >= dueCards.length - 1) {
      setSessionComplete(true);
    } else {
      setCurrentIdx(currentIdx + 1);
    }
  };

  // === NO CARDS ===
  if (dueCards.length === 0) {
    const mastered = allCards.filter(c => srs[c.word_id]?.interval >= 14).length;
    const completedCount = Object.values(lessons).filter(l => l.status === "completed").length;
    return (
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
          <Trophy size={64} className="text-primary mb-6" />
          <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">
            {allCards.length === 0 ? "No words to review yet!" : "All caught up!"}
          </h1>
          <p className="text-muted-foreground font-mono text-sm max-w-md">
            {allCards.length === 0
              ? "Complete some lessons first to unlock vocabulary for review."
              : "No cards due for review today. Come back tomorrow!"}
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 font-mono text-sm">
            <div className="border-2 border-foreground p-4 text-center">
              <div className="text-3xl font-black">{allCards.length}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest">Total Words</div>
            </div>
            <div className="border-2 border-green-500 p-4 text-center">
              <div className="text-3xl font-black text-green-600">{mastered}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest">Mastered</div>
            </div>
            <div className="border-2 border-primary p-4 text-center">
              <div className="text-3xl font-black text-primary">{completedCount}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest">Lessons</div>
            </div>
          </div>
          <Link href="/learn" className="mt-8 border-2 border-foreground px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors flex items-center gap-2">
            <BookOpen size={16} /> Continue Learning
          </Link>
        </div>
        
        <VocabularyDictionary reviews={allCards} srs={srs} />
      </div>
    );
  }

  // === SESSION COMPLETE ===
  if (sessionComplete) {
    const correct = sessionResults.filter(r => r.correct).length;
    return (
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
          <div className="text-6xl mb-6">{correct === sessionResults.length ? "🏆" : correct >= sessionResults.length / 2 ? "👍" : "💪"}</div>
          <h1 className="text-4xl font-black uppercase tracking-tighter mb-2">Session Complete!</h1>
          <p className="font-mono text-2xl font-bold">{correct}/{sessionResults.length} correct</p>
          <div className="flex gap-2 flex-wrap justify-center mt-6 max-w-lg">
            {sessionResults.map((r, i) => (
              <span key={i} className={cn("px-2 py-1 font-mono text-xs border-2", r.correct ? "border-green-500 text-green-600" : "border-red-500 text-red-600")}>{r.word}</span>
            ))}
          </div>
          <div className="flex gap-4 mt-8">
            <Link href="/learn" className="border-2 border-primary bg-primary text-primary-foreground px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest hover:opacity-90 flex items-center gap-2">
              <BookOpen size={14} /> Continue Learning
            </Link>
          </div>
        </div>
        
        <VocabularyDictionary reviews={allCards} srs={srs} />
      </div>
    );
  }

  // === REVIEW CARD ===
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
      </header>

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
          <button onClick={() => handleAnswer(1)} className="flex-1 border-4 border-red-500 text-red-600 py-4 font-black text-sm uppercase tracking-widest hover:bg-red-500 hover:text-white transition-colors flex flex-col items-center justify-center gap-1">
            <ChevronLeft size={20} /> Forgot (1)
          </button>
          <button onClick={() => handleAnswer(3)} className="flex-1 border-4 border-yellow-500 text-yellow-600 py-4 font-black text-sm uppercase tracking-widest hover:bg-yellow-500 hover:text-white transition-colors flex flex-col items-center justify-center gap-1">
            <Minus size={20} /> Hard (3)
          </button>
          <button onClick={() => handleAnswer(5)} className="flex-1 border-4 border-green-500 text-green-600 py-4 font-black text-sm uppercase tracking-widest hover:bg-green-500 hover:text-white transition-colors flex flex-col items-center justify-center gap-1">
            <ChevronRight size={20} /> Easy (5)
          </button>
        </motion.div>
      )}
    </div>
  );
}

function VocabularyDictionary({ reviews, srs }: { reviews: ReviewCard[], srs: Record<string, any> }) {
  if (reviews.length === 0) return null;
  
  return (
    <div className="w-full max-w-3xl mx-auto pb-20 px-6 border-t-4 border-foreground pt-12 mt-8">
      <div className="mb-8">
        <h2 className="text-3xl font-black uppercase tracking-tighter">Your Vocabulary Dictionary</h2>
        <p className="text-muted-foreground font-mono text-sm mt-2">All the words you've unlocked from completed lessons.</p>
      </div>
      
      <div className="w-full border-2 border-foreground bg-background divide-y-2 divide-foreground">
        {reviews.map((r) => {
          const genderColor = r.gender === "der" ? "text-blue-500" : r.gender === "die" ? "text-pink-500" : r.gender === "das" ? "text-green-500" : "";
          const cardSrs = srs[r.word_id];
          const masteryStr = cardSrs ? `Mastery: ${cardSrs.interval} days` : "New";
          
          return (
            <details key={r.word_id} className="group">
              <summary className="list-none hover:bg-muted/50 px-4 py-4 cursor-pointer transition-colors flex justify-between items-center outline-none group-open:bg-primary/10">
                <div className="flex flex-col text-left">
                  <span className="text-xl font-black">{r.word}</span>
                  <div className="flex gap-2 items-center">
                    {r.gender && <span className={cn("font-mono text-xs uppercase tracking-widest font-bold", genderColor)}>{r.gender}</span>}
                    <span className="font-mono text-[10px] text-muted-foreground border px-1">{masteryStr}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <span className="font-mono text-sm max-w-[150px] truncate">{r.meaning}</span>
                  <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                </div>
              </summary>
              <div className="px-6 py-6 bg-secondary/20 border-t-2 border-foreground/10">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">Meaning</h4>
                    <p className="text-2xl font-bold">{r.meaning}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">Phonetic</h4>
                    <p className="text-lg font-mono">/{r.phonetic}/</p>
                  </div>

                  {r.example?.de && (
                    <div className="border-l-4 border-primary pl-4 py-1">
                      <p className="font-bold text-lg">{r.example.de}</p>
                      <p className="text-muted-foreground mt-1">{r.example.en}</p>
                    </div>
                  )}
                </div>
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}

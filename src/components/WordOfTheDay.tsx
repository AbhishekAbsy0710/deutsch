"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, Bookmark, BookmarkCheck, Sparkles } from "lucide-react";
import { getTodaysWord } from "@/data/daily-words";
import { speakGermanNeural } from "@/lib/tts";
import { useProgressStore } from "@/store/useProgressStore";

export function WordOfTheDay() {
  const todaysWord = getTodaysWord();
  const { srs, updateSRS } = useProgressStore();
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Check if word is already in SRS
  useEffect(() => {
    if (srs[todaysWord.word]) {
      setIsSaved(true);
    }
  }, [srs, todaysWord.word]);

  const handleSpeak = async (text: string) => {
    setIsSpeaking(true);
    await speakGermanNeural(text);
    setTimeout(() => setIsSpeaking(false), 2000);
  };

  const handleSaveToSRS = () => {
    if (!isSaved) {
      updateSRS(todaysWord.word, 3); // quality 3 = "correct with difficulty" = first exposure
      setIsSaved(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="relative border-2 border-border bg-card overflow-hidden cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 -translate-y-1/2 translate-x-1/2 rotate-45" />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-primary" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold">
              Word of the Day
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground border border-border px-2 py-0.5">
            {todaysWord.level} · {todaysWord.category}
          </span>
        </div>

        <AnimatePresence mode="wait">
          {!isFlipped ? (
            <motion.div
              key="front"
              initial={{ rotateY: -90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Word */}
              <div className="flex items-baseline gap-3 mb-2">
                {todaysWord.article && (
                  <span className="text-lg text-muted-foreground font-medium">{todaysWord.article}</span>
                )}
                <h3 className="text-3xl md:text-4xl font-black tracking-tight">{todaysWord.word}</h3>
              </div>

              {/* Phonetic */}
              {todaysWord.phonetic && (
                <p className="font-mono text-sm text-muted-foreground mb-3">/{todaysWord.phonetic}/</p>
              )}

              {/* Meaning */}
              <p className="text-lg text-muted-foreground mb-4">{todaysWord.meaning}</p>

              <p className="font-mono text-xs text-muted-foreground/50 uppercase tracking-widest">
                Tap to see example →
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="back"
              initial={{ rotateY: -90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Example */}
              <div className="space-y-3">
                <div className="bg-secondary/50 p-4 border border-border">
                  <p className="text-lg font-bold mb-1">🇩🇪 {todaysWord.example.de}</p>
                  <p className="text-muted-foreground">🇬🇧 {todaysWord.example.en}</p>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSpeak(todaysWord.example.de);
                    }}
                    className="flex items-center gap-2 px-3 py-2 border-2 border-foreground font-mono text-xs uppercase tracking-widest hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  >
                    <Volume2 size={14} className={isSpeaking ? "animate-pulse" : ""} />
                    Listen
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSaveToSRS();
                    }}
                    className={`flex items-center gap-2 px-3 py-2 border-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                      isSaved
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-foreground hover:bg-foreground hover:text-background"
                    }`}
                  >
                    {isSaved ? <BookmarkCheck size={14} /> : <Bookmark size={14} />}
                    {isSaved ? "Saved" : "Save to Review"}
                  </button>
                </div>
              </div>

              <p className="font-mono text-xs text-muted-foreground/50 uppercase tracking-widest mt-3">
                ← Tap to flip back
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

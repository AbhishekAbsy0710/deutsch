"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useProgressStore } from "@/store/useProgressStore";
import { lessonData } from "@/data/lessons";
import { speakGermanNeural } from "@/lib/tts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ArrowLeft, Search, Volume2, BookOpen, Filter } from "lucide-react";

interface DictEntry {
  word: string;
  phonetic?: string;
  meaning: string;
  gender?: string;
  example?: { de: string; en: string };
  lessonId: string;
  lessonTitle: string;
  module: string;
}

const MODULE_ORDER = ["A0", "A1", "A2", "B1", "B2", "C1", "C2"];
const MODULE_COLOR: Record<string, string> = {
  A0: "bg-slate-500", A1: "bg-blue-500",   A2: "bg-cyan-500",
  B1: "bg-teal-500",  B2: "bg-violet-500", C1: "bg-amber-500", C2: "bg-rose-500",
};

export default function DictionaryPage() {
  const router = useRouter();
  const { lessons } = useProgressStore();
  const [query, setQuery]       = useState("");
  const [levelFilter, setLevel] = useState<string>("ALL");
  const [speaking, setSpeaking] = useState<string | null>(null);

  // Only words from unlocked/completed lessons
  const unlockedIds = useMemo(
    () => new Set(Object.entries(lessons).filter(([, lp]) => lp.status !== "locked").map(([id]) => id)),
    [lessons]
  );

  const allEntries = useMemo<DictEntry[]>(() => {
    const entries: DictEntry[] = [];
    for (const [lessonId, lesson] of Object.entries(lessonData)) {
      if (!unlockedIds.has(lessonId)) continue;
      for (const block of lesson.blocks) {
        if (block.type === "flashcard" && "cards" in block) {
          for (const card of block.cards) {
            entries.push({
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
    // Sort alphabetically
    return entries.sort((a, b) => a.word.localeCompare(b.word, "de"));
  }, [unlockedIds]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return allEntries.filter(e => {
      const matchLevel  = levelFilter === "ALL" || e.module === levelFilter;
      const matchSearch = !q || e.word.toLowerCase().includes(q) || e.meaning.toLowerCase().includes(q);
      return matchLevel && matchSearch;
    });
  }, [allEntries, query, levelFilter]);

  // Available levels (only those the user has unlocked)
  const availableLevels = useMemo(() => {
    const levels = new Set(allEntries.map(e => e.module));
    return MODULE_ORDER.filter(l => levels.has(l));
  }, [allEntries]);

  const handleSpeak = async (word: string) => {
    if (speaking) return;
    setSpeaking(word);
    try { await speakGermanNeural(word); } catch { /* silent */ }
    setSpeaking(null);
  };

  return (
    <div className="flex flex-col min-h-screen max-w-4xl mx-auto w-full p-4 sm:p-8">
      {/* Header */}
      <header className="flex items-center gap-4 mb-6 pt-4">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="w-5 h-5 text-muted-foreground" />
        </Button>
        <div className="flex items-center gap-2">
          <div className="bg-primary text-primary-foreground px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2">
            <BookOpen size={14} /> Vocabulary
          </div>
          <span className="text-muted-foreground font-mono text-xs">
            {allEntries.length.toLocaleString()} words unlocked
          </span>
        </div>
      </header>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            className="pl-9 font-mono border-2"
            placeholder="Search German or English..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <Filter size={14} className="text-muted-foreground shrink-0" />
          {["ALL", ...availableLevels].map(level => (
            <button
              key={level}
              onClick={() => setLevel(level)}
              className={cn(
                "px-3 py-1.5 rounded font-mono text-xs font-bold border-2 transition-all whitespace-nowrap",
                levelFilter === level
                  ? level === "ALL"
                    ? "bg-foreground text-background border-foreground"
                    : `${MODULE_COLOR[level]} text-white border-transparent`
                  : "border-border text-muted-foreground hover:border-primary"
              )}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* No results */}
      {filtered.length === 0 && (
        <div className="flex-1 flex items-center justify-center text-center py-20">
          <div className="space-y-3">
            <p className="text-4xl">📖</p>
            {allEntries.length === 0 ? (
              <>
                <p className="font-bold text-lg">No words unlocked yet</p>
                <p className="text-muted-foreground font-mono text-sm">Complete lessons to add words to your dictionary.</p>
                <Button onClick={() => router.push("/learn")} className="mt-4 border-2">
                  Start Learning
                </Button>
              </>
            ) : (
              <>
                <p className="font-bold text-lg">No matches for "{query}"</p>
                <p className="text-muted-foreground font-mono text-sm">Try a different word or clear the filter.</p>
              </>
            )}
          </div>
        </div>
      )}

      {/* Word grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((entry, i) => (
          <motion.div
            key={`${entry.lessonId}-${entry.word}-${i}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15, delay: Math.min(i * 0.01, 0.3) }}
            className="border-2 border-border rounded-xl p-4 bg-background hover:border-primary/50 transition-colors group"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex-1 min-w-0">
                <p className="font-black text-lg leading-tight truncate">{entry.word}</p>
                {entry.phonetic && (
                  <p className="text-muted-foreground font-mono text-xs">/{entry.phonetic}/</p>
                )}
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                {entry.gender && (
                  <span className="border border-border px-1.5 py-0.5 rounded font-mono text-xs text-muted-foreground">
                    {entry.gender}
                  </span>
                )}
                <button
                  onClick={() => handleSpeak(entry.word)}
                  className={cn(
                    "p-1.5 rounded-lg border transition-colors",
                    speaking === entry.word
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                  )}
                >
                  <Volume2 size={13} className={speaking === entry.word ? "animate-pulse" : ""} />
                </button>
              </div>
            </div>

            <p className="text-primary font-bold text-sm mb-1">{entry.meaning}</p>

            {entry.example && (
              <div className="mt-2 pt-2 border-t border-border/60 space-y-0.5">
                <p className="text-xs font-medium leading-snug">{entry.example.de}</p>
                <p className="text-xs text-muted-foreground italic leading-snug">{entry.example.en}</p>
              </div>
            )}

            <div className="flex items-center justify-between mt-3 pt-2 border-t border-border/40">
              <span className={cn("text-white text-xs font-mono font-bold px-2 py-0.5 rounded", MODULE_COLOR[entry.module] ?? "bg-muted")}>
                {entry.module}
              </span>
              <span className="text-xs text-muted-foreground font-mono truncate ml-2">{entry.lessonTitle}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {filtered.length > 0 && (
        <p className="text-center text-muted-foreground font-mono text-xs mt-8 pb-4">
          Showing {filtered.length.toLocaleString()} of {allEntries.toLocaleString()} words
        </p>
      )}
    </div>
  );
}

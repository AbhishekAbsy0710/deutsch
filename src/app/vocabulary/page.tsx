"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Volume2, Plus, Check, Search, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { vocabularyTopics, VocabularyWord } from "@/data/vocabulary-lists";
import { useProgressStore } from "@/store/useProgressStore";
import { speakGermanNeural } from "@/lib/tts";

const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

export default function VocabularyPage() {
  const { level: storedLevel, addToVocabularyBank, vocabularyBank } = useProgressStore();
  const [selectedLevel, setSelectedLevel] = useState(storedLevel || "A1");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedWord, setExpandedWord] = useState<string | null>(null);
  const [showLevelPicker, setShowLevelPicker] = useState(false);

  const topics = useMemo(() =>
    vocabularyTopics.filter(t => t.level === selectedLevel),
    [selectedLevel]
  );

  const allWordsForLevel = useMemo(() => {
    const source = selectedTopic
      ? topics.filter(t => t.id === selectedTopic)
      : topics;
    return source.flatMap(t => t.words);
  }, [topics, selectedTopic]);

  const filteredWords = useMemo(() => {
    if (!searchQuery) return allWordsForLevel;
    const q = searchQuery.toLowerCase();
    return allWordsForLevel.filter(w =>
      w.word.toLowerCase().includes(q) ||
      w.meaning.toLowerCase().includes(q)
    );
  }, [allWordsForLevel, searchQuery]);

  const isInBank = (word: string) => vocabularyBank[word.toLowerCase()] !== undefined;

  const handleAddToBank = (w: VocabularyWord) => {
    addToVocabularyBank([{
      word: w.word,
      meaning: w.meaning,
      gender: w.article,
      example: { de: w.example, en: w.exampleTranslation },
      source: "manual",
      level: w.level,
      addedDate: new Date().toISOString(),
    }]);
  };

  return (
    <div className="flex-1 p-6 md:p-10 max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight flex items-center gap-3">
          <BookOpen className="text-primary" size={32} />
          Vocabulary Explorer
        </h1>
        <p className="text-muted-foreground mt-2">
          {filteredWords.length} words across {topics.length} topics at {selectedLevel} level
        </p>
      </div>

      {/* Platform vocab stats */}
      <div className="border-2 border-foreground p-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-3xl font-black">16,000+</p>
            <p className="font-mono text-xs text-muted-foreground uppercase">Words on Platform</p>
            <p className="text-[10px] text-muted-foreground">Across 826 lessons</p>
          </div>
          <div className="text-center sm:border-l-2 sm:border-r-2 border-border">
            <p className="text-3xl font-black">{Object.keys(vocabularyBank).length}</p>
            <p className="font-mono text-xs text-muted-foreground uppercase">In Your Word Bank</p>
            <p className="text-[10px] text-muted-foreground">From lessons and browsing</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black">{vocabularyTopics.reduce((sum, t) => sum + t.words.length, 0)}</p>
            <p className="font-mono text-xs text-muted-foreground uppercase">Curated Below</p>
            <p className="text-[10px] text-muted-foreground">With examples &amp; articles</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-3">
        {/* Level Picker */}
        <div className="relative">
          <Button
            variant="outline"
            className="border-2 border-foreground font-bold gap-2"
            onClick={() => setShowLevelPicker(!showLevelPicker)}
          >
            <Filter size={16} />
            Level: {selectedLevel}
            <ChevronDown size={14} className={cn("transition-transform", showLevelPicker && "rotate-180")} />
          </Button>
          <AnimatePresence>
            {showLevelPicker && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="absolute top-12 left-0 z-50 bg-card border-2 border-foreground p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
              >
                {LEVELS.map(l => (
                  <button
                    key={l}
                    onClick={() => { setSelectedLevel(l); setShowLevelPicker(false); setSelectedTopic(null); }}
                    className={cn(
                      "block w-full text-left px-4 py-2 font-bold transition-colors",
                      l === selectedLevel ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                    )}
                  >
                    {l}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Topic Filter */}
        <div className="flex gap-2 flex-wrap">
          <Button
            variant={selectedTopic === null ? "default" : "outline"}
            className={cn("border-2 border-foreground font-bold", selectedTopic === null && "bg-primary text-primary-foreground")}
            onClick={() => setSelectedTopic(null)}
          >
            All Topics
          </Button>
          {topics.map(t => (
            <Button
              key={t.id}
              variant={selectedTopic === t.id ? "default" : "outline"}
              className={cn("border-2 border-foreground font-bold text-sm", selectedTopic === t.id && "bg-primary text-primary-foreground")}
              onClick={() => setSelectedTopic(t.id)}
            >
              {t.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
        <input
          type="text"
          placeholder="Search words..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border-2 border-foreground bg-card font-medium focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Word Grid */}
      <div className="grid gap-3">
        <AnimatePresence mode="popLayout">
          {filteredWords.map((w, i) => {
            const isExpanded = expandedWord === w.word;
            const saved = isInBank(w.word);
            return (
              <motion.div
                key={w.word + i}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: Math.min(i * 0.02, 0.3) }}
                className={cn(
                  "border-2 border-foreground bg-card cursor-pointer transition-all",
                  "shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)]",
                  "hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]",
                  isExpanded && "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]"
                )}
                onClick={() => setExpandedWord(isExpanded ? null : w.word)}
              >
                {/* Main Row */}
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    {w.article && (
                      <span className={cn(
                        "px-2 py-1 text-xs font-black border-2",
                        w.article === "der" ? "border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950" :
                        w.article === "die" ? "border-pink-500 text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-950" :
                        "border-green-500 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950"
                      )}>
                        {w.article}
                      </span>
                    )}
                    <div className="min-w-0">
                      <p className="font-black text-lg truncate">{w.word}</p>
                      <p className="text-muted-foreground text-sm truncate">{w.meaning}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => { e.stopPropagation(); speakGermanNeural(w.word); }}
                      className="h-8 w-8 p-0"
                    >
                      <Volume2 size={16} />
                    </Button>
                    <Button
                      variant={saved ? "ghost" : "outline"}
                      size="sm"
                      disabled={saved}
                      onClick={(e) => { e.stopPropagation(); handleAddToBank(w); }}
                      className={cn("h-8 border-2 font-bold text-xs", saved && "text-green-600")}
                    >
                      {saved ? <Check size={14} /> : <><Plus size={14} /> Add</>}
                    </Button>
                  </div>
                </div>

                {/* Expanded Detail */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-2 border-t-2 border-foreground space-y-3">
                        {w.plural && (
                          <div className="flex gap-2 text-sm">
                            <span className="font-bold text-muted-foreground">Plural:</span>
                            <span className="font-medium">{w.plural}</span>
                          </div>
                        )}
                        <div className="bg-muted p-3 space-y-1">
                          <p className="font-bold text-sm flex items-center gap-2">
                            Example
                            <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={(e) => { e.stopPropagation(); speakGermanNeural(w.example); }}>
                              <Volume2 size={12} />
                            </Button>
                          </p>
                          <p className="font-medium">{w.example}</p>
                          <p className="text-muted-foreground text-sm">{w.exampleTranslation}</p>
                        </div>
                        {w.collocations && w.collocations.length > 0 && (
                          <div>
                            <p className="font-bold text-sm text-muted-foreground mb-1">Common collocations:</p>
                            <div className="flex flex-wrap gap-2">
                              {w.collocations.map(c => (
                                <span key={c} className="px-2 py-1 bg-primary/10 border border-primary/30 text-xs font-bold">{c}</span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {filteredWords.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-lg font-bold">No words found</p>
            <p className="text-sm mt-1">Try a different search or level</p>
          </div>
        )}
      </div>
    </div>
  );
}

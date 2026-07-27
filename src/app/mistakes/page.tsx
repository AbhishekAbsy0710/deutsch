"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, AlertTriangle, CheckCircle2, RotateCcw, Search, Trash2, TrendingUp, Filter } from "lucide-react";
import Link from "next/link";
import { useProgressStore } from "@/store/useProgressStore";
import { Fritz } from "@/components/mascot/Fritz";

type SortMode = "count" | "recent" | "alpha";

export default function MistakesPage() {
  const { writingErrors } = useProgressStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortMode, setSortMode] = useState<SortMode>("count");
  const [selectedError, setSelectedError] = useState<number | null>(null);

  // Filter and sort errors
  const filteredErrors = useMemo(() => {
    let errors = [...writingErrors];

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      errors = errors.filter(
        e => e.pattern.toLowerCase().includes(q) || e.correction.toLowerCase().includes(q)
      );
    }

    // Sort
    switch (sortMode) {
      case "count":
        errors.sort((a, b) => b.count - a.count);
        break;
      case "recent":
        errors.sort((a, b) => new Date(b.lastDate).getTime() - new Date(a.lastDate).getTime());
        break;
      case "alpha":
        errors.sort((a, b) => a.pattern.localeCompare(b.pattern));
        break;
    }

    return errors;
  }, [writingErrors, searchQuery, sortMode]);

  // Stats
  const totalErrors = writingErrors.length;
  const totalOccurrences = writingErrors.reduce((sum, e) => sum + e.count, 0);
  const topPattern = writingErrors.length > 0
    ? [...writingErrors].sort((a, b) => b.count - a.count)[0]
    : null;

  return (
    <div className="flex-1 px-6 md:px-16 py-12 max-w-[1200px] mx-auto w-full">
      {/* Header */}
      <header className="mb-12 border-b-4 border-foreground pb-8">
        <div className="flex items-start justify-between">
          <div>
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              <ArrowLeft size={14} />
              Back to Dashboard
            </Link>
            <div className="text-primary font-mono text-sm tracking-widest uppercase mb-4 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-primary block"></span>
              Error Journal
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85]">
              Your<br />
              <span className="text-muted-foreground">Mistakes.</span>
            </h1>
            <p className="text-muted-foreground font-mono text-sm mt-4 max-w-md">
              Every mistake is a lesson. Track patterns, learn corrections, and watch your accuracy improve over time.
            </p>
          </div>
          <div className="hidden md:block">
            <Fritz mood={totalErrors > 5 ? "encouraging" : "proud"} size={90} showMessage={false} />
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        <div className="border-2 border-foreground p-4 flex items-center gap-3">
          <AlertTriangle size={20} className="text-orange-500" />
          <div>
            <p className="text-2xl font-black">{totalErrors}</p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Unique Patterns
            </p>
          </div>
        </div>
        <div className="border-2 border-foreground p-4 flex items-center gap-3">
          <RotateCcw size={20} className="text-red-500" />
          <div>
            <p className="text-2xl font-black">{totalOccurrences}</p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Total Occurrences
            </p>
          </div>
        </div>
        <div className="border-2 border-foreground p-4 flex items-center gap-3">
          <TrendingUp size={20} className="text-primary" />
          <div>
            <p className="text-2xl font-black truncate max-w-[120px]">{topPattern?.pattern || "—"}</p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Most Common
            </p>
          </div>
        </div>
      </div>

      {/* Search + Sort Controls */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search patterns..."
            className="w-full pl-9 pr-4 py-3 border-2 border-foreground bg-background font-mono text-sm focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter size={14} className="text-muted-foreground" />
          {(["count", "recent", "alpha"] as SortMode[]).map((mode) => (
            <button
              key={mode}
              onClick={() => setSortMode(mode)}
              className={`px-3 py-2 border-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                sortMode === mode
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-foreground hover:bg-secondary"
              }`}
            >
              {mode === "count" ? "Frequency" : mode === "recent" ? "Recent" : "A–Z"}
            </button>
          ))}
        </div>
      </div>

      {/* Error List */}
      {filteredErrors.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="border-2 border-dashed border-border p-12 text-center"
        >
          <Fritz mood="idle" size={80} message={writingErrors.length === 0 ? "No mistakes yet — go practice writing!" : "No matches found"} />
          <p className="text-muted-foreground font-mono text-sm mt-4">
            {writingErrors.length === 0
              ? "Start a writing session to begin tracking your error patterns."
              : "Try a different search term."}
          </p>
          {writingErrors.length === 0 && (
            <Link
              href="/write"
              className="inline-block mt-6 px-6 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-wide hover:opacity-90 transition-opacity"
            >
              Start Writing Practice
            </Link>
          )}
        </motion.div>
      ) : (
        <div className="space-y-3">
          <AnimatePresence>
            {filteredErrors.map((error, index) => (
              <motion.div
                key={error.pattern}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: index * 0.03 }}
                className="border-2 border-foreground hover:border-primary transition-colors group"
              >
                <button
                  onClick={() => setSelectedError(selectedError === index ? null : index)}
                  className="w-full text-left p-5 flex items-start justify-between"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-500/10 text-red-600 dark:text-red-400 font-mono text-xs">
                        <AlertTriangle size={10} />
                        ×{error.count}
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                        Last: {new Date(error.lastDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-red-500 line-through font-medium">{error.pattern}</span>
                      <span className="text-muted-foreground">→</span>
                      <span className="text-green-600 dark:text-green-400 font-medium flex items-center gap-1">
                        <CheckCircle2 size={14} />
                        {error.correction}
                      </span>
                    </div>
                  </div>
                </button>

                {/* Expanded detail */}
                <AnimatePresence>
                  {selectedError === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-2 border-t-2 border-border">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="bg-red-500/5 border border-red-500/20 p-4">
                            <p className="font-mono text-xs uppercase tracking-widest text-red-500 mb-2">
                              Your Pattern
                            </p>
                            <p className="text-lg font-bold">{error.pattern}</p>
                          </div>
                          <div className="bg-green-500/5 border border-green-500/20 p-4">
                            <p className="font-mono text-xs uppercase tracking-widest text-green-600 dark:text-green-400 mb-2">
                              Correct Form
                            </p>
                            <p className="text-lg font-bold">{error.correction}</p>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <p className="text-muted-foreground text-xs font-mono">
                            Made this mistake {error.count} time{error.count !== 1 ? "s" : ""}
                          </p>
                          <Link
                            href="/write"
                            className="text-xs font-mono text-primary hover:underline"
                          >
                            Practice writing →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PenTool, Send, Loader2, ArrowLeft, CheckCircle2, XCircle, AlertTriangle, Sparkles, ChevronDown, RotateCcw, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { writingPrompts, WritingPrompt, getAvailableLevels } from "@/data/writing-prompts";
import { useProgressStore } from "@/store/useProgressStore";
import { createClient } from "@/lib/supabase";
import { speakGermanNeural } from "@/lib/tts";

interface Correction {
  original: string;
  corrected: string;
  type: "grammar" | "spelling" | "word-choice" | "register" | "punctuation";
  explanation: string;
}

interface WritingFeedback {
  overallScore: number;
  level?: string;
  corrections: Correction[];
  strengths: string[];
  suggestions: string[];
  correctedText: string;
  wordCount: number;
  grammarScore: number;
  vocabularyScore: number;
  structureScore: number;
}

const CORRECTION_COLORS: Record<string, string> = {
  grammar: "bg-red-500/15 text-red-700 dark:text-red-400 border-red-500/30",
  spelling: "bg-orange-500/15 text-orange-700 dark:text-orange-400 border-orange-500/30",
  "word-choice": "bg-blue-500/15 text-blue-700 dark:text-blue-400 border-blue-500/30",
  register: "bg-purple-500/15 text-purple-700 dark:text-purple-400 border-purple-500/30",
  punctuation: "bg-yellow-500/15 text-yellow-700 dark:text-yellow-400 border-yellow-500/30",
};

const CORRECTION_ICONS: Record<string, string> = {
  grammar: "📐", spelling: "✏️", "word-choice": "💬", register: "🎭", punctuation: "❗",
};

function ScoreRing({ score, label, size = 64 }: { score: number; label: string; size?: number }) {
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color = score >= 80 ? "stroke-green-500" : score >= 60 ? "stroke-yellow-500" : "stroke-red-500";

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="currentColor" className="text-muted/20" strokeWidth={4} />
          <motion.circle
            cx={size / 2} cy={size / 2} r={radius} fill="none" className={color} strokeWidth={4}
            strokeDasharray={circumference} initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }} transition={{ duration: 1, ease: "easeOut" }}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-bold text-sm">{score}</div>
      </div>
      <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">{label}</span>
    </div>
  );
}

export default function WritePage() {
  const { level: storedLevel, recordWritingError, writingErrors } = useProgressStore();
  const [selectedLevel, setSelectedLevel] = useState(storedLevel || "A1");
  const [selectedPrompt, setSelectedPrompt] = useState<WritingPrompt | null>(null);
  const [text, setText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<WritingFeedback | null>(null);
  const [showLevelPicker, setShowLevelPicker] = useState(false);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const levels = getAvailableLevels();
  const prompts = writingPrompts.filter(p => p.level === selectedLevel);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getSession().then(({ data }) => {
      setAuthToken(data.session?.access_token ?? null);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setAuthToken(session?.access_token ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  const handleSubmit = async () => {
    if (!text.trim() || !selectedPrompt) return;
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/write-check", {
        method: "POST",
        headers: { "Content-Type": "application/json", ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}) },
        body: JSON.stringify({ text, level: selectedLevel, promptTitle: selectedPrompt.title, authToken }),
      });
      if (!res.ok) throw new Error("Failed");
      const data = await res.json();
      setFeedback(data);
      // Record errors for recycling
      if (data.corrections?.length) {
        for (const c of data.corrections) {
          recordWritingError(c.original, c.corrected);
        }
      }
    } catch {
      setFeedback(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setText("");
    setFeedback(null);
    setSelectedPrompt(null);
  };

  // ── Prompt Selection View ──
  if (!selectedPrompt) {
    return (
      <div className="flex-1 p-6 md:p-10 max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight flex items-center gap-3">
            <PenTool className="w-8 h-8 text-primary" /> Schreibübung
          </h1>
          <p className="text-muted-foreground mt-2">Practice writing German with AI-powered correction</p>
        </div>

        {/* Level Picker */}
        <div className="relative">
          <button onClick={() => setShowLevelPicker(!showLevelPicker)}
            className="flex items-center gap-2 px-4 py-3 bg-card border-2 border-border font-bold text-lg hover:bg-secondary transition-colors w-full md:w-auto">
            Level: {selectedLevel} <ChevronDown className="w-4 h-4" />
          </button>
          <AnimatePresence>
            {showLevelPicker && (
              <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                className="absolute z-50 mt-1 bg-card border-2 border-border shadow-lg">
                {levels.map(l => (
                  <button key={l} onClick={() => { setSelectedLevel(l); setShowLevelPicker(false); }}
                    className={cn("block w-full px-6 py-3 text-left font-medium hover:bg-secondary transition-colors",
                      l === selectedLevel && "bg-primary text-primary-foreground")}>
                    {l}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Recurring Mistakes Warning */}
        {writingErrors.filter(e => e.count >= 2).length > 0 && (
          <div className="border-2 border-amber-500/30 bg-amber-500/5 p-4">
            <p className="text-xs font-mono uppercase text-amber-500 font-bold mb-2">⚠ Your Recurring Mistakes</p>
            <p className="text-xs text-muted-foreground mb-3">These errors keep appearing. Pay extra attention!</p>
            <div className="space-y-1.5">
              {writingErrors
                .filter(e => e.count >= 2)
                .sort((a, b) => b.count - a.count)
                .slice(0, 5)
                .map((e, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <span className="font-mono text-xs text-amber-500 w-6">{e.count}×</span>
                    <span className="line-through text-red-400 text-xs">{e.pattern}</span>
                    <span className="text-xs text-muted-foreground">→</span>
                    <span className="text-green-400 text-xs font-bold">{e.correction}</span>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Prompt Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {prompts.map(prompt => (
            <motion.button key={prompt.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedPrompt(prompt)}
              className="text-left p-6 bg-card border-2 border-border hover:border-primary transition-colors space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-2 py-1 bg-muted">
                  {prompt.category}
                </span>
                <span className="text-xs text-muted-foreground">{prompt.minWords}–{prompt.maxWords} words</span>
              </div>
              <h3 className="text-lg font-bold">{prompt.titleDe}</h3>
              <p className="text-sm text-muted-foreground">{prompt.title}</p>
              <p className="text-sm text-muted-foreground line-clamp-2">{prompt.prompt}</p>
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  // ── Writing + Feedback View ──
  return (
    <div className="flex-1 p-6 md:p-10 max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={handleReset} className="font-bold">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </Button>
        <div>
          <h1 className="text-2xl font-black">{selectedPrompt.titleDe}</h1>
          <p className="text-sm text-muted-foreground">{selectedPrompt.level} · {selectedPrompt.category}</p>
        </div>
      </div>

      {/* Prompt Card */}
      <div className="bg-card border-2 border-border p-6 space-y-4">
        <p className="text-base leading-relaxed">{selectedPrompt.prompt}</p>
        {selectedPrompt.hints.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Hints</p>
            {selectedPrompt.hints.map((hint, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Sparkles className="w-3 h-3 mt-1 shrink-0 text-primary" />
                <span>{hint}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Writing Area */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-lg">Your Text</h2>
            <span className={cn("text-sm font-mono",
              wordCount < selectedPrompt.minWords ? "text-orange-500" :
              wordCount > selectedPrompt.maxWords ? "text-red-500" : "text-green-500")}>
              {wordCount} / {selectedPrompt.minWords}–{selectedPrompt.maxWords} words
            </span>
          </div>
          <textarea ref={textareaRef} value={text} onChange={e => setText(e.target.value)}
            className="w-full h-64 bg-card border-2 border-border p-4 text-base resize-none focus:outline-none focus:border-primary transition-colors font-mono"
            placeholder="Schreibe hier auf Deutsch..."
            disabled={isSubmitting || !!feedback}
          />
          {!feedback && (
            <Button onClick={handleSubmit} disabled={!text.trim() || isSubmitting}
              className="w-full font-bold text-base py-6">
              {isSubmitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Analyzing...</> :
                <><Send className="w-4 h-4 mr-2" /> Check My Writing</>}
            </Button>
          )}
          {feedback && (
            <Button onClick={handleReset} variant="outline" className="w-full font-bold">
              <RotateCcw className="w-4 h-4 mr-2" /> Try Another Prompt
            </Button>
          )}
        </div>

        {/* Feedback Panel */}
        <AnimatePresence>
          {feedback && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              className="space-y-6">
              {/* Score Overview */}
              <div className="bg-card border-2 border-border p-6 space-y-4">
                <h3 className="font-bold text-lg">Score</h3>
                <div className="flex items-center justify-around">
                  <ScoreRing score={feedback.overallScore} label="Overall" size={80} />
                  <ScoreRing score={feedback.grammarScore} label="Grammar" />
                  <ScoreRing score={feedback.vocabularyScore} label="Vocab" />
                  <ScoreRing score={feedback.structureScore} label="Structure" />
                </div>
              </div>

              {/* Strengths */}
              {feedback.strengths?.length > 0 && (
                <div className="bg-green-500/5 border-2 border-green-500/20 p-4 space-y-2">
                  <h3 className="font-bold text-green-700 dark:text-green-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Strengths
                  </h3>
                  {feedback.strengths.map((s, i) => (
                    <p key={i} className="text-sm text-green-800 dark:text-green-300">• {s}</p>
                  ))}
                </div>
              )}

              {/* Corrections */}
              {feedback.corrections?.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-500" />
                    Corrections ({feedback.corrections.length})
                  </h3>
                  {feedback.corrections.map((c, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className={cn("border p-4 space-y-2", CORRECTION_COLORS[c.type] || CORRECTION_COLORS.grammar)}>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                        <span>{CORRECTION_ICONS[c.type] || "📐"}</span>
                        <span>{c.type}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="line-through opacity-60">{c.original}</span>
                        <span>→</span>
                        <span className="font-bold">{c.corrected}</span>
                      </div>
                      <p className="text-xs opacity-80">{c.explanation}</p>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Corrected Text */}
              {feedback.correctedText && (
                <div className="bg-card border-2 border-border p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold">Corrected Version</h3>
                    <Button variant="ghost" size="sm"
                      onClick={() => speakGermanNeural(feedback.correctedText)}>
                      <Volume2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-sm leading-relaxed font-mono whitespace-pre-wrap">{feedback.correctedText}</p>
                </div>
              )}

              {/* Suggestions */}
              {feedback.suggestions?.length > 0 && (
                <div className="bg-blue-500/5 border-2 border-blue-500/20 p-4 space-y-2">
                  <h3 className="font-bold text-blue-700 dark:text-blue-400 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> Suggestions
                  </h3>
                  {feedback.suggestions.map((s, i) => (
                    <p key={i} className="text-sm text-blue-800 dark:text-blue-300">• {s}</p>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, CheckCircle2, XCircle, Volume2, ChevronRight, MapPin, BookOpen, Smile, Clock, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { culturalNotes, CulturalNote } from "@/data/cultural-knowledge";
import { speakGermanNeural } from "@/lib/tts";

const TABS: { value: CulturalNote["category"]; label: string; icon: React.ElementType }[] = [
  { value: "dach-differences", label: "DACH", icon: MapPin },
  { value: "register", label: "Register", icon: BookOpen },
  { value: "humor", label: "Humor", icon: Smile },
  { value: "customs", label: "Customs", icon: Clock },
  { value: "history", label: "History", icon: Landmark },
];

export default function CulturePage() {
  const [activeTab, setActiveTab] = useState<CulturalNote["category"]>("dach-differences");
  const [expandedNote, setExpandedNote] = useState<string | null>(null);
  const [quizStates, setQuizStates] = useState<Record<string, Record<number, number | null>>>({});

  const notes = useMemo(() =>
    culturalNotes.filter(n => n.category === activeTab),
    [activeTab]
  );

  const handleQuizAnswer = (noteId: string, quizIdx: number, answerIdx: number) => {
    setQuizStates(prev => ({
      ...prev,
      [noteId]: { ...(prev[noteId] || {}), [quizIdx]: answerIdx }
    }));
  };

  return (
    <div className="flex-1 p-6 md:p-10 max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight flex items-center gap-3">
          <Globe className="text-primary" size={32} />
          Kulturwissen
        </h1>
        <p className="text-muted-foreground mt-2">
          Cultural knowledge that separates textbook learners from true German speakers
        </p>
      </div>

      {/* Tab Bar */}
      <div className="flex gap-2 flex-wrap border-b-2 border-foreground pb-4">
        {TABS.map(tab => {
          const Icon = tab.icon;
          const count = culturalNotes.filter(n => n.category === tab.value).length;
          return (
            <button
              key={tab.value}
              onClick={() => { setActiveTab(tab.value); setExpandedNote(null); }}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 font-bold text-sm border-2 border-foreground transition-all",
                "shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)]",
                activeTab === tab.value
                  ? "bg-primary text-primary-foreground shadow-[0px_0px_0px_0px] translate-x-[2px] translate-y-[2px]"
                  : "bg-card hover:bg-muted"
              )}
            >
              <Icon size={16} />
              {tab.label}
              <span className="text-xs opacity-70">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Notes */}
      <div className="grid gap-5">
        <AnimatePresence mode="popLayout">
          {notes.map((note, i) => {
            const isExpanded = expandedNote === note.id;
            const noteQuiz = quizStates[note.id] || {};

            return (
              <motion.div
                key={note.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.05, 0.3) }}
                className={cn(
                  "border-2 border-foreground bg-card overflow-hidden transition-shadow",
                  "shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)]",
                  isExpanded && "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]"
                )}
              >
                {/* Header */}
                <button
                  className="w-full text-left p-5 flex items-center justify-between hover:bg-muted/50 transition-colors"
                  onClick={() => setExpandedNote(isExpanded ? null : note.id)}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-black px-2 py-0.5 bg-primary/10 border border-primary/30 text-primary">{note.level}</span>
                      <h3 className="text-lg font-black">{note.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm font-medium">{note.titleDe}</p>
                  </div>
                  <ChevronRight size={20} className={cn("transition-transform shrink-0", isExpanded && "rotate-90")} />
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 space-y-5 border-t-2 border-foreground pt-4">
                        {/* Content */}
                        <p className="text-sm leading-relaxed">{note.content}</p>

                        {/* Examples */}
                        {note.examples && note.examples.length > 0 && (
                          <div>
                            <h4 className="font-black text-sm mb-3 text-muted-foreground uppercase tracking-wider">Examples</h4>
                            <div className="grid gap-2">
                              {note.examples.map((ex, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-muted p-3">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-7 w-7 p-0 shrink-0"
                                    onClick={() => speakGermanNeural(ex.text)}
                                  >
                                    <Volume2 size={14} />
                                  </Button>
                                  <div className="flex-1 min-w-0">
                                    <p className="font-bold text-sm">{ex.text}</p>
                                    <p className="text-muted-foreground text-xs">{ex.meaning}</p>
                                  </div>
                                  {ex.region && (
                                    <span className="text-xs font-medium px-2 py-0.5 bg-primary/10 border border-primary/30 shrink-0">
                                      {ex.region}
                                    </span>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Quiz */}
                        {note.quiz && note.quiz.length > 0 && (
                          <div>
                            <h4 className="font-black text-sm mb-3 text-muted-foreground uppercase tracking-wider">Test Yourself</h4>
                            <div className="grid gap-4">
                              {note.quiz.map((q, qIdx) => {
                                const userAnswer = noteQuiz[qIdx] ?? null;
                                const answered = userAnswer !== null;
                                return (
                                  <div key={qIdx} className="border-2 border-foreground/30 p-4">
                                    <p className="font-bold text-sm mb-3">{q.question}</p>
                                    <div className="grid gap-2">
                                      {q.options.map((opt, oIdx) => {
                                        const isCorrect = oIdx === q.correctIndex;
                                        const isSelected = userAnswer === oIdx;
                                        return (
                                          <button
                                            key={oIdx}
                                            disabled={answered}
                                            onClick={() => handleQuizAnswer(note.id, qIdx, oIdx)}
                                            className={cn(
                                              "w-full text-left px-4 py-2.5 text-sm font-medium border-2 transition-all",
                                              !answered && "border-foreground/20 hover:border-foreground hover:bg-muted cursor-pointer",
                                              answered && isCorrect && "border-green-500 bg-green-50 dark:bg-green-950",
                                              answered && isSelected && !isCorrect && "border-red-500 bg-red-50 dark:bg-red-950",
                                              answered && !isCorrect && !isSelected && "border-foreground/10 opacity-50"
                                            )}
                                          >
                                            <div className="flex items-center justify-between">
                                              <span>{opt}</span>
                                              {answered && isCorrect && <CheckCircle2 className="text-green-600" size={16} />}
                                              {answered && isSelected && !isCorrect && <XCircle className="text-red-600" size={16} />}
                                            </div>
                                          </button>
                                        );
                                      })}
                                    </div>
                                    {answered && (
                                      <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-sm text-muted-foreground mt-3 bg-muted p-2"
                                      >
                                        {q.explanation}
                                      </motion.p>
                                    )}
                                  </div>
                                );
                              })}
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
      </div>
    </div>
  );
}

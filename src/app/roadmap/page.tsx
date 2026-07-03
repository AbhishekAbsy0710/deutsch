"use client";

import { useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Map, BookOpen, PenTool, Headphones, Mic, MessageSquareMore, FileText, Trophy, ArrowRight, CheckCircle2, Clock, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import { useProgressStore } from "@/store/useProgressStore";
import { lessonData } from "@/data/lessons";

interface RoadmapLevel {
  id: string;
  title: string;
  subtitle: string;
  timeEstimate: string;
  canDo: string[];
  grammarTopics: string[];
  recommendedActivities: { label: string; href: string; icon: React.ElementType }[];
  lessonCount: number;
}

export default function RoadmapPage() {
  const { lessons, getLessonStatus } = useProgressStore();

  const allLessons = useMemo(() => Object.values(lessonData), []);

  const getLevelStats = (levelId: string) => {
    const levelLessons = allLessons.filter(l => l.module === levelId);
    const completed = levelLessons.filter(l => getLessonStatus(l.id) === "completed").length;
    return { total: levelLessons.length, completed, percent: levelLessons.length > 0 ? Math.round((completed / levelLessons.length) * 100) : 0 };
  };

  const levels: RoadmapLevel[] = [
    {
      id: "A0",
      title: "A0: The Absolute Basics",
      subtitle: "Alphabet, pronunciation, and survival words",
      timeEstimate: "~2 weeks",
      canDo: [
        "Pronounce all German sounds correctly",
        "Know the alphabet and special characters",
        "Say basic survival phrases (Hello, Thank you, Sorry)",
      ],
      grammarTopics: ["Alphabet & phonetics", "Basic pronunciation rules", "Survival vocabulary"],
      recommendedActivities: [
        { label: "Start Lessons", href: "/learn", icon: BookOpen },
        { label: "Practice Speaking", href: "/speak", icon: Mic },
      ],
      lessonCount: getLevelStats("A0").total,
    },
    {
      id: "A1",
      title: "A1: First Steps",
      subtitle: "Basic sentences, questions, and daily life",
      timeEstimate: "~2 months",
      canDo: [
        "Introduce yourself and others",
        "Ask and answer simple questions (Where? What? How much?)",
        "Order food in a restaurant",
        "Understand simple signs and forms",
      ],
      grammarTopics: ["Present tense (sein, haben, regular verbs)", "Nominative & Accusative cases", "Articles (der/die/das)", "Basic word order", "Numbers & time"],
      recommendedActivities: [
        { label: "A1 Lessons", href: "/learn", icon: BookOpen },
        { label: "Read Easy Texts", href: "/read", icon: BookOpen },
        { label: "Practice Speaking", href: "/speak", icon: Mic },
        { label: "Play Games", href: "/games", icon: Trophy },
      ],
      lessonCount: getLevelStats("A1").total,
    },
    {
      id: "A2",
      title: "A2: Elementary Mastery",
      subtitle: "The Dative case, Past tense, and Prepositions",
      timeEstimate: "~3 months",
      canDo: [
        "Describe your daily routine and hobbies",
        "Make plans and appointments",
        "Write short emails and messages",
        "Navigate public transport and shopping",
      ],
      grammarTopics: ["Dative case", "Perfekt (past tense)", "Modal verbs", "Two-way prepositions", "Reflexive verbs", "Comparative adjectives"],
      recommendedActivities: [
        { label: "A2 Lessons", href: "/learn", icon: BookOpen },
        { label: "Write Emails", href: "/write", icon: PenTool },
        { label: "Listening Practice", href: "/listen", icon: Headphones },
        { label: "AI Conversation", href: "/conversation", icon: MessageSquareMore },
      ],
      lessonCount: getLevelStats("A2").total,
    },
    {
      id: "B1",
      title: "B1: Intermediate German",
      subtitle: "Subordinate clauses, Genitive case, and complex sentences",
      timeEstimate: "~4 months",
      canDo: [
        "Express opinions and give reasons",
        "Understand news articles on familiar topics",
        "Write formal and informal letters",
        "Handle most situations while traveling",
        "Pass the Goethe-Zertifikat B1",
      ],
      grammarTopics: ["Subordinate clauses (weil, dass, wenn, ob)", "Genitive case", "Konjunktiv II (basic)", "Relative clauses", "Passive voice (intro)", "N-Deklination"],
      recommendedActivities: [
        { label: "B1 Lessons", href: "/learn", icon: BookOpen },
        { label: "Read News", href: "/read", icon: BookOpen },
        { label: "Write Essays", href: "/write", icon: PenTool },
        { label: "Mock Exams", href: "/exam", icon: FileText },
      ],
      lessonCount: getLevelStats("B1").total,
    },
    {
      id: "B2",
      title: "B2: Upper Intermediate",
      subtitle: "Konjunktiv II, Passive voice, and advanced vocabulary",
      timeEstimate: "~5 months",
      canDo: [
        "Follow complex arguments in discussions",
        "Write detailed reports and reviews",
        "Understand most TV shows and films",
        "Study at a German university (language requirement met)",
        "Work in a German-speaking office",
      ],
      grammarTopics: ["Konjunktiv II (advanced)", "Passive voice (all forms)", "Participial constructions", "Extended attributes", "Nominal style", "Register awareness"],
      recommendedActivities: [
        { label: "B2 Lessons", href: "/learn", icon: BookOpen },
        { label: "Advanced Reading", href: "/read", icon: BookOpen },
        { label: "AI Conversations", href: "/conversation", icon: MessageSquareMore },
        { label: "Learn Idioms", href: "/idioms", icon: BookOpen },
      ],
      lessonCount: getLevelStats("B2").total,
    },
    {
      id: "C1",
      title: "C1: Advanced Proficiency",
      subtitle: "DACH variations, modal particles, and academic discourse",
      timeEstimate: "~6 months",
      canDo: [
        "Understand demanding, longer texts including implicit meanings",
        "Express yourself fluently without searching for words",
        "Write well-structured academic papers",
        "Use language flexibly for social, professional, and academic purposes",
      ],
      grammarTopics: ["Modal particles (doch, mal, ja, halt)", "Konjunktiv I (reported speech)", "Advanced subjunctive", "DACH regional variations", "Academic writing conventions", "Complex syntax patterns"],
      recommendedActivities: [
        { label: "C1 Lessons", href: "/learn", icon: BookOpen },
        { label: "Academic Writing", href: "/write", icon: PenTool },
        { label: "C1 Listening", href: "/listen", icon: Headphones },
        { label: "Cultural Knowledge", href: "/culture", icon: Map },
      ],
      lessonCount: getLevelStats("C1").total,
    },
    {
      id: "C2",
      title: "C2: Native Mastery",
      subtitle: "Native slang, colloquialisms, modern linguistics, and idioms",
      timeEstimate: "~8 months",
      canDo: [
        "Understand virtually everything heard or read",
        "Summarize information from different sources into a coherent presentation",
        "Express yourself spontaneously, fluently, and precisely",
        "Write academic papers, legal briefs, and literary texts",
        "Appreciate humor, irony, and cultural nuances",
      ],
      grammarTopics: ["Stylistic register mastery", "Literary German", "Dialects awareness", "Feuilleton writing", "Legal and scientific German", "Native colloquialisms"],
      recommendedActivities: [
        { label: "C2 Lessons", href: "/learn", icon: BookOpen },
        { label: "Feuilleton Writing", href: "/write", icon: PenTool },
        { label: "C2 Exam Prep", href: "/exam", icon: FileText },
        { label: "Tongue Twisters", href: "/speak", icon: Mic },
      ],
      lessonCount: getLevelStats("C2").total,
    },
  ];

  // Find current level (first level not 100% complete)
  const currentLevelIdx = levels.findIndex(l => getLevelStats(l.id).percent < 100);
  const currentLevel = currentLevelIdx >= 0 ? currentLevelIdx : levels.length - 1;

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-8">
      {/* Header */}
      <header className="mb-8 pb-4 border-b-4 border-foreground">
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter flex items-center gap-3">
          <Map className="w-8 h-8 md:w-10 md:h-10" /> Learning Roadmap
        </h1>
        <p className="font-mono text-muted-foreground text-sm uppercase tracking-widest mt-1">
          Your path from zero to native mastery
        </p>
      </header>

      {/* Daily routine recommendation */}
      <div className="border-2 border-foreground p-6 mb-8">
        <h2 className="font-black text-lg uppercase mb-3 flex items-center gap-2">
          <Target size={20} /> Recommended Daily Routine
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="border-2 border-border p-3 text-center">
            <p className="text-2xl font-black">15 min</p>
            <p className="font-mono text-xs text-muted-foreground uppercase">Lessons</p>
          </div>
          <div className="border-2 border-border p-3 text-center">
            <p className="text-2xl font-black">5 min</p>
            <p className="font-mono text-xs text-muted-foreground uppercase">SRS Review</p>
          </div>
          <div className="border-2 border-border p-3 text-center">
            <p className="text-2xl font-black">10 min</p>
            <p className="font-mono text-xs text-muted-foreground uppercase">AI Conversation</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-3 font-mono">
          30 minutes daily = B1 in ~6 months, C2 in ~2.5 years. Consistency beats intensity.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-foreground/20" />

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
          className="space-y-6"
        >
          {levels.map((level, idx) => {
            const stats = getLevelStats(level.id);
            const isCurrentLevel = idx === currentLevel;
            const isCompleted = stats.percent === 100;
            const isFuture = idx > currentLevel;

            return (
              <motion.div
                key={level.id}
                variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
                className={cn("relative pl-16", isFuture && "opacity-60")}
              >
                {/* Timeline dot */}
                <div className={cn(
                  "absolute left-4 w-5 h-5 border-2 mt-1",
                  isCompleted ? "bg-green-500 border-green-500" :
                  isCurrentLevel ? "bg-foreground border-foreground animate-pulse" :
                  "bg-background border-foreground/40"
                )}>
                  {isCompleted && <CheckCircle2 size={12} className="text-background m-auto mt-0.5" />}
                </div>

                <div className={cn(
                  "border-2 p-5",
                  isCurrentLevel ? "border-foreground bg-foreground/5" :
                  isCompleted ? "border-green-500/50" :
                  "border-border"
                )}>
                  {/* Level header */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-black text-lg">{level.title}</h3>
                        {isCurrentLevel && (
                          <span className="px-2 py-0.5 bg-foreground text-background font-mono text-[10px] uppercase tracking-widest">
                            You are here
                          </span>
                        )}
                        {isCompleted && (
                          <span className="px-2 py-0.5 bg-green-500 text-background font-mono text-[10px] uppercase tracking-widest">
                            Complete
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{level.subtitle}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-mono text-xs text-muted-foreground flex items-center gap-1">
                        <Clock size={12} /> {level.timeEstimate}
                      </p>
                      <p className="font-mono text-xs text-muted-foreground">
                        {stats.total} lessons
                      </p>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="h-2 bg-foreground/10 mb-4">
                    <div
                      className={cn("h-full transition-all", isCompleted ? "bg-green-500" : "bg-foreground")}
                      style={{ width: `${stats.percent}%` }}
                    />
                  </div>
                  <p className="font-mono text-xs text-muted-foreground mb-4">
                    {stats.completed}/{stats.total} completed ({stats.percent}%)
                  </p>

                  {/* What you can do */}
                  <div className="mb-4">
                    <p className="font-mono text-xs uppercase text-muted-foreground mb-2 tracking-widest">After this level you can:</p>
                    <ul className="space-y-1">
                      {level.canDo.map((item, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Grammar topics */}
                  <div className="mb-4">
                    <p className="font-mono text-xs uppercase text-muted-foreground mb-2 tracking-widest">Key Grammar:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {level.grammarTopics.map(topic => (
                        <span key={topic} className="px-2 py-0.5 border border-border font-mono text-xs">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Recommended activities */}
                  {(isCurrentLevel || isCompleted) && (
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
                      {level.recommendedActivities.map(act => (
                        <Link
                          key={act.href}
                          href={act.href}
                          className="flex items-center gap-1.5 px-3 py-1.5 border-2 border-foreground font-mono text-xs uppercase hover:bg-foreground hover:text-background transition-colors"
                        >
                          <act.icon size={12} /> {act.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 border-2 border-foreground p-6 text-center">
        <p className="font-black text-lg mb-2">Ready to continue?</p>
        <Link
          href="/learn"
          className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-mono text-sm uppercase hover:opacity-90 transition-opacity"
        >
          Go to Lessons <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

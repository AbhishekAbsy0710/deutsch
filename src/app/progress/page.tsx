"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Flame, Zap, BookCheck, TrendingUp, Calendar, Brain, Star, RotateCcw, Lock } from "lucide-react";
import { useProgressStore } from "@/store/useProgressStore";
import { lessonData } from "@/data/lessons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AchievementGallery } from "@/components/AchievementGallery";

// ── Derive CEFR level dynamically from lessonData ─────────────
const MODULE_ORDER = ["A0", "A1", "A2", "B1", "B2", "C1", "C2"];

function buildLevelThresholds() {
  // Count lessons per module in registry order
  const counts: Record<string, number> = {};
  for (const lesson of Object.values(lessonData)) {
    counts[lesson.module] = (counts[lesson.module] ?? 0) + 1;
  }
  // Cumulative thresholds — you "reach" a level once ALL prior-level lessons are done
  let cumulative = 0;
  const thresholds: { level: string; from: number }[] = [];
  for (const mod of MODULE_ORDER) {
    thresholds.push({ level: mod, from: cumulative });
    cumulative += counts[mod] ?? 0;
  }
  return thresholds; // e.g. [{level:"A0",from:0},{level:"A1",from:12},...]
}

function deriveLevel(completedCount: number, thresholds: { level: string; from: number }[]): string {
  let current = "A0";
  for (const t of thresholds) {
    if (completedCount >= t.from) current = t.level;
    else break;
  }
  return current;
}

// ── Module colour ──────────────────────────────────────────────
const MODULE_COLOR: Record<string, string> = {
  A0: "bg-slate-500",  A1: "bg-blue-500",   A2: "bg-cyan-500",
  B1: "bg-teal-500",   B2: "bg-violet-500", C1: "bg-amber-500", C2: "bg-rose-500",
};
const MODULE_BORDER: Record<string, string> = {
  A0: "border-slate-500", A1: "border-blue-500",   A2: "border-cyan-500",
  B1: "border-teal-500",  B2: "border-violet-500", C1: "border-amber-500", C2: "border-rose-500",
};

export default function ProgressPage() {
  const { xp, streak, lessons, level: storedLevel, srs } = useProgressStore();

  const thresholds   = useMemo(() => buildLevelThresholds(), []);
  const completedIds = useMemo(() => Object.entries(lessons).filter(([, l]) => l.status === "completed"), [lessons]);
  const completedCount = completedIds.length;

  // Dynamic level — prefer stored assessment level, fallback to derived
  const currentLevel = storedLevel || deriveLevel(completedCount, thresholds);

  // SRS stats
  const totalSRSWords  = Object.keys(srs).length;
  const masteredWords  = Object.values(srs).filter(s => s.repetitions >= 5 && s.easeFactor >= 2.5).length;
  const dueToday       = Object.values(srs).filter(s => new Date(s.nextReviewDate) <= new Date()).length;

  // Per-module breakdown
  const moduleStats = useMemo(() => {
    const stats: Record<string, { total: number; done: number }> = {};
    for (const [id, lesson] of Object.entries(lessonData)) {
      const m = lesson.module;
      if (!stats[m]) stats[m] = { total: 0, done: 0 };
      stats[m].total++;
      if (lessons[id]?.status === "completed") stats[m].done++;
    }
    return stats;
  }, [lessons]);

  // Recent activity (last 8 completed)
  const recentActivity = useMemo(() =>
    completedIds
      .filter(([, l]) => l.completedAt)
      .sort((a, b) => new Date(b[1].completedAt!).getTime() - new Date(a[1].completedAt!).getTime())
      .slice(0, 8)
      .map(([id, l]) => {
        const daysAgo = Math.floor((Date.now() - new Date(l.completedAt!).getTime()) / (1000 * 60 * 60 * 24));
        const timeLabel = daysAgo === 0 ? "Today" : daysAgo === 1 ? "Yesterday" : `${daysAgo}d ago`;
        const lesson = lessonData[id];
        return { id, title: lesson?.title || id, module: lesson?.module || "?", score: l.score ?? 0, attempts: l.attempts, time: timeLabel };
      }),
    [completedIds]
  );

  const topStats = [
    { label: "Day Streak",     value: String(streak).padStart(2, "0"), icon: Flame,      color: "text-orange-500" },
    { label: "Total XP",       value: xp.toLocaleString(),             icon: Zap,        color: "text-yellow-500" },
    { label: "Lessons Done",   value: completedCount.toLocaleString(), icon: BookCheck,  color: "text-green-500" },
    { label: "Current Level",  value: currentLevel,                    icon: TrendingUp, color: "text-primary" },
    { label: "Words in SRS",   value: totalSRSWords.toLocaleString(),  icon: Brain,      color: "text-violet-500" },
    { label: "Mastered Words", value: masteredWords.toLocaleString(),  icon: Star,       color: "text-amber-500" },
  ];

  return (
    <div className="flex-1 px-4 md:px-12 py-10 max-w-5xl mx-auto w-full space-y-16">

      {/* Header */}
      <header className="border-b-4 border-foreground pb-8">
        <div className="text-primary font-mono text-xs tracking-widest uppercase mb-3 flex items-center gap-3">
          <span className="w-8 h-[2px] bg-primary block" /> Performance Log
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
          Your<br />
          <span className="text-muted-foreground">Progress.</span>
        </h1>
      </header>

      {/* Top Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
      >
        {topStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="border-2 border-foreground p-5 flex flex-col gap-3">
              <Icon size={20} className={stat.color} />
              <div>
                <p className="text-4xl md:text-5xl font-black tracking-tighter">{stat.value}</p>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-1">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* SRS Review CTA */}
      {dueToday > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="border-2 border-primary bg-primary/5 p-6 flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary flex items-center justify-center text-primary-foreground font-black text-lg">
              {dueToday}
            </div>
            <div>
              <p className="font-bold text-lg">Cards due for review</p>
              <p className="text-muted-foreground font-mono text-sm">Your spaced repetition queue is ready</p>
            </div>
          </div>
          <Link href="/review" className="border-2 border-primary px-4 py-2 font-mono text-sm font-bold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap flex items-center gap-2">
            <RotateCcw size={14} /> Review Now
          </Link>
        </motion.div>
      )}

      {/* CEFR Module Breakdown */}
      <motion.section
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl font-black uppercase tracking-tight mb-6 flex items-center gap-3">
          <TrendingUp size={20} className="text-primary" /> CEFR Breakdown
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {MODULE_ORDER.map((mod) => {
            const s = moduleStats[mod] ?? { total: 0, done: 0 };
            const pct = s.total > 0 ? Math.round((s.done / s.total) * 100) : 0;
            const isActive = mod === currentLevel;
            return (
              <div key={mod} className={cn("border-2 p-4 space-y-3", isActive ? MODULE_BORDER[mod] : "border-border")}>
                <div className="flex items-center justify-between">
                  <span className={cn("text-white text-xs font-mono font-bold px-2 py-0.5 rounded", MODULE_COLOR[mod] ?? "bg-muted")}>
                    {mod}
                  </span>
                  {isActive && <span className="text-xs font-mono text-muted-foreground">active</span>}
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 bg-secondary rounded overflow-hidden">
                    <div className={cn("h-full rounded transition-all", MODULE_COLOR[mod])} style={{ width: `${pct}%` }} />
                  </div>
                  <p className="text-xs font-mono text-muted-foreground">{s.done}/{s.total} lessons · {pct}%</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Achievement Gallery */}
      <AchievementGallery />

      {/* Recent Activity */}
      {recentActivity.length > 0 ? (
        <motion.section
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-black uppercase tracking-tight mb-6 flex items-center gap-3">
            <Calendar size={20} className="text-primary" /> Recent Activity
          </h2>
          <div className="space-y-3">
            {recentActivity.map((item) => (
              <Link
                key={item.id}
                href={`/lesson/${item.id}`}
                className="border-2 border-border p-4 flex items-center justify-between gap-4 hover:border-foreground transition-colors group block"
              >
                <div className="flex items-center gap-4">
                  <div className={cn("w-10 h-10 flex items-center justify-center text-white font-black text-sm rounded", MODULE_COLOR[item.module] ?? "bg-muted")}>
                    {item.score}%
                  </div>
                  <div>
                    <p className="font-bold group-hover:text-primary transition-colors">{item.title}</p>
                    <p className="font-mono text-xs text-muted-foreground">{item.attempts} attempt{item.attempts !== 1 ? "s" : ""}</p>
                  </div>
                </div>
                <span className="font-mono text-sm text-muted-foreground shrink-0">{item.time}</span>
              </Link>
            ))}
          </div>
        </motion.section>
      ) : (
        <div className="border-2 border-dashed border-border p-12 text-center">
          <Lock size={32} className="mx-auto text-muted-foreground mb-4" />
          <p className="text-xl font-black text-muted-foreground uppercase">No lessons completed yet</p>
          <p className="text-muted-foreground mt-2 font-mono text-sm">Complete your first lesson to see stats here.</p>
          <Link href="/learn" className="inline-block mt-6 border-2 border-primary px-6 py-2 font-mono text-sm font-bold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors">
            Start Learning
          </Link>
        </div>
      )}
    </div>
  );
}

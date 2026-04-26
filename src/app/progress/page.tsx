"use client";

import { motion } from "framer-motion";
import { Flame, Zap, BookCheck, TrendingUp, Calendar } from "lucide-react";
import { useProgressStore } from "@/store/useProgressStore";

import { lessonData } from "@/data/lessons";

export default function ProgressPage() {
  const { xp, streak, lessons, level } = useProgressStore();

  const completedCount = Object.values(lessons).filter(l => l.status === "completed").length;
  // Use stored level from assessment, fallback to calculated level
  const currentLevel = level || (
    completedCount >= 217 ? "B2" :
    completedCount >= 121 ? "B1" :
    completedCount >= 54 ? "A2" :
    completedCount >= 12 ? "A1" : "A0"
  );

  const stats = [
    { label: "Day Streak", value: String(streak).padStart(2, "0"), icon: Flame, color: "text-primary" },
    { label: "Total XP", value: String(xp), icon: Zap, color: "text-foreground" },
    { label: "Lessons Done", value: String(completedCount).padStart(2, "0"), icon: BookCheck, color: "text-foreground" },
    { label: "Current Level", value: currentLevel, icon: TrendingUp, color: "text-primary" },
  ];

  // Build recent activity from completed lessons
  const recentActivity = Object.entries(lessons)
    .filter(([, l]) => l.status === "completed" && l.completedAt)
    .sort((a, b) => new Date(b[1].completedAt!).getTime() - new Date(a[1].completedAt!).getTime())
    .slice(0, 5)
    .map(([id, l]) => {
      const daysAgo = Math.floor((Date.now() - new Date(l.completedAt!).getTime()) / (1000 * 60 * 60 * 24));
      const timeLabel = daysAgo === 0 ? "Today" : daysAgo === 1 ? "Yesterday" : `${daysAgo}d ago`;
      return { lesson: lessonData[id]?.title || id, score: l.score ?? 0, time: timeLabel };
    });

  return (
    <div className="flex-1 px-6 md:px-16 py-12 max-w-[1400px] mx-auto w-full">
      <header className="mb-16 border-b-4 border-foreground pb-8">
        <div className="text-primary font-mono text-sm tracking-widest uppercase mb-4 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-primary block"></span>
          Performance Log
        </div>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
          Your<br />
          <span className="text-muted-foreground">Progress.</span>
        </h1>
      </header>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
      >
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="border-2 border-foreground p-6 flex flex-col gap-4">
              <Icon size={24} className={stat.color} />
              <div>
                <p className="text-5xl md:text-6xl font-black tracking-tighter">{stat.value}</p>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-2">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* Lesson Scores */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <Calendar size={20} className="text-primary" />
          <h2 className="text-2xl font-black uppercase tracking-tight">Lesson Scores</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(lessons).map(([id, l]) => {
            const lessonTitle = lessonData[id]?.title || id;
            return (
              <div key={id} className={`border-2 p-4 ${l.status === "completed" ? "border-foreground" : "border-border opacity-40"}`}>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{id}</p>
                <p className="font-bold text-lg mt-1">{lessonTitle}</p>
                {l.status === "completed" ? (
                  <div className="mt-2">
                    <p className="text-3xl font-black text-primary">{l.score ?? 0}%</p>
                    <p className="font-mono text-xs text-muted-foreground">{l.attempts} attempt{l.attempts !== 1 ? "s" : ""}</p>
                  </div>
                ) : (
                  <p className="font-mono text-xs text-muted-foreground mt-2">{l.status}</p>
                )}
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Recent Activity */}
      {recentActivity.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20"
        >
          <h2 className="text-2xl font-black uppercase tracking-tight mb-8">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((item, i) => (
              <div key={i} className="border-2 border-border p-5 flex items-center justify-between hover:border-foreground transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary flex items-center justify-center text-primary-foreground font-mono text-xs font-bold">
                    {item.score}%
                  </div>
                  <div>
                    <p className="font-bold text-lg">{item.lesson}</p>
                  </div>
                </div>
                <span className="font-mono text-sm text-muted-foreground">{item.time}</span>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {completedCount === 0 && (
        <div className="mt-20 border-2 border-dashed border-border p-12 text-center">
          <p className="text-2xl font-black text-muted-foreground uppercase">No lessons completed yet</p>
          <p className="text-muted-foreground mt-2 font-mono text-sm">Complete a lesson to see your stats here.</p>
        </div>
      )}
    </div>
  );
}

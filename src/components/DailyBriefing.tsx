"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Flame, Zap, Target, BookOpen, Brain, TrendingUp, Star } from "lucide-react";
import { useProgressStore } from "@/store/useProgressStore";

interface BriefingItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  accent?: boolean;
}

/**
 * Daily Briefing Panel
 * 
 * Shows a compact summary of the user's daily state:
 * streak status, XP earned today, reviews due, goals progress, etc.
 * Designed to be placed at the top of the dashboard.
 */
export function DailyBriefing() {
  const {
    streak,
    xp,
    srs,
    todayLessonsCompleted,
    todayLessonsDate,
    dailyXpLog,
    featureActivity,
  } = useProgressStore();

  const today = new Date().toISOString().split("T")[0];
  const todayCount = todayLessonsDate === today ? todayLessonsCompleted : 0;
  const todayXp = dailyXpLog[today] || 0;
  const hour = new Date().getHours();

  const overdueReviews = useMemo(() => {
    return Object.values(srs).filter(item => {
      const reviewDate = new Date(item.nextReviewDate);
      return reviewDate <= new Date();
    }).length;
  }, [srs]);

  // Calculate total vocabulary size
  const vocabSize = Object.keys(useProgressStore.getState().vocabularyBank).length;

  // Time-of-day greeting
  const greeting = useMemo(() => {
    if (hour < 6) return "Nachtschicht? 🦉";
    if (hour < 12) return "Guten Morgen! ☀️";
    if (hour < 17) return "Guten Tag! 🌤️";
    if (hour < 21) return "Guten Abend! 🌙";
    return "Späte Sitzung! 🌃";
  }, [hour]);

  const items: BriefingItem[] = [
    {
      icon: <Flame size={16} className={streak > 0 ? "text-orange-500" : "text-muted-foreground"} />,
      label: "Streak",
      value: `${streak} day${streak !== 1 ? "s" : ""}`,
      accent: streak >= 7,
    },
    {
      icon: <Zap size={16} className="text-yellow-500" />,
      label: "Today",
      value: `${todayXp} XP`,
    },
    {
      icon: <Target size={16} className="text-primary" />,
      label: "Lessons",
      value: `${todayCount} done`,
    },
  ];

  // Conditionally add review count if any are due
  if (overdueReviews > 0) {
    items.push({
      icon: <Brain size={16} className="text-purple-500" />,
      label: "Reviews",
      value: `${overdueReviews} due`,
      accent: true,
    });
  }

  // Conditionally add vocab count
  if (vocabSize > 0) {
    items.push({
      icon: <BookOpen size={16} className="text-blue-500" />,
      label: "Vocab",
      value: `${vocabSize} words`,
    });
  }

  // Calculate total sessions across all features
  const totalSessions = 
    featureActivity.writing.totalSessions +
    featureActivity.reading.passagesRead +
    featureActivity.listening.dictationsCompleted +
    featureActivity.conversation.scenariosCompleted.length +
    featureActivity.games.gamesPlayed;

  if (totalSessions > 0) {
    items.push({
      icon: <TrendingUp size={16} className="text-green-500" />,
      label: "Activities",
      value: `${totalSessions} total`,
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-2 border-border bg-secondary/30 p-4"
    >
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        {/* Greeting */}
        <div className="flex items-center gap-2">
          <Star size={14} className="text-primary" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {greeting}
          </span>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px h-6 bg-border" />

        {/* Stat items */}
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-1.5">
            {item.icon}
            <span className="font-mono text-xs text-muted-foreground">{item.label}:</span>
            <span className={`font-bold text-sm ${item.accent ? "text-primary" : ""}`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

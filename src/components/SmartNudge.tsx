"use client";

import { useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Flame, BookOpen, Brain, Dumbbell, Clock, Zap } from "lucide-react";
import { useProgressStore } from "@/store/useProgressStore";
import { getDueItemCount } from "@/lib/smart-review";

interface Nudge {
  id: string;
  priority: number; // lower = higher priority
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  href: string;
  color: string;
}

/**
 * Smart Nudge Engine
 * 
 * Analyzes the user's state and surfaces the most relevant
 * contextual nudge to keep them engaged.
 * 
 * Priority order:
 * 1. Streak at risk (after 8pm, no activity today)
 * 2. Review due (SRS items overdue)
 * 3. Feature exploration (unused features)
 * 4. Practice suggestion (weakest skill area)
 */
export function SmartNudge() {
  const {
    streak,
    lastActiveDate,
    todayLessonsCompleted,
    todayLessonsDate,
    srs,
    featureActivity,
    writingErrors,
  } = useProgressStore();

  const today = new Date().toISOString().split("T")[0];
  const hour = new Date().getHours();
  const todayCount = todayLessonsDate === today ? todayLessonsCompleted : 0;

  const nudge = useMemo<Nudge | null>(() => {
    const nudges: Nudge[] = [];

    // 1. Streak at risk
    if (streak > 0 && todayCount === 0 && hour >= 18) {
      nudges.push({
        id: "streak-risk",
        priority: 1,
        icon: <Flame size={20} className="text-orange-500" />,
        title: "Protect your streak!",
        subtitle: `${streak}-day streak at risk. Do one lesson!`,
        href: "/learn",
        color: "border-orange-500 bg-orange-500/5",
      });
    }

    // 2. Smart review due (combines SRS + writing errors)
    const overdueCount = Object.values(srs).filter(item => {
      const reviewDate = new Date(item.nextReviewDate);
      return reviewDate <= new Date();
    }).length;
    if (overdueCount > 0) {
      nudges.push({
        id: "reviews-due",
        priority: 2,
        icon: <Brain size={20} className="text-purple-500" />,
        title: `${overdueCount} reviews waiting`,
        subtitle: "Strengthen your memory with spaced repetition",
        href: "/review",
        color: "border-purple-500 bg-purple-500/5",
      });
    }

    // 2b. Smart review session nudge (10+ combined items)
    const smartDueCount = getDueItemCount(srs, writingErrors);
    if (smartDueCount >= 10) {
      nudges.push({
        id: "smart-review",
        priority: 2,
        icon: <Zap size={20} className="text-yellow-500" />,
        title: `Smart review: ${smartDueCount} items due`,
        subtitle: "10-min mixed session — vocab, grammar, errors",
        href: "/review?tab=smart",
        color: "border-yellow-500 bg-yellow-500/5",
      });
    }

    // 3. Feature exploration
    const writing = featureActivity.writing;
    const reading = featureActivity.reading;
    const listening = featureActivity.listening;
    const conversation = featureActivity.conversation;

    if (writing.totalSessions === 0) {
      nudges.push({
        id: "try-writing",
        priority: 4,
        icon: <BookOpen size={20} className="text-blue-500" />,
        title: "Try Writing Practice",
        subtitle: "Get AI feedback on your German writing",
        href: "/write",
        color: "border-blue-500 bg-blue-500/5",
      });
    } else if (conversation.totalMessages === 0) {
      nudges.push({
        id: "try-conversation",
        priority: 4,
        icon: <BookOpen size={20} className="text-green-500" />,
        title: "Try Conversation Mode",
        subtitle: "Practice speaking in real-life scenarios",
        href: "/conversation",
        color: "border-green-500 bg-green-500/5",
      });
    } else if (listening.dictationsCompleted === 0) {
      nudges.push({
        id: "try-listening",
        priority: 4,
        icon: <BookOpen size={20} className="text-indigo-500" />,
        title: "Try Listening Practice",
        subtitle: "Train your ear with dictation exercises",
        href: "/listen",
        color: "border-indigo-500 bg-indigo-500/5",
      });
    }

    // 4. Practice weakest area
    if (writing.totalSessions > 0 && writing.averageScore < 60) {
      nudges.push({
        id: "improve-writing",
        priority: 3,
        icon: <Dumbbell size={20} className="text-yellow-500" />,
        title: "Strengthen your writing",
        subtitle: `Average score: ${writing.averageScore}%. Let's improve!`,
        href: "/write",
        color: "border-yellow-500 bg-yellow-500/5",
      });
    }

    // 5. Return after absence
    const lastActive = lastActiveDate;
    if (lastActive) {
      const daysSince = Math.floor((Date.now() - new Date(lastActive).getTime()) / (1000 * 60 * 60 * 24));
      if (daysSince >= 2) {
        nudges.push({
          id: "welcome-back",
          priority: 1,
          icon: <Clock size={20} className="text-teal-500" />,
          title: "Welcome back!",
          subtitle: `${daysSince} days away. Let's ease back in!`,
          href: "/review",
          color: "border-teal-500 bg-teal-500/5",
        });
      }
    }

    // Sort by priority and return the top one
    nudges.sort((a, b) => a.priority - b.priority);
    return nudges[0] || null;
  }, [streak, todayCount, hour, srs, featureActivity, lastActiveDate]);

  if (!nudge) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Link
        href={nudge.href}
        className={`group flex items-center justify-between p-4 border-2 ${nudge.color} hover:opacity-80 transition-all duration-300`}
      >
        <div className="flex items-center gap-3">
          {nudge.icon}
          <div>
            <p className="font-bold text-sm">{nudge.title}</p>
            <p className="font-mono text-xs text-muted-foreground">{nudge.subtitle}</p>
          </div>
        </div>
        <ArrowRight
          size={18}
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </Link>
    </motion.div>
  );
}

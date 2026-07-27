"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fritz } from "./mascot/Fritz";

interface Milestone {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

const XP_MILESTONES: Record<number, Milestone> = {
  100:  { id: "xp_100",  title: "First Hundred!",     subtitle: "100 XP earned",       icon: "⭐" },
  500:  { id: "xp_500",  title: "Rising Star",        subtitle: "500 XP earned",       icon: "🌟" },
  1000: { id: "xp_1000", title: "Knowledge Seeker",   subtitle: "1,000 XP earned",     icon: "🔥" },
  2500: { id: "xp_2500", title: "Determined Learner", subtitle: "2,500 XP earned",     icon: "💪" },
  5000: { id: "xp_5000", title: "German Enthusiast",  subtitle: "5,000 XP earned",     icon: "🏆" },
  10000:{ id: "xp_10k",  title: "Master Scholar",     subtitle: "10,000 XP earned",    icon: "👑" },
};

const STREAK_MILESTONES: Record<number, Milestone> = {
  3:   { id: "streak_3",   title: "Hat Trick!",       subtitle: "3-day streak",   icon: "🎯" },
  7:   { id: "streak_7",   title: "Week Warrior",     subtitle: "7-day streak",   icon: "⚡" },
  14:  { id: "streak_14",  title: "Fortnight Force",  subtitle: "14-day streak",  icon: "🔥" },
  30:  { id: "streak_30",  title: "Monthly Master",   subtitle: "30-day streak",  icon: "🏅" },
  60:  { id: "streak_60",  title: "Unstoppable",      subtitle: "60-day streak",  icon: "💎" },
  100: { id: "streak_100", title: "Legendary",        subtitle: "100-day streak", icon: "👑" },
};

const LESSON_MILESTONES: Record<number, Milestone> = {
  1:   { id: "lesson_1",   title: "First Step!",        subtitle: "First lesson completed",  icon: "🎉" },
  10:  { id: "lesson_10",  title: "Getting Serious",    subtitle: "10 lessons completed",    icon: "📚" },
  25:  { id: "lesson_25",  title: "Quarter Century",    subtitle: "25 lessons completed",    icon: "⭐" },
  50:  { id: "lesson_50",  title: "Half Century",       subtitle: "50 lessons done",         icon: "🌟" },
  100: { id: "lesson_100", title: "Century Club",       subtitle: "100 lessons completed",   icon: "🏆" },
  200: { id: "lesson_200", title: "Übermensch",         subtitle: "200 lessons mastered",    icon: "👑" },
};

// Merge all milestone maps for lookup
function findTriggeredMilestone(
  xp: number,
  streak: number,
  lessonsCompleted: number,
  seenIds: Set<string>
): Milestone | null {
  // Check XP milestones
  for (const [threshold, milestone] of Object.entries(XP_MILESTONES)) {
    if (xp >= Number(threshold) && !seenIds.has(milestone.id)) {
      return milestone;
    }
  }
  // Check streak milestones
  for (const [threshold, milestone] of Object.entries(STREAK_MILESTONES)) {
    if (streak >= Number(threshold) && !seenIds.has(milestone.id)) {
      return milestone;
    }
  }
  // Check lesson milestones
  for (const [threshold, milestone] of Object.entries(LESSON_MILESTONES)) {
    if (lessonsCompleted >= Number(threshold) && !seenIds.has(milestone.id)) {
      return milestone;
    }
  }
  return null;
}

export function useMilestoneTracker(xp: number, streak: number, lessonsCompleted: number) {
  const [activeMilestone, setActiveMilestone] = useState<Milestone | null>(null);
  const [seenIds, setSeenIds] = useState<Set<string>>(() => {
    if (typeof window === "undefined") return new Set();
    try {
      const stored = localStorage.getItem("deutsch-milestones-seen");
      return stored ? new Set(JSON.parse(stored) as string[]) : new Set();
    } catch {
      return new Set();
    }
  });

  useEffect(() => {
    const milestone = findTriggeredMilestone(xp, streak, lessonsCompleted, seenIds);
    if (milestone) {
      setActiveMilestone(milestone);
      const newSeen = new Set(seenIds);
      newSeen.add(milestone.id);
      setSeenIds(newSeen);
      try {
        localStorage.setItem("deutsch-milestones-seen", JSON.stringify([...newSeen]));
      } catch {
        // localStorage unavailable
      }
    }
  }, [xp, streak, lessonsCompleted]); // eslint-disable-line react-hooks/exhaustive-deps

  const dismiss = useCallback(() => setActiveMilestone(null), []);

  return { activeMilestone, dismiss };
}

interface MilestoneCelebrationProps {
  milestone: Milestone;
  onDismiss: () => void;
}

export function MilestoneCelebration({ milestone, onDismiss }: MilestoneCelebrationProps) {
  useEffect(() => {
    const timer = setTimeout(onDismiss, 6000);
    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
        onClick={onDismiss}
      >
        <motion.div
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.3, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="bg-background border-4 border-foreground p-10 max-w-sm w-full mx-6 text-center space-y-6"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Big icon */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], rotate: [0, -5, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-6xl"
          >
            {milestone.icon}
          </motion.div>

          {/* Title */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">
              Milestone Reached
            </p>
            <h2 className="text-3xl font-black uppercase tracking-tight">
              {milestone.title}
            </h2>
            <p className="text-muted-foreground font-mono text-sm mt-2">
              {milestone.subtitle}
            </p>
          </div>

          {/* Fritz celebrating */}
          <div className="flex justify-center">
            <Fritz mood="celebrating" size={70} showMessage={false} />
          </div>

          <button
            onClick={onDismiss}
            className="px-6 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-wide hover:opacity-90 transition-opacity"
          >
            Weiter! (Continue)
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

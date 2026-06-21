"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Achievement, ACHIEVEMENT_MAP } from "@/data/achievements";

interface AchievementToastProps {
  achievement: Achievement | null;
  onDismiss: () => void;
}

export function AchievementToast({ achievement, onDismiss }: AchievementToastProps) {
  useEffect(() => {
    if (achievement) {
      const timer = setTimeout(onDismiss, 4000);
      return () => clearTimeout(timer);
    }
  }, [achievement, onDismiss]);

  return (
    <AnimatePresence>
      {achievement && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -50 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-[200] cursor-pointer"
          onClick={onDismiss}
        >
          <div className="bg-card border-2 border-primary px-6 py-4 shadow-2xl shadow-primary/20 flex items-center gap-4 min-w-[300px]">
            {/* Animated emoji */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.3, 1] }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl"
            >
              {achievement.icon}
            </motion.div>
            
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-0.5">
                Achievement Unlocked!
              </p>
              <p className="font-bold text-lg">{achievement.title}</p>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </div>

            {/* Sparkle particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, scale: 0 }}
                animate={{
                  opacity: [1, 0],
                  scale: [0, 1.5],
                  x: [0, (Math.random() - 0.5) * 120],
                  y: [0, (Math.random() - 0.5) * 80],
                }}
                transition={{ duration: 0.8, delay: 0.1 * i }}
                className="absolute w-2 h-2 bg-primary rounded-full"
                style={{ left: "50%", top: "50%" }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Hook for managing achievement toast queue
export function useAchievementToast() {
  const [queue, setQueue] = useState<Achievement[]>([]);
  const [current, setCurrent] = useState<Achievement | null>(null);

  const triggerAchievement = useCallback((achievementId: string) => {
    const achievement = ACHIEVEMENT_MAP[achievementId];
    if (achievement) {
      setQueue(prev => [...prev, achievement]);
    }
  }, []);

  const dismiss = useCallback(() => {
    setCurrent(null);
    // Show next in queue after a short delay
    setTimeout(() => {
      setQueue(prev => {
        if (prev.length > 0) {
          setCurrent(prev[0]);
          return prev.slice(1);
        }
        return prev;
      });
    }, 300);
  }, []);

  // Process queue
  useEffect(() => {
    if (!current && queue.length > 0) {
      setCurrent(queue[0]);
      setQueue(prev => prev.slice(1));
    }
  }, [queue, current]);

  const Toast = () => <AchievementToast achievement={current} onDismiss={dismiss} />;

  return { triggerAchievement, AchievementToastComponent: Toast };
}

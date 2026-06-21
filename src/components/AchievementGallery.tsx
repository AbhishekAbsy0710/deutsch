"use client";

import { motion } from "framer-motion";
import { ACHIEVEMENTS, Achievement } from "@/data/achievements";
import { useProgressStore } from "@/store/useProgressStore";
import { cn } from "@/lib/utils";
import { Trophy } from "lucide-react";

export function AchievementGallery() {
  const { achievements } = useProgressStore();
  const earned = new Set(achievements);

  const categories = [
    { key: "milestone", label: "Milestones" },
    { key: "streak", label: "Streaks" },
    { key: "mastery", label: "Mastery" },
  ] as const;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-2xl font-black uppercase tracking-tight mb-6 flex items-center gap-3">
        <Trophy size={20} className="text-primary" /> Achievements
      </h2>
      
      <div className="space-y-8">
        {categories.map(({ key, label }) => {
          const badges = ACHIEVEMENTS.filter(a => a.category === key);
          if (badges.length === 0) return null;

          return (
            <div key={key}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
                <span className="w-6 h-[1px] bg-muted-foreground block" />
                {label}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {badges.map((badge) => {
                  const isEarned = earned.has(badge.id);
                  return (
                    <motion.div
                      key={badge.id}
                      whileHover={isEarned ? { scale: 1.05 } : {}}
                      className={cn(
                        "border-2 p-4 text-center transition-all",
                        isEarned
                          ? "border-primary bg-primary/5"
                          : "border-border opacity-40 grayscale"
                      )}
                    >
                      <div className={cn(
                        "text-3xl mb-2",
                        !isEarned && "filter grayscale"
                      )}>
                        {badge.icon}
                      </div>
                      <p className="font-bold text-sm leading-tight">{badge.title}</p>
                      <p className="text-[10px] text-muted-foreground mt-1 font-mono uppercase tracking-wider">
                        {badge.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Stats footer */}
      <div className="mt-6 pt-4 border-t border-border flex justify-between items-center">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
          {earned.size} / {ACHIEVEMENTS.length} unlocked
        </p>
        <div className="flex gap-1">
          {ACHIEVEMENTS.map(a => (
            <div
              key={a.id}
              className={cn(
                "w-2 h-2",
                earned.has(a.id) ? "bg-primary" : "bg-border"
              )}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

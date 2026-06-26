"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ActivityHeatmapProps {
  dailyXpLog: Record<string, number>;
  className?: string;
}

export function ActivityHeatmap({ dailyXpLog, className }: ActivityHeatmapProps) {
  const { weeks, maxXp, totalDays, currentStreak } = useMemo(() => {
    const today = new Date();
    const daysToShow = 91; // ~13 weeks
    const days: { date: string; xp: number; dayOfWeek: number }[] = [];

    for (let i = daysToShow - 1; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split("T")[0];
      days.push({
        date: dateStr,
        xp: dailyXpLog[dateStr] || 0,
        dayOfWeek: d.getDay(),
      });
    }

    // Group into weeks (Sun-Sat columns)
    const weeks: (typeof days)[] = [];
    let currentWeek: (typeof days[0])[] = [];
    // Pad first week
    const firstDow = days[0]?.dayOfWeek || 0;
    for (let p = 0; p < firstDow; p++) {
      currentWeek.push({ date: "", xp: -1, dayOfWeek: p });
    }
    for (const day of days) {
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    }
    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push({ date: "", xp: -1, dayOfWeek: currentWeek.length });
      }
      weeks.push(currentWeek);
    }

    const maxXp = Math.max(1, ...days.map(d => d.xp));
    const totalDays = days.filter(d => d.xp > 0).length;

    // Calculate current streak
    let streak = 0;
    for (let i = days.length - 1; i >= 0; i--) {
      if (days[i].xp > 0) streak++;
      else break;
    }

    return { weeks, maxXp, totalDays, currentStreak: streak };
  }, [dailyXpLog]);

  const getColor = (xp: number) => {
    if (xp < 0) return "transparent";
    if (xp === 0) return "var(--color-muted)";
    const intensity = Math.min(xp / maxXp, 1);
    if (intensity < 0.25) return "hsl(142, 60%, 25%)";
    if (intensity < 0.5) return "hsl(142, 60%, 35%)";
    if (intensity < 0.75) return "hsl(142, 60%, 45%)";
    return "hsl(142, 70%, 55%)";
  };

  const dayLabels = ["", "Mon", "", "Wed", "", "Fri", ""];
  const monthLabels = useMemo(() => {
    const labels: { label: string; weekIdx: number }[] = [];
    let lastMonth = -1;
    weeks.forEach((week, wi) => {
      for (const day of week) {
        if (day.date) {
          const month = new Date(day.date).getMonth();
          if (month !== lastMonth) {
            lastMonth = month;
            labels.push({
              label: new Date(day.date).toLocaleString("en", { month: "short" }),
              weekIdx: wi,
            });
            break;
          }
        }
      }
    });
    return labels;
  }, [weeks]);

  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center justify-between">
        <h3 className="font-black text-sm uppercase tracking-wider">Activity Heatmap</h3>
        <div className="flex gap-4 text-xs font-mono text-muted-foreground">
          <span>{totalDays} active days</span>
          <span>{currentStreak} day streak</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="inline-flex gap-0.5">
          {/* Day labels */}
          <div className="flex flex-col gap-0.5 mr-1">
            {dayLabels.map((l, i) => (
              <div key={i} className="h-[14px] flex items-center">
                <span className="text-[10px] font-mono text-muted-foreground w-6">{l}</span>
              </div>
            ))}
          </div>

          {/* Weeks */}
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-0.5">
              {week.map((day, di) => (
                <motion.div
                  key={`${wi}-${di}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: wi * 0.02 + di * 0.005 }}
                  className="w-[14px] h-[14px] rounded-sm transition-colors"
                  style={{ backgroundColor: getColor(day.xp) }}
                  title={day.date ? `${day.date}: ${day.xp} XP` : ""}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Month labels */}
        <div className="flex ml-7 mt-1">
          {monthLabels.map((m, i) => (
            <span
              key={i}
              className="text-[10px] font-mono text-muted-foreground"
              style={{ marginLeft: i === 0 ? `${m.weekIdx * 15}px` : `${(m.weekIdx - (monthLabels[i - 1]?.weekIdx || 0)) * 15 - 24}px` }}
            >
              {m.label}
            </span>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground">
        <span>Less</span>
        {[0, 0.25, 0.5, 0.75, 1].map((intensity) => (
          <div
            key={intensity}
            className="w-[12px] h-[12px] rounded-sm"
            style={{
              backgroundColor: intensity === 0
                ? "var(--color-muted)"
                : `hsl(142, ${intensity > 0.5 ? 70 : 60}%, ${25 + intensity * 30}%)`,
            }}
          />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}

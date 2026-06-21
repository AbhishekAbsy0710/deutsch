export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string; // emoji
  category: "milestone" | "streak" | "mastery" | "social";
}

export const ACHIEVEMENTS: Achievement[] = [
  // Milestone badges
  { id: "first-flame", title: "First Flame", description: "Complete your first lesson", icon: "🔥", category: "milestone" },
  { id: "bookworm-10", title: "Bookworm", description: "Complete 10 lessons", icon: "📚", category: "milestone" },
  { id: "scholar-50", title: "Scholar", description: "Complete 50 lessons", icon: "🎓", category: "milestone" },
  { id: "centurion", title: "Centurion", description: "Complete 100 lessons", icon: "🏛️", category: "milestone" },
  { id: "legend-500", title: "Living Legend", description: "Complete 500 lessons", icon: "👑", category: "milestone" },

  // Level badges
  { id: "a1-explorer", title: "A1 Explorer", description: "Complete all A0 lessons and begin A1", icon: "🌍", category: "mastery" },
  { id: "a2-adventurer", title: "A2 Adventurer", description: "Reach A2 level", icon: "🧭", category: "mastery" },
  { id: "b1-climber", title: "B1 Climber", description: "Reach B1 level", icon: "🏔️", category: "mastery" },
  { id: "b2-navigator", title: "B2 Navigator", description: "Reach B2 level", icon: "🚀", category: "mastery" },
  { id: "c1-master", title: "C1 Master", description: "Reach C1 level", icon: "⭐", category: "mastery" },
  { id: "c2-native", title: "C2 Native Speaker", description: "Reach C2 level", icon: "🏆", category: "mastery" },

  // Streak badges
  { id: "streak-3", title: "Hat Trick", description: "3-day learning streak", icon: "🎩", category: "streak" },
  { id: "streak-7", title: "Weekly Warrior", description: "7-day learning streak", icon: "⚡", category: "streak" },
  { id: "streak-14", title: "Fortnight Force", description: "14-day learning streak", icon: "💪", category: "streak" },
  { id: "streak-30", title: "30-Day Inferno", description: "30-day learning streak", icon: "🌋", category: "streak" },
  { id: "streak-100", title: "Unstoppable", description: "100-day learning streak", icon: "💎", category: "streak" },

  // Skill badges
  { id: "perfect-score", title: "Perfectionist", description: "Score 100% on any quiz", icon: "🎯", category: "mastery" },
  { id: "speed-runner", title: "Speed Runner", description: "Complete 5 lessons in one day", icon: "🏃", category: "mastery" },
  { id: "vocab-50", title: "Word Collector", description: "Learn 50 vocabulary words", icon: "📖", category: "mastery" },
  { id: "vocab-200", title: "Dictionary Brain", description: "Learn 200 vocabulary words", icon: "🧠", category: "mastery" },
  { id: "xp-1000", title: "XP Hunter", description: "Earn 1,000 XP total", icon: "⚡", category: "milestone" },
  { id: "xp-5000", title: "XP Legend", description: "Earn 5,000 XP total", icon: "🌟", category: "milestone" },
  { id: "daily-challenge-7", title: "Challenge Accepted", description: "Complete 7 daily challenges", icon: "🎲", category: "streak" },
];

export const ACHIEVEMENT_MAP = Object.fromEntries(
  ACHIEVEMENTS.map(a => [a.id, a])
);

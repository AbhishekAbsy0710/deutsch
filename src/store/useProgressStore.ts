import { create } from "zustand";
import { persist } from "zustand/middleware";

export type LessonStatus = "locked" | "active" | "completed";

export interface LessonProgress {
  status: LessonStatus;
  score?: number;        // 0-100
  completedAt?: string;  // ISO date
  attempts: number;
}

export interface UserProgress {
  // Core progress
  lessons: Record<string, LessonProgress>;
  
  // Stats
  xp: number;
  streak: number;
  lastActiveDate: string | null;
  
  // Assessment
  goal: string | null;
  level: string | null;
}

interface ProgressStore extends UserProgress {
  // Actions
  completeLesson: (lessonId: string, score: number, xpEarned: number) => void;
  unlockLesson: (lessonId: string) => void;
  setAssessment: (goal: string, level: string) => void;
  getLessonStatus: (lessonId: string) => LessonStatus;
  resetProgress: () => void;
  // Cloud sync
  syncWithSupabase: (userId: string) => Promise<void>;
  saveToCloud: (userId: string) => void;
  _userId: string | null;
}

import { lessonData } from "@/data/lessons";

// Define the lesson unlock chain dynamically
const UNLOCK_CHAIN: Record<string, string> = {};
const lessonIds = Object.keys(lessonData).sort((a, b) => {
  const numA = parseInt(a.replace("l", ""));
  const numB = parseInt(b.replace("l", ""));
  return numA - numB;
});

for (let i = 0; i < lessonIds.length - 1; i++) {
  UNLOCK_CHAIN[lessonIds[i]] = lessonIds[i + 1];
}

const DEFAULT_LESSONS: Record<string, LessonProgress> = {};
lessonIds.forEach((id) => {
  DEFAULT_LESSONS[id] = { status: id === "l1" ? "active" : "locked", attempts: 0 };
});

const initialState: UserProgress = {
  lessons: DEFAULT_LESSONS,
  xp: 0,
  streak: 0,
  lastActiveDate: null,
  goal: null,
  level: null,
};

function checkAndUpdateStreak(lastDate: string | null, currentStreak: number): number {
  if (!lastDate) return 1;
  
  const last = new Date(lastDate);
  const now = new Date();
  const diffDays = Math.floor((now.getTime() - last.getTime()) / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return currentStreak; // Same day
  if (diffDays === 1) return currentStreak + 1; // Consecutive day
  return 1; // Streak broken
}

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set, get) => ({
      ...initialState,
      _userId: null,

      completeLesson: (lessonId: string, score: number, xpEarned: number) => {
        const state = get();
        const existing = state.lessons[lessonId];
        
        // Only update if new score is higher or first completion
        const isFirstCompletion = existing?.status !== "completed";
        const newStreak = checkAndUpdateStreak(state.lastActiveDate, state.streak);
        
        set({
          lessons: {
            ...state.lessons,
            [lessonId]: {
              status: "completed",
              score: Math.max(score, existing?.score ?? 0),
              completedAt: new Date().toISOString(),
              attempts: (existing?.attempts ?? 0) + 1,
            },
          },
          xp: state.xp + (isFirstCompletion ? xpEarned : Math.floor(xpEarned / 4)), // Less XP for replays
          streak: newStreak,
          lastActiveDate: new Date().toISOString().split("T")[0],
        });

        // Unlock the next lesson in the chain
        const nextLessonId = UNLOCK_CHAIN[lessonId];
        if (nextLessonId) {
          const nextLesson = get().lessons[nextLessonId];
          if (nextLesson?.status === "locked") {
            get().unlockLesson(nextLessonId);
          }
        }

        // Auto-save to Supabase if user is logged in
        const userId = get()._userId;
        if (userId) {
          get().saveToCloud(userId);
        }
      },

      unlockLesson: (lessonId: string) => {
        const state = get();
        const existing = state.lessons[lessonId];
        if (existing && existing.status === "locked") {
          set({
            lessons: {
              ...state.lessons,
              [lessonId]: { ...existing, status: "active" },
            },
          });
        }
      },

      setAssessment: (goal: string, level: string) => {
        set({ goal, level });
        // Also save assessment to cloud
        const userId = get()._userId;
        if (userId) get().saveToCloud(userId);
      },

      getLessonStatus: (lessonId: string) => {
        const lesson = get().lessons[lessonId];
        return lesson?.status ?? "locked";
      },

      resetProgress: () => {
        set(initialState);
      },

      // Sync with Supabase on login
      syncWithSupabase: async (userId: string) => {
        const { loadProgressFromSupabase, mergeProgress, saveProgressToSupabase } = await import("@/lib/progress-sync");
        set({ _userId: userId });

        const cloudProgress = await loadProgressFromSupabase(userId);
        const localProgress: UserProgress = {
          lessons: get().lessons,
          xp: get().xp,
          streak: get().streak,
          lastActiveDate: get().lastActiveDate,
          goal: get().goal,
          level: get().level,
        };

        if (cloudProgress) {
          // Merge: keep the better progress from each source
          const merged = mergeProgress(localProgress, cloudProgress);
          set(merged);
          // Push merged result back to cloud
          await saveProgressToSupabase(userId, merged);
          console.log("[Store] Synced with Supabase — merged", merged.xp, "XP");
        } else {
          // No cloud data — push local up
          await saveProgressToSupabase(userId, localProgress);
          console.log("[Store] Pushed local progress to Supabase");
        }
      },

      // Fire-and-forget save to Supabase
      saveToCloud: (userId: string) => {
        import("@/lib/progress-sync").then(({ saveProgressToSupabase }) => {
          const state = get();
          saveProgressToSupabase(userId, {
            lessons: state.lessons,
            xp: state.xp,
            streak: state.streak,
            lastActiveDate: state.lastActiveDate,
            goal: state.goal,
            level: state.level,
          });
        });
      },
    }),
    {
      name: "deutsch-progress",
    }
  )
);

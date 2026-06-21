import { create } from "zustand";
import { persist } from "zustand/middleware";

export type LessonStatus = "locked" | "active" | "completed";

export interface LessonProgress {
  status: LessonStatus;
  score?: number;        // 0-100
  completedAt?: string;  // ISO date
  attempts: number;
}

export interface SRSData {
  nextReviewDate: string; // ISO date
  interval: number;       // days
  easeFactor: number;
  repetitions: number;
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
  
  // Gamification & Review
  achievements: string[];
  srs: Record<string, SRSData>; // Maps a flashcard word to its SRS state
  
  // Daily challenge
  dailyChallengeDate: string | null; // ISO date of last completed daily challenge
  dailyChallengesCompleted: number; // Total daily challenges completed
  todayLessonsCompleted: number; // Lessons completed today (resets daily)
  todayLessonsDate: string | null; // Date for todayLessonsCompleted
  
  // Recently unlocked achievements (for toast display)
  _pendingAchievements: string[];
}

interface ProgressStore extends UserProgress {
  // Actions
  completeLesson: (lessonId: string, score: number, xpEarned: number) => void;
  unlockLesson: (lessonId: string) => void;
  setAssessment: (goal: string, level: string) => void;
  getLessonStatus: (lessonId: string) => LessonStatus;
  resetProgress: () => Promise<void>;
  
  // Gamification
  unlockAchievement: (achievementId: string) => void;
  updateSRS: (word: string, quality: number) => void; // quality: 0-5
  completeDailyChallenge: () => void;
  checkAchievements: () => string[]; // Returns newly unlocked achievement IDs
  consumePendingAchievements: () => string[];
  
  // Cloud sync
  syncWithSupabase: (userId: string) => Promise<void>;
  saveToCloud: (userId: string) => void;
  _userId: string | null;
}

import { lessonData } from "@/data/lessons";

// Level ordering for skip-to-level feature
const MODULE_ORDER = ["A0", "A1", "A2", "B1", "B2", "C1", "C2"];

// Use insertion order from lessonData (Object.keys preserves spread order)
const lessonIds = Object.keys(lessonData);

// Define the lesson unlock chain dynamically
const UNLOCK_CHAIN: Record<string, string> = {};
for (let i = 0; i < lessonIds.length - 1; i++) {
  UNLOCK_CHAIN[lessonIds[i]] = lessonIds[i + 1];
}

const DEFAULT_LESSONS: Record<string, LessonProgress> = {};
lessonIds.forEach((id) => {
  DEFAULT_LESSONS[id] = { status: id === lessonIds[0] ? "active" : "locked", attempts: 0 };
});

// Helper: get all lesson IDs that belong to modules BEFORE the given level
function getLessonIdsBeforeLevel(level: string): string[] {
  const levelIndex = MODULE_ORDER.indexOf(level);
  if (levelIndex <= 0) return []; // A0 or unknown — nothing to skip
  const modulesToSkip = MODULE_ORDER.slice(0, levelIndex);
  return lessonIds.filter(id => {
    const lesson = lessonData[id];
    return lesson && modulesToSkip.includes(lesson.module);
  });
}

// Helper: get the first lesson ID of a given level
function getFirstLessonOfLevel(level: string): string | null {
  return lessonIds.find(id => lessonData[id]?.module === level) || null;
}

const initialState: UserProgress = {
  lessons: DEFAULT_LESSONS,
  xp: 0,
  streak: 0,
  lastActiveDate: null,
  goal: null,
  level: null,
  achievements: [],
  srs: {},
  dailyChallengeDate: null,
  dailyChallengesCompleted: 0,
  todayLessonsCompleted: 0,
  todayLessonsDate: null,
  _pendingAchievements: [],
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
        
        // Track daily lessons count
        const today = new Date().toISOString().split("T")[0];
        const todayCount = state.todayLessonsDate === today
          ? state.todayLessonsCompleted + 1
          : 1;
        
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
          lastActiveDate: today,
          todayLessonsCompleted: todayCount,
          todayLessonsDate: today,
        });

        // Unlock the next lesson in the chain
        const nextLessonId = UNLOCK_CHAIN[lessonId];
        if (nextLessonId) {
          const nextLesson = get().lessons[nextLessonId];
          if (nextLesson?.status === "locked") {
            get().unlockLesson(nextLessonId);
          }
        }

        // Check achievements after lesson completion
        get().checkAchievements();

        // Auto-save to Supabase if user is logged in
        const userId = get()._userId;
        if (userId) {
          get().saveToCloud(userId);
        }
      },

      unlockAchievement: (achievementId: string) => {
        const state = get();
        if (!state.achievements.includes(achievementId)) {
          set({ achievements: [...state.achievements, achievementId] });
          const userId = get()._userId;
          if (userId) get().saveToCloud(userId);
        }
      },

      updateSRS: (word: string, quality: number) => {
        const state = get();
        const existing = state.srs[word] || { interval: 0, easeFactor: 2.5, repetitions: 0, nextReviewDate: new Date().toISOString() };
        
        let { interval, easeFactor, repetitions } = existing;
        
        if (quality >= 3) {
          if (repetitions === 0) interval = 1;
          else if (repetitions === 1) interval = 6;
          else interval = Math.round(interval * easeFactor);
          repetitions += 1;
        } else {
          repetitions = 0;
          interval = 1;
        }
        
        easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
        if (easeFactor < 1.3) easeFactor = 1.3;
        
        const nextReviewDate = new Date();
        nextReviewDate.setDate(nextReviewDate.getDate() + interval);
        
        set({
          srs: {
            ...state.srs,
            [word]: { interval, easeFactor, repetitions, nextReviewDate: nextReviewDate.toISOString() }
          }
        });
        
        const userId = get()._userId;
        if (userId) get().saveToCloud(userId);
      },

      completeDailyChallenge: () => {
        const today = new Date().toISOString().split("T")[0];
        const state = get();
        if (state.dailyChallengeDate === today) return; // Already completed
        
        const newStreak = checkAndUpdateStreak(state.lastActiveDate, state.streak);
        set({
          dailyChallengeDate: today,
          dailyChallengesCompleted: state.dailyChallengesCompleted + 1,
          xp: state.xp + 50,
          streak: newStreak,
          lastActiveDate: today,
        });
        
        // Check achievements
        get().checkAchievements();
        
        const userId = get()._userId;
        if (userId) get().saveToCloud(userId);
      },

      checkAchievements: () => {
        const state = get();
        const earned = new Set(state.achievements);
        const newlyUnlocked: string[] = [];
        
        const completedCount = Object.values(state.lessons).filter(l => l.status === "completed").length;
        const vocabCount = Object.keys(state.srs).length;
        
        // Helper to unlock if not already earned
        const check = (id: string, condition: boolean) => {
          if (condition && !earned.has(id)) {
            earned.add(id);
            newlyUnlocked.push(id);
          }
        };
        
        // Milestone badges
        check("first-flame", completedCount >= 1);
        check("bookworm-10", completedCount >= 10);
        check("scholar-50", completedCount >= 50);
        check("centurion", completedCount >= 100);
        check("legend-500", completedCount >= 500);
        
        // Streak badges
        check("streak-3", state.streak >= 3);
        check("streak-7", state.streak >= 7);
        check("streak-14", state.streak >= 14);
        check("streak-30", state.streak >= 30);
        check("streak-100", state.streak >= 100);
        
        // XP badges
        check("xp-1000", state.xp >= 1000);
        check("xp-5000", state.xp >= 5000);
        
        // Vocab badges
        check("vocab-50", vocabCount >= 50);
        check("vocab-200", vocabCount >= 200);
        
        // Speed runner — 5 lessons today
        check("speed-runner", state.todayLessonsCompleted >= 5);
        
        // Perfect score — any lesson with 100%
        const hasPerfect = Object.values(state.lessons).some(l => l.score === 100 && l.status === "completed");
        check("perfect-score", hasPerfect);
        
        // Daily challenge badge
        check("daily-challenge-7", state.dailyChallengesCompleted >= 7);
        
        // Level badges (check which modules are fully completed)
        const moduleDone = (mod: string) => {
          const modLessons = lessonIds.filter(id => lessonData[id]?.module === mod);
          return modLessons.length > 0 && modLessons.every(id => state.lessons[id]?.status === "completed");
        };
        check("a1-explorer", moduleDone("A0"));
        check("a2-adventurer", moduleDone("A1"));
        check("b1-climber", moduleDone("A2"));
        check("b2-navigator", moduleDone("B1"));
        check("c1-master", moduleDone("B2"));
        check("c2-native", moduleDone("C1"));
        
        if (newlyUnlocked.length > 0) {
          set({
            achievements: Array.from(earned),
            _pendingAchievements: [...state._pendingAchievements, ...newlyUnlocked],
          });
        }
        
        return newlyUnlocked;
      },
      
      consumePendingAchievements: () => {
        const pending = get()._pendingAchievements;
        if (pending.length > 0) {
          set({ _pendingAchievements: [] });
        }
        return pending;
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
        // Start from a CLEAN slate — reset all lessons to locked
        const updatedLessons: Record<string, LessonProgress> = {};
        lessonIds.forEach((id) => {
          updatedLessons[id] = { status: "locked", attempts: 0 };
        });
        
        // Bulk-unlock: mark all lessons BELOW this level as completed
        const lessonsToSkip = getLessonIdsBeforeLevel(level);
        
        for (const id of lessonsToSkip) {
          updatedLessons[id] = {
            status: "completed",
            score: 100,
            completedAt: new Date().toISOString(),
            attempts: 1,
          };
        }
        
        // Set the first lesson of the selected level as active
        const firstLesson = getFirstLessonOfLevel(level);
        if (firstLesson) {
          updatedLessons[firstLesson] = { 
            ...updatedLessons[firstLesson], 
            status: "active" 
          };
        }
        
        // Calculate XP from skipped lessons (10 XP per skipped lesson)
        const skippedXp = lessonsToSkip.length * 10;
        
        set({ 
          goal, 
          level, 
          lessons: updatedLessons,
          xp: skippedXp,
          streak: 0,
          lastActiveDate: null,
        });
        
        // Also save assessment to cloud
        const userId = get()._userId;
        if (userId) get().saveToCloud(userId);
      },

      getLessonStatus: (lessonId: string) => {
        const lesson = get().lessons[lessonId];
        return lesson?.status ?? "locked";
      },

      resetProgress: async () => {
        // Clear cloud data FIRST and WAIT for it
        const userId = get()._userId;
        if (userId) {
          try {
            const { createClient } = await import("@/lib/supabase");
            const supabase = createClient();
            // Delete all lesson progress rows for this user — AWAIT!
            await supabase
              .from("lesson_progress")
              .delete()
              .eq("user_id", userId);
            console.log("[Store] Cleared cloud lesson progress");
            // Reset profile stats — AWAIT!
            await supabase
              .from("profiles")
              .update({ xp: 0, streak: 0, current_level: "A0" })
              .eq("id", userId);
            console.log("[Store] Reset cloud profile");
          } catch (err) {
            console.error("[Store] Cloud reset error:", err);
          }
        }
        
        // Build FRESH lessons object (don't reuse DEFAULT_LESSONS reference)
        const freshLessons: Record<string, LessonProgress> = {};
        lessonIds.forEach((id) => {
          freshLessons[id] = { status: id === lessonIds[0] ? "active" : "locked", attempts: 0 };
        });
        
        // Explicitly set every field to avoid Zustand persist shallow merge issues
        set({
          lessons: freshLessons,
          xp: 0,
          streak: 0,
          lastActiveDate: null,
          goal: null,
          level: null,
          _userId: userId,
        });
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
          achievements: get().achievements,
          srs: get().srs,
          dailyChallengeDate: get().dailyChallengeDate,
          dailyChallengesCompleted: get().dailyChallengesCompleted,
          todayLessonsCompleted: get().todayLessonsCompleted,
          todayLessonsDate: get().todayLessonsDate,
          _pendingAchievements: get()._pendingAchievements,
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
            achievements: state.achievements,
            srs: state.srs,
            dailyChallengeDate: state.dailyChallengeDate,
            dailyChallengesCompleted: state.dailyChallengesCompleted,
            todayLessonsCompleted: state.todayLessonsCompleted,
            todayLessonsDate: state.todayLessonsDate,
            _pendingAchievements: state._pendingAchievements,
          });
        });
      },
    }),
    {
      name: "deutsch-progress",
    }
  )
);

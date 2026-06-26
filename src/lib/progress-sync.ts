import { createClient } from "./supabase";
import type { LessonProgress, UserProgress } from "@/store/useProgressStore";
import { lessonData } from "@/data/lessons";

// Build default lessons map
const lessonIds = Object.keys(lessonData).sort((a, b) => {
  const numA = parseInt(a.replace("l", ""));
  const numB = parseInt(b.replace("l", ""));
  return numA - numB;
});

const DEFAULT_LESSONS: Record<string, LessonProgress> = {};
lessonIds.forEach((id) => {
  DEFAULT_LESSONS[id] = { status: id === "l1" ? "active" : "locked", attempts: 0 };
});

/**
 * Load progress from Supabase for a given user
 */
export async function loadProgressFromSupabase(userId: string): Promise<UserProgress | null> {
  const supabase = createClient();
  
  try {
    // Load profile
    const { data: profile, error: profileErr } = await supabase
      .from("profiles")
      .select("xp, streak, current_level, last_active")
      .eq("id", userId)
      .single();

    if (profileErr || !profile) {
      console.log("[Sync] No profile found, will create on save");
      return null;
    }

    // Load lesson progress
    const { data: lessonRows, error: lessonsErr } = await supabase
      .from("lesson_progress")
      .select("lesson_id, status, score, attempts, completed_at")
      .eq("user_id", userId);

    if (lessonsErr) {
      console.error("[Sync] Error loading lessons:", lessonsErr);
      return null;
    }

    // Build lessons map from DB rows, starting with defaults
    const lessons: Record<string, LessonProgress> = { ...DEFAULT_LESSONS };
    
    if (lessonRows && lessonRows.length > 0) {
      for (const row of lessonRows) {
        lessons[row.lesson_id] = {
          status: row.status as LessonProgress["status"],
          score: row.score ?? undefined,
          attempts: row.attempts || 0,
          completedAt: row.completed_at || undefined,
        };
      }
      
      // Ensure unlock chain is correct — if a lesson is completed, next should be at least active
      for (let i = 0; i < lessonIds.length - 1; i++) {
        const current = lessons[lessonIds[i]];
        const next = lessons[lessonIds[i + 1]];
        if (current?.status === "completed" && next?.status === "locked") {
          lessons[lessonIds[i + 1]] = { ...next, status: "active" };
        }
      }
    }

    return {
      lessons,
      xp: profile.xp || 0,
      streak: profile.streak || 0,
      lastActiveDate: profile.last_active || null,
      goal: null,
      level: profile.current_level || null,
      achievements: [],
      srs: {},
      dailyChallengeDate: null,
      dailyChallengesCompleted: 0,
      todayLessonsCompleted: 0,
      todayLessonsDate: null,
      featureActivity: {
        writing: { totalSessions: 0, averageScore: 0, lastDate: null },
        reading: { passagesRead: 0, questionsCorrect: 0, questionsTotal: 0, lastDate: null },
        listening: { dictationsCompleted: 0, dictationAccuracy: 0, comprehensionsCompleted: 0, comprehensionAccuracy: 0, lastDate: null },
        conversation: { scenariosCompleted: [], totalMessages: 0, averageGrammarScore: 0, lastDate: null },
        exam: { examsTaken: [] },
        games: { gamesPlayed: 0, totalCorrect: 0, totalAttempted: 0, lastDate: null },
        practice: { sessionsCompleted: 0, questionsCorrect: 0, questionsTotal: 0, lastDate: null },
      },
      vocabularyBank: {},
      dailyXpLog: {},
      writingErrors: [],
      _pendingAchievements: [],
    };
  } catch (err) {
    console.error("[Sync] Load error:", err);
    return null;
  }
}

/**
 * Save progress to Supabase
 */
export async function saveProgressToSupabase(userId: string, progress: UserProgress): Promise<void> {
  const supabase = createClient();
  
  try {
    // Upsert profile stats
    await supabase
      .from("profiles")
      .upsert({
        id: userId,
        xp: progress.xp,
        streak: progress.streak,
        current_level: progress.level || "A0",
        last_active: progress.lastActiveDate || new Date().toISOString().split("T")[0],
      });

    // Upsert each lesson's progress (only non-default ones)
    const lessonUpserts = Object.entries(progress.lessons)
      .filter(([, lp]) => lp.status !== "locked") // Only save active/completed
      .map(([lessonId, lp]) => ({
        user_id: userId,
        lesson_id: lessonId,
        status: lp.status,
        score: lp.score ?? null,
        attempts: lp.attempts,
        completed_at: lp.completedAt || null,
      }));

    if (lessonUpserts.length > 0) {
      const { error } = await supabase
        .from("lesson_progress")
        .upsert(lessonUpserts, { onConflict: "user_id,lesson_id" });
      
      if (error) console.error("[Sync] Lesson save error:", error);
    }

    console.log("[Sync] Saved to Supabase:", progress.xp, "XP,", lessonUpserts.length, "lessons");
  } catch (err) {
    console.error("[Sync] Save error:", err);
  }
}

/**
 * Merge local and cloud progress — keep the better one
 */
export function mergeProgress(local: UserProgress, cloud: UserProgress): UserProgress {
  // Merge feature activity — keep the one with more data
  const mergeActivity = () => {
    const l = local.featureActivity;
    const c = cloud.featureActivity;
    if (!l && !c) return local.featureActivity;
    if (!l) return c;
    if (!c) return l;
    return {
      writing: l.writing.totalSessions >= (c.writing?.totalSessions || 0) ? l.writing : c.writing,
      reading: l.reading.passagesRead >= (c.reading?.passagesRead || 0) ? l.reading : c.reading,
      listening: l.listening.dictationsCompleted >= (c.listening?.dictationsCompleted || 0) ? l.listening : c.listening,
      conversation: l.conversation.scenariosCompleted.length >= (c.conversation?.scenariosCompleted?.length || 0) ? l.conversation : c.conversation,
      exam: { examsTaken: [...(c.exam?.examsTaken || []), ...(l.exam?.examsTaken || [])].filter((e, i, arr) => arr.findIndex(x => x.examId === e.examId && x.date === e.date) === i) },
      games: l.games.gamesPlayed >= (c.games?.gamesPlayed || 0) ? l.games : c.games,
      practice: l.practice.sessionsCompleted >= (c.practice?.sessionsCompleted || 0) ? l.practice : c.practice,
    };
  };

  const merged: UserProgress = {
    xp: Math.max(local.xp, cloud.xp),
    streak: Math.max(local.streak, cloud.streak),
    lastActiveDate: local.lastActiveDate || cloud.lastActiveDate,
    goal: local.goal || cloud.goal,
    level: local.level || cloud.level,
    lessons: { ...DEFAULT_LESSONS },
    achievements: Array.from(new Set([...(local.achievements || []), ...(cloud.achievements || [])])),
    srs: { ...(cloud.srs || {}), ...(local.srs || {}) },
    dailyChallengeDate: local.dailyChallengeDate || cloud.dailyChallengeDate || null,
    dailyChallengesCompleted: Math.max(local.dailyChallengesCompleted || 0, cloud.dailyChallengesCompleted || 0),
    todayLessonsCompleted: local.todayLessonsCompleted || 0,
    todayLessonsDate: local.todayLessonsDate || null,
    featureActivity: mergeActivity(),
    vocabularyBank: { ...(cloud.vocabularyBank || {}), ...(local.vocabularyBank || {}) },
    dailyXpLog: (() => {
      const merged: Record<string, number> = { ...(cloud.dailyXpLog || {}) };
      for (const [date, xp] of Object.entries(local.dailyXpLog || {})) {
        merged[date] = Math.max(merged[date] || 0, xp as number);
      }
      return merged;
    })(),
    writingErrors: (() => {
      const map = new Map<string, { pattern: string; correction: string; count: number; lastDate: string }>();
      for (const e of [...(cloud.writingErrors || []), ...(local.writingErrors || [])]) {
        const existing = map.get(e.pattern);
        if (!existing || e.count > existing.count) map.set(e.pattern, e);
      }
      return Array.from(map.values());
    })(),
    _pendingAchievements: [],
  };

  // For each lesson, keep the more advanced status
  const statusRank = { locked: 0, active: 1, completed: 2 };
  
  for (const id of lessonIds) {
    const localLesson = local.lessons[id] || DEFAULT_LESSONS[id];
    const cloudLesson = cloud.lessons[id] || DEFAULT_LESSONS[id];
    
    const localRank = statusRank[localLesson.status] || 0;
    const cloudRank = statusRank[cloudLesson.status] || 0;
    
    if (localRank >= cloudRank) {
      merged.lessons[id] = { ...localLesson };
      // Keep higher score
      if (cloudLesson.score && (!localLesson.score || cloudLesson.score > localLesson.score)) {
        merged.lessons[id].score = cloudLesson.score;
      }
    } else {
      merged.lessons[id] = { ...cloudLesson };
    }
  }

  return merged;
}

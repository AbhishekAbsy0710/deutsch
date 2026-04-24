/**
 * Leitner-based Spaced Repetition System
 * 
 * Box 1: Review daily     (new/forgotten)
 * Box 2: Every 3 days
 * Box 3: Every 7 days
 * Box 4: Every 14 days
 * Box 5: Every 30 days
 * 
 * Correct → move up a box
 * Wrong   → back to box 1
 */

export type FlashcardReview = {
  word_id: string;
  ease_factor: number;     // 1-5 (which box)
  interval_days: number;
  repetitions: number;
  next_review: string;     // ISO date
  last_review: string | null;
};

const BOX_INTERVALS = [1, 3, 7, 14, 30];

export function calculateNextReview(
  current: FlashcardReview,
  correct: boolean
): Partial<FlashcardReview> {
  const now = new Date().toISOString().split("T")[0];

  if (!correct) {
    // Wrong → back to box 1
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + 1);
    return {
      ease_factor: 1,
      interval_days: 1,
      repetitions: current.repetitions + 1,
      next_review: nextDate.toISOString().split("T")[0],
      last_review: now,
    };
  }

  // Correct → move up a box (max box 5)
  const newBox = Math.min(current.ease_factor + 1, 5);
  const newInterval = BOX_INTERVALS[newBox - 1];
  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + newInterval);

  return {
    ease_factor: newBox,
    interval_days: newInterval,
    repetitions: current.repetitions + 1,
    next_review: nextDate.toISOString().split("T")[0],
    last_review: now,
  };
}

export function isDueToday(review: FlashcardReview): boolean {
  const today = new Date().toISOString().split("T")[0];
  return review.next_review <= today;
}

export function getBoxLabel(box: number): string {
  const labels = ["New", "Learning", "Reviewing", "Familiar", "Mastered"];
  return labels[Math.min(box - 1, 4)];
}

export function getBoxColor(box: number): string {
  const colors = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#06b6d4"];
  return colors[Math.min(box - 1, 4)];
}

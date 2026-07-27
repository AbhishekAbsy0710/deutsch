"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Fritz } from "./mascot/Fritz";
import type { FritzMood } from "./mascot/fritz-states";

interface EmptyStateProps {
  mood?: FritzMood;
  title: string;
  subtitle: string;
  message?: string;
  action?: {
    label: string;
    href: string;
  };
  className?: string;
}

/**
 * Reusable empty state component with Fritz mascot.
 * Used across pages when there's no data to display.
 */
export function EmptyState({
  mood = "encouraging",
  title,
  subtitle,
  message,
  action,
  className = "",
}: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`border-2 border-dashed border-border p-12 text-center ${className}`}
    >
      <div className="flex justify-center mb-6">
        <Fritz mood={mood} size={90} message={message} showMessage={!!message} />
      </div>
      <h3 className="text-2xl font-black uppercase tracking-tight mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground font-mono text-sm max-w-md mx-auto mb-6">
        {subtitle}
      </p>
      {action && (
        <Link
          href={action.href}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-wide hover:opacity-90 transition-opacity"
        >
          {action.label}
        </Link>
      )}
    </motion.div>
  );
}

// Pre-configured empty states for common pages
export const emptyStates = {
  vocabulary: {
    mood: "encouraging" as FritzMood,
    title: "No Words Yet",
    subtitle: "Complete lessons and practice to build your vocabulary bank.",
    message: "Let's learn some words!",
    action: { label: "Start a Lesson", href: "/learn" },
  },
  review: {
    mood: "idle" as FritzMood,
    title: "Nothing to Review",
    subtitle: "Complete some lessons first — your SRS cards will appear here.",
    message: "Go learn, then come back!",
    action: { label: "Learn Now", href: "/learn" },
  },
  progress: {
    mood: "encouraging" as FritzMood,
    title: "Start Your Journey",
    subtitle: "Complete lessons, practice skills, and watch your progress grow.",
    message: "Every journey starts somewhere!",
    action: { label: "Begin Learning", href: "/learn" },
  },
  games: {
    mood: "idle" as FritzMood,
    title: "Ready to Play?",
    subtitle: "Learn some vocabulary first, then test your skills in fun games.",
    message: "Games unlock after your first lesson!",
    action: { label: "Take a Lesson", href: "/learn" },
  },
  conversation: {
    mood: "encouraging" as FritzMood,
    title: "Let's Talk!",
    subtitle: "Pick a scenario and practice real-world German conversation.",
    message: "Sprechen wir Deutsch!",
  },
};

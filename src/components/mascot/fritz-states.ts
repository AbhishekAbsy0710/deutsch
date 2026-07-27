import type { Variants } from "framer-motion";

export type FritzMood =
  | "idle"
  | "celebrating"
  | "encouraging"
  | "thinking"
  | "sleeping"
  | "worried"
  | "proud"
  | "reading";

export interface FritzConfig {
  mood: FritzMood;
  bodyColor: string;
  accentColor: string;
  eyeVariant: Variants;
  bodyVariant: Variants;
  tailVariant: Variants;
  extras?: string; // Additional SVG elements for the mood
}

// Eye animations per mood
const eyeVariants: Record<FritzMood, Variants> = {
  idle: {
    animate: {
      scaleY: [1, 1, 0.1, 1, 1],
      transition: { duration: 4, repeat: Infinity, repeatDelay: 2, times: [0, 0.48, 0.5, 0.52, 1] },
    },
  },
  celebrating: {
    animate: {
      scaleY: [1, 0.3, 1],
      scaleX: [1, 1.3, 1],
      transition: { duration: 0.6, repeat: Infinity, repeatDelay: 1.5 },
    },
  },
  encouraging: {
    animate: {
      scaleY: [1, 0.8, 1],
      transition: { duration: 1.2, repeat: Infinity, repeatDelay: 2 },
    },
  },
  thinking: {
    animate: {
      x: [0, 2, -2, 0],
      transition: { duration: 2, repeat: Infinity },
    },
  },
  sleeping: {
    animate: {
      scaleY: 0.1,
      transition: { duration: 0.3 },
    },
  },
  worried: {
    animate: {
      y: [0, -1, 0],
      transition: { duration: 0.8, repeat: Infinity },
    },
  },
  proud: {
    animate: {
      scaleY: [1, 0.3, 1],
      transition: { duration: 0.8, repeat: Infinity, repeatDelay: 3 },
    },
  },
  reading: {
    animate: {
      x: [0, -1, 1, 0],
      transition: { duration: 3, repeat: Infinity },
    },
  },
};

// Body bob animations per mood
const bodyVariants: Record<FritzMood, Variants> = {
  idle: {
    animate: {
      y: [0, -2, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  },
  celebrating: {
    animate: {
      y: [0, -8, 0],
      rotate: [0, -3, 3, 0],
      transition: { duration: 0.5, repeat: Infinity, repeatDelay: 1 },
    },
  },
  encouraging: {
    animate: {
      y: [0, -3, 0],
      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
    },
  },
  thinking: {
    animate: {
      rotate: [0, 5, 0],
      transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
    },
  },
  sleeping: {
    animate: {
      y: [0, 1, 0],
      rotate: -10,
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  },
  worried: {
    animate: {
      x: [0, -2, 2, -1, 0],
      transition: { duration: 1.5, repeat: Infinity },
    },
  },
  proud: {
    animate: {
      y: [0, -3, 0],
      scale: [1, 1.05, 1],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
  },
  reading: {
    animate: {
      y: [0, -1, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  },
};

// Tail wag animations per mood
const tailVariants: Record<FritzMood, Variants> = {
  idle: {
    animate: {
      rotate: [0, 8, -8, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  },
  celebrating: {
    animate: {
      rotate: [0, 20, -20, 15, -15, 0],
      transition: { duration: 0.6, repeat: Infinity },
    },
  },
  encouraging: {
    animate: {
      rotate: [0, 12, -12, 0],
      transition: { duration: 1.5, repeat: Infinity },
    },
  },
  thinking: {
    animate: {
      rotate: [0, 3, 0],
      transition: { duration: 2, repeat: Infinity },
    },
  },
  sleeping: {
    animate: {
      rotate: -15,
      transition: { duration: 1 },
    },
  },
  worried: {
    animate: {
      rotate: [0, -5, 0],
      transition: { duration: 1, repeat: Infinity },
    },
  },
  proud: {
    animate: {
      rotate: [0, 15, -15, 0],
      transition: { duration: 1.2, repeat: Infinity },
    },
  },
  reading: {
    animate: {
      rotate: [0, 5, -5, 0],
      transition: { duration: 4, repeat: Infinity },
    },
  },
};

export function getMoodConfig(mood: FritzMood): FritzConfig {
  return {
    mood,
    bodyColor: "currentColor",
    accentColor: "var(--primary)",
    eyeVariant: eyeVariants[mood],
    bodyVariant: bodyVariants[mood],
    tailVariant: tailVariants[mood],
  };
}

// Contextual messages Fritz can say
export const fritzMessages: Record<FritzMood, string[]> = {
  idle: [
    "Ready when you are!",
    "Let's learn something new!",
    "Auf geht's! 🇩🇪",
  ],
  celebrating: [
    "Gut gemacht! 🎉",
    "Ausgezeichnet!",
    "You're on fire! 🔥",
    "Perfekt!",
    "Wow, impressive!",
  ],
  encouraging: [
    "Don't give up!",
    "Try again — you've got this!",
    "Mistakes help you learn!",
    "Almost there, keep going!",
  ],
  thinking: [
    "Hmm, take your time...",
    "Think about it...",
    "What's the answer? 🤔",
  ],
  sleeping: [
    "Zzz... I miss learning...",
    "*yawn* ...welcome back!",
    "Oh! You're here! 😴➡️😃",
  ],
  worried: [
    "Your streak is at risk! 😟",
    "Quick — do a review!",
    "Don't let the flame die!",
  ],
  proud: [
    "Look at you go! ⭐",
    "I'm proud of you!",
    "What a streak! 💪",
    "Champion! 🏆",
  ],
  reading: [
    "Let's study this...",
    "Interesting grammar...",
    "Pay attention to this part!",
  ],
};

export function getRandomMessage(mood: FritzMood): string {
  const messages = fritzMessages[mood];
  return messages[Math.floor(Math.random() * messages.length)];
}

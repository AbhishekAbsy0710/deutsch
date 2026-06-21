"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { ArrowRight } from "lucide-react";

interface LevelUpModalProps {
  newLevel: string;
  show: boolean;
  onClose: () => void;
}

const LEVEL_EMOJIS: Record<string, string> = {
  A0: "🌱", A1: "🌍", A2: "🧭", B1: "🏔️", B2: "🚀", C1: "⭐", C2: "🏆"
};

const LEVEL_MESSAGES: Record<string, string> = {
  A0: "You're taking your first steps!",
  A1: "You can now handle basic German!",
  A2: "You can communicate in everyday situations!",
  B1: "You're an independent speaker now!",
  B2: "You can discuss complex topics fluently!",
  C1: "You command German at a professional level!",
  C2: "You've achieved native-level mastery!",
};

export function LevelUpModal({ newLevel, show, onClose }: LevelUpModalProps) {
  const { width, height } = useWindowSize();

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <Confetti
            width={width}
            height={height}
            numberOfPieces={300}
            recycle={false}
            gravity={0.15}
          />

          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 10 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="bg-card border-4 border-primary p-10 md:p-16 text-center max-w-md mx-4 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />

            {/* Pulsing ring behind emoji */}
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mx-auto w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-6"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.5, 1] }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-6xl"
              >
                {LEVEL_EMOJIS[newLevel] || "🎉"}
              </motion.span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">
                Level Up!
              </p>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">
                {newLevel}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {LEVEL_MESSAGES[newLevel] || "You've reached a new level!"}
              </p>

              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
              >
                Continue <ArrowRight size={20} />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

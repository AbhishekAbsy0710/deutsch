"use client";

import { motion } from "framer-motion";
import { getMoodConfig, getRandomMessage, type FritzMood } from "./fritz-states";
import { SpeechBubble } from "./SpeechBubble";
import { useState, useEffect, useMemo } from "react";

interface FritzProps {
  mood?: FritzMood;
  message?: string | null;
  size?: number;
  showMessage?: boolean;
  className?: string;
}

/**
 * Fritz — the German-learning fox mascot.
 * 
 * A flat, geometric SVG fox built with sharp lines to match the app's
 * brutalist design language. Animated with Framer Motion.
 * 
 * 8 mood states: idle, celebrating, encouraging, thinking,
 * sleeping, worried, proud, reading
 */
export function Fritz({
  mood = "idle",
  message = null,
  size = 80,
  showMessage = true,
  className = "",
}: FritzProps) {
  const config = getMoodConfig(mood);
  const [bubbleMessage, setBubbleMessage] = useState<string | null>(null);
  const [showBubble, setShowBubble] = useState(false);

  // Pick a message on mood change or use explicit message
  useEffect(() => {
    const msg = message ?? getRandomMessage(mood);
    setBubbleMessage(msg);
    if (showMessage) {
      setShowBubble(true);
    }
  }, [mood, message, showMessage]);

  // Sleeping extras: "zzz" particles
  const sleepingExtras = mood === "sleeping" && (
    <>
      <motion.text
        x="62" y="20" fontSize="10" fill="var(--primary)"
        fontWeight="bold" fontFamily="var(--font-geist-mono)"
        animate={{ opacity: [0, 1, 0], y: [20, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0 }}
      >z</motion.text>
      <motion.text
        x="68" y="12" fontSize="13" fill="var(--primary)"
        fontWeight="bold" fontFamily="var(--font-geist-mono)"
        animate={{ opacity: [0, 1, 0], y: [12, 2, -8] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      >z</motion.text>
      <motion.text
        x="75" y="5" fontSize="16" fill="var(--primary)"
        fontWeight="bold" fontFamily="var(--font-geist-mono)"
        animate={{ opacity: [0, 1, 0], y: [5, -5, -15] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      >Z</motion.text>
    </>
  );

  // Proud extras: small star/medal
  const proudExtras = mood === "proud" && (
    <motion.g
      animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <circle cx="56" cy="52" r="5" fill="var(--primary)" />
      <text x="56" y="55" textAnchor="middle" fontSize="7" fill="var(--background, white)">★</text>
    </motion.g>
  );

  // Reading extras: tiny book
  const readingExtras = mood === "reading" && (
    <g>
      <rect x="22" y="50" width="12" height="9" rx="1" fill="var(--primary)" />
      <line x1="28" y1="50" x2="28" y2="59" stroke="var(--background, white)" strokeWidth="0.5" />
    </g>
  );

  // Worried extras: sweat drop
  const worriedExtras = mood === "worried" && (
    <motion.ellipse
      cx="55" cy="30"
      rx="2" ry="3"
      fill="hsl(210, 80%, 70%)"
      animate={{ y: [0, 5], opacity: [1, 0] }}
      transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.5 }}
    />
  );

  // Celebrating extras: sparkle particles
  const celebratingExtras = mood === "celebrating" && (
    <>
      {[
        { x: 10, y: 8, delay: 0 },
        { x: 65, y: 5, delay: 0.3 },
        { x: 5, y: 45, delay: 0.6 },
        { x: 70, y: 40, delay: 0.9 },
      ].map((spark, i) => (
        <motion.text
          key={i}
          x={spark.x} y={spark.y}
          fontSize="8"
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5], rotate: [0, 180] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: spark.delay }}
        >✦</motion.text>
      ))}
    </>
  );

  return (
    <div className={`flex items-center ${className}`}>
      <motion.svg
        viewBox="0 0 80 80"
        width={size}
        height={size}
        className="flex-shrink-0"
        variants={config.bodyVariant}
        animate="animate"
      >
        {/* === BODY === */}
        {/* Tail */}
        <motion.path
          d="M 58 58 Q 72 50 68 38 Q 65 32 60 36"
          fill="none"
          stroke="hsl(25, 85%, 55%)"
          strokeWidth="4"
          strokeLinecap="round"
          variants={config.tailVariant}
          animate="animate"
          style={{ originX: "58px", originY: "58px" }}
        />
        {/* Tail tip (white) */}
        <motion.circle
          cx="68" cy="38" r="3"
          fill="hsl(0, 0%, 95%)"
          variants={config.tailVariant}
          animate="animate"
          style={{ originX: "58px", originY: "58px" }}
        />

        {/* Body */}
        <ellipse cx="40" cy="55" rx="18" ry="14" fill="hsl(25, 85%, 55%)" />
        {/* Belly */}
        <ellipse cx="40" cy="58" rx="11" ry="9" fill="hsl(40, 90%, 88%)" />

        {/* === HEAD === */}
        {/* Head base */}
        <circle cx="40" cy="35" r="16" fill="hsl(25, 85%, 55%)" />

        {/* Ears */}
        <motion.polygon
          points="26,28 20,12 33,24"
          fill="hsl(25, 85%, 55%)"
          animate={mood === "idle" ? { 
            rotate: [0, -3, 0],
          } : {}}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
          style={{ originX: "28px", originY: "26px" }}
        />
        <polygon points="28,26 23,16 33,24" fill="hsl(350, 60%, 65%)" />
        
        <motion.polygon
          points="54,28 60,12 47,24"
          fill="hsl(25, 85%, 55%)"
          animate={mood === "idle" ? {
            rotate: [0, 3, 0],
          } : {}}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
          style={{ originX: "52px", originY: "26px" }}
        />
        <polygon points="52,26 57,16 47,24" fill="hsl(350, 60%, 65%)" />

        {/* Face mask (white cheeks/muzzle) */}
        <path
          d="M 30 34 Q 34 28 40 28 Q 46 28 50 34 Q 50 42 40 44 Q 30 42 30 34"
          fill="hsl(40, 90%, 92%)"
        />

        {/* Eyes */}
        <motion.g variants={config.eyeVariant} animate="animate">
          <ellipse cx="34" cy="33" rx="2.5" ry="3" fill="hsl(220, 15%, 20%)" />
          <ellipse cx="46" cy="33" rx="2.5" ry="3" fill="hsl(220, 15%, 20%)" />
          {/* Eye shine */}
          <circle cx="35" cy="32" r="1" fill="white" />
          <circle cx="47" cy="32" r="1" fill="white" />
        </motion.g>

        {/* Nose */}
        <ellipse cx="40" cy="38" rx="3" ry="2" fill="hsl(220, 15%, 20%)" />
        {/* Nose shine */}
        <circle cx="41" cy="37.5" r="0.8" fill="hsl(220, 15%, 35%)" />

        {/* Mouth — changes with mood */}
        {(mood === "celebrating" || mood === "proud") && (
          <path d="M 36 40 Q 40 44 44 40" fill="none" stroke="hsl(220, 15%, 20%)" strokeWidth="1" strokeLinecap="round" />
        )}
        {mood === "worried" && (
          <path d="M 37 41 Q 40 39 43 41" fill="none" stroke="hsl(220, 15%, 20%)" strokeWidth="1" strokeLinecap="round" />
        )}
        {mood === "sleeping" && (
          <path d="M 37 40 L 43 40" stroke="hsl(220, 15%, 20%)" strokeWidth="1" strokeLinecap="round" />
        )}

        {/* === FEET === */}
        <ellipse cx="32" cy="68" rx="5" ry="3" fill="hsl(25, 85%, 45%)" />
        <ellipse cx="48" cy="68" rx="5" ry="3" fill="hsl(25, 85%, 45%)" />

        {/* === MOOD EXTRAS === */}
        {sleepingExtras}
        {proudExtras}
        {readingExtras}
        {worriedExtras}
        {celebratingExtras}
      </motion.svg>

      {/* Speech bubble */}
      {showMessage && bubbleMessage && (
        <SpeechBubble
          message={bubbleMessage}
          show={showBubble}
          onDismiss={() => setShowBubble(false)}
        />
      )}
    </div>
  );
}

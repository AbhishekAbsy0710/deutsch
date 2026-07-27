"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SpeechBubbleProps {
  message: string;
  show: boolean;
  pinned?: boolean;
  onDismiss?: () => void;
  position?: "right" | "top";
}

export function SpeechBubble({ message, show, pinned = false, onDismiss, position = "right" }: SpeechBubbleProps) {
  const [visible, setVisible] = useState(show);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    setVisible(show);
    if (show) {
      setDisplayText("");
      // Typing effect
      let i = 0;
      const interval = setInterval(() => {
        if (i < message.length) {
          setDisplayText(message.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 25);

      // Auto-dismiss after 5 seconds if not pinned
      let timeout: NodeJS.Timeout;
      if (!pinned) {
        timeout = setTimeout(() => {
          setVisible(false);
          onDismiss?.();
        }, 5000);
      }

      return () => {
        clearInterval(interval);
        if (timeout) clearTimeout(timeout);
      };
    }
  }, [show, message, pinned, onDismiss]);

  const isRight = position === "right";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: isRight ? 0 : 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`relative bg-foreground text-background px-4 py-2.5 max-w-[220px] ${
            isRight ? "ml-3" : "mb-3"
          }`}
        >
          {/* Arrow */}
          <div
            className={`absolute w-0 h-0 ${
              isRight
                ? "left-0 top-1/2 -translate-x-full -translate-y-1/2 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[8px] border-r-foreground"
                : "bottom-0 left-1/2 translate-y-full -translate-x-1/2 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-foreground"
            }`}
          />
          <p className="text-sm font-medium leading-snug">{displayText}</p>
          {pinned && (
            <button
              onClick={() => {
                setVisible(false);
                onDismiss?.();
              }}
              className="absolute -top-2 -right-2 w-5 h-5 bg-muted-foreground text-background text-xs flex items-center justify-center hover:bg-destructive transition-colors"
            >
              ×
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

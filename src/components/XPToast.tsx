"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";

interface XPToastProps {
  xpAmount: number;
  show: boolean;
  onComplete?: () => void;
}

export function XPToast({ xpAmount, show, onComplete }: XPToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => onComplete?.(), 2500);
      return () => clearTimeout(timer);
    }
  }, [show, onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="fixed bottom-24 md:bottom-8 right-8 z-[100] flex items-center gap-3 bg-yellow-500 text-black px-5 py-3 shadow-2xl shadow-yellow-500/30"
        >
          <motion.div
            animate={{ rotate: [0, -15, 15, -15, 0] }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Zap size={24} className="fill-current" />
          </motion.div>
          <span className="text-lg font-black tracking-tight">+{xpAmount} XP</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Standalone component with its own state management
export function useXPToast() {
  const [showToast, setShowToast] = useState(false);
  const [xpAmount, setXpAmount] = useState(0);

  const triggerXP = (amount: number) => {
    setXpAmount(amount);
    setShowToast(true);
  };

  const Toast = () => (
    <XPToast 
      xpAmount={xpAmount} 
      show={showToast} 
      onComplete={() => setShowToast(false)} 
    />
  );

  return { triggerXP, XPToastComponent: Toast };
}

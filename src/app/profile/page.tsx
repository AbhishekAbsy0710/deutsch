"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Moon, Sun, Globe, Volume2, LogOut, RotateCcw } from "lucide-react";
import { useProgressStore } from "@/store/useProgressStore";
import { createClient } from "@/lib/supabase-auth";

const goalLabels: Record<string, string> = {
  job: "Job in Germany",
  study: "University / Study",
  travel: "Travel",
  life: "Daily Life in Germany",
};

const goalDescriptions: Record<string, string> = {
  job: "Professional vocabulary and formal communication.",
  study: "Academic German and exam preparation.",
  travel: "Basic survival phrases and casual chatting.",
  life: "Focus on supermarket, renting, transportation, and making friends.",
};

export default function ProfilePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const { xp, streak, lessons, goal, resetProgress } = useProgressStore();
  const completedCount = Object.values(lessons).filter(l => l.status === "completed").length;
  const currentLevel = completedCount >= 60 ? "B2" : completedCount >= 45 ? "B1" : completedCount >= 30 ? "A2" : completedCount >= 12 ? "A1" : "A0";

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains("dark"));
    
    // Fetch user from Supabase
    const fetchUser = async () => {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserEmail(user.email ?? null);
      }
    };
    
    fetchUser();
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex-1 px-6 md:px-16 py-12 max-w-[1000px] mx-auto w-full">
      <header className="mb-16 border-b-4 border-foreground pb-8">
        <div className="text-primary font-mono text-sm tracking-widest uppercase mb-4 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-primary block"></span>
          Identity
        </div>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
          Profile.
        </h1>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* Avatar & Info */}
        <div className="border-2 border-foreground p-8 flex items-center gap-8">
          <div className="w-24 h-24 bg-primary flex items-center justify-center flex-shrink-0">
            <User size={48} className="text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-3xl font-black tracking-tight">{userEmail ? userEmail.split('@')[0] : "Learner"}</h2>
            <p className="font-mono text-sm text-muted-foreground mt-1">{userEmail || "Member since April 2026"}</p>
            <div className="flex flex-wrap gap-4 mt-4 font-mono text-sm">
              <span className="bg-foreground text-background px-3 py-1 font-bold">{currentLevel}</span>
              <span className="border-2 border-foreground px-3 py-1 font-bold">{xp} XP</span>
              <span className="border-2 border-foreground px-3 py-1 font-bold">🔥 {streak} Day Streak</span>
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="border-2 border-foreground">
          <div className="border-b-2 border-foreground p-4 font-mono text-sm font-bold uppercase tracking-widest text-muted-foreground">
            Settings
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="w-full flex items-center justify-between p-6 border-b-2 border-border hover:bg-secondary transition-colors text-left"
          >
            <div className="flex items-center gap-4">
              {darkMode ? <Moon size={20} /> : <Sun size={20} />}
              <div>
                <p className="font-bold text-lg">Dark Mode</p>
                <p className="text-sm text-muted-foreground font-mono">
                  {darkMode ? "Currently dark" : "Currently light"}
                </p>
              </div>
            </div>
            <div className={`w-14 h-8 border-2 border-foreground flex items-center px-1 transition-colors ${darkMode ? "bg-primary" : "bg-secondary"}`}>
              <motion.div
                className="w-5 h-5 bg-foreground"
                animate={{ x: darkMode ? 20 : 0 }}
                transition={{ type: "spring" as const, stiffness: 300, damping: 25 }}
              />
            </div>
          </button>

          {/* Language */}
          <div className="flex items-center justify-between p-6 border-b-2 border-border">
            <div className="flex items-center gap-4">
              <Globe size={20} />
              <div>
                <p className="font-bold text-lg">Interface Language</p>
                <p className="text-sm text-muted-foreground font-mono">English</p>
              </div>
            </div>
          </div>

          {/* Audio */}
          <div className="flex items-center justify-between p-6 border-b-2 border-border">
            <div className="flex items-center gap-4">
              <Volume2 size={20} />
              <div>
                <p className="font-bold text-lg">Audio Feedback</p>
                <p className="text-sm text-muted-foreground font-mono">Enabled</p>
              </div>
            </div>
          </div>

          {/* Logout */}
          <button className="w-full flex items-center gap-4 p-6 text-red-500 hover:bg-red-500/10 transition-colors text-left">
            <LogOut size={20} />
            <p className="font-bold text-lg">Log Out</p>
          </button>
        </div>

        {/* Learning Goal */}
        <div className="border-2 border-foreground p-8">
          <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
            Learning Goal
          </h3>
          <p className="text-2xl font-black uppercase">{goal ? goalLabels[goal] || goal : "Not set yet"}</p>
          <p className="text-muted-foreground mt-2">
            {goal ? goalDescriptions[goal] || "" : "Complete the assessment to set your learning goal."}
          </p>
        </div>

        {/* Reset Progress */}
        <button
          onClick={() => { if (confirm("Reset all progress? This cannot be undone.")) resetProgress(); }}
          className="w-full border-2 border-dashed border-border p-6 text-muted-foreground hover:border-red-500 hover:text-red-500 transition-colors flex items-center justify-center gap-3 font-mono text-sm"
        >
          <RotateCcw size={16} /> Reset All Progress
        </button>
      </motion.div>
    </div>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import { Bell, BellOff, Clock, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ReminderTime = "09:00" | "12:00" | "18:00" | "20:00" | "custom";

const PRESET_TIMES: { value: ReminderTime; label: string; desc: string }[] = [
  { value: "09:00", label: "Morning",  desc: "9:00 AM" },
  { value: "12:00", label: "Midday",   desc: "12:00 PM" },
  { value: "18:00", label: "Evening",  desc: "6:00 PM" },
  { value: "20:00", label: "Night",    desc: "8:00 PM" },
];

const STORAGE_KEY = "deutsch-reminder-settings";

interface ReminderSettings {
  enabled: boolean;
  time: string; // HH:MM
  lastNotified: string | null; // ISO date
}

function getStoredSettings(): ReminderSettings {
  if (typeof window === "undefined") return { enabled: false, time: "18:00", lastNotified: null };
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return { enabled: false, time: "18:00", lastNotified: null };
}

function saveSettings(settings: ReminderSettings) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {}
}

/**
 * Study Reminder — Browser Notification System
 * 
 * Uses the Notification API to send study reminders.
 * Checks every minute if it's time to notify.
 * Respects user's chosen reminder time.
 * Only sends one notification per day.
 */
export function StudyReminder() {
  const [settings, setSettings] = useState<ReminderSettings>(getStoredSettings);
  const [permissionState, setPermissionState] = useState<NotificationPermission>("default");
  const [showSettings, setShowSettings] = useState(false);
  const [justEnabled, setJustEnabled] = useState(false);

  // Check Notification API support and permission
  useEffect(() => {
    if (typeof window !== "undefined" && "Notification" in window) {
      setPermissionState(Notification.permission);
    }
  }, []);

  // Request notification permission
  const requestPermission = useCallback(async () => {
    if (!("Notification" in window)) return;
    const result = await Notification.requestPermission();
    setPermissionState(result);
    if (result === "granted") {
      const newSettings = { ...settings, enabled: true };
      setSettings(newSettings);
      saveSettings(newSettings);
      setJustEnabled(true);
      setTimeout(() => setJustEnabled(false), 3000);
    }
  }, [settings]);

  // Toggle reminders
  const toggleReminder = useCallback(async () => {
    if (!settings.enabled) {
      if (permissionState !== "granted") {
        await requestPermission();
      } else {
        const newSettings = { ...settings, enabled: true };
        setSettings(newSettings);
        saveSettings(newSettings);
        setJustEnabled(true);
        setTimeout(() => setJustEnabled(false), 3000);
      }
    } else {
      const newSettings = { ...settings, enabled: false };
      setSettings(newSettings);
      saveSettings(newSettings);
    }
  }, [settings, permissionState, requestPermission]);

  // Change reminder time
  const setTime = useCallback((time: string) => {
    const newSettings = { ...settings, time };
    setSettings(newSettings);
    saveSettings(newSettings);
  }, [settings]);

  // Check if it's time to send a notification (runs every 60s)
  useEffect(() => {
    if (!settings.enabled || permissionState !== "granted") return;

    const checkAndNotify = () => {
      const now = new Date();
      const today = now.toISOString().split("T")[0];
      const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

      // Already notified today?
      if (settings.lastNotified === today) return;

      // Is it time?
      if (currentTime >= settings.time) {
        const messages = [
          "🇩🇪 Zeit zu lernen! Your daily German lesson awaits.",
          "🔥 Don't break your streak! Practice German now.",
          "📚 Guten Tag! Let's learn some German today.",
          "⭐ A quick lesson keeps the streak alive!",
        ];
        const message = messages[Math.floor(Math.random() * messages.length)];

        new Notification("Deutsch Lernen", {
          body: message,
          icon: "/favicon.ico",
          tag: "daily-reminder",
        });

        const newSettings = { ...settings, lastNotified: today };
        setSettings(newSettings);
        saveSettings(newSettings);
      }
    };

    // Check immediately, then every 60 seconds
    checkAndNotify();
    const interval = setInterval(checkAndNotify, 60000);
    return () => clearInterval(interval);
  }, [settings, permissionState]);

  const notSupported = typeof window !== "undefined" && !("Notification" in window);

  return (
    <div className="border-2 border-border p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {settings.enabled ? (
            <Bell size={20} className="text-primary" />
          ) : (
            <BellOff size={20} className="text-muted-foreground" />
          )}
          <div>
            <p className="font-bold text-sm">Study Reminders</p>
            <p className="font-mono text-xs text-muted-foreground">
              {notSupported
                ? "Not supported in this browser"
                : permissionState === "denied"
                ? "Notifications blocked"
                : settings.enabled
                ? `Daily at ${settings.time}`
                : "Off"}
            </p>
          </div>
        </div>

        <button
          onClick={toggleReminder}
          disabled={notSupported || permissionState === "denied"}
          className={`px-4 py-2 font-bold text-xs uppercase tracking-wide transition-colors ${
            settings.enabled
              ? "bg-primary text-primary-foreground hover:opacity-90"
              : "border-2 border-foreground hover:bg-secondary"
          } disabled:opacity-40 disabled:cursor-not-allowed`}
        >
          {settings.enabled ? "Enabled" : "Enable"}
        </button>
      </div>

      {/* Success message */}
      <AnimatePresence>
        {justEnabled && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center gap-2 text-green-600 dark:text-green-400 text-xs font-mono mb-3"
          >
            <Check size={14} />
            Reminders enabled! You&apos;ll get a daily notification.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Time picker — only when enabled */}
      {settings.enabled && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Clock size={12} className="text-muted-foreground" />
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Remind me at
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {PRESET_TIMES.map((preset) => (
              <button
                key={preset.value}
                onClick={() => setTime(preset.value)}
                className={`px-3 py-1.5 font-mono text-xs transition-colors ${
                  settings.time === preset.value
                    ? "bg-primary text-primary-foreground"
                    : "border border-border hover:bg-secondary"
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

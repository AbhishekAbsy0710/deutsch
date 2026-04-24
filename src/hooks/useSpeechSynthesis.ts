"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useSpeechSynthesis() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    setIsSupported(typeof window !== "undefined" && "speechSynthesis" in window);
  }, []);

  const getGermanVoice = useCallback((): SpeechSynthesisVoice | null => {
    if (!isSupported) return null;
    const voices = window.speechSynthesis.getVoices();
    // Prefer high-quality German voices
    return (
      voices.find(v => v.lang === "de-DE" && v.name.includes("Anna")) ||
      voices.find(v => v.lang === "de-DE" && v.name.includes("Google")) ||
      voices.find(v => v.lang === "de-DE" && !v.localService) ||
      voices.find(v => v.lang.startsWith("de")) ||
      null
    );
  }, [isSupported]);

  const speak = useCallback((text: string) => {
    if (!isSupported) return;

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    // Extract only German text — strip English translations in parentheses
    // and markdown formatting
    const cleaned = text
      .replace(/\(([^)]*)\)/g, "")     // Remove (English translations)
      .replace(/\*\*/g, "")             // Remove **bold**
      .replace(/[❌✅💡🎉😊👋🇩🇪📐🛒☕🚂🍕🎨👨‍👩‍👧‍👦🏆🐕🐱👶🎓🍎🍞🧀🧈💧🐟🍦🔴🔵🟢🟡⚫⚪🚗🏅👦👵👫🎊💶💰🍰]/gu, "") // Remove emojis
      .replace(/\n+/g, ". ")            // Newlines to pauses
      .replace(/\s+/g, " ")             // Collapse whitespace
      .trim();

    if (!cleaned) return;

    const utterance = new SpeechSynthesisUtterance(cleaned);
    const voice = getGermanVoice();
    if (voice) utterance.voice = voice;
    utterance.lang = "de-DE";
    utterance.rate = 0.85; // Slightly slower for learning
    utterance.pitch = 1.0;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [isSupported, getGermanVoice]);

  const stop = useCallback(() => {
    if (!isSupported) return;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, [isSupported]);

  return { speak, stop, isSpeaking, isSupported };
}

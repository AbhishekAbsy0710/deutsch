"use client";

import { useCallback, useRef, useState } from "react";

export function useSpeechSynthesis() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentUrlRef = useRef<string | null>(null);

  const speak = useCallback(async (text: string) => {
    if (!text.trim()) return;

    console.log("[TTS] Requesting neural voice for:", text.substring(0, 60) + "...");

    // Stop any currently playing audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    // Revoke previous blob URL to free memory
    if (currentUrlRef.current) {
      URL.revokeObjectURL(currentUrlRef.current);
      currentUrlRef.current = null;
    }

    setIsSpeaking(true);

    try {
      const response = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.error || `TTS API error: ${response.status}`);
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      currentUrlRef.current = audioUrl;

      const audio = new Audio(audioUrl);
      audioRef.current = audio;

      audio.onended = () => {
        console.log("[TTS] ⏹ Playback finished");
        setIsSpeaking(false);
      };
      audio.onerror = (e) => {
        console.error("[TTS] ✖ Playback error:", e);
        setIsSpeaking(false);
      };

      console.log("[TTS] ▶ Playing neural audio...");
      await audio.play();
    } catch (error) {
      console.error("[TTS] Error:", error);
      setIsSpeaking(false);
      
      // Fallback to browser speech synthesis if neural TTS fails
      if ("speechSynthesis" in window) {
        console.log("[TTS] Falling back to browser speech synthesis");
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "de-DE";
        utterance.rate = 0.93;
        utterance.pitch = 1.05;
        const voices = window.speechSynthesis.getVoices();
        const deVoice = voices.find(v => v.lang.startsWith("de"));
        if (deVoice) utterance.voice = deVoice;
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);
        window.speechSynthesis.speak(utterance);
      }
    }
  }, []);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    // Also stop browser fallback if active
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  }, []);

  return { speak, stop, isSpeaking, isSupported: true };
}

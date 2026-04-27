"use client";

/**
 * Centralized German TTS utility.
 * Uses Google Translate neural voice via /api/tts endpoint.
 * Falls back to browser speechSynthesis only if the API fails.
 * 
 * ALL components should use this instead of raw window.speechSynthesis.
 */

let currentAudio: HTMLAudioElement | null = null;
let currentUrl: string | null = null;

export function stopGermanAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
  if (currentUrl) {
    URL.revokeObjectURL(currentUrl);
    currentUrl = null;
  }
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

export async function speakGermanNeural(text: string): Promise<void> {
  if (!text.trim()) return;

  // Stop any currently playing audio
  stopGermanAudio();

  try {
    const response = await fetch("/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) throw new Error(`TTS API error: ${response.status}`);

    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);
    currentUrl = audioUrl;

    const audio = new Audio(audioUrl);
    currentAudio = audio;

    return new Promise<void>((resolve, reject) => {
      audio.onended = () => {
        currentAudio = null;
        resolve();
      };
      audio.onerror = (e) => {
        currentAudio = null;
        reject(new Error("Playback error"));
      };
      audio.play().catch(reject);
    });
  } catch (error) {
    console.warn("[TTS] Neural TTS failed, falling back to browser:", error);
    // Fallback to browser speech synthesis
    return new Promise<void>((resolve) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) {
        resolve();
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      utterance.rate = 0.85;
      const voices = window.speechSynthesis.getVoices();
      const deVoice = voices.find(v => v.lang.startsWith("de"));
      if (deVoice) utterance.voice = deVoice;
      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();
      window.speechSynthesis.speak(utterance);
    });
  }
}

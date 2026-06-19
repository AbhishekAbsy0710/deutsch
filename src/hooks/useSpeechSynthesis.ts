"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Extracts only the German parts from tutor messages.
 * Strips: English translations in brackets, emojis, formatting markers.
 * This way the Azure voice speaks natural German, not "Hallo parenthesis Hello parenthesis".
 */
function extractGermanForTTS(text: string): string {
  let cleaned = text
    // Remove English translations in brackets: (Hello!) or (This is good.)
    .replace(/\([^)]*\)/g, "")
    // Remove emoji and special markers
    .replace(/[\u{1F600}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F900}-\u{1F9FF}]/gu, "")
    // Remove common text markers: ✏️ ✅ 📖 🔄 🔍 🏗️ 🎭 etc.
    .replace(/[✏️✅📖🔄🔍🏗️🎭⭐💡🎯❌⚠️]/g, "")
    // Remove lines that are purely English (no German characters äöüß and no German structure)
    .split("\n")
    .filter(line => {
      const trimmed = line.trim();
      if (!trimmed) return false;
      // Keep lines with German-specific characters
      if (/[äöüÄÖÜß]/.test(trimmed)) return true;
      // Keep lines that start with German words (common patterns)
      if (/^(Ich|Du|Er|Sie|Wir|Ihr|Das|Der|Die|Ein|Eine|Mein|Dein|Ja|Nein|Gut|Super|Richtig|Fast|Genau|Also|Und|Aber|Oder|Wie|Was|Wo|Wann|Warum|Hallo|Auf|Zum|Komm|Erzähl|Klingt|Nicht|Noch|Sag|Versuch)/i.test(trimmed)) return true;
      // Keep short lines (likely German phrases)
      if (trimmed.length < 60 && !/^[A-Z][a-z]/.test(trimmed)) return true;
      // Filter out pure English lines
      if (/^(FORMAT|STEP|RULE|NOTE|TIP|Small tip|For example|In German|Your|The |That|This|I think|You |Nice|Great|Good|Almost|Correct|Wrong)/i.test(trimmed)) return false;
      return true;
    })
    .join(". ")
    // Clean up extra spaces and punctuation
    .replace(/\s+/g, " ")
    .replace(/\.\s*\./g, ".")
    .replace(/,\s*,/g, ",")
    .trim();

  return cleaned || text.substring(0, 200); // Fallback: use raw text if stripping removes everything
}

export function useSpeechSynthesis() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentUrlRef = useRef<string | null>(null);

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

  // Stop TTS when navigating away or switching tabs
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stop();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    // Cleanup on unmount (navigation away)
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      stop();
    };
  }, [stop]);

  const speak = useCallback(async (text: string) => {
    if (!text.trim()) return;

    // Extract only German parts for natural TTS
    const germanText = extractGermanForTTS(text);
    console.log("[TTS] Speaking German:", germanText.substring(0, 80) + "...");

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
        body: JSON.stringify({ text: germanText }),
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

      console.log("[TTS] ▶ Playing Azure Neural audio...");
      await audio.play();
    } catch (error) {
      console.error("[TTS] Error:", error);
      setIsSpeaking(false);
      
      // Fallback to browser speech synthesis if Azure TTS fails
      if ("speechSynthesis" in window) {
        console.log("[TTS] Falling back to browser speech synthesis");
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(germanText);
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

  return { speak, stop, isSpeaking, isSupported: true };
}

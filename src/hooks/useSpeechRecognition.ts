"use client";

import { useState, useRef, useCallback, useEffect } from "react";

type SpeechRecognitionStatus = "idle" | "listening" | "processing" | "done" | "error" | "unsupported";

interface UseSpeechRecognitionReturn {
  status: SpeechRecognitionStatus;
  transcript: string;
  error: string | null;
  startListening: () => void;
  stopListening: () => void;
  isSupported: boolean;
}

export function useSpeechRecognition(): UseSpeechRecognitionReturn {
  const [status, setStatus] = useState<SpeechRecognitionStatus>("idle");
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSupported, setIsSupported] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    setIsSupported(!!SpeechRecognition);
  }, []);

  const startListening = useCallback(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setStatus("unsupported");
      setError("Speech recognition is not supported in this browser. Please use Chrome or Edge.");
      return;
    }

    // Reset state
    setTranscript("");
    setError(null);
    setStatus("listening");

    const recognition = new SpeechRecognition();
    recognition.lang = "de-DE";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const result = event.results[0][0].transcript;
      setTranscript(result);
      setStatus("done");
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      if (event.error === "no-speech") {
        setError("No speech detected. Please try again.");
      } else if (event.error === "not-allowed") {
        setError("Microphone access denied. Please allow microphone access in your browser settings.");
      } else {
        setError(`Speech recognition error: ${event.error}`);
      }
      setStatus("error");
    };

    recognition.onend = () => {
      if (status === "listening") {
        setStatus("processing");
        // Recognition ended naturally — result handler will fire
      }
    };

    recognitionRef.current = recognition;
    recognition.start();
  }, [status]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setStatus("processing");
    }
  }, []);

  return { status, transcript, error, startListening, stopListening, isSupported };
}

// Simple function to speak German text aloud
export function speakGerman(text: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!window.speechSynthesis) {
      reject(new Error("Speech synthesis not supported"));
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "de-DE";
    utterance.rate = 0.85; // Slightly slower for learners
    utterance.onend = () => resolve();
    utterance.onerror = () => reject(new Error("Speech synthesis error"));
    window.speechSynthesis.speak(utterance);
  });
}

// Compare two strings for pronunciation similarity (simple version)
export function comparePronunciation(spoken: string, target: string): { score: number; feedback: string } {
  const normalize = (s: string) => s.toLowerCase().trim().replace(/[.,!?]/g, "");
  const spokenNorm = normalize(spoken);
  const targetNorm = normalize(target);

  if (spokenNorm === targetNorm) {
    return { score: 100, feedback: "Perfect! Your pronunciation matches exactly." };
  }

  // Simple word-level comparison
  const spokenWords = spokenNorm.split(/\s+/);
  const targetWords = targetNorm.split(/\s+/);
  let matches = 0;
  for (const sw of spokenWords) {
    if (targetWords.includes(sw)) matches++;
  }
  const score = Math.round((matches / Math.max(targetWords.length, 1)) * 100);

  if (score >= 80) {
    return { score, feedback: "Great job! Very close to the target pronunciation." };
  } else if (score >= 50) {
    return { score, feedback: `Good attempt! You said "${spoken}" — try to match "${target}" more closely.` };
  } else {
    return { score, feedback: `You said "${spoken}" — the target is "${target}". Try again!` };
  }
}

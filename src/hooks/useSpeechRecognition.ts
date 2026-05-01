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
    
    // Hack: Flush the queue to prevent Chrome/Safari from stalling
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "de-DE";
    utterance.rate = 0.85; // Slightly slower for learners
    utterance.onend = () => resolve();
    utterance.onerror = () => reject(new Error("Speech synthesis error"));
    
    window.speechSynthesis.speak(utterance);
    
    // Hack: Force resume in case the browser paused the background context
    if (window.speechSynthesis.resume) {
      window.speechSynthesis.resume();
    }
  });
}

// Calculate Levenshtein distance between two strings
function levenshteinDistance(a: string, b: string): number {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));

  for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
  for (let j = 0; j <= b.length; j++) matrix[j][0] = j;

  for (let j = 1; j <= b.length; j++) {
    for (let i = 1; i <= a.length; i++) {
      const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1, // deletion
        matrix[j - 1][i] + 1, // insertion
        matrix[j - 1][i - 1] + indicator // substitution
      );
    }
  }
  return matrix[b.length][a.length];
}

// Compare two strings for pronunciation similarity using Levenshtein distance
export function comparePronunciation(spoken: string, target: string): { score: number; feedback: string } {
  const normalize = (s: string) => s.toLowerCase().trim().replace(/[.,!?]/g, "");
  const spokenNorm = normalize(spoken);
  const targetNorm = normalize(target);

  if (spokenNorm === targetNorm) {
    return { score: 100, feedback: "Perfect! Your pronunciation matches exactly." };
  }

  const distance = levenshteinDistance(spokenNorm, targetNorm);
  const maxLength = Math.max(spokenNorm.length, targetNorm.length, 1);
  const score = Math.max(0, Math.round(((maxLength - distance) / maxLength) * 100));

  if (score >= 85) {
    return { score, feedback: "Great job! Very close to the target pronunciation." };
  } else if (score >= 60) {
    return { score, feedback: `Good attempt! You said "${spoken}" — try to match "${target}" more closely.` };
  } else {
    return { score, feedback: `You said "${spoken}" — the target is "${target}". Try again!` };
  }
}

/**
 * usePronunciation — High-level hook combining audio capture + Azure assessment
 * 
 * Orchestrates: record → encode → send to API → parse results.
 * Graceful fallback to Levenshtein comparison if Azure is unavailable.
 */
"use client";

import { useState, useCallback, useRef } from "react";
import { useAudioCapture } from "./useAudioCapture";
import { levenshteinSimilarity } from "@/lib/smart-review";

export interface PhonemeResult {
  phoneme: string;
  accuracy: number;
}

export interface WordResult {
  word: string;
  accuracy: number;
  error: "None" | "Omission" | "Insertion" | "Mispronunciation";
  phonemes: PhonemeResult[];
}

export interface PronunciationResult {
  overall: {
    accuracy: number;
    fluency: number;
    completeness: number;
    pronunciation: number;
  };
  words: WordResult[];
  displayText?: string;
  isFallback: boolean;
  textSimilarity?: number; // Levenshtein % if fallback
}

export interface UsePronunciationReturn {
  startAssessment: (referenceText: string) => void;
  stopAndScore: () => Promise<PronunciationResult>;
  isRecording: boolean;
  isScoring: boolean;
  result: PronunciationResult | null;
  error: string | null;
  duration: number;
  amplitude: number;
  isSupported: boolean;
}

export function usePronunciation(): UsePronunciationReturn {
  const capture = useAudioCapture();
  const [isScoring, setIsScoring] = useState(false);
  const [result, setResult] = useState<PronunciationResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const referenceTextRef = useRef("");

  const startAssessment = useCallback((referenceText: string) => {
    referenceTextRef.current = referenceText;
    setResult(null);
    setError(null);
    capture.startCapture();
  }, [capture]);

  const stopAndScore = useCallback(async (): Promise<PronunciationResult> => {
    setIsScoring(true);
    setError(null);

    try {
      const audioBase64 = await capture.stopCapture();

      if (!audioBase64) {
        throw new Error("No audio captured");
      }

      // Send to Azure via our API route
      const response = await fetch("/api/pronunciation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          audioBase64,
          referenceText: referenceTextRef.current,
        }),
      });

      const data = await response.json();

      if (data.fallback) {
        // Azure unavailable — use Levenshtein fallback
        const similarity = data.displayText
          ? levenshteinSimilarity(data.displayText, referenceTextRef.current)
          : 0;

        const fallbackResult: PronunciationResult = {
          overall: { accuracy: similarity, fluency: 0, completeness: 0, pronunciation: similarity },
          words: [],
          isFallback: true,
          textSimilarity: similarity,
        };
        setResult(fallbackResult);
        return fallbackResult;
      }

      const pronunciationResult: PronunciationResult = {
        overall: data.overall,
        words: data.words,
        displayText: data.displayText,
        isFallback: false,
      };

      setResult(pronunciationResult);
      return pronunciationResult;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Scoring failed";
      setError(message);

      // Return empty fallback result
      const fallbackResult: PronunciationResult = {
        overall: { accuracy: 0, fluency: 0, completeness: 0, pronunciation: 0 },
        words: [],
        isFallback: true,
      };
      setResult(fallbackResult);
      return fallbackResult;
    } finally {
      setIsScoring(false);
    }
  }, [capture]);

  return {
    startAssessment,
    stopAndScore,
    isRecording: capture.isCapturing,
    isScoring,
    result,
    error: error || capture.error,
    duration: capture.duration,
    amplitude: capture.amplitude,
    isSupported: capture.isSupported,
  };
}

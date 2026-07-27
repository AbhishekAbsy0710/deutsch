/**
 * POST /api/pronunciation
 * 
 * Sends audio to Azure Speech-to-Text with pronunciation assessment
 * config for German (de-DE). Returns word-level and phoneme-level
 * accuracy scores.
 * 
 * Request: { audioBase64: string, referenceText: string }
 * Response: { overall, words[], fallback? }
 */

import { NextResponse } from "next/server";

const AZURE_SPEECH_KEY = process.env.AZURE_SPEECH_KEY;
const AZURE_SPEECH_REGION = process.env.AZURE_SPEECH_REGION || "westeurope";

export async function POST(request: Request) {
  if (!AZURE_SPEECH_KEY) {
    return NextResponse.json(
      { error: "Azure Speech not configured" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { audioBase64, referenceText } = body;

    if (!audioBase64 || !referenceText) {
      return NextResponse.json(
        { error: "Missing audioBase64 or referenceText" },
        { status: 400 }
      );
    }

    // Build pronunciation assessment config
    const pronConfig = {
      ReferenceText: referenceText,
      GradingSystem: "HundredMark",
      Granularity: "Phoneme",
      Dimension: "Comprehensive",
      EnableMiscue: true,
      PhonemeAlphabet: "IPA",
    };
    const configBase64 = Buffer.from(JSON.stringify(pronConfig)).toString("base64");

    // Decode audio from base64 to binary
    const audioBuffer = Buffer.from(audioBase64, "base64");

    // POST to Azure STT with pronunciation assessment
    const url = `https://${AZURE_SPEECH_REGION}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=de-DE`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": AZURE_SPEECH_KEY,
        "Content-Type": "audio/wav; codecs=audio/pcm; samplerate=16000",
        "Pronunciation-Assessment": configBase64,
        "Accept": "application/json",
      },
      body: audioBuffer,
    });

    if (response.status === 429) {
      // Rate limited — return fallback signal
      return NextResponse.json({ fallback: true, error: "Rate limited" });
    }

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[Pronunciation] Azure error:", response.status, errorText);
      return NextResponse.json({ fallback: true, error: errorText });
    }

    const data = await response.json();
    const nbest = data.NBest?.[0];

    if (!nbest || data.RecognitionStatus !== "Success") {
      // No speech detected or recognition failed
      return NextResponse.json({
        fallback: true,
        recognitionStatus: data.RecognitionStatus,
        error: "No speech detected",
      });
    }

    // Extract overall scores
    // Note: Azure returns scores at nbest level directly, not nested
    const overall = {
      accuracy: nbest.PronunciationAssessment?.AccuracyScore ?? nbest.AccuracyScore ?? 0,
      fluency: nbest.PronunciationAssessment?.FluencyScore ?? nbest.FluencyScore ?? 0,
      completeness: nbest.PronunciationAssessment?.CompletenessScore ?? nbest.CompletenessScore ?? 0,
      pronunciation: nbest.PronunciationAssessment?.PronScore ?? nbest.PronScore ?? 0,
    };

    // Extract per-word scores
    const words = (nbest.Words || []).map((w: any) => ({
      word: w.Word,
      accuracy: w.PronunciationAssessment?.AccuracyScore ?? w.AccuracyScore ?? 0,
      error: w.PronunciationAssessment?.ErrorType ?? w.ErrorType ?? "None",
      phonemes: (w.Phonemes || []).map((p: any) => ({
        phoneme: p.Phoneme,
        accuracy: p.PronunciationAssessment?.AccuracyScore ?? p.AccuracyScore ?? 0,
      })),
    }));

    return NextResponse.json({
      overall,
      words,
      displayText: nbest.Display,
      recognitionStatus: data.RecognitionStatus,
    });
  } catch (err) {
    console.error("[Pronunciation] Error:", err);
    return NextResponse.json(
      { fallback: true, error: "Internal server error" },
      { status: 500 }
    );
  }
}

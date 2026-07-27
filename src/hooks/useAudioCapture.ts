/**
 * useAudioCapture — Client-side 16kHz PCM WAV capture
 * 
 * Captures audio via AudioWorklet at hardware rate, then
 * downsamples to 16kHz mono using OfflineAudioContext and
 * encodes as 16-bit PCM WAV (base64).
 * 
 * Falls back to ScriptProcessorNode for older browsers.
 */
"use client";

import { useState, useRef, useCallback, useEffect } from "react";

export interface UseAudioCaptureReturn {
  startCapture: () => Promise<void>;
  stopCapture: () => Promise<string>; // returns base64 WAV
  isCapturing: boolean;
  duration: number; // seconds
  amplitude: number; // 0-1, for visual feedback
  isSupported: boolean;
  error: string | null;
}

const TARGET_SAMPLE_RATE = 16000;
const SILENCE_THRESHOLD = 0.01;
const SILENCE_FRAMES_TO_STOP = 100; // 100 frames × ~2.9ms ≈ 10 seconds

export function useAudioCapture(): UseAudioCaptureReturn {
  const [isCapturing, setIsCapturing] = useState(false);
  const [duration, setDuration] = useState(0);
  const [amplitude, setAmplitude] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const audioContextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const workletNodeRef = useRef<AudioWorkletNode | null>(null);
  const scriptNodeRef = useRef<ScriptProcessorNode | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);
  const bufferRef = useRef<Float32Array[]>([]); // For ScriptProcessor fallback
  const silenceCountRef = useRef(0);
  const resolveStopRef = useRef<((base64: string) => void) | null>(null);
  const useWorkletRef = useRef(true);

  const isSupported = typeof navigator !== "undefined" && !!navigator.mediaDevices?.getUserMedia;

  // Duration timer
  useEffect(() => {
    if (isCapturing) {
      timerRef.current = setInterval(() => {
        setDuration(Math.floor((Date.now() - startTimeRef.current) / 1000));
      }, 250);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isCapturing]);

  const startCapture = useCallback(async () => {
    setError(null);
    setDuration(0);
    setAmplitude(0);
    silenceCountRef.current = 0;
    bufferRef.current = [];

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { channelCount: 1 }, // mono — do NOT set sampleRate
      });
      streamRef.current = stream;

      const audioContext = new AudioContext();
      audioContextRef.current = audioContext;
      const source = audioContext.createMediaStreamSource(stream);
      sourceRef.current = source;

      // Try AudioWorklet first
      try {
        await audioContext.audioWorklet.addModule("/pcm-worklet-processor.js");
        const workletNode = new AudioWorkletNode(audioContext, "pcm-processor");
        workletNodeRef.current = workletNode;
        useWorkletRef.current = true;

        workletNode.port.onmessage = (event) => {
          if (event.data.type === "amplitude") {
            setAmplitude(Math.min(1, event.data.value * 5)); // Scale for visibility
            // Silence detection
            if (event.data.value < SILENCE_THRESHOLD) {
              silenceCountRef.current++;
              if (silenceCountRef.current >= SILENCE_FRAMES_TO_STOP && isCapturing) {
                // Auto-stop after prolonged silence
                stopCapture();
              }
            } else {
              silenceCountRef.current = 0;
            }
          }
          if (event.data.type === "buffer") {
            // AudioWorklet sent back the full buffer
            const pcmData = new Float32Array(event.data.data);
            processAndResolve(pcmData, audioContext.sampleRate);
          }
        };

        source.connect(workletNode);
        workletNode.connect(audioContext.destination); // Required for processing
      } catch {
        // Fallback: ScriptProcessorNode
        console.warn("[AudioCapture] AudioWorklet not supported, using ScriptProcessorNode");
        useWorkletRef.current = false;
        const scriptNode = audioContext.createScriptProcessor(4096, 1, 1);
        scriptNodeRef.current = scriptNode;

        scriptNode.onaudioprocess = (event) => {
          const inputData = event.inputBuffer.getChannelData(0);
          bufferRef.current.push(new Float32Array(inputData));

          // Calculate amplitude
          let sum = 0;
          for (let i = 0; i < inputData.length; i++) {
            sum += inputData[i] * inputData[i];
          }
          const rms = Math.sqrt(sum / inputData.length);
          setAmplitude(Math.min(1, rms * 5));
        };

        source.connect(scriptNode);
        scriptNode.connect(audioContext.destination);
      }

      startTimeRef.current = Date.now();
      setIsCapturing(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Microphone access denied");
    }
  }, []);

  const processAndResolve = useCallback(async (pcmData: Float32Array, nativeSampleRate: number) => {
    try {
      // Create AudioBuffer at native rate
      const audioBuffer = new AudioBuffer({
        length: pcmData.length,
        numberOfChannels: 1,
        sampleRate: nativeSampleRate,
      });
      audioBuffer.copyToChannel(new Float32Array(pcmData), 0);

      // Downsample to 16kHz using OfflineAudioContext
      const targetLength = Math.ceil(audioBuffer.duration * TARGET_SAMPLE_RATE);
      const offlineCtx = new OfflineAudioContext(1, targetLength, TARGET_SAMPLE_RATE);
      const bufferSource = offlineCtx.createBufferSource();
      bufferSource.buffer = audioBuffer;
      bufferSource.connect(offlineCtx.destination);
      bufferSource.start();
      const resampled = await offlineCtx.startRendering();

      // Convert Float32 → Int16
      const float32 = resampled.getChannelData(0);
      const int16 = new Int16Array(float32.length);
      for (let i = 0; i < float32.length; i++) {
        const s = Math.max(-1, Math.min(1, float32[i]));
        int16[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
      }

      // Build WAV
      const wavBuffer = encodeWav(int16, TARGET_SAMPLE_RATE);
      const base64 = arrayBufferToBase64(wavBuffer);

      if (resolveStopRef.current) {
        resolveStopRef.current(base64);
        resolveStopRef.current = null;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Audio processing failed");
      if (resolveStopRef.current) {
        resolveStopRef.current("");
        resolveStopRef.current = null;
      }
    }
  }, []);

  const stopCapture = useCallback((): Promise<string> => {
    return new Promise((resolve) => {
      resolveStopRef.current = resolve;
      setIsCapturing(false);
      setAmplitude(0);

      if (useWorkletRef.current && workletNodeRef.current) {
        // Tell worklet to flush its buffer
        workletNodeRef.current.port.postMessage({ type: "flush" });
        // The 'buffer' message handler in startCapture will call processAndResolve
      } else if (scriptNodeRef.current && audioContextRef.current) {
        // ScriptProcessor fallback: concatenate buffers ourselves
        const totalLength = bufferRef.current.reduce((sum, chunk) => sum + chunk.length, 0);
        const pcmData = new Float32Array(totalLength);
        let offset = 0;
        for (const chunk of bufferRef.current) {
          pcmData.set(chunk, offset);
          offset += chunk.length;
        }
        processAndResolve(pcmData, audioContextRef.current.sampleRate);
      } else {
        resolve("");
      }

      // Cleanup
      if (sourceRef.current) {
        sourceRef.current.disconnect();
        sourceRef.current = null;
      }
      if (workletNodeRef.current) {
        workletNodeRef.current.disconnect();
        workletNodeRef.current = null;
      }
      if (scriptNodeRef.current) {
        scriptNodeRef.current.disconnect();
        scriptNodeRef.current = null;
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
        streamRef.current = null;
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
    });
  }, [processAndResolve]);

  return { startCapture, stopCapture, isCapturing, duration, amplitude, isSupported, error };
}

// ── WAV Encoding ────────────────────────────────────────────
function encodeWav(samples: Int16Array, sampleRate: number): ArrayBuffer {
  const dataSize = samples.length * 2;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);

  // RIFF header
  writeString(view, 0, "RIFF");
  view.setUint32(4, 36 + dataSize, true);
  writeString(view, 8, "WAVE");

  // fmt chunk
  writeString(view, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true); // PCM
  view.setUint16(22, 1, true); // mono
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true); // block align
  view.setUint16(34, 16, true); // bits per sample

  // data chunk
  writeString(view, 36, "data");
  view.setUint32(40, dataSize, true);

  // PCM samples
  const offset = 44;
  for (let i = 0; i < samples.length; i++) {
    view.setInt16(offset + i * 2, samples[i], true);
  }

  return buffer;
}

function writeString(view: DataView, offset: number, str: string) {
  for (let i = 0; i < str.length; i++) {
    view.setUint8(offset + i, str.charCodeAt(i));
  }
}

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

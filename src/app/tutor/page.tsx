"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useChat } from "@ai-sdk/react";
import { Mic, MicOff, Send, Volume2, VolumeX, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";
import { useSpeechSynthesis } from "@/hooks/useSpeechSynthesis";
import { OrganicPulse } from "@/components/OrganicPulse";
import { useProgressStore } from "@/store/useProgressStore";
import { lessonData } from "@/data/lessons";

export default function TutorPage() {
  const { speak, stop, isSpeaking: isTtsSpeaking, isSupported: isTtsSupported } = useSpeechSynthesis();
  const { lessons: lessonProgress, xp, streak, level } = useProgressStore();
  const [hydrated, setHydrated] = useState(false);

  // Wait for Zustand persist to finish loading from localStorage
  useEffect(() => {
    // Check if already hydrated
    if (useProgressStore.persist.hasHydrated()) {
      setHydrated(true);
    }
    // Listen for hydration completion
    const unsub = useProgressStore.persist.onFinishHydration(() => {
      setHydrated(true);
    });
    return unsub;
  }, []);

  // Build progress summary for the AI
  const progressSummary = useMemo(() => {
    if (!hydrated) return "";
    
    // Re-read directly from store to ensure we have hydrated data
    const storeState = useProgressStore.getState();
    const lessons = storeState.lessons;
    const currentXp = storeState.xp;
    const currentStreak = storeState.streak;
    const currentLevel = storeState.level;
    
    // Module ordering for level determination
    const MODULE_ORDER = ["A0", "A1", "A2", "B1", "B2", "C1", "C2"];
    
    // Compute completed lessons grouped by module
    const completedByModule: Record<string, string[]> = {};
    const completedIds: string[] = [];
    Object.entries(lessons)
      .filter(([, p]) => p.status === "completed")
      .forEach(([id]) => {
        completedIds.push(id);
        const lesson = lessonData[id];
        if (lesson) {
          if (!completedByModule[lesson.module]) completedByModule[lesson.module] = [];
          completedByModule[lesson.module].push(lesson.title);
        }
      });
    
    // Determine highest completed module
    let highestCompletedModule = "none";
    for (let i = MODULE_ORDER.length - 1; i >= 0; i--) {
      if (completedByModule[MODULE_ORDER[i]]?.length > 0) {
        highestCompletedModule = MODULE_ORDER[i];
        break;
      }
    }
    
    // Determine currently studying module (from active lessons)
    let currentlyStudying = "none";
    const activeEntries = Object.entries(lessons)
      .filter(([, p]) => p.status === "active")
      .map(([id]) => lessonData[id])
      .filter(Boolean);
    
    if (activeEntries.length > 0) {
      // Get the highest-level active module
      for (let i = MODULE_ORDER.length - 1; i >= 0; i--) {
        if (activeEntries.some(l => l.module === MODULE_ORDER[i])) {
          currentlyStudying = MODULE_ORDER[i];
          break;
        }
      }
    }
    
    // Get last 5 completed lesson titles for targeted testing
    const recentCompleted = completedIds.slice(-5).map(id => {
      const lesson = lessonData[id];
      return lesson ? `${lesson.title} (${lesson.module})` : id;
    });
    
    // Build per-module summary
    const moduleCounts = MODULE_ORDER
      .filter(m => completedByModule[m]?.length > 0)
      .map(m => `${m}: ${completedByModule[m].length} lessons`)
      .join(", ");
    
    // Get next uncompleted lesson at the student's current or next level
    const targetLevel = currentlyStudying !== "none" ? currentlyStudying : 
      (highestCompletedModule !== "none" ? highestCompletedModule : "A0");
    const nextLesson = Object.keys(lessonData).find(id => {
      const lesson = lessonData[id];
      const progress = lessons[id];
      return lesson && lesson.module === targetLevel && 
        (!progress || progress.status !== "completed");
    });
    const nextLessonTitle = nextLesson ? `${lessonData[nextLesson].title} (${lessonData[nextLesson].module})` : "none";

    let summary = "\n\nSTUDENT PROGRESS FROM LEARN TAB:\n";
    summary += `⭐ Highest completed module: ${highestCompletedModule}\n`;
    summary += `📖 Currently studying: ${currentlyStudying}\n`;
    if (currentLevel) summary += `Assessment level: ${currentLevel}\n`;
    summary += `XP: ${currentXp}, Streak: ${currentStreak} days\n`;
    summary += `Completed by module: ${moduleCounts || "none yet"}\n`;
    summary += `Total completed: ${completedIds.length} lessons\n`;
    if (recentCompleted.length > 0) summary += `Recent lessons: ${recentCompleted.join(", ")}\n`;
    summary += `Next recommended lesson: ${nextLessonTitle}\n`;
    summary += "\nIMPORTANT: The student's REAL level is their highest completed module. Test them at THIS level, not lower. If they completed B1 lessons, they are a B1 student — quiz them on B1 grammar, not A1 vocabulary.";
    
    console.log("[Tutor] Progress summary:", summary);
    return summary;
  }, [hydrated, lessonProgress, xp, streak, level]);
  
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayRef = useRef(autoPlay);
  
  useEffect(() => {
    autoPlayRef.current = autoPlay;
  }, [autoPlay]);

  const progressRef = useRef(progressSummary);
  useEffect(() => { progressRef.current = progressSummary; }, [progressSummary]);

  const chatHelpers = useChat({
    messages: [
      {
        id: "welcome",
        role: "assistant" as const,
        content: "Hallo! Ich bin dein Deutsch-Tutor. (Hello! I am your German tutor.) \n\nWie kann ich dir heute helfen? (How can I help you today?)",
        parts: [{ type: "text" as const, text: "Hallo! Ich bin dein Deutsch-Tutor. (Hello! I am your German tutor.) \n\nWie kann ich dir heute helfen? (How can I help you today?)" }],
        createdAt: new Date(),
      }
    ],
  } as any);

  const { messages, sendMessage, status: chatStatus, error } = chatHelpers;
  const isLoading = chatStatus === "streaming" || chatStatus === "submitted";

  // Helper to extract text from different message formats (strip hidden context)
  const getMessageText = (msg: any): string => {
    let text = "";
    if (typeof msg.content === "string" && msg.content) text = msg.content;
    else if (typeof msg.text === "string" && msg.text) text = msg.text;
    else if (Array.isArray(msg.parts)) {
      const textPart = msg.parts.find((p: any) => p.type === "text");
      if (textPart?.text) text = textPart.text;
      if (textPart?.state === "done" && textPart?.text) text = textPart.text;
    }
    // Strip hidden progress context from display
    if (text.includes("---CONTEXT (hidden from display)---")) {
      text = text.split("---CONTEXT (hidden from display)---")[0].trim();
    }
    return text;
  };

  // Track if user has interacted with the page (required for Chrome autoplay policy)
  const hasInteracted = useRef(false);

  // Reliable Auto-Play with debounce to prevent cancel-restart loops
  const lastSpokenMessageId = useRef<string>("welcome"); // Skip welcome message
  const speakTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    // Clear any pending speak timeout on every update
    if (speakTimeoutRef.current) {
      clearTimeout(speakTimeoutRef.current);
      speakTimeoutRef.current = null;
    }

    // Only auto-play after user has interacted (Chrome autoplay policy)
    if (!hasInteracted.current) return;

    if (!isLoading && autoPlay && messages.length > 0) {
      const lastMsg = messages[messages.length - 1];
      const textToSpeak = getMessageText(lastMsg);
      
      if (lastMsg.role === "assistant" && lastMsg.id !== lastSpokenMessageId.current && textToSpeak) {
        // Debounce: wait 300ms for the message to fully settle before speaking
        speakTimeoutRef.current = setTimeout(() => {
          const finalText = getMessageText(messages[messages.length - 1]);
          console.log("🔊 Auto-play (debounced):", finalText.substring(0, 80));
          lastSpokenMessageId.current = lastMsg.id;
          speak(finalText);
        }, 600);
      }
    }

    return () => {
      if (speakTimeoutRef.current) {
        clearTimeout(speakTimeoutRef.current);
      }
    };
  }, [isLoading, messages, autoPlay, speak]);

  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const unlockAudio = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      window.speechSynthesis.resume();
    }
  };

  // Helper to build message with progress context attached
  const buildMessageWithProgress = (userText: string) => {
    const progress = progressRef.current;
    // Attach progress as hidden context that the AI can read
    return progress ? `${userText}\n\n---CONTEXT (hidden from display)---${progress}` : userText;
  };

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (!input.trim()) return;
    hasInteracted.current = true;
    sendMessage({ role: "user", content: buildMessageWithProgress(input) } as any);
    setInput("");
  };

  const { status, transcript, startListening, stopListening, isSupported } = useSpeechRecognition();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle Speech Recognition transcript
  useEffect(() => {
    if (status === "done" && transcript) {
      sendMessage({ role: "user", content: buildMessageWithProgress(transcript) } as any);
    }
  }, [status, transcript, sendMessage]);

  const toggleRecording = () => {
    hasInteracted.current = true;
    if (status === "listening") {
      stopListening();
    } else {
      startListening();
    }
  };

  const playMessage = (content: string) => {
    speak(content);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] max-w-4xl mx-auto w-full p-4 sm:p-8">
      <header className="flex items-center justify-between mb-8 pb-4 border-b-4 border-foreground">
        <div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">AI Tutor</h1>
          <p className="font-mono text-muted-foreground text-sm uppercase tracking-widest mt-1">Live Conversation Practice</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setAutoPlay(!autoPlay)}
          className={cn("border-2 font-mono text-xs uppercase tracking-widest gap-2", autoPlay ? "bg-primary/10 text-primary border-primary" : "")}
        >
          {autoPlay ? <Volume2 size={16} /> : <VolumeX size={16} />}
          {autoPlay ? "Auto-Play ON" : "Auto-Play OFF"}
        </Button>
      </header>

      <main className="flex-1 overflow-y-auto pr-4 space-y-6 scrollbar-hide mb-8">
        {messages.map((m: any) => (
          <div
            key={m.id}
            className={cn(
              "flex w-full",
              m.role === "user" ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={cn(
                "relative max-w-[85%] sm:max-w-[75%] p-4 border-2 font-medium text-lg leading-relaxed whitespace-pre-wrap",
                m.role === "user"
                  ? "bg-foreground text-background border-foreground"
                  : "bg-card border-border"
              )}
            >
              {getMessageText(m)}
              {m.role === "assistant" && (
                <button 
                  onClick={() => playMessage(getMessageText(m))}
                  className="absolute -right-3 -bottom-3 p-2 bg-background border-2 border-foreground rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors z-10"
                >
                  <Volume2 size={16} />
                </button>
              )}
            </div>
          </div>
        ))}
        {error && (
          <div className="flex justify-center my-4">
            <div className="bg-destructive/10 text-destructive border border-destructive/20 p-4 w-full max-w-md">
              <p className="font-bold">Connection Error</p>
              <p className="text-sm opacity-90">
                {error.message?.toLowerCase().includes("quota") || error.message?.toLowerCase().includes("429")
                  ? "You have reached the free tier message limit. Please wait a minute before sending another message."
                  : error.message || "Failed to communicate with the AI API."}
              </p>
            </div>
          </div>
        )}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[85%] sm:max-w-[75%] p-4 border-2 border-border bg-card flex items-center gap-3">
              <Loader2 className="animate-spin w-5 h-5 text-muted-foreground" />
              <span className="font-mono text-sm text-muted-foreground uppercase tracking-widest">Typing...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </main>

      <footer className="shrink-0 space-y-4">
        {/* Voice Input Button */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <OrganicPulse isRecording={status === "listening"} />
            <button
              onClick={toggleRecording}
              disabled={!isSupported || isLoading}
              className={cn(
                "w-20 h-20 flex items-center justify-center transition-all relative z-10 border-2",
                status === "listening"
                  ? "bg-red-500 text-white border-red-500 scale-110"
                  : isLoading
                    ? "bg-muted text-muted-foreground border-muted opacity-50 cursor-not-allowed"
                    : !isSupported
                      ? "bg-muted text-muted-foreground border-muted cursor-not-allowed"
                      : "bg-primary text-primary-foreground border-primary hover:scale-105 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
              )}
            >
              {isSupported ? (
                <Mic className={cn("w-8 h-8", status === "listening" && "animate-pulse")} />
              ) : (
                <MicOff className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>

        {/* Text Input Fallback */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder={status === "listening" ? "Listening..." : "Or type your message in German..."}
            disabled={isLoading || status === "listening"}
            className="flex-1 border-2 border-foreground p-4 bg-background outline-none focus:border-primary transition-colors disabled:opacity-50"
          />
          <Button 
            type="submit" 
            size="lg" 
            disabled={!input?.trim() || isLoading || status === "listening"}
            className="border-2 border-foreground px-8 bg-foreground text-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all h-auto"
          >
            <Send className="w-5 h-5" />
          </Button>
        </form>
      </footer>
    </div>
  );
}

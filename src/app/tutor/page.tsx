"use client";

import { useState, useEffect, useRef } from "react";
import { useChat } from "@ai-sdk/react";
import { Mic, MicOff, Send, Volume2, VolumeX, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSpeechRecognition, speakGerman } from "@/hooks/useSpeechRecognition";
import { OrganicPulse } from "@/components/OrganicPulse";

export default function TutorPage() {
  const { messages, input, handleInputChange, handleSubmit, setInput, isLoading } = useChat({
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content: "Hallo! Ich bin dein Deutsch-Tutor. (Hello! I am your German tutor.) \n\nWie kann ich dir heute helfen? (How can I help you today?)",
      }
    ]
  });

  const { status, transcript, startListening, stopListening, isSupported } = useSpeechRecognition();
  const [autoPlay, setAutoPlay] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle Speech Recognition transcript
  useEffect(() => {
    if (status === "done" && transcript) {
      setInput(transcript);
      // Auto-submit after a tiny delay to allow input state to update
      setTimeout(() => {
        const fakeEvent = { preventDefault: () => {} } as React.FormEvent<HTMLFormElement>;
        handleSubmit(fakeEvent);
      }, 100);
    }
  }, [status, transcript, setInput, handleSubmit]);

  // Handle Auto-Play Voice for AI responses
  const prevIsLoading = useRef(isLoading);
  useEffect(() => {
    // If it just stopped loading and auto-play is on
    if (prevIsLoading.current && !isLoading && autoPlay) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage && lastMessage.role === "assistant") {
        // Remove English translations in parentheses to avoid reading them in a German voice
        const cleanText = lastMessage.content.replace(/\(.*?\)/g, '').trim();
        speakGerman(cleanText).catch(console.error);
      }
    }
    prevIsLoading.current = isLoading;
  }, [isLoading, messages, autoPlay]);

  const toggleRecording = () => {
    if (status === "listening") {
      stopListening();
    } else {
      startListening();
    }
  };

  const playMessage = (content: string) => {
    const cleanText = content.replace(/\(.*?\)/g, '').trim();
    speakGerman(cleanText).catch(console.error);
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
        {messages.map((m) => (
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
              {m.content}
              {m.role === "assistant" && (
                <button 
                  onClick={() => playMessage(m.content)}
                  className="absolute -right-3 -bottom-3 p-2 bg-background border-2 border-foreground rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors z-10"
                >
                  <Volume2 size={16} />
                </button>
              )}
            </div>
          </div>
        ))}
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
            disabled={!input.trim() || isLoading || status === "listening"}
            className="border-2 border-foreground px-8 bg-foreground text-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all h-auto"
          >
            <Send className="w-5 h-5" />
          </Button>
        </form>
      </footer>
    </div>
  );
}

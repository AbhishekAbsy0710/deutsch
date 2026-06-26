"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useChat } from "@ai-sdk/react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Mic, Send, Volume2, ArrowLeft, CheckCircle2, Circle, Star, Trophy, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";
import { useSpeechSynthesis } from "@/hooks/useSpeechSynthesis";
import { OrganicPulse } from "@/components/OrganicPulse";
import { conversationScenarios, type ConversationScenario } from "@/data/conversation-scenarios";
import { useProgressStore } from "@/store/useProgressStore";
import { extractConversationVocab, extractEvalVocab } from "@/lib/vocabulary-extractor";
import { createClient } from "@/lib/supabase";

const LEVEL_COLORS: Record<string, string> = {
  A1: "border-blue-500 bg-blue-500/10", A2: "border-cyan-500 bg-cyan-500/10",
  B1: "border-teal-500 bg-teal-500/10", B2: "border-violet-500 bg-violet-500/10",
  C1: "border-amber-500 bg-amber-500/10", C2: "border-rose-500 bg-rose-500/10",
};
const LEVEL_TEXT: Record<string, string> = {
  A1: "text-blue-500", A2: "text-cyan-500", B1: "text-teal-500",
  B2: "text-violet-500", C1: "text-amber-500", C2: "text-rose-500",
};

export default function ConversationPage() {
  const [activeScenario, setActiveScenario] = useState<ConversationScenario | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const authTokenRef = useRef<string | null>(null);
  const { speak } = useSpeechSynthesis();
  const { level } = useProgressStore();
  const [filterLevel, setFilterLevel] = useState<string>("all");

  // Auth
  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getSession().then(({ data }) => {
      const t = data.session?.access_token ?? null;
      setAuthToken(t);
      authTokenRef.current = t;
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      const t = session?.access_token ?? null;
      setAuthToken(t);
      authTokenRef.current = t;
    });
    return () => subscription.unsubscribe();
  }, []);

  const filteredScenarios = useMemo(() => {
    if (filterLevel === "all") return conversationScenarios;
    return conversationScenarios.filter(s => s.level === filterLevel);
  }, [filterLevel]);

  const levels = ["all", "A1", "A2", "B1", "B2", "C1"];

  if (!activeScenario) {
    return (
      <div className="max-w-5xl mx-auto p-4 sm:p-8">
        <header className="mb-8 pb-4 border-b-4 border-foreground">
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter flex items-center gap-3">
            <MessageSquare className="w-8 h-8 md:w-10 md:h-10" /> Conversation
          </h1>
          <p className="font-mono text-muted-foreground text-sm uppercase tracking-widest mt-1">
            Real-Life Role-Play Scenarios
          </p>
        </header>

        {/* Level Filter */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {levels.map(l => (
            <button key={l} onClick={() => setFilterLevel(l)}
              className={cn(
                "px-4 py-2 border-2 font-mono text-xs uppercase tracking-widest transition-colors whitespace-nowrap",
                filterLevel === l
                  ? "bg-foreground text-background border-foreground"
                  : "border-border hover:border-foreground"
              )}
            >
              {l === "all" ? "All Levels" : l}
            </button>
          ))}
        </div>

        {/* Scenario Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredScenarios.map((scenario, i) => (
            <motion.button
              key={scenario.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setActiveScenario(scenario)}
              className={cn(
                "text-left p-6 border-2 hover:border-foreground transition-all group",
                LEVEL_COLORS[scenario.level]
              )}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{scenario.icon}</span>
                <span className={cn("font-mono text-xs font-bold uppercase", LEVEL_TEXT[scenario.level])}>
                  {scenario.level}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-1">{scenario.title}</h3>
              <p className="text-sm text-muted-foreground font-medium mb-2">{scenario.titleDe}</p>
              <p className="text-xs text-muted-foreground">{scenario.setting}</p>
              <div className="mt-4 flex items-center gap-2 text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                <MessageSquare size={12} />
                <span>AI: {scenario.aiRole}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  // Active scenario → Chat
  return <ConversationChat scenario={activeScenario} authTokenRef={authTokenRef} speak={speak} onBack={() => { setActiveScenario(null); setIsComplete(false); }} />;
}

// ── Chat Component ────────────────────────────────────────
function ConversationChat({
  scenario, authTokenRef, speak, onBack
}: {
  scenario: ConversationScenario;
  authTokenRef: React.RefObject<string | null>;
  speak: (text: string) => void;
  onBack: () => void;
}) {
  const [isComplete, setIsComplete] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayRef = useRef(autoPlay);
  useEffect(() => { autoPlayRef.current = autoPlay; }, [autoPlay]);

  // AI evaluation state
  const [evalResult, setEvalResult] = useState<any>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const { recordConversation, addToVocabularyBank } = useProgressStore();

  const chatHelpers = useChat({
    api: "/api/conversation",
    body: { systemPrompt: scenario.systemPrompt },
    messages: [
      {
        id: "opening",
        role: "assistant" as const,
        content: scenario.openingLine,
        parts: [{ type: "text" as const, text: scenario.openingLine }],
        createdAt: new Date(),
      }
    ],
  } as any);

  const { messages, sendMessage, status: chatStatus, error } = chatHelpers;
  const isLoading = chatStatus === "streaming" || chatStatus === "submitted";

  const getMessageText = (msg: any): string => {
    let text = "";
    if (typeof msg.content === "string" && msg.content) text = msg.content;
    else if (typeof msg.text === "string" && msg.text) text = msg.text;
    else if (Array.isArray(msg.parts)) {
      const textPart = msg.parts.find((p: any) => p.type === "text");
      if (textPart?.text) text = textPart.text;
    }
    text = text.replace(/^\[INPUT:(voice|typed)\]\s*/i, "");
    return text;
  };

  // Check for completion → trigger AI eval
  useEffect(() => {
    if (messages.length > 0) {
      const lastMsg = messages[messages.length - 1];
      const text = getMessageText(lastMsg);
      if (text.includes("[SCENARIO_COMPLETE]") && !isComplete) {
        setIsComplete(true);
        // Trigger AI evaluation
        runEvaluation();
      }
    }
  }, [messages]);

  const runEvaluation = async () => {
    setIsEvaluating(true);
    try {
      const res = await fetch("/api/conversation-eval", {
        method: "POST",
        headers: { "Content-Type": "application/json", ...(authTokenRef.current ? { Authorization: `Bearer ${authTokenRef.current}` } : {}) },
        body: JSON.stringify({
          messages: messages.map(m => ({ role: m.role, content: getMessageText(m) })),
          scenarioGoal: scenario.userGoal,
          scenarioLevel: scenario.level,
        }),
      });
      if (res.ok) {
        const evaluation = await res.json();
        setEvalResult(evaluation);
        // Record to activity store
        const userMsgCount = messages.filter(m => m.role === "user").length;
        recordConversation(scenario.id, userMsgCount, evaluation.grammarScore ?? 50);
        // Add vocabulary
        if (evaluation.newVocabularyUsed?.length) {
          addToVocabularyBank(extractEvalVocab(evaluation.newVocabularyUsed, scenario.level));
        }
        // Also add target vocab the user actually used
        const usedVocab = scenario.targetVocabulary.filter(v =>
          messages.some(m => m.role === "user" && getMessageText(m).toLowerCase().includes(v.toLowerCase()))
        );
        if (usedVocab.length) {
          addToVocabularyBank(extractConversationVocab(usedVocab, scenario.level));
        }
      }
    } catch {
      // Fallback — still record the session
      const userMsgCount = messages.filter(m => m.role === "user").length;
      recordConversation(scenario.id, userMsgCount, 50);
    }
    setIsEvaluating(false);
  };

  // Auto-play TTS
  const hasInteracted = useRef(false);
  const lastSpokenId = useRef("opening");
  const speakTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (speakTimeout.current) clearTimeout(speakTimeout.current);
    if (!hasInteracted.current || !autoPlayRef.current) return;
    if (!isLoading && messages.length > 0) {
      const lastMsg = messages[messages.length - 1];
      const text = getMessageText(lastMsg);
      if (lastMsg.role === "assistant" && lastMsg.id !== lastSpokenId.current && text) {
        speakTimeout.current = setTimeout(() => {
          const clean = text.replace("[SCENARIO_COMPLETE]", "").trim();
          lastSpokenId.current = lastMsg.id;
          speak(clean);
        }, 600);
      }
    }
    return () => { if (speakTimeout.current) clearTimeout(speakTimeout.current); };
  }, [isLoading, messages, speak]);

  // Voice input
  const { status: micStatus, transcript, startListening, stopListening, isSupported } = useSpeechRecognition();

  useEffect(() => {
    if (micStatus === "done" && transcript) {
      hasInteracted.current = true;
      sendMessage(
        { role: "user", content: `[INPUT:voice] ${transcript}` } as any,
        { body: { systemPrompt: scenario.systemPrompt, authToken: authTokenRef.current } } as any
      );
    }
  }, [micStatus, transcript, sendMessage, scenario.systemPrompt, authTokenRef]);

  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;
    hasInteracted.current = true;
    sendMessage(
      { role: "user", content: `[INPUT:typed] ${input}` } as any,
      { body: { systemPrompt: scenario.systemPrompt, authToken: authTokenRef.current } } as any
    );
    setInput("");
  };

  // Count vocabulary used
  const vocabUsed = useMemo(() => {
    const userMessages = messages.filter(m => m.role === "user").map(m => getMessageText(m).toLowerCase());
    const allText = userMessages.join(" ");
    return scenario.targetVocabulary.filter(v => allText.includes(v.toLowerCase()));
  }, [messages, scenario.targetVocabulary]);

  const userMessageCount = messages.filter(m => m.role === "user").length;

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] max-w-5xl mx-auto w-full p-4 sm:p-8">
      {/* Header */}
      <header className="flex items-center gap-4 mb-4 pb-4 border-b-4 border-foreground">
        <Button variant="outline" size="sm" onClick={onBack} className="border-2 shrink-0">
          <ArrowLeft size={16} />
        </Button>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{scenario.icon}</span>
            <h1 className="text-xl md:text-2xl font-black uppercase tracking-tighter truncate">{scenario.title}</h1>
          </div>
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest truncate">
            {scenario.aiRoleDe} • {scenario.level}
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={() => setAutoPlay(!autoPlay)}
          className={cn("border-2 font-mono text-xs uppercase shrink-0", autoPlay && "bg-primary/10 text-primary border-primary")}
        >
          <Volume2 size={14} />
        </Button>
      </header>

      {/* Main: chat + sidebar */}
      <div className="flex-1 flex gap-4 overflow-hidden">
        {/* Chat */}
        <main className="flex-1 overflow-y-auto pr-2 space-y-4 scrollbar-hide">
          {messages.map((m: any) => {
            const text = getMessageText(m);
            const displayText = text.replace("[SCENARIO_COMPLETE]", "").trim();
            if (!displayText) return null;
            return (
              <div key={m.id} className={cn("flex w-full", m.role === "user" ? "justify-end" : "justify-start")}>
                <div className={cn(
                  "relative max-w-[85%] p-4 border-2 text-base leading-relaxed whitespace-pre-wrap",
                  m.role === "user"
                    ? "bg-foreground text-background border-foreground"
                    : "bg-card border-border"
                )}>
                  {displayText}
                  {m.role === "assistant" && (
                    <button onClick={() => speak(displayText)}
                      className="absolute -right-2 -bottom-2 p-1.5 bg-background border-2 border-foreground hover:bg-primary hover:text-primary-foreground transition-colors z-10"
                    >
                      <Volume2 size={12} />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
          {isLoading && (
            <div className="flex justify-start">
              <div className="p-4 border-2 border-border bg-card flex items-center gap-2">
                <Loader2 className="animate-spin w-4 h-4 text-muted-foreground" />
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Typing...</span>
              </div>
            </div>
          )}
          {error && (
            <div className="bg-destructive/10 text-destructive border border-destructive/20 p-3 text-sm">
              {error.message?.includes("429") ? "Rate limit reached. Wait a moment." : error.message || "Connection error."}
            </div>
          )}
          <div ref={messagesEndRef} />
        </main>

        {/* Sidebar — goals & vocab */}
        <aside className="hidden md:block w-64 shrink-0 border-2 border-border p-4 overflow-y-auto">
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">Your Goal</h3>
          <p className="text-sm font-medium mb-1">{scenario.userGoal}</p>
          <p className="text-xs text-muted-foreground mb-6">{scenario.userGoalDe}</p>

          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">Target Vocabulary</h3>
          <ul className="space-y-1.5 mb-6">
            {scenario.targetVocabulary.map(v => (
              <li key={v} className={cn("flex items-center gap-2 text-sm", vocabUsed.includes(v) ? "text-green-500" : "text-muted-foreground")}>
                {vocabUsed.includes(v) ? <CheckCircle2 size={14} /> : <Circle size={14} />}
                {v}
              </li>
            ))}
          </ul>

          <div className="border-t-2 border-border pt-4">
            <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
              <span>Messages</span>
              <span>{userMessageCount}</span>
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mt-1">
              <span>Vocab Used</span>
              <span>{vocabUsed.length}/{scenario.targetVocabulary.length}</span>
            </div>
          </div>

          {isComplete && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 space-y-3">
              {isEvaluating ? (
                <div className="p-4 border-2 border-border flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-muted-foreground" />
                  <span className="font-mono text-xs uppercase">Evaluating your performance...</span>
                </div>
              ) : evalResult ? (
                <div className="space-y-3">
                  {/* Scores */}
                  <div className="p-4 border-2 border-green-500 bg-green-500/10">
                    <div className="flex items-center gap-2 text-green-500 font-bold mb-3">
                      <Trophy size={18} /> {evalResult.goalAchieved ? "Goal Achieved!" : "Scenario Complete"}
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 border border-border">
                        <span className="text-muted-foreground">Grammar</span>
                        <span className="block text-lg font-bold">{evalResult.grammarScore}%</span>
                      </div>
                      <div className="p-2 border border-border">
                        <span className="text-muted-foreground">Vocabulary</span>
                        <span className="block text-lg font-bold">{evalResult.vocabularyScore}%</span>
                      </div>
                    </div>
                    <div className="mt-2 text-xs font-mono text-muted-foreground">
                      Estimated: {evalResult.fluencyRating}
                    </div>
                  </div>
                  {/* Corrections */}
                  {evalResult.corrections?.length > 0 && (
                    <div className="p-3 border-2 border-border">
                      <p className="font-mono text-xs uppercase text-muted-foreground mb-2">Corrections</p>
                      {evalResult.corrections.slice(0, 3).map((c: any, i: number) => (
                        <div key={i} className="text-xs mb-2">
                          <span className="text-red-500 line-through">{c.original}</span>
                          <span className="text-green-500 block">→ {c.corrected}</span>
                          <span className="text-muted-foreground italic">{c.rule}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {/* Suggestions */}
                  {evalResult.suggestions?.length > 0 && (
                    <div className="p-3 border-2 border-border">
                      <p className="font-mono text-xs uppercase text-muted-foreground mb-2">Tips</p>
                      {evalResult.suggestions.map((s: string, i: number) => (
                        <p key={i} className="text-xs text-muted-foreground mb-1">💡 {s}</p>
                      ))}
                    </div>
                  )}
                  <Button onClick={onBack} className="w-full border-2 font-mono text-xs uppercase" variant="outline">
                    ← Back to Scenarios
                  </Button>
                </div>
              ) : (
                <div className="p-4 border-2 border-green-500 bg-green-500/10">
                  <div className="flex items-center gap-2 text-green-500 font-bold mb-2">
                    <Trophy size={18} /> Scenario Complete!
                  </div>
                  <Button onClick={onBack} className="w-full mt-4 border-2 font-mono text-xs uppercase" variant="outline">
                    ← Back to Scenarios
                  </Button>
                </div>
              )}
            </motion.div>
          )}
        </aside>
      </div>

      {/* Input */}
      <footer className="shrink-0 pt-4 space-y-3">
        {/* Mobile goal hint */}
        <div className="md:hidden text-xs text-muted-foreground font-mono truncate">
          🎯 {scenario.userGoal}
        </div>

        <div className="flex gap-2 items-center">
          {/* Mic */}
          <div className="relative shrink-0">
            <OrganicPulse isRecording={micStatus === "listening"} />
            <button
              onClick={() => { hasInteracted.current = true; micStatus === "listening" ? stopListening() : startListening(); }}
              disabled={!isSupported || isLoading}
              className={cn(
                "w-12 h-12 flex items-center justify-center border-2 relative z-10 transition-all",
                micStatus === "listening" ? "bg-red-500 text-white border-red-500" :
                  !isSupported || isLoading ? "bg-muted text-muted-foreground border-muted cursor-not-allowed" :
                    "bg-primary text-primary-foreground border-primary hover:scale-105"
              )}
            >
              <Mic className={cn("w-5 h-5", micStatus === "listening" && "animate-pulse")} />
            </button>
          </div>

          {/* Text input */}
          <form onSubmit={handleSubmit} className="flex-1 flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder={micStatus === "listening" ? "Listening..." : "Type in German..."}
              disabled={isLoading || micStatus === "listening"}
              className="flex-1 border-2 border-foreground p-3 bg-background outline-none focus:border-primary transition-colors disabled:opacity-50 text-sm"
            />
            <Button type="submit" disabled={!input.trim() || isLoading}
              className="border-2 border-foreground px-6 bg-foreground text-background hover:bg-primary hover:text-primary-foreground h-auto"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>

        {isComplete && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="md:hidden p-3 border-2 border-green-500 bg-green-500/10 flex items-center justify-between">
            <span className="text-green-500 font-bold text-sm flex items-center gap-2"><Trophy size={16} /> Complete!</span>
            <Button size="sm" variant="outline" onClick={onBack} className="border-2 text-xs">Back</Button>
          </motion.div>
        )}
      </footer>
    </div>
  );
}

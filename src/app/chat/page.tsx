"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Mic, MicOff, Send, ArrowRight, RotateCcw, Sparkles, Search, MessageCircle, BookOpen, AlertTriangle, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";
import { useSpeechSynthesis } from "@/hooks/useSpeechSynthesis";
import { TOPICS, CATEGORIES, Topic } from "@/data/topics";

type LLMMessage = { id: string; role: "user" | "assistant"; content: string };

// ===== Structured topic engine types =====
type LocalMessage = {
  id: string;
  role: "user" | "tutor";
  content: string;
  correction?: { mistake: string; fix: string; explanation: string };
  vocab?: { de: string; en: string }[];
};

type Mode = "picker" | "structured" | "freeChat";

export default function ChatPage() {
  const [mode, setMode] = useState<Mode>("picker");

  // Structured topic state
  const [topic, setTopic] = useState<Topic | null>(null);
  const [stepIdx, setStepIdx] = useState(0);
  const [localMessages, setLocalMessages] = useState<LocalMessage[]>([]);
  const [localInput, setLocalInput] = useState("");
  const [isLocalTyping, setIsLocalTyping] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Free chat (LLM) state
  const [llmMessages, setLlmMessages] = useState<LLMMessage[]>([]);
  const [llmInput, setLlmInput] = useState("");
  const [llmLoading, setLlmLoading] = useState(false);
  const [llmError, setLlmError] = useState<string | null>(null);

  // Shared
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [autoSpeak, setAutoSpeak] = useState(true);
  const { speak, stop, isSpeaking, isSupported: ttsSupported } = useSpeechSynthesis();
  const lastSpokenRef = useRef<string>("");
  const { status: micStatus, transcript, startListening, stopListening, isSupported } = useSpeechRecognition();

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [localMessages, isLocalTyping, llmMessages, llmLoading]);

  // Auto-speak new AI responses when they finish streaming
  useEffect(() => {
    if (autoSpeak && !llmLoading && llmMessages.length > 0) {
      const last = llmMessages[llmMessages.length - 1];
      if (last.role === "assistant" && last.content && last.id !== lastSpokenRef.current) {
        lastSpokenRef.current = last.id;
        speak(last.content);
      }
    }
  }, [llmMessages, llmLoading, autoSpeak, speak]);

  useEffect(() => {
    if (micStatus === "done" && transcript) {
      if (mode === "freeChat") setLlmInput(transcript);
      else setLocalInput(transcript);
    }
  }, [micStatus, transcript, mode]);

  const sendLlmMessage = useCallback(async (text?: string) => {
    const msg = text || llmInput;
    if (!msg.trim()) return;
    const userMsg: LLMMessage = { id: Date.now().toString(), role: "user", content: msg };
    const newMessages = [...llmMessages, userMsg];
    setLlmMessages(newMessages);
    setLlmInput(""); setLlmLoading(true); setLlmError(null);
    try {
      const res = await fetch("/api/chat", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages.map(m => ({ role: m.role, content: m.content })) }),
      });
      if (!res.ok) throw new Error(res.statusText);
      const reader = res.body?.getReader();
      if (!reader) throw new Error("No stream");
      const decoder = new TextDecoder();
      const aiId = (Date.now() + 1).toString();
      setLlmMessages(prev => [...prev, { id: aiId, role: "assistant", content: "" }]);
      let fullText = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        fullText += decoder.decode(value, { stream: true });
        setLlmMessages(prev => prev.map(m => m.id === aiId ? { ...m, content: fullText } : m));
      }
    } catch (e) {
      setLlmError(e instanceof Error ? e.message : "Unknown error");
    } finally { setLlmLoading(false); }
  }, [llmInput, llmMessages]);

  const handleMic = () => { micStatus === "listening" ? stopListening() : startListening(); };

  // Start structured topic
  const startTopic = useCallback((t: Topic) => {
    setTopic(t); setStepIdx(0); setCompleted(false); setMode("structured");
    setLocalMessages([{ id: "0", role: "tutor", content: t.steps[0].prompt }]);
  }, []);

  // Structured topic send
  const handleLocalSend = () => {
    if (!localInput.trim() || !topic || completed) return;
    const step = topic.steps[stepIdx];
    const userMsg: LocalMessage = { id: Date.now().toString(), role: "user", content: localInput };
    setLocalMessages(prev => [...prev, userMsg]);
    setLocalInput(""); setIsLocalTyping(true);

    setTimeout(() => {
      const lower = localInput.toLowerCase().normalize("NFC");
      const matched = step.hints.some(h => lower.includes(h.toLowerCase()));
      const isLast = stepIdx >= topic.steps.length - 1;

      if (matched) {
        const msg: LocalMessage = { id: (Date.now()+1).toString(), role: "tutor", content: step.successResponse, vocab: step.vocab };
        setLocalMessages(prev => [...prev, msg]);
        if (isLast) {
          setCompleted(true);
          setTimeout(() => { setLocalMessages(prev => [...prev, { id: (Date.now()+2).toString(), role: "tutor", content: topic.outro }]); }, 1500);
        } else {
          setStepIdx(prev => prev + 1);
          const next = topic.steps[stepIdx + 1];
          if (next?.prompt) setTimeout(() => { setLocalMessages(prev => [...prev, { id: (Date.now()+3).toString(), role: "tutor", content: next.prompt }]); }, 2000);
        }
      } else {
        setLocalMessages(prev => [...prev, { id: (Date.now()+1).toString(), role: "tutor", content: "Nicht ganz — try again! 💪", correction: { mistake: localInput, fix: step.correction.fix, explanation: step.correction.explanation }, vocab: step.vocab }]);
      }
      setIsLocalTyping(false);
    }, 1200);
  };

  // Filter topics
  const filtered = TOPICS.filter(t => {
    const matchCat = activeCategory === "all" || t.category === activeCategory;
    const matchSearch = !search || t.title.toLowerCase().includes(search.toLowerCase()) || t.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  // ===== TOPIC PICKER =====
  if (mode === "picker") {
    return (
      <div className="flex-1 px-6 md:px-16 py-12 max-w-[1200px] mx-auto w-full">
        <header className="mb-10 border-b-4 border-foreground pb-8">
          <div className="text-primary font-mono text-sm tracking-widest uppercase mb-4 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-primary block"></span>Choose How To Learn
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85]">
            AI Tutor.
          </h1>
        </header>

        {/* Two modes */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          <button onClick={() => setMode("freeChat")} className="group border-4 border-primary p-8 text-left hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex flex-col gap-4 min-h-[200px]">
            <MessageCircle size={40} />
            <div>
              <h3 className="text-3xl font-black uppercase tracking-tight">Free Chat</h3>
              <p className="text-sm mt-2 opacity-70 font-mono">Talk about anything in German. Powered by AI — ask questions, practice grammar, have conversations.</p>
            </div>
            <div className="mt-auto font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
              Start Chatting <ArrowRight size={14} />
            </div>
          </button>
          <div className="border-2 border-border p-8 flex flex-col gap-4">
            <BookOpen size={40} className="text-muted-foreground" />
            <div>
              <h3 className="text-3xl font-black uppercase tracking-tight text-muted-foreground">Guided Topics</h3>
              <p className="text-sm mt-2 text-muted-foreground font-mono">Step-by-step lessons on specific concepts. Works offline — no API needed.</p>
            </div>
            <p className="mt-auto font-mono text-xs uppercase tracking-widest text-muted-foreground">↓ Choose below</p>
          </div>
        </div>

        {/* Search + Filters */}
        <div className="border-2 border-foreground flex items-center px-4 gap-3 mb-6">
          <Search size={20} className="text-muted-foreground" />
          <input className="flex-1 py-3 bg-transparent outline-none font-mono text-lg" placeholder="Search topics..." value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          <button onClick={() => setActiveCategory("all")} className={cn("px-4 py-2 border-2 font-mono text-xs font-bold uppercase tracking-widest transition-colors", activeCategory === "all" ? "bg-foreground text-background border-foreground" : "border-border hover:border-foreground")}>All</button>
          {CATEGORIES.map(c => (
            <button key={c.id} onClick={() => setActiveCategory(c.id)} className={cn("px-4 py-2 border-2 font-mono text-xs font-bold uppercase tracking-widest transition-colors", activeCategory === c.id ? "bg-foreground text-background border-foreground" : "border-border hover:border-foreground")}>{c.icon} {c.label}</button>
          ))}
        </div>

        {/* Topic Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {filtered.map(t => (
            <button key={t.id} onClick={() => startTopic(t)} className="group border-2 border-foreground p-6 text-left hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex flex-col gap-3 min-h-[160px]">
              <div className="flex justify-between items-start">
                <span className="text-3xl">{t.icon}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest border border-current px-2 py-0.5 opacity-60">{t.category}</span>
              </div>
              <h3 className="text-lg font-black uppercase tracking-tight">{t.title}</h3>
              <p className="text-xs opacity-70 font-mono">{t.description}</p>
              <div className="mt-auto font-mono text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">Start <ArrowRight size={12} /></div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ===== FREE CHAT (LLM) =====
  if (mode === "freeChat") {
    return (
      <div className="flex-1 flex flex-col h-[calc(100vh-64px)] md:h-screen max-w-5xl mx-auto w-full p-4 md:p-8 relative">
        <header className="mb-4 border-b-2 border-foreground pb-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button onClick={() => setMode("picker")} className="border-2 border-foreground w-10 h-10 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors text-lg">←</button>
            <div>
              <h1 className="text-xl md:text-2xl font-black uppercase tracking-tighter">💬 Free Chat</h1>
              <p className="font-mono text-xs text-muted-foreground">Powered by Gemini AI — ask anything about German</p>
            </div>
          </div>
          {ttsSupported && (
            <button onClick={() => { setAutoSpeak(!autoSpeak); if (isSpeaking) stop(); }} className={cn("border-2 px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2", autoSpeak ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-foreground")}>
              {autoSpeak ? <Volume2 size={14} /> : <VolumeX size={14} />}
              {autoSpeak ? "Voice ON" : "Voice OFF"}
            </button>
          )}
        </header>

        <div className="flex-1 overflow-y-auto mb-4 space-y-5 px-1 pb-24">
          {llmMessages.length === 0 && (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-20 space-y-6">
              <div className="text-6xl">🇩🇪</div>
              <h2 className="text-3xl font-black uppercase tracking-tight">Start a Conversation</h2>
              <p className="text-muted-foreground max-w-md font-mono text-sm">Ask about grammar, vocabulary, practice a dialogue, or just say &ldquo;Hallo!&rdquo; — the tutor adapts to your level.</p>
              <div className="flex flex-wrap gap-2 justify-center max-w-lg">
                {["Teach me about the dative case", "How do I order food?", "What are separable verbs?", "Practice small talk with me", "Hallo! Ich lerne Deutsch!"].map(s => (
                  <button key={s} onClick={() => { sendLlmMessage(s); }} className="border border-border px-3 py-1.5 font-mono text-xs hover:border-foreground hover:bg-secondary transition-colors">{s}</button>
                ))}
              </div>
            </div>
          )}
          <AnimatePresence initial={false}>
            {llmMessages.map(msg => (
              <motion.div key={msg.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" as const, stiffness: 120, damping: 20 }} className={cn("flex flex-col w-full", msg.role === "user" ? "items-end" : "items-start")}>
                <div className="text-[10px] font-mono font-bold text-muted-foreground uppercase mb-1 tracking-widest">{msg.role === "user" ? "YOU" : "TUTOR"}</div>
                <div className={cn("p-5 max-w-[85%] text-lg leading-relaxed border-2 whitespace-pre-line", msg.role === "user" ? "bg-foreground text-background border-foreground font-bold" : "bg-card border-foreground")}>{msg.content}</div>
                {msg.role === "assistant" && msg.content && ttsSupported && (
                  <button onClick={() => isSpeaking ? stop() : speak(msg.content)} className="mt-1 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                    {isSpeaking ? <VolumeX size={12} /> : <Volume2 size={12} />}
                    {isSpeaking ? "Stop" : "Listen 🔊"}
                  </button>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
          {llmLoading && (
            <div className="flex flex-col items-start w-full">
              <div className="text-[10px] font-mono font-bold text-muted-foreground uppercase mb-1 tracking-widest">TUTOR</div>
              <div className="p-5 border-2 border-dashed border-muted-foreground text-muted-foreground font-mono text-sm uppercase tracking-widest animate-pulse">Thinking...</div>
            </div>
          )}
          {llmError && (
            <div className="border-2 border-red-500 bg-red-500/5 p-4 flex items-start gap-3">
              <AlertTriangle size={20} className="flex-shrink-0 mt-0.5 text-red-500" />
              <div>
                <p className="font-bold text-sm">Connection error: {llmError}</p>
                <p className="text-xs font-mono mt-1 text-muted-foreground">Set GOOGLE_GENERATIVE_AI_API_KEY in .env.local — get a free key at <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener" className="underline text-primary">aistudio.google.com</a></p>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="absolute bottom-4 left-4 right-4 md:left-8 md:right-8">
          <div className="bg-background border-4 border-foreground flex items-stretch shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
            <button type="button" onClick={isSupported ? handleMic : undefined} className={cn("p-3 border-r-4 border-foreground flex items-center justify-center transition-colors", micStatus === "listening" ? "bg-red-500 text-white animate-pulse" : isSupported ? "bg-primary text-primary-foreground hover:bg-foreground hover:text-background" : "bg-muted text-muted-foreground cursor-not-allowed")}>
              {isSupported ? <Mic size={24} /> : <MicOff size={24} />}
            </button>
            <Input className="flex-1 border-none shadow-none focus-visible:ring-0 text-lg font-bold h-auto rounded-none px-5 py-3 bg-transparent" placeholder={micStatus === "listening" ? "Listening..." : "Ask anything about German..."} value={llmInput} onChange={e => setLlmInput(e.target.value)} onKeyDown={e => e.key === "Enter" && sendLlmMessage()} />
            <button className="p-3 border-l-4 border-foreground bg-secondary flex items-center justify-center hover:bg-foreground hover:text-background transition-colors disabled:opacity-50" onClick={() => sendLlmMessage()} disabled={!llmInput.trim() || llmLoading}>
              <Send size={24} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ===== STRUCTURED TOPIC CHAT =====
  const progressPct = topic ? Math.round(((stepIdx + (completed ? 1 : 0)) / topic.steps.length) * 100) : 0;

  return (
    <div className="flex-1 flex flex-col h-[calc(100vh-64px)] md:h-screen max-w-5xl mx-auto w-full p-4 md:p-8 relative">
      <header className="mb-4 border-b-2 border-foreground pb-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button onClick={() => { setMode("picker"); setTopic(null); }} className="border-2 border-foreground w-10 h-10 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors text-lg">←</button>
          <div>
            <h1 className="text-xl md:text-2xl font-black uppercase tracking-tighter">{topic?.icon} {topic?.title}</h1>
            <div className="flex items-center gap-3 mt-1">
              <div className="h-1.5 w-32 bg-secondary overflow-hidden"><div className="h-full bg-primary transition-all duration-500" style={{ width: `${progressPct}%` }} /></div>
              <span className="font-mono text-xs text-muted-foreground">{progressPct}%</span>
            </div>
          </div>
        </div>
        {completed && topic && (
          <button onClick={() => startTopic(topic)} className="border-2 border-foreground px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors flex items-center gap-2">
            <RotateCcw size={12} /> Restart
          </button>
        )}
      </header>

      <div className="flex-1 overflow-y-auto mb-4 space-y-5 px-1 pb-24">
        <AnimatePresence initial={false}>
          {localMessages.map(msg => (
            <motion.div key={msg.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" as const, stiffness: 120, damping: 20 }} className={cn("flex flex-col w-full", msg.role === "user" ? "items-end" : "items-start")}>
              <div className="text-[10px] font-mono font-bold text-muted-foreground uppercase mb-1 tracking-widest">{msg.role === "tutor" ? "TUTOR" : "YOU"}</div>
              <div className={cn("p-5 max-w-[85%] text-lg leading-relaxed border-2 whitespace-pre-line", msg.role === "user" ? "bg-foreground text-background border-foreground font-bold" : "bg-card border-foreground")}>{msg.content}</div>
              {msg.vocab && msg.vocab.length > 0 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-2 max-w-[85%] flex flex-wrap gap-2">
                  {msg.vocab.map((v, i) => (
                    <div key={i} className="border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-xs flex items-center gap-2">
                      <Sparkles size={10} className="text-primary" /><span className="font-bold">{v.de}</span><span className="text-muted-foreground">= {v.en}</span>
                    </div>
                  ))}
                </motion.div>
              )}
              {msg.correction && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} transition={{ delay: 0.4 }} className="mt-3 max-w-[85%] border-l-4 border-primary pl-5 py-2">
                  <div className="font-mono text-primary text-xs font-bold tracking-widest uppercase mb-2">Correction</div>
                  <span className="text-base text-muted-foreground line-through">{msg.correction.mistake}</span>
                  <div className="flex items-center gap-3 text-xl font-black my-2"><ArrowRight className="text-primary flex-shrink-0" size={18} />{msg.correction.fix}</div>
                  <p className="font-mono text-xs text-muted-foreground bg-secondary p-2">{msg.correction.explanation}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
        {isLocalTyping && (
          <div className="flex flex-col items-start w-full">
            <div className="text-[10px] font-mono font-bold text-muted-foreground uppercase mb-1 tracking-widest">TUTOR</div>
            <div className="p-5 border-2 border-dashed border-muted-foreground text-muted-foreground font-mono text-sm uppercase tracking-widest">Thinking...</div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="absolute bottom-4 left-4 right-4 md:left-8 md:right-8">
        <div className="bg-background border-4 border-foreground flex items-stretch shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
          <button onClick={isSupported ? handleMic : undefined} className={cn("p-3 border-r-4 border-foreground flex items-center justify-center transition-colors", micStatus === "listening" ? "bg-red-500 text-white animate-pulse" : isSupported ? "bg-primary text-primary-foreground hover:bg-foreground hover:text-background" : "bg-muted text-muted-foreground cursor-not-allowed")}>
            {isSupported ? <Mic size={24} /> : <MicOff size={24} />}
          </button>
          <Input className="flex-1 border-none shadow-none focus-visible:ring-0 text-lg font-bold h-auto rounded-none px-5 py-3 bg-transparent" placeholder={completed ? "Topic complete! Go back ↑" : micStatus === "listening" ? "Listening..." : "Type or speak German..."} value={localInput} onChange={e => setLocalInput(e.target.value)} onKeyDown={e => e.key === "Enter" && handleLocalSend()} disabled={completed} />
          <button className="p-3 border-l-4 border-foreground bg-secondary flex items-center justify-center hover:bg-foreground hover:text-background transition-colors disabled:opacity-50" onClick={handleLocalSend} disabled={!localInput.trim() || completed}>
            <Send size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

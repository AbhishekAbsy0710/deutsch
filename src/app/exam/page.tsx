"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Clock, Play, Check, X, ArrowRight, AlertTriangle, Trophy, ChevronRight, Volume2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { speakGermanNeural } from "@/lib/tts";
import { mockExams, type MockExam, type ExamQuestion } from "@/data/exam-data";
import { createClient } from "@/lib/supabase";
import { useProgressStore } from "@/store/useProgressStore";

type ExamPhase = "select" | "running" | "result";
type SectionKey = "lesen" | "hoeren" | "schreiben" | "grammatik";

const SECTION_LABELS: Record<SectionKey, { label: string; icon: string }> = {
  lesen: { label: "Lesen", icon: "📖" },
  hoeren: { label: "Hören", icon: "🎧" },
  schreiben: { label: "Schreiben", icon: "✍️" },
  grammatik: { label: "Grammatik", icon: "📐" },
};

export default function ExamPage() {
  const [phase, setPhase] = useState<ExamPhase>("select");
  const [selectedExam, setSelectedExam] = useState<MockExam | null>(null);
  const [currentSection, setCurrentSection] = useState<SectionKey>("lesen");

  // Answers state
  const [lesenAnswers, setLesenAnswers] = useState<Record<string, number>>({});
  const [hoerenAnswers, setHoerenAnswers] = useState<Record<string, number>>({});
  const [grammatikAnswers, setGrammatikAnswers] = useState<Record<number, string>>({});
  const [writingText, setWritingText] = useState("");
  const [writingScore, setWritingScore] = useState<number | null>(null);
  const [isGradingWriting, setIsGradingWriting] = useState(false);

  // Timer
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  // Auth
  const [authToken, setAuthToken] = useState<string | null>(null);
  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getSession().then(({ data }) => setAuthToken(data.session?.access_token ?? null));
  }, []);

  // Timer effect
  useEffect(() => {
    if (!timerActive || timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { setTimerActive(false); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  const startExam = (exam: MockExam) => {
    setSelectedExam(exam);
    setPhase("running");
    setCurrentSection("lesen");
    setLesenAnswers({});
    setHoerenAnswers({});
    setGrammatikAnswers({});
    setWritingText("");
    setWritingScore(null);
    setTimeLeft(exam.timeLimitMinutes * 60);
    setTimerActive(true);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const submitExam = async () => {
    setTimerActive(false);
    // Grade writing if not already done
    if (writingText.trim() && writingScore === null && authToken) {
      setIsGradingWriting(true);
      try {
        const res = await fetch("/api/write-check", {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${authToken}` },
          body: JSON.stringify({ text: writingText, level: selectedExam?.level || "B1" }),
        });
        if (res.ok) {
          const data = await res.json();
          setWritingScore(data.overall ?? 50);
        }
      } catch {
        setWritingScore(50); // fallback
      }
      setIsGradingWriting(false);
    }
    setPhase("result");
  };

  // ── Selection ──
  if (phase === "select") {
    return (
      <div className="max-w-4xl mx-auto p-4 sm:p-8">
        <header className="mb-8 pb-4 border-b-4 border-foreground">
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter flex items-center gap-3">
            <FileText className="w-8 h-8 md:w-10 md:h-10" /> Exam Simulator
          </h1>
          <p className="font-mono text-muted-foreground text-sm uppercase tracking-widest mt-1">
            Goethe-Zertifikat Mock Tests
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mockExams.map((exam, i) => (
            <motion.div key={exam.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="border-2 border-foreground p-6 hover:bg-foreground/5 transition-colors group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-2xl font-black">{exam.level}</span>
                <span className="flex items-center gap-1 font-mono text-xs text-muted-foreground">
                  <Clock size={12} /> {exam.timeLimitMinutes} min
                </span>
              </div>
              <h3 className="font-bold text-lg mb-3">{exam.title}</h3>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {(Object.keys(SECTION_LABELS) as SectionKey[]).map(key => (
                  <div key={key} className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                    <span>{SECTION_LABELS[key].icon}</span> {SECTION_LABELS[key].label}
                  </div>
                ))}
              </div>
              <div className="text-xs text-muted-foreground mb-4">
                Pass: ≥{exam.passThreshold}% overall, ≥{exam.sectionMinimum}% per section
              </div>
              <Button onClick={() => startExam(exam)}
                className="w-full border-2 font-mono text-xs uppercase gap-2 group-hover:bg-foreground group-hover:text-background transition-colors"
                variant="outline"
              >
                <Play size={14} /> Start Exam
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (!selectedExam) return null;

  // ── Running Exam ──
  if (phase === "running") {
    const sections: SectionKey[] = ["lesen", "hoeren", "schreiben", "grammatik"];
    const isTimeLow = timeLeft < 300; // less than 5 min

    return (
      <div className="max-w-5xl mx-auto p-4 sm:p-6">
        {/* Top bar: timer + sections */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-foreground">
          <div className="flex items-center gap-4">
            <span className="font-mono text-lg font-bold">{selectedExam.level}</span>
            <div className="flex border-2 border-foreground">
              {sections.map(s => (
                <button key={s} onClick={() => setCurrentSection(s)}
                  className={cn("px-3 py-1.5 font-mono text-xs uppercase transition-colors",
                    currentSection === s ? "bg-foreground text-background" : "hover:bg-foreground/10",
                    s !== sections[0] && "border-l-2 border-foreground"
                  )}
                >
                  {SECTION_LABELS[s].icon} {SECTION_LABELS[s].label}
                </button>
              ))}
            </div>
          </div>
          <div className={cn("flex items-center gap-2 font-mono text-lg font-bold", isTimeLow && "text-red-500 animate-pulse")}>
            <Clock size={18} />
            {formatTime(timeLeft)}
          </div>
        </div>

        {/* Section content */}
        <AnimatePresence mode="wait">
          <motion.div key={currentSection} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            {currentSection === "lesen" && (
              <LesenSection exam={selectedExam} answers={lesenAnswers} setAnswers={setLesenAnswers} />
            )}
            {currentSection === "hoeren" && (
              <HoerenSection exam={selectedExam} answers={hoerenAnswers} setAnswers={setHoerenAnswers} />
            )}
            {currentSection === "schreiben" && (
              <SchreibenSection exam={selectedExam} text={writingText} setText={setWritingText} />
            )}
            {currentSection === "grammatik" && (
              <GrammatikSection exam={selectedExam} answers={grammatikAnswers} setAnswers={setGrammatikAnswers} />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Submit */}
        <div className="mt-8 pt-4 border-t-2 border-border flex items-center justify-between">
          <Button variant="outline" onClick={() => { setTimerActive(false); setPhase("select"); }}
            className="border-2 font-mono text-xs uppercase"
          >
            Abort Exam
          </Button>
          <Button onClick={submitExam} disabled={isGradingWriting}
            className="border-2 font-mono text-xs uppercase gap-2 bg-primary text-primary-foreground"
          >
            {isGradingWriting ? <><Loader2 size={14} className="animate-spin" /> Grading...</> : <><Check size={14} /> Submit Exam</>}
          </Button>
        </div>

        {/* Time warning */}
        {timeLeft === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-background border-2 border-foreground p-8 max-w-md w-full text-center">
              <AlertTriangle className="w-12 h-12 mx-auto text-amber-500 mb-4" />
              <h2 className="text-2xl font-black uppercase mb-2">Time&apos;s Up!</h2>
              <p className="text-muted-foreground mb-6">Your exam time has expired. Submit your answers now.</p>
              <Button onClick={submitExam} className="border-2 font-mono uppercase w-full">Submit Exam</Button>
            </div>
          </motion.div>
        )}
      </div>
    );
  }

  // ── Results ──
  return <ExamResults exam={selectedExam} lesenAnswers={lesenAnswers} hoerenAnswers={hoerenAnswers}
    grammatikAnswers={grammatikAnswers} writingScore={writingScore}
    onBack={() => setPhase("select")} />;
}

// ── Lesen Section ────────────────────────────────────────
function LesenSection({ exam, answers, setAnswers }: {
  exam: MockExam; answers: Record<string, number>;
  setAnswers: React.Dispatch<React.SetStateAction<Record<string, number>>>;
}) {
  return (
    <div className="space-y-8">
      {exam.sections.lesen.map((reading, ri) => (
        <div key={ri}>
          <h3 className="font-bold text-lg mb-3">{reading.title}</h3>
          <div className="border-2 border-border p-5 mb-4 bg-card text-sm leading-relaxed whitespace-pre-line max-h-[400px] overflow-y-auto">
            {reading.text}
          </div>
          <div className="space-y-3">
            {reading.questions.map((q, qi) => {
              const key = `${ri}-${qi}`;
              return (
                <div key={qi} className="border-2 border-border p-4">
                  <p className="font-bold text-sm mb-2">{qi + 1}. {q.question}</p>
                  <div className="flex flex-wrap gap-2">
                    {q.options?.map((opt, oi) => (
                      <button key={oi} onClick={() => setAnswers(prev => ({ ...prev, [key]: oi }))}
                        className={cn("px-4 py-2 border-2 text-sm transition-colors",
                          answers[key] === oi ? "bg-foreground text-background border-foreground" : "border-border hover:border-foreground"
                        )}
                      >
                        {String.fromCharCode(97 + oi)}) {opt}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Hören Section ────────────────────────────────────────
function HoerenSection({ exam, answers, setAnswers }: {
  exam: MockExam; answers: Record<string, number>;
  setAnswers: React.Dispatch<React.SetStateAction<Record<string, number>>>;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [played, setPlayed] = useState<Record<number, boolean>>({});

  const playListening = async (index: number) => {
    if (isPlaying) return;
    setIsPlaying(true);
    const listening = exam.sections.hoeren[index];
    for (const line of listening.lines) {
      await speakGermanNeural(line.text);
      await new Promise(r => setTimeout(r, 700));
    }
    setIsPlaying(false);
    setPlayed(p => ({ ...p, [index]: true }));
  };

  return (
    <div className="space-y-8">
      {exam.sections.hoeren.map((listening, li) => (
        <div key={li}>
          <h3 className="font-bold text-lg mb-3">{listening.title}</h3>
          <div className="border-2 border-border p-5 mb-4 text-center">
            <Button onClick={() => playListening(li)} disabled={isPlaying}
              className="border-2 gap-2 font-mono text-xs uppercase" variant="outline"
            >
              {isPlaying ? <Volume2 size={14} className="animate-pulse" /> : <Play size={14} />}
              {played[li] ? "Replay" : "Play Audio"}
            </Button>
            <p className="text-xs text-muted-foreground mt-2">Listen carefully. Answer the questions below.</p>
          </div>
          <div className="space-y-3">
            {listening.questions.map((q, qi) => {
              const key = `${li}-${qi}`;
              return (
                <div key={qi} className="border-2 border-border p-4">
                  <p className="font-bold text-sm mb-2">{qi + 1}. {q.question}</p>
                  <div className="flex flex-wrap gap-2">
                    {q.options?.map((opt, oi) => (
                      <button key={oi} onClick={() => setAnswers(prev => ({ ...prev, [key]: oi }))}
                        className={cn("px-4 py-2 border-2 text-sm transition-colors",
                          answers[key] === oi ? "bg-foreground text-background border-foreground" : "border-border hover:border-foreground"
                        )}
                      >
                        {String.fromCharCode(97 + oi)}) {opt}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Schreiben Section ────────────────────────────────────
function SchreibenSection({ exam, text, setText }: { exam: MockExam; text: string; setText: (t: string) => void }) {
  const s = exam.sections.schreiben;
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  return (
    <div>
      <div className="border-2 border-border p-5 mb-4 bg-card">
        <p className="text-sm leading-relaxed mb-4">{s.prompt}</p>
        <div className="text-xs text-muted-foreground space-y-1">
          {s.hints.map((h, i) => <p key={i}>💡 {h}</p>)}
        </div>
      </div>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Write your answer here..."
        className="w-full border-2 border-foreground p-4 bg-background outline-none focus:border-primary transition-colors resize-none h-48 text-sm"
      />
      <div className="flex items-center justify-between mt-2">
        <span className={cn("font-mono text-xs", wordCount < s.minWords ? "text-amber-500" : wordCount > s.maxWords ? "text-red-500" : "text-green-500")}>
          {wordCount} / {s.minWords}–{s.maxWords} words
        </span>
      </div>
    </div>
  );
}

// ── Grammatik Section ────────────────────────────────────
function GrammatikSection({ exam, answers, setAnswers }: {
  exam: MockExam; answers: Record<number, string>;
  setAnswers: React.Dispatch<React.SetStateAction<Record<number, string>>>;
}) {
  return (
    <div className="space-y-4">
      <p className="font-mono text-xs text-muted-foreground uppercase mb-2">Fill in the blanks</p>
      {exam.sections.grammatik.map((q, i) => (
        <div key={i} className="border-2 border-border p-4 flex items-center gap-3 flex-wrap">
          <span className="font-mono text-xs text-muted-foreground shrink-0">{i + 1}.</span>
          <p className="text-sm flex-1">
            {q.question.split("___").map((part, pi, arr) => (
              <span key={pi}>
                {part}
                {pi < arr.length - 1 && (
                  <input
                    value={answers[i] || ""}
                    onChange={e => setAnswers(prev => ({ ...prev, [i]: e.target.value }))}
                    className="inline-block w-28 border-b-2 border-foreground bg-transparent outline-none text-center font-bold mx-1 focus:border-primary"
                    placeholder="..."
                  />
                )}
              </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}

// ── Results ──────────────────────────────────────────────
function ExamResults({ exam, lesenAnswers, hoerenAnswers, grammatikAnswers, writingScore, onBack }: {
  exam: MockExam;
  lesenAnswers: Record<string, number>;
  hoerenAnswers: Record<string, number>;
  grammatikAnswers: Record<number, string>;
  writingScore: number | null;
  onBack: () => void;
}) {
  // Calculate section scores
  const calcMCQScore = (questions: ExamQuestion[], answers: Record<string, number>, prefix: string) => {
    let correct = 0;
    let total = 0;
    questions.forEach((q, qi) => {
      total++;
      if (answers[`${prefix}-${qi}`] === q.correctIndex) correct++;
    });
    return total > 0 ? Math.round((correct / total) * 100) : 0;
  };

  // Lesen
  let lesenTotal = 0, lesenCorrect = 0;
  exam.sections.lesen.forEach((reading, ri) => {
    reading.questions.forEach((q, qi) => {
      lesenTotal++;
      if (lesenAnswers[`${ri}-${qi}`] === q.correctIndex) lesenCorrect++;
    });
  });
  const lesenScore = lesenTotal > 0 ? Math.round((lesenCorrect / lesenTotal) * 100) : 0;

  // Hoeren
  let hoerenTotal = 0, hoerenCorrect = 0;
  exam.sections.hoeren.forEach((listening, li) => {
    listening.questions.forEach((q, qi) => {
      hoerenTotal++;
      if (hoerenAnswers[`${li}-${qi}`] === q.correctIndex) hoerenCorrect++;
    });
  });
  const hoerenScore = hoerenTotal > 0 ? Math.round((hoerenCorrect / hoerenTotal) * 100) : 0;

  // Grammatik
  let gramTotal = 0, gramCorrect = 0;
  exam.sections.grammatik.forEach((q, i) => {
    gramTotal++;
    if (grammatikAnswers[i]?.trim().toLowerCase() === q.correctAnswer?.toLowerCase()) gramCorrect++;
  });
  const grammatikScore = gramTotal > 0 ? Math.round((gramCorrect / gramTotal) * 100) : 0;

  // Writing
  const schreibenScore = writingScore ?? 0;

  // Overall
  const overallScore = Math.round((lesenScore + hoerenScore + schreibenScore + grammatikScore) / 4);
  const passed = overallScore >= exam.passThreshold &&
    lesenScore >= exam.sectionMinimum && hoerenScore >= exam.sectionMinimum &&
    schreibenScore >= exam.sectionMinimum && grammatikScore >= exam.sectionMinimum;

  // Record to progress store
  const { recordExamResult } = useProgressStore();
  useEffect(() => {
    recordExamResult(exam.id, overallScore, passed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sections = [
    { key: "lesen", label: "Lesen (Reading)", score: lesenScore, icon: "📖" },
    { key: "hoeren", label: "Hören (Listening)", score: hoerenScore, icon: "🎧" },
    { key: "schreiben", label: "Schreiben (Writing)", score: schreibenScore, icon: "✍️" },
    { key: "grammatik", label: "Grammatik", score: grammatikScore, icon: "📐" },
  ];

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-8">
      <header className="mb-8 pb-4 border-b-4 border-foreground">
        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">{exam.title}</h1>
        <p className="font-mono text-sm text-muted-foreground uppercase mt-1">Exam Results</p>
      </header>

      {/* Overall score */}
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        className={cn("border-4 p-8 text-center mb-8", passed ? "border-green-500" : "border-red-500")}
      >
        <div className={cn("text-7xl font-black mb-2", passed ? "text-green-500" : "text-red-500")}>
          {overallScore}%
        </div>
        <div className={cn("text-2xl font-bold uppercase mb-2", passed ? "text-green-500" : "text-red-500")}>
          {passed ? "BESTANDEN ✅" : "NICHT BESTANDEN ❌"}
        </div>
        <p className="text-sm text-muted-foreground">
          {passed ? "Congratulations! You passed!" : `You need ≥${exam.passThreshold}% overall and ≥${exam.sectionMinimum}% per section.`}
        </p>
      </motion.div>

      {/* Section breakdown */}
      <div className="space-y-4 mb-8">
        {sections.map((s, i) => {
          const passSec = s.score >= exam.sectionMinimum;
          return (
            <motion.div key={s.key} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
              className="border-2 border-border p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold flex items-center gap-2">{s.icon} {s.label}</span>
                <span className={cn("font-mono font-bold", passSec ? "text-green-500" : "text-red-500")}>
                  {s.score}%
                </span>
              </div>
              <div className="h-3 bg-muted rounded-sm overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${s.score}%` }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                  className={cn("h-full", passSec ? "bg-green-500" : "bg-red-500")}
                />
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs text-muted-foreground font-mono">Min: {exam.sectionMinimum}%</span>
                <span className={cn("text-xs font-mono font-bold", passSec ? "text-green-500" : "text-red-500")}>
                  {passSec ? "PASS" : "FAIL"}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Grammatik review */}
      <div className="border-2 border-border p-5 mb-8">
        <h3 className="font-bold mb-4">📐 Grammar Review</h3>
        <div className="space-y-2">
          {exam.sections.grammatik.map((q, i) => {
            const userAnswer = grammatikAnswers[i]?.trim() || "";
            const isCorrect = userAnswer.toLowerCase() === q.correctAnswer?.toLowerCase();
            return (
              <div key={i} className={cn("flex items-start gap-2 text-sm p-2", isCorrect ? "bg-green-500/5" : "bg-red-500/5")}>
                {isCorrect ? <Check size={14} className="text-green-500 mt-0.5 shrink-0" /> : <X size={14} className="text-red-500 mt-0.5 shrink-0" />}
                <div className="flex-1">
                  <span>{q.question.replace("___", isCorrect ? `**${q.correctAnswer}**` : `~~${userAnswer || "—"}~~ → **${q.correctAnswer}**`)}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Button onClick={onBack} className="border-2 font-mono text-xs uppercase gap-2 w-full" variant="outline">
        ← Back to Exams
      </Button>
    </div>
  );
}

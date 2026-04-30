"use client";

import { useState, use, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { lessonData, LessonBlock } from "@/data/lessons";
import { useProgressStore } from "@/store/useProgressStore";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Mic, Volume2, ArrowRight, ArrowLeft, CheckCircle2, XCircle, MicOff, Trophy, BookOpen, PenTool } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSpeechRecognition, comparePronunciation } from "@/hooks/useSpeechRecognition";
import { speakGermanNeural } from "@/lib/tts";
import { OrganicPulse } from "@/components/OrganicPulse";
import FlashcardBlock from "@/components/blocks/FlashcardBlock";
import ConjugationDrillBlock from "@/components/blocks/ConjugationDrillBlock";
import ListeningBlock from "@/components/blocks/ListeningBlock";
import CulturalNoteBlock from "@/components/blocks/CulturalNoteBlock";
import ExampleDialogueBlock from "@/components/blocks/ExampleDialogueBlock";
import SummaryBlock from "@/components/blocks/SummaryBlock";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const STUDY_TYPES = ["vocabulary", "grammar", "flashcard", "cultural-note", "example-dialogue", "summary"];
const TEST_TYPES = ["quiz-mcq", "quiz-fill", "conjugation-drill", "listening", "speaking"];

function shuffleOptions(options: string[], correctIndex: number) {
  const indexed = options.map((opt, i) => ({ opt, isCorrect: i === correctIndex }));
  for (let i = indexed.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indexed[i], indexed[j]] = [indexed[j], indexed[i]];
  }
  return { shuffled: indexed.map(x => x.opt), newCorrectIndex: indexed.findIndex(x => x.isCorrect) };
}

export default function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const completeLesson = useProgressStore(s => s.completeLesson);
  const { width, height } = useWindowSize();

  const lesson = lessonData[id as string];
  const [phase, setPhase] = useState<"study" | "test">("study");
  const [testBlockIdx, setTestBlockIdx] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalQuizzes, setTotalQuizzes] = useState(0);
  const [lessonComplete, setLessonComplete] = useState(false);

  if (!lesson) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-black uppercase">Lesson not found</h1>
          <p className="text-muted-foreground font-mono">This lesson doesn&apos;t exist yet.</p>
          <Button onClick={() => router.push("/learn")} className="font-bold">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  // Split blocks into study and test
  const studyBlocks = lesson.blocks.filter(b => STUDY_TYPES.includes(b.type));
  const testBlocks = lesson.blocks.filter(b => TEST_TYPES.includes(b.type));

  const handleStartTest = () => { setPhase("test"); setTestBlockIdx(0); };

  const handleQuizCorrect = () => {
    setCorrectAnswers(prev => prev + 1);
    setTotalQuizzes(prev => prev + 1);
    handleTestNext();
  };

  const handleQuizWrong = () => { setTotalQuizzes(prev => prev + 1); };

  const handleTestNext = () => {
    if (testBlockIdx >= testBlocks.length - 1) {
      const score = testBlocks.length > 0 ? Math.round((correctAnswers / testBlocks.length) * 100) : 100;
      const xpEarned = 30 + Math.round(score * 0.2);
      completeLesson(lesson.id, score, xpEarned);
      setLessonComplete(true);
    } else {
      setTestBlockIdx(prev => prev + 1);
    }
  };

  // === LESSON COMPLETE ===
  if (lessonComplete) {
    const score = testBlocks.length > 0 ? Math.round((correctAnswers / testBlocks.length) * 100) : 100;
    const xpEarned = 30 + Math.round(score * 0.2);
    
    const containerVariants = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.1 }
      }
    };
    
    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } as any }
    };

    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <Confetti width={width} height={height} recycle={false} numberOfPieces={500} gravity={0.15} />
        <motion.div 
          className="text-center space-y-8 max-w-md relative z-10 bg-background/80 p-8 rounded-3xl backdrop-blur-sm"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div 
            variants={itemVariants}
            className="w-24 h-24 bg-primary flex items-center justify-center mx-auto rounded-2xl shadow-xl shadow-primary/20"
          >
            <Trophy className="w-12 h-12 text-primary-foreground" />
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl font-black uppercase tracking-tighter">
            Lesson Complete!
          </motion.h1>
          
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
            <div className="border-2 border-foreground p-4 bg-background">
              <p className="text-4xl font-black text-primary">{score}%</p>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-1">Score</p>
            </div>
            <div className="border-2 border-foreground p-4 bg-background">
              <p className="text-4xl font-black">+{xpEarned}</p>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-1">XP Earned</p>
            </div>
          </motion.div>
          
          {testBlocks.length > 0 && (
            <motion.p variants={itemVariants} className="text-muted-foreground font-mono text-sm">
              {correctAnswers}/{testBlocks.length} exercises correct
            </motion.p>
          )}
          
          <motion.div variants={itemVariants} className="flex flex-col gap-3 mt-8">
            <Button size="lg" className="w-full border-2" onClick={() => router.push("/learn")}>
              Continue Learning <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="w-full border-2" onClick={() => { setPhase("study"); setTestBlockIdx(0); setCorrectAnswers(0); setTotalQuizzes(0); setLessonComplete(false); }}>
              Retry Lesson
            </Button>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  // === STUDY PHASE ===
  if (phase === "study") {
    return (
      <div className="flex flex-col min-h-screen max-w-3xl mx-auto w-full p-4 sm:p-8">
        <header className="flex items-center gap-4 mb-8 pt-4">
          <Button variant="ghost" size="icon" onClick={() => router.push("/learn")}>
            <XCircle className="w-6 h-6 text-muted-foreground" />
          </Button>
          <div className="flex-1 flex items-center gap-3">
            <div className="bg-primary text-primary-foreground px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <BookOpen size={14} /> Study
            </div>
            <span className="font-mono text-xs text-muted-foreground">{lesson.title}</span>
          </div>
          {testBlocks.length > 0 && (
            <Button variant="outline" size="sm" className="border-2 font-mono text-xs" onClick={handleStartTest}>
              Skip to Test <ArrowRight className="ml-1 w-3 h-3" />
            </Button>
          )}
        </header>

        <main className="flex-1 space-y-12 pb-8">
          {studyBlocks.map((block, i) => (
            <div key={i} className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
              {block.type === "vocabulary" && <VocabularyBlock block={block} />}
              {block.type === "grammar" && <GrammarBlock block={block} />}
              {block.type === "flashcard" && <FlashcardBlock cards={block.cards} />}
              {block.type === "cultural-note" && <CulturalNoteBlock title={block.title} content={block.content} emoji={block.emoji} />}
              {block.type === "example-dialogue" && <ExampleDialogueBlock title={block.title} lines={block.lines} context={block.context} />}
              {block.type === "summary" && <SummaryBlock points={block.points} />}
            </div>
          ))}

          {studyBlocks.length === 0 && (
            <div className="text-center py-12 text-muted-foreground font-mono">
              This lesson is all exercises. Let&apos;s test your knowledge!
            </div>
          )}
        </main>

        <footer className="mt-8 pt-6 border-t-2 border-border">
          {testBlocks.length > 0 ? (
            <Button size="lg" className="w-full border-2 text-lg py-6" onClick={handleStartTest}>
              <PenTool className="mr-3 w-5 h-5" /> Start Test ({testBlocks.length} exercises) <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
          ) : (
            <Button size="lg" className="w-full border-2 text-lg py-6" onClick={() => { completeLesson(lesson.id, 100, 30); setLessonComplete(true); }}>
              Complete Lesson <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
          )}
        </footer>
      </div>
    );
  }

  // === TEST PHASE ===
  const testBlock = testBlocks[testBlockIdx];
  const testProgress = ((testBlockIdx + 1) / testBlocks.length) * 100;
  const isLastTest = testBlockIdx === testBlocks.length - 1;

  return (
    <div className="flex flex-col min-h-screen max-w-3xl mx-auto w-full p-4 sm:p-8">
      <header className="flex items-center gap-4 mb-8 pt-4">
        <Button variant="ghost" size="icon" onClick={() => setPhase("study")}>
          <ArrowLeft className="w-6 h-6 text-muted-foreground" />
        </Button>
        <div className="bg-foreground text-background px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2">
          <PenTool size={14} /> Test
        </div>
        <Progress value={testProgress} className="h-3 flex-1" />
        <span className="font-mono text-xs text-muted-foreground">
          {testBlockIdx + 1}/{testBlocks.length}
        </span>
      </header>

      <main className="flex-1 flex flex-col justify-center min-h-[400px]">
        <div key={testBlockIdx} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {testBlock.type === "quiz-mcq" && <QuizMCQBlock key={`mcq-${testBlockIdx}`} block={testBlock} onCorrect={handleQuizCorrect} onWrong={handleQuizWrong} />}
          {testBlock.type === "quiz-fill" && <QuizFillBlock key={`fill-${testBlockIdx}`} block={testBlock} onCorrect={handleQuizCorrect} onWrong={handleQuizWrong} />}
          {testBlock.type === "speaking" && <SpeakingBlock block={testBlock} onCorrect={handleQuizCorrect} />}
          {testBlock.type === "conjugation-drill" && <ConjugationDrillBlock verb={testBlock.verb} translation={testBlock.translation} tense={testBlock.tense} pronouns={testBlock.pronouns} correctForms={testBlock.correctForms} hint={testBlock.hint} onCorrect={handleQuizCorrect} />}
          {testBlock.type === "listening" && <ListeningBlock phrase={testBlock.phrase} translation={testBlock.translation} speed={testBlock.speed} onCorrect={handleQuizCorrect} />}
        </div>
      </main>

      <footer className="mt-8 pt-6 border-t-2 border-border flex justify-between items-center">
        <Button variant="outline" disabled={testBlockIdx === 0} onClick={() => setTestBlockIdx(prev => prev - 1)} className="border-2">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back
        </Button>
        <span className="font-mono text-xs text-muted-foreground">{correctAnswers} correct so far</span>
      </footer>
    </div>
  );
}


// --- Vocabulary Block ---
function VocabularyBlock({ block }: { block: Extract<LessonBlock, { type: "vocabulary" }> }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = async () => {
    setIsPlaying(true);
    try {
      await speakGermanNeural(block.word);
    } catch { /* ignore */ }
    setIsPlaying(false);
  };

  return (
    <div className="text-center space-y-8">
      <h2 className="text-2xl font-bold text-muted-foreground uppercase tracking-widest font-mono">New Word</h2>
      <div className="space-y-4">
        <h1 className="text-6xl sm:text-8xl font-extrabold text-primary">{block.word}</h1>
        <p className="text-2xl text-muted-foreground font-mono">/{block.phonetic}/</p>
      </div>
      
      <button
        onClick={playAudio}
        className={cn(
          "w-20 h-20 border-2 border-foreground flex items-center justify-center mx-auto transition-all",
          isPlaying ? "bg-primary text-primary-foreground scale-95" : "bg-secondary hover:bg-foreground hover:text-background"
        )}
      >
        <Volume2 className={cn("w-8 h-8", isPlaying && "animate-pulse")} />
      </button>

      <div className="max-w-md mx-auto mt-8 border-2 border-border p-6">
        <p className="text-xl font-bold mb-2">{block.translation}</p>
        <p className="text-muted-foreground italic">&ldquo;{block.example}&rdquo;</p>
      </div>
    </div>
  );
}

// --- Grammar Block ---
function GrammarBlock({ block }: { block: Extract<LessonBlock, { type: "grammar" }> }) {
  const playAudio = (text: string) => {
    speakGermanNeural(text);
  };

  return (
    <div className="space-y-8 max-w-2xl mx-auto w-full">
      <div className="bg-foreground text-background px-4 py-2 inline-block font-mono text-sm font-bold uppercase tracking-wider">
        Grammar
      </div>
      <h1 className="text-3xl font-black uppercase">{block.title}</h1>
      <p className="text-lg leading-relaxed">{block.explanation}</p>
      
      <div className="space-y-4 mt-8">
        {block.examples.map((ex, i) => (
          <div key={i} className="border-2 border-border p-4 hover:border-foreground transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-bold text-lg">{ex.de}</p>
                <p className="text-muted-foreground">{ex.en}</p>
              </div>
              <button onClick={() => playAudio(ex.de)} className="p-2 text-muted-foreground hover:text-primary transition-colors flex-shrink-0">
                <Volume2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Quiz MCQ Block with SHUFFLED options ---
function QuizMCQBlock({ block, onCorrect, onWrong }: { block: Extract<LessonBlock, { type: "quiz-mcq" }>, onCorrect: () => void, onWrong: () => void }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");

  // Shuffle options once when block mounts
  const { shuffled, newCorrectIndex } = useMemo(
    () => shuffleOptions(block.options, block.correctIndex),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [block.question] // re-shuffle when question changes
  );

  const handleSelect = useCallback((index: number) => {
    if (status !== "idle") return;
    setSelected(index);
    if (index === newCorrectIndex) {
      setStatus("correct");
    } else {
      setStatus("wrong");
      onWrong();
    }
  }, [status, newCorrectIndex, onWrong]);

  return (
    <div className="space-y-8 max-w-md mx-auto w-full">
      <h1 className="text-3xl font-black text-center uppercase">{block.question}</h1>
      
      <div className="grid gap-4">
        {shuffled.map((opt, i) => {
          const isSelected = selected === i;
          const isCorrectOption = i === newCorrectIndex;
          
          let stateClass = "hover:border-primary cursor-pointer";
          if (status !== "idle") {
            if (isCorrectOption) stateClass = "bg-green-500/10 border-green-500 text-green-700 dark:text-green-400";
            else if (isSelected && !isCorrectOption) stateClass = "bg-red-500/10 border-red-500 text-red-700 dark:text-red-400";
            else stateClass = "opacity-50 pointer-events-none";
          }

          return (
            <div 
              key={i} 
              className={cn("border-2 border-border p-4 text-center font-bold text-lg transition-all cursor-pointer", stateClass)} 
              onClick={() => handleSelect(i)}
            >
              {opt}
            </div>
          );
        })}
      </div>

      {status !== "idle" && (
        <div className={cn("p-4 flex items-start gap-4 border-2", status === "correct" ? "border-green-500 bg-green-500/5 text-green-700" : "border-red-500 bg-red-500/5 text-red-700")}>
          {status === "correct" ? <CheckCircle2 className="mt-0.5 flex-shrink-0" /> : <XCircle className="mt-0.5 flex-shrink-0" />}
          <div>
            <p className="font-bold">{status === "correct" ? "Richtig! (Correct)" : "Falsch! (Wrong)"}</p>
            <p className="text-sm mt-1">{block.explanation}</p>
          </div>
        </div>
      )}

      {status === "correct" && (
        <Button size="lg" className="w-full mt-4 border-2" onClick={onCorrect}>Continue <ArrowRight className="ml-2 w-4 h-4" /></Button>
      )}
      {status === "wrong" && (
        <Button size="lg" variant="outline" className="w-full mt-4 border-2" onClick={() => { setSelected(null); setStatus("idle"); }}>
          Try Again
        </Button>
      )}
    </div>
  );
}

// --- Quiz Fill Block ---
function QuizFillBlock({ block, onCorrect, onWrong }: { block: Extract<LessonBlock, { type: "quiz-fill" }>, onCorrect: () => void, onWrong: () => void }) {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [attempts, setAttempts] = useState(0);

  const checkAnswer = () => {
    if (input.trim().toLowerCase() === block.missingWord.toLowerCase()) {
      setStatus("correct");
    } else {
      setStatus("wrong");
      setAttempts(prev => prev + 1);
      if (attempts >= 1) {
        onWrong(); // Count as wrong after 2 failed attempts
      }
    }
  };

  return (
    <div className="space-y-8 max-w-xl mx-auto w-full text-center">
      <h2 className="text-xl font-bold text-muted-foreground uppercase tracking-widest font-mono">Fill in the blank</h2>
      <p className="text-lg text-muted-foreground">{block.translation}</p>
      
      <div className="flex flex-wrap items-center justify-center gap-3 text-3xl font-bold mt-8">
        <span>{block.sentenceBefore}</span>
        <input 
          type="text" 
          value={input}
          onChange={(e) => { setInput(e.target.value); setStatus("idle"); }}
          onKeyDown={(e) => e.key === "Enter" && (status === "correct" ? onCorrect() : checkAnswer())}
          className={cn(
            "w-32 sm:w-40 bg-secondary/50 border-b-4 outline-none text-center px-2 py-1 transition-colors",
            status === "correct" ? "border-green-500 text-green-500" :
            status === "wrong" ? "border-red-500 text-red-500" : "border-primary focus:border-primary/70"
          )}
          autoFocus
        />
        <span>{block.sentenceAfter}</span>
      </div>

      {status === "wrong" && (
        <div className="space-y-2">
          <p className="text-red-500 font-bold">Not quite right!</p>
          {attempts >= 2 && (
            <p className="text-muted-foreground font-mono text-sm">Hint: The answer is &ldquo;{block.missingWord}&rdquo;</p>
          )}
        </div>
      )}

      <Button size="lg" className="w-full max-w-xs mx-auto mt-8 border-2" onClick={status === "correct" ? onCorrect : checkAnswer}>
        {status === "correct" ? "Continue" : "Check Answer"}
      </Button>
    </div>
  );
}

// --- Speaking Block with REAL Voice Recognition ---
function SpeakingBlock({ block, onCorrect }: { block: Extract<LessonBlock, { type: "speaking" }>, onCorrect?: () => void }) {
  const { status, transcript, error, startListening, stopListening, isSupported } = useSpeechRecognition();
  const [result, setResult] = useState<{ score: number; feedback: string } | null>(null);

  const handleRecord = () => {
    if (status === "listening") {
      stopListening();
    } else {
      setResult(null);
      startListening();
    }
  };

  // When transcript arrives, compare it
  if (status === "done" && transcript && !result) {
    const comparison = comparePronunciation(transcript, block.phrase);
    setResult(comparison);
  }

  const playTarget = async () => {
    try {
      await speakGermanNeural(block.phrase);
    } catch {
      // Silent fallback
    }
  };

  const isRecording = status === "listening";

  return (
    <div className="space-y-8 text-center max-w-md mx-auto w-full">
      <div className="bg-primary text-primary-foreground px-4 py-2 inline-flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-wider">
        <Mic size={16} /> Speaking Practice
      </div>
      
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black">{block.phrase}</h1>
        <p className="text-xl text-muted-foreground font-mono">/{block.phonetic}/</p>
        <p className="text-lg font-medium">&ldquo;{block.translation}&rdquo;</p>
      </div>

      <button
        onClick={playTarget}
        className="border-2 border-foreground px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors inline-flex items-center gap-3"
      >
        <Volume2 size={16} /> Hear Pronunciation
      </button>

      <div className="border-2 border-border p-4 text-sm font-mono text-muted-foreground my-8">
        💡 {block.tip}
      </div>

      <div className="flex flex-col items-center gap-6 mt-8">
        <div className="relative">
          <OrganicPulse isRecording={isRecording} />
          <button 
            className={cn(
              "w-24 h-24 flex items-center justify-center transition-all relative z-10 border-2",
              isRecording 
                ? "bg-red-500 text-white border-red-500 scale-110" 
                : !isSupported 
                  ? "bg-muted text-muted-foreground border-muted cursor-not-allowed"
                  : "bg-primary text-primary-foreground border-primary hover:scale-105"
            )}
            onClick={isSupported ? handleRecord : undefined}
            disabled={!isSupported}
          >
            {isSupported ? <Mic className="w-10 h-10" /> : <MicOff className="w-10 h-10" />}
          </button>
        </div>

        <div className="min-h-[80px] w-full">
          {!isSupported && (
            <div className="border-2 border-red-500 bg-red-500/5 p-4 text-red-700 text-sm">
              <p className="font-bold">Microphone not supported</p>
              <p>Please use Chrome or Edge for voice features.</p>
              {onCorrect && (
                <button onClick={onCorrect} className="mt-2 border-2 border-red-700 px-4 py-1 font-bold text-xs">
                  Skip Exercise
                </button>
              )}
            </div>
          )}
          {isRecording && <p className="text-red-500 font-bold animate-pulse font-mono uppercase tracking-widest">● Recording... Speak now</p>}
          {status === "processing" && <p className="text-primary font-bold animate-pulse font-mono uppercase tracking-widest">Analyzing...</p>}
          {error && (
            <div className="border-2 border-red-500 bg-red-500/5 p-3 text-red-700 text-sm flex flex-col items-center gap-2">
              <p>{error}</p>
              {onCorrect && (
                <button onClick={onCorrect} className="border-2 border-red-700 px-4 py-1 font-bold text-xs uppercase">
                  Skip For Now
                </button>
              )}
            </div>
          )}
          {result && (
            <div className={cn(
              "p-4 flex flex-col items-center gap-3 border-2",
              result.score >= 80 ? "border-green-500 bg-green-500/5 text-green-700" : 
              result.score >= 50 ? "border-yellow-500 bg-yellow-500/5 text-yellow-700" :
              "border-red-500 bg-red-500/5 text-red-700"
            )}>
              <div className="flex items-start gap-3 w-full">
                {result.score >= 80 ? <CheckCircle2 className="flex-shrink-0 mt-0.5" /> : <XCircle className="flex-shrink-0 mt-0.5" />}
                <div className="text-left flex-1">
                  <p className="font-bold">{result.score}% Match</p>
                  <p className="text-sm mt-1">{result.feedback}</p>
                  {transcript && <p className="font-mono text-xs mt-2 opacity-70">You said: &ldquo;{transcript}&rdquo;</p>}
                </div>
              </div>
              
              {result.score >= 60 && onCorrect && (
                <button onClick={onCorrect} className="w-full mt-2 border-4 border-green-500 bg-green-500 text-white py-2 font-mono text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  Continue
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

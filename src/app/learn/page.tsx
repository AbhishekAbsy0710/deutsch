"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Lock, ArrowRight, CheckCircle2, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { useProgressStore } from "@/store/useProgressStore";

import { lessonData } from "@/data/lessons";

const moduleMetadata = [
  { id: "A0", title: "A0: The Absolute Basics", description: "Alphabet, pronunciation, and survival words." },
  { id: "A1", title: "A1: First Steps", description: "Basic sentences, questions, and daily life." },
  { id: "A2", title: "A2: Elementary Mastery", description: "The Dative case, Past tense, and Prepositions." },
  { id: "B1", title: "B1: Intermediate German", description: "Subordinate clauses, Genitive case, and complex sentences." },
  { id: "B2", title: "B2: Upper Intermediate", description: "Konjunktiv II, Passive voice, and advanced vocabulary." },
  { id: "C1", title: "C1: Advanced Proficiency", description: "DACH-Region variations, modal particles, and academic discourse." },
  { id: "C2", title: "C2: Native Mastery", description: "Native slang, colloquialisms, modern linguistics, and idioms." },
];

const modules = moduleMetadata.map(meta => ({
  ...meta,
  lessons: Object.values(lessonData)
    .filter(lesson => lesson.module === meta.id)
    .sort((a, b) => {
      // Handle all ID formats: l13, la1_01, la2_01, lb1_01, lb2_01
      const getOrder = (id: string) => {
        // C1/C2 format: c1-g1, c2-n1, c1-mp1
        const cxMatch = id.match(/^c(\d)-([a-z]+)(\d+)$/);
        if (cxMatch) {
          const level = parseInt(cxMatch[1], 10);
          const prefix = cxMatch[2];
          const num = parseInt(cxMatch[3], 10);
          
          const offsets: Record<string, number> = {
            'g': 0,    // Grammar
            'v': 100,  // Vocabulary
            'w': 200,  // Writing
            'e': 300,  // Exam
            'k': 400,  // Kultur/Landeskunde
            'd': 500,  // DACH-Region
            'mp': 600, // Modalpartikeln
            'm': 700,  // Microskills (C1) / Modern (C2)
            'n': 0     // Native (C2)
          };
          
          const subTypeOffset = offsets[prefix] !== undefined ? offsets[prefix] : 900;
          return (level + 2) * 10000 + subTypeOffset + num;
        }

        // New format with underscore: la1_01, la2_44, lb1_01, lb2_70
        const match = id.match(/^l([ab])(\d)_(\d+)$/);
        if (match) {
          const prefix = match[1] === 'a' ? 1000 : 2000; // a=1000s, b=2000s
          const level = parseInt(match[2], 10); // 1 or 2
          const num = parseInt(match[3], 10); // lesson number
          return prefix + (level * 100) + num;
        }
        // Old format: l1, l13, l46, l61
        return parseInt(id.replace('l', ''), 10);
      };
      return getOrder(a.id) - getOrder(b.id);
    })
    .map(lesson => ({
      id: lesson.id,
      title: lesson.title,
      type: lesson.blocks[0]?.type || "lesson"
    }))
}));

export default function LearnDashboard() {
  const { lessons, xp, streak, getLessonStatus } = useProgressStore();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 120, damping: 20 } }
  };

  // Calculate module progress from lesson statuses
  const getModuleProgress = (moduleLessons: typeof modules[0]["lessons"]) => {
    const completed = moduleLessons.filter(l => getLessonStatus(l.id) === "completed").length;
    return Math.round((completed / moduleLessons.length) * 100);
  };

  // Module is locked if ALL its lessons are locked
  const isModuleLocked = (moduleLessons: typeof modules[0]["lessons"]) => {
    return moduleLessons.every(l => getLessonStatus(l.id) === "locked");
  };

  return (
    <div className="flex-1 px-6 md:px-16 py-12 max-w-[1400px] mx-auto w-full">
      <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b-4 border-foreground pb-8">
        <div>
          <div className="text-primary font-mono text-sm tracking-widest uppercase mb-4 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-primary block"></span>
            Curriculum
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
            Pathway to<br />
            <span className="text-muted-foreground">Fluency.</span>
          </h1>
        </div>
        <div className="flex gap-8 font-mono text-sm">
          <div className="flex flex-col">
            <span className="text-muted-foreground uppercase">Streak</span>
            <span className="text-3xl font-black text-primary">{String(streak).padStart(2, "0")}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground uppercase">XP</span>
            <span className="text-3xl font-black">{xp}</span>
          </div>
        </div>
      </header>

      <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-32">
        {modules.map((mod, index) => {
          const moduleLocked = isModuleLocked(mod.lessons);
          const moduleProgress = getModuleProgress(mod.lessons);

          return (
            <motion.section key={mod.id} variants={itemVariants} className={cn("relative grid lg:grid-cols-12 gap-12", moduleLocked && "opacity-40 grayscale")}>
              {/* Structural Line */}
              <div className="hidden lg:block absolute left-[33%] top-0 bottom-[-8rem] w-[2px] bg-border z-0"></div>

              <div className="lg:col-span-4 z-10 bg-background pt-2">
                <h2 className="text-7xl font-black text-muted-foreground opacity-20 absolute -top-8 -left-4 z-0 pointer-events-none select-none">
                  {String(index + 1).padStart(2, '0')}
                </h2>
                <div className="relative z-10">
                  <h3 className="text-3xl font-extrabold uppercase tracking-tight mb-4">{mod.title}</h3>
                  <p className="text-lg text-muted-foreground mb-8">{mod.description}</p>
                  {!moduleLocked && (
                    <div className="h-2 w-full bg-secondary overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary" 
                        initial={{ width: 0 }} 
                        animate={{ width: `${moduleProgress}%` }} 
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                      />
                    </div>
                  )}
                  {moduleProgress > 0 && (
                    <p className="font-mono text-xs text-muted-foreground mt-2">{moduleProgress}% complete</p>
                  )}
                </div>
              </div>

              <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6 z-10">
                {mod.lessons.map((lesson) => {
                  const status = getLessonStatus(lesson.id);
                  const lessonProgress = lessons[lesson.id];
                  const isClickable = status === "active" || status === "completed";

                  return (
                    <Link 
                      href={isClickable ? `/lesson/${lesson.id}` : "#"} 
                      key={lesson.id}
                      className={cn(
                        "group relative p-6 border-2 flex flex-col justify-between min-h-[160px] transition-all duration-300",
                        status === "active" ? "border-primary bg-primary/5 hover:bg-primary hover:text-primary-foreground cursor-pointer" :
                        status === "completed" ? "border-foreground bg-foreground text-background hover:opacity-90 cursor-pointer" :
                        "border-border bg-card cursor-not-allowed"
                      )}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <span className="font-mono text-xs font-bold uppercase tracking-widest">{lesson.type}</span>
                        {status === "locked" && <Lock size={16} className="text-muted-foreground" />}
                        {status === "completed" && (
                          <div className="flex items-center gap-2">
                            {lessonProgress?.score !== undefined && (
                              <span className="font-mono text-xs font-bold">{lessonProgress.score}%</span>
                            )}
                            <CheckCircle2 size={16} />
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold leading-snug">{lesson.title}</h4>
                        {status === "completed" && (
                          <p className="font-mono text-xs mt-2 flex items-center gap-1 opacity-70">
                            <RotateCcw size={12} /> Tap to review
                          </p>
                        )}
                      </div>
                      
                      {status === "active" && (
                        <div className="absolute bottom-6 right-6 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                          <ArrowRight size={24} />
                        </div>
                      )}
                    </Link>
                  );
                })}
              </div>
            </motion.section>
          );
        })}
      </motion.div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/MagneticButton";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
  };

  return (
    <div className="flex flex-col min-h-screen justify-center px-6 md:px-20 py-20 bg-background relative overflow-hidden">
      {/* Decorative background typography */}
      <div className="absolute top-[-10%] right-[-10%] text-[25vw] font-extrabold text-foreground/[0.03] select-none pointer-events-none leading-none tracking-tighter mix-blend-difference">
        DEUTSCH
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-7xl z-10 space-y-12"
      >
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="text-primary font-mono text-sm tracking-widest uppercase mb-4 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-primary block"></span>
            A0 — C1 Fluency Engine
          </div>
          <h1 className="text-7xl md:text-[9rem] font-extrabold leading-[0.85] tracking-tighter uppercase mix-blend-difference text-foreground">
            Learn German.
            <br />
            <span className="text-primary">Speak Reality.</span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="max-w-2xl">
          <p className="text-xl md:text-3xl text-muted-foreground font-light leading-snug">
            We abandon textbook grammar for structural fluency. Magnetic interactions, native voice synthesis, and brutalist roleplays that force you to actually communicate.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-8 pt-10">
          <MagneticButton>
            <Link 
              href="/assessment" 
              className="group relative inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-primary-foreground bg-primary overflow-hidden border-2 border-primary transition-all duration-300"
            >
              <div className="absolute inset-0 w-full h-full bg-foreground -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
              <span className="relative z-10 group-hover:text-background transition-colors duration-300">INITIATE SEQUENCE</span>
            </Link>
          </MagneticButton>
          
          <Link 
            href="/login" 
            className="group inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-foreground border-2 border-border hover:border-foreground transition-colors duration-300"
          >
            LOGIN
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

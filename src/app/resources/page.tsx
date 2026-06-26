"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Headphones, BookOpen, Tv, Radio, Mic, GraduationCap, Globe } from "lucide-react";

interface Resource {
  title: string;
  titleDe?: string;
  url: string;
  description: string;
  level: string;
  type: "podcast" | "news" | "video" | "grammar" | "radio" | "course" | "dictionary";
  icon: React.ReactNode;
  free: boolean;
}

const resources: Resource[] = [
  // ── Podcasts & Audio ──
  {
    title: "Slow German mit Annik Rubens",
    url: "https://slowgerman.com",
    description: "Clear, slowly spoken German podcast covering culture, history, and daily life. Transcripts available.",
    level: "A2–B2",
    type: "podcast",
    icon: <Headphones size={20} />,
    free: true,
  },
  {
    title: "Coffee Break German",
    url: "https://coffeebreaklanguages.com/coffeebreakgerman/",
    description: "Structured lessons from beginner to advanced with native speakers and cultural insights.",
    level: "A1–B2",
    type: "podcast",
    icon: <Headphones size={20} />,
    free: true,
  },
  {
    title: "Deutschlandfunk",
    url: "https://www.deutschlandfunk.de",
    description: "Germany's premier public radio — news, culture, and science at native speed.",
    level: "C1–C2",
    type: "radio",
    icon: <Radio size={20} />,
    free: true,
  },
  {
    title: "Easy German Podcast",
    url: "https://www.easygerman.org/podcast",
    description: "Casual conversations between Cari and Manuel about life in Germany. Vocabulary helpers included.",
    level: "B1–B2",
    type: "podcast",
    icon: <Headphones size={20} />,
    free: true,
  },

  // ── News & Reading ──
  {
    title: "Deutsche Welle — Langsam gesprochene Nachrichten",
    titleDe: "Langsam gesprochene Nachrichten",
    url: "https://www.dw.com/de/deutsch-lernen/nachrichten/s-8030",
    description: "Daily news read slowly and clearly. The single best resource for intermediate listening practice.",
    level: "B1–B2",
    type: "news",
    icon: <Globe size={20} />,
    free: true,
  },
  {
    title: "Nachrichtenleicht",
    url: "https://www.nachrichtenleicht.de",
    description: "Simplified news from Deutschlandfunk — real current events in easy German.",
    level: "A2–B1",
    type: "news",
    icon: <BookOpen size={20} />,
    free: true,
  },
  {
    title: "SPIEGEL Online",
    url: "https://www.spiegel.de",
    description: "Germany's leading news magazine — challenging, authentic journalistic German.",
    level: "C1–C2",
    type: "news",
    icon: <BookOpen size={20} />,
    free: false,
  },
  {
    title: "Die ZEIT",
    url: "https://www.zeit.de",
    description: "In-depth journalism, essays, and cultural criticism. The intellectual gold standard.",
    level: "C1–C2",
    type: "news",
    icon: <BookOpen size={20} />,
    free: false,
  },

  // ── Video ──
  {
    title: "Easy German (YouTube)",
    url: "https://www.youtube.com/@EasyGerman",
    description: "Street interviews with subtitles in German and English. Real conversations with real people.",
    level: "A2–C1",
    type: "video",
    icon: <Tv size={20} />,
    free: true,
  },
  {
    title: "ARD Mediathek",
    url: "https://www.ardmediathek.de",
    description: "Germany's public broadcasting archive — Tatort, documentaries, and news. Some available worldwide.",
    level: "B2–C2",
    type: "video",
    icon: <Tv size={20} />,
    free: true,
  },
  {
    title: "ZDF Mediathek",
    url: "https://www.zdf.de",
    description: "Second German public TV — today-show, Terra X documentaries, and drama series.",
    level: "B2–C2",
    type: "video",
    icon: <Tv size={20} />,
    free: true,
  },
  {
    title: "Kurzgesagt – In a Nutshell (German)",
    url: "https://www.youtube.com/@KurzgesagtDE",
    description: "Scientific explainer videos with beautiful animation. German version of the popular channel.",
    level: "B2–C1",
    type: "video",
    icon: <Tv size={20} />,
    free: true,
  },

  // ── Grammar & Reference ──
  {
    title: "Duden",
    url: "https://www.duden.de",
    description: "The authoritative German dictionary — spelling, grammar, and usage reference.",
    level: "All",
    type: "dictionary",
    icon: <BookOpen size={20} />,
    free: true,
  },
  {
    title: "DWDS — Digitales Wörterbuch",
    url: "https://www.dwds.de",
    description: "Academic dictionary with word frequency, etymology, collocations, and usage examples from corpora.",
    level: "B2–C2",
    type: "dictionary",
    icon: <BookOpen size={20} />,
    free: true,
  },
  {
    title: "Deutsche Welle Deutsch Interaktiv",
    url: "https://www.dw.com/de/deutsch-lernen/s-2055",
    description: "Comprehensive free course from A1 to B1 with interactive exercises, videos, and grammar explanations.",
    level: "A1–B1",
    type: "course",
    icon: <GraduationCap size={20} />,
    free: true,
  },
  {
    title: "Goethe-Institut Prüfungstraining",
    url: "https://www.goethe.de/de/spr/kup/prf.html",
    description: "Official exam preparation materials. Sample tests and practice exercises for all CEFR levels.",
    level: "A1–C2",
    type: "course",
    icon: <GraduationCap size={20} />,
    free: true,
  },

  // ── Speaking Practice ──
  {
    title: "Tandem App",
    url: "https://www.tandem.net",
    description: "Find native German speakers to practice with via text, voice, and video chat.",
    level: "A2–C2",
    type: "course",
    icon: <Mic size={20} />,
    free: true,
  },
  {
    title: "italki",
    url: "https://www.italki.com",
    description: "Professional German tutors for 1-on-1 lessons. Essential for C1+ conversation practice.",
    level: "All",
    type: "course",
    icon: <Mic size={20} />,
    free: false,
  },
];

const typeLabels: Record<string, string> = {
  podcast: "Podcasts & Audio",
  news: "News & Reading",
  video: "Video",
  grammar: "Grammar",
  radio: "Radio",
  course: "Courses & Speaking",
  dictionary: "Dictionaries",
};

const typeIcons: Record<string, React.ReactNode> = {
  podcast: <Headphones size={16} />,
  news: <BookOpen size={16} />,
  video: <Tv size={16} />,
  grammar: <BookOpen size={16} />,
  radio: <Radio size={16} />,
  course: <GraduationCap size={16} />,
  dictionary: <BookOpen size={16} />,
};

export default function ResourcesPage() {
  const [filter, setFilter] = useState<string>("all");
  const types = [...new Set(resources.map(r => r.type))];

  const filtered = filter === "all" ? resources : resources.filter(r => r.type === filter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-3xl font-black tracking-tight">🌍 Immersion Resources</h1>
            <p className="text-muted-foreground mt-1">
              Real German media for every level — the missing piece for expert fluency.
            </p>
          </div>
        </div>

        {/* Why this matters */}
        <div className="border-2 border-amber-500/30 bg-amber-500/5 p-4 mb-8">
          <p className="text-sm font-mono text-amber-500 font-bold uppercase mb-2">⚡ Why Immersion Matters</p>
          <p className="text-sm text-muted-foreground">
            No app alone can take you to C2. These curated resources expose you to real accents, 
            natural speed, colloquial language, and cultural context that structured lessons can&apos;t provide. 
            Use them daily alongside your platform practice.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 text-xs font-mono uppercase border-2 transition-all ${
              filter === "all" ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground"
            }`}
          >
            All ({resources.length})
          </button>
          {types.map(t => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-3 py-1.5 text-xs font-mono uppercase border-2 transition-all flex items-center gap-1.5 ${
                filter === t ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground"
              }`}
            >
              {typeIcons[t]} {typeLabels[t] || t}
            </button>
          ))}
        </div>

        {/* Resource grid */}
        <div className="space-y-3">
          {filtered.map((r, i) => (
            <motion.a
              key={r.url}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="block border-2 border-border hover:border-foreground p-4 transition-all group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 flex-1">
                  <div className="mt-0.5 text-muted-foreground group-hover:text-foreground transition-colors">
                    {r.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold group-hover:text-primary transition-colors">{r.title}</h3>
                      {r.titleDe && (
                        <span className="text-xs text-muted-foreground font-mono">({r.titleDe})</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{r.description}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs font-mono px-1.5 py-0.5 border border-primary/30 text-primary">
                        {r.level}
                      </span>
                      {r.free ? (
                        <span className="text-xs font-mono px-1.5 py-0.5 border border-green-500/30 text-green-500">
                          Free
                        </span>
                      ) : (
                        <span className="text-xs font-mono px-1.5 py-0.5 border border-amber-500/30 text-amber-500">
                          Paid
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-foreground transition-colors mt-1 flex-shrink-0" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Pro tips */}
        <div className="mt-10 border-2 border-border p-6">
          <h2 className="font-black text-lg mb-4">📋 Daily Immersion Plan</h2>
          <div className="space-y-3 text-sm">
            <div className="flex gap-3">
              <span className="font-bold text-primary w-16 flex-shrink-0">Morning</span>
              <span className="text-muted-foreground">Listen to DW Langsam gesprochene Nachrichten (5 min) while commuting</span>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-primary w-16 flex-shrink-0">Lunch</span>
              <span className="text-muted-foreground">Read one Nachrichtenleicht article or SPIEGEL article (10 min)</span>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-primary w-16 flex-shrink-0">Evening</span>
              <span className="text-muted-foreground">Watch one Easy German video or Tatort episode with German subtitles (20 min)</span>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-amber-500 w-16 flex-shrink-0">Weekly</span>
              <span className="text-muted-foreground">One Tandem or italki conversation session with a native speaker (30-60 min)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

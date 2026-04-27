"use client";

import { Volume2 } from "lucide-react";
import { speakGermanNeural } from "@/lib/tts";

type DialogueLine = { speaker: string; de: string; en: string };

export default function ExampleDialogueBlock({ 
  title, 
  lines, 
  context 
}: { 
  title: string; 
  lines: DialogueLine[]; 
  context: string;
}) {
  const playLine = (text: string) => {
    speakGermanNeural(text);
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto w-full">
      <div className="bg-primary text-primary-foreground px-4 py-2 inline-block font-mono text-sm font-bold uppercase tracking-wider">
        💬 Dialogue
      </div>
      <h2 className="text-2xl font-black uppercase tracking-tight">{title}</h2>
      <p className="text-muted-foreground font-mono text-sm">{context}</p>

      <div className="space-y-3 mt-6">
        {lines.map((line, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={i}
              className={`flex ${isEven ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[80%] border-2 p-4 space-y-1 ${
                  isEven
                    ? "border-foreground bg-secondary"
                    : "border-primary bg-primary/5"
                }`}
              >
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {line.speaker}
                </p>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-bold text-lg">{line.de}</p>
                    <p className="text-muted-foreground text-sm italic">{line.en}</p>
                  </div>
                  <button
                    onClick={() => playLine(line.de)}
                    className="p-1.5 text-muted-foreground hover:text-primary transition-colors flex-shrink-0 mt-0.5"
                  >
                    <Volume2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

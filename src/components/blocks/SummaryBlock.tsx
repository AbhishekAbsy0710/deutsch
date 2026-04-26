"use client";

import { Lightbulb } from "lucide-react";

export default function SummaryBlock({ points }: { points: string[] }) {
  return (
    <div className="max-w-2xl mx-auto w-full">
      <div className="border-2 border-foreground bg-foreground/5 p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="bg-foreground text-background p-2">
            <Lightbulb size={20} />
          </div>
          <h3 className="text-xl font-black uppercase tracking-tight">Key Takeaways</h3>
        </div>
        <ul className="space-y-3">
          {points.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              <p className="text-foreground/90 leading-relaxed">{point}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

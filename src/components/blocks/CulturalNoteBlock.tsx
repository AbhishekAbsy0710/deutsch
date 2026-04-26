"use client";

export default function CulturalNoteBlock({
  title,
  content,
  emoji,
}: {
  title: string;
  content: string;
  emoji: string;
}) {
  return (
    <div className="max-w-2xl mx-auto w-full">
      <div className="border-2 border-primary/30 bg-primary/5 p-6 space-y-4">
        <div className="flex items-start gap-4">
          <span className="text-4xl flex-shrink-0">{emoji}</span>
          <div className="space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-primary font-bold">
              Cultural Insight
            </div>
            <h3 className="text-xl font-black uppercase tracking-tight">{title}</h3>
            <p className="text-foreground/80 leading-relaxed">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

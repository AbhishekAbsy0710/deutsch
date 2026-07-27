export function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div className={`border-2 border-border p-6 space-y-4 animate-pulse ${className}`}>
      <div className="h-4 w-1/3 bg-muted-foreground/10 rounded" />
      <div className="h-6 w-2/3 bg-muted-foreground/10 rounded" />
      <div className="space-y-2">
        <div className="h-3 w-full bg-muted-foreground/10 rounded" />
        <div className="h-3 w-4/5 bg-muted-foreground/10 rounded" />
      </div>
    </div>
  );
}

export function SkeletonStat() {
  return (
    <div className="border-2 border-border p-4 flex items-center gap-3 animate-pulse">
      <div className="w-5 h-5 bg-muted-foreground/10 rounded" />
      <div className="space-y-1.5">
        <div className="h-6 w-12 bg-muted-foreground/10 rounded" />
        <div className="h-2 w-16 bg-muted-foreground/10 rounded" />
      </div>
    </div>
  );
}

export function SkeletonLessonRow() {
  return (
    <div className="flex items-center gap-4 p-4 border-b-2 border-border animate-pulse">
      <div className="w-8 h-8 bg-muted-foreground/10 rounded" />
      <div className="flex-1 space-y-2">
        <div className="h-4 w-1/2 bg-muted-foreground/10 rounded" />
        <div className="h-3 w-1/3 bg-muted-foreground/10 rounded" />
      </div>
      <div className="w-16 h-8 bg-muted-foreground/10 rounded" />
    </div>
  );
}

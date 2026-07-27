export default function LessonLoading() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 max-w-4xl mx-auto w-full">
      {/* Progress bar skeleton */}
      <div className="w-full mb-8 animate-pulse">
        <div className="h-2 w-full bg-muted-foreground/10 rounded" />
      </div>

      {/* Title skeleton */}
      <div className="w-full space-y-4 mb-12 animate-pulse">
        <div className="h-3 w-20 bg-muted-foreground/10 rounded" />
        <div className="h-8 w-2/3 bg-muted-foreground/10 rounded" />
      </div>

      {/* Content skeleton */}
      <div className="w-full space-y-6 animate-pulse">
        <div className="border-2 border-border p-8 space-y-4">
          <div className="h-5 w-3/4 bg-muted-foreground/10 rounded" />
          <div className="h-4 w-full bg-muted-foreground/10 rounded" />
          <div className="h-4 w-5/6 bg-muted-foreground/10 rounded" />
          <div className="h-4 w-2/3 bg-muted-foreground/10 rounded" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-14 border-2 border-border" />
          ))}
        </div>
      </div>
    </div>
  );
}

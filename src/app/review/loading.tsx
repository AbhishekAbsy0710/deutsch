export default function ReviewLoading() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 max-w-2xl mx-auto w-full">
      {/* Header skeleton */}
      <div className="w-full mb-8 animate-pulse space-y-3">
        <div className="h-3 w-20 bg-muted-foreground/10 rounded" />
        <div className="h-8 w-1/2 bg-muted-foreground/10 rounded" />
      </div>

      {/* Card skeleton */}
      <div className="w-full border-2 border-border p-10 space-y-6 animate-pulse">
        <div className="h-6 w-1/3 bg-muted-foreground/10 rounded mx-auto" />
        <div className="h-20 w-full bg-muted-foreground/10 rounded" />
        <div className="flex gap-3 justify-center">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-12 w-20 border-2 border-border" />
          ))}
        </div>
      </div>
    </div>
  );
}

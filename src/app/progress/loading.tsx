import { SkeletonCard, SkeletonStat } from "@/components/SkeletonCard";

export default function ProgressLoading() {
  return (
    <div className="flex-1 px-6 md:px-16 py-12 max-w-[1200px] mx-auto w-full">
      {/* Header skeleton */}
      <header className="mb-12 border-b-4 border-border pb-8 animate-pulse">
        <div className="h-3 w-20 bg-muted-foreground/10 rounded mb-4" />
        <div className="h-12 w-1/2 bg-muted-foreground/10 rounded" />
      </header>

      {/* Stats grid skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[1, 2, 3, 4].map(i => (
          <SkeletonStat key={i} />
        ))}
      </div>

      {/* Chart skeleton */}
      <div className="border-2 border-border p-8 mb-12 animate-pulse">
        <div className="h-4 w-32 bg-muted-foreground/10 rounded mb-6" />
        <div className="h-48 w-full bg-muted-foreground/10 rounded" />
      </div>

      {/* Activity grid skeleton */}
      <div className="grid md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map(i => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}

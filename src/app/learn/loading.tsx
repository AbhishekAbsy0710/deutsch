import { SkeletonStat, SkeletonCard } from "@/components/SkeletonCard";

export default function LearnLoading() {
  return (
    <div className="flex-1 px-6 md:px-16 py-12 max-w-[1400px] mx-auto w-full">
      {/* Header skeleton */}
      <header className="mb-12 border-b-4 border-border pb-8">
        <div className="h-3 w-24 bg-muted-foreground/10 rounded mb-4 animate-pulse" />
        <div className="space-y-3">
          <div className="h-12 w-2/3 bg-muted-foreground/10 rounded animate-pulse" />
          <div className="h-12 w-1/3 bg-muted-foreground/10 rounded animate-pulse" />
        </div>
      </header>

      {/* Stats bar skeleton */}
      <div className="mb-16 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <SkeletonStat />
          <SkeletonStat />
          <SkeletonStat />
        </div>

        {/* Continue learning skeleton */}
        <div className="border-2 border-border p-5 animate-pulse">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-muted-foreground/10 rounded" />
            <div className="space-y-2">
              <div className="h-5 w-40 bg-muted-foreground/10 rounded" />
              <div className="h-3 w-60 bg-muted-foreground/10 rounded" />
            </div>
          </div>
        </div>

        {/* Daily challenge + word of day skeleton */}
        <div className="grid md:grid-cols-2 gap-6">
          <SkeletonCard className="h-48" />
          <SkeletonCard className="h-48" />
        </div>
      </div>

      {/* Module skeletons */}
      <div className="space-y-32">
        {[1, 2, 3].map(i => (
          <div key={i} className="grid lg:grid-cols-12 gap-12 animate-pulse">
            <div className="lg:col-span-4 space-y-4">
              <div className="h-8 w-2/3 bg-muted-foreground/10 rounded" />
              <div className="h-4 w-full bg-muted-foreground/10 rounded" />
              <div className="h-2 w-full bg-muted-foreground/10 rounded" />
            </div>
            <div className="lg:col-span-8 space-y-4">
              {[1, 2, 3, 4].map(j => (
                <div key={j} className="h-16 border-2 border-border p-4 rounded-none" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

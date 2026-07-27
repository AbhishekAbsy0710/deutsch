import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center px-6 py-12">
      <div className="max-w-lg w-full text-center space-y-8">
        <div>
          <p className="text-[10rem] font-black leading-none tracking-tighter text-muted-foreground/20 select-none">
            404
          </p>
          <h1 className="text-3xl font-black uppercase tracking-tight -mt-8">
            Page Not Found
          </h1>
          <p className="text-muted-foreground font-mono text-sm mt-4">
            This page doesn&apos;t exist. Maybe it&apos;s locked behind a future level?
          </p>
        </div>
        <Link
          href="/learn"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-wide hover:opacity-90 transition-opacity"
        >
          <ArrowLeft size={18} />
          Back to Learning
        </Link>
      </div>
    </div>
  );
}

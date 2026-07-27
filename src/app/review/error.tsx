"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, RotateCcw, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ReviewError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Review Error]", error);
  }, [error]);

  return (
    <div className="flex-1 flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center space-y-8"
      >
        <div>
          <AlertTriangle size={48} className="mx-auto text-orange-500 mb-4" />
          <h1 className="text-3xl font-black uppercase tracking-tight">
            Review Error
          </h1>
          <p className="text-muted-foreground font-mono text-sm mt-3">
            {error.message || "The review session couldn't load."}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-wide hover:opacity-90 transition-opacity"
          >
            <RotateCcw size={16} />
            Retry
          </button>
          <Link
            href="/learn"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 border-2 border-foreground font-bold uppercase tracking-wide hover:bg-secondary transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Dashboard
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
        <div className="max-w-lg w-full text-center space-y-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <AlertTriangle size={64} className="mx-auto text-destructive mb-4" />
            <h1 className="text-4xl font-black uppercase tracking-tight">
              Something broke
            </h1>
            <p className="text-muted-foreground font-mono text-sm mt-4">
              {error.message || "An unexpected error occurred"}
            </p>
            {error.digest && (
              <p className="text-xs text-muted-foreground font-mono mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </motion.div>
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-wide hover:opacity-90 transition-opacity"
          >
            <RotateCcw size={18} />
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}

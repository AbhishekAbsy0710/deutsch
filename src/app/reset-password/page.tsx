"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Lock, ArrowLeft, CheckCircle2, AlertTriangle } from "lucide-react";
import { updatePassword } from "@/lib/supabase-auth";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      await updatePassword(password);
      setSuccess(true);
      setTimeout(() => router.push("/learn"), 2000);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to update password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background Typography */}
      <div className="absolute top-[-15%] right-[-10%] text-[20vw] font-extrabold text-foreground/[0.03] select-none pointer-events-none leading-none tracking-tighter">
        NEUES
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg z-10"
      >
        <div className="mb-12">
          <div className="text-primary font-mono text-sm tracking-widest uppercase mb-4 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-primary block"></span>
            New Password
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85]">
            Set New<br />
            <span className="text-muted-foreground">Password.</span>
          </h1>
        </div>

        {success ? (
          <div className="space-y-6">
            <div className="border-2 border-green-500 bg-green-500/5 p-6 flex items-start gap-3 text-green-700">
              <CheckCircle2 size={24} className="shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-lg">Password updated!</p>
                <p className="text-sm mt-1 opacity-80">
                  Redirecting you to the app...
                </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <p className="text-muted-foreground mb-8 text-lg">
              Enter your new password below.
            </p>

            {error && (
              <div className="border-2 border-red-500 bg-red-500/5 p-3 mb-6 flex items-center gap-2 text-red-600 text-sm font-mono">
                <AlertTriangle size={16} /> {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-2 border-foreground flex items-center">
                <div className="p-4 border-r-2 border-foreground bg-secondary">
                  <Lock size={20} />
                </div>
                <input
                  type="password"
                  placeholder="New password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-1 bg-transparent px-6 py-4 text-lg font-bold outline-none placeholder:text-muted-foreground"
                  required
                  minLength={6}
                />
              </div>

              <div className="border-2 border-foreground flex items-center">
                <div className="p-4 border-r-2 border-foreground bg-secondary">
                  <Lock size={20} />
                </div>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="flex-1 bg-transparent px-6 py-4 text-lg font-bold outline-none placeholder:text-muted-foreground"
                  required
                  minLength={6}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground p-5 text-xl font-black uppercase tracking-wider flex items-center justify-center gap-4 hover:bg-foreground hover:text-background transition-colors border-2 border-primary hover:border-foreground disabled:opacity-50"
              >
                {loading ? "Updating..." : "Set New Password"}
              </button>
            </form>

            <div className="mt-8">
              <Link
                href="/login"
                className="flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft size={16} /> Back to Login
              </Link>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}

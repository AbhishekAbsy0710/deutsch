"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, AlertTriangle } from "lucide-react";
import { signIn, signInWithGoogle } from "@/lib/supabase-auth";
import { useProgressStore } from "@/store/useProgressStore";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = await signIn(email, password);
      // Sync progress from Supabase on login
      if (data.user) {
        await useProgressStore.getState().syncWithSupabase(data.user.id);
      }
      router.push("/learn");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Login failed. Check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    try {
      await signInWithGoogle();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Google sign-in failed.");
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background Typography */}
      <div className="absolute top-[-15%] right-[-10%] text-[20vw] font-extrabold text-foreground/[0.03] select-none pointer-events-none leading-none tracking-tighter">
        ANMELDEN
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
            Authentication
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85]">
            Log In.
          </h1>
        </div>

        {error && (
          <div className="border-2 border-red-500 bg-red-500/5 p-3 mb-6 flex items-center gap-2 text-red-600 text-sm font-mono">
            <AlertTriangle size={16} /> {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-2 border-foreground flex items-center">
            <div className="p-4 border-r-2 border-foreground bg-secondary">
              <Mail size={20} />
            </div>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent px-6 py-4 text-lg font-bold outline-none placeholder:text-muted-foreground"
              required
            />
          </div>

          <div className="border-2 border-foreground flex items-center">
            <div className="p-4 border-r-2 border-foreground bg-secondary">
              <Lock size={20} />
            </div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 bg-transparent px-6 py-4 text-lg font-bold outline-none placeholder:text-muted-foreground"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground p-5 text-xl font-black uppercase tracking-wider flex items-center justify-center gap-4 hover:bg-foreground hover:text-background transition-colors border-2 border-primary hover:border-foreground disabled:opacity-50"
          >
            {loading ? "Signing in..." : <>Enter <ArrowRight size={24} /></>}
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t-2 border-border" /></div>
          <div className="relative flex justify-center">
            <span className="bg-background px-4 font-mono text-xs text-muted-foreground uppercase tracking-widest">oder</span>
          </div>
        </div>

        <button
          onClick={handleGoogle}
          className="w-full border-2 border-foreground py-4 font-mono text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors flex items-center justify-center gap-3"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
          Continue with Google
        </button>

        <div className="mt-8 flex justify-between font-mono text-sm text-muted-foreground">
          <Link href="/register" className="hover:text-foreground transition-colors underline underline-offset-4">
            Create Account
          </Link>
          <Link href="/forgot-password" className="hover:text-foreground transition-colors underline underline-offset-4">
            Forgot Password?
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

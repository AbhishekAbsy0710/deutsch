"use client";

import { useEffect, useRef } from "react";
import { createClient } from "@/lib/supabase";
import { useProgressStore } from "@/store/useProgressStore";

/**
 * AuthProvider — mounts once at the root layout level.
 * Listens to Supabase auth changes and syncs cloud progress
 * into the Zustand store whenever a user signs in.
 */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const syncWithSupabase = useProgressStore((s) => s.syncWithSupabase);
  const synced = useRef<string | null>(null); // prevent double-sync per session

  useEffect(() => {
    const supabase = createClient();

    // Sync immediately if already logged in (e.g. page refresh)
    supabase.auth.getSession().then(({ data }) => {
      const userId = data.session?.user?.id;
      if (userId && synced.current !== userId) {
        synced.current = userId;
        console.log("[AuthProvider] Restoring progress for", userId);
        syncWithSupabase(userId);
      }
    });

    // Sync on every future sign-in
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const userId = session?.user?.id ?? null;
      if (userId && synced.current !== userId) {
        synced.current = userId;
        console.log("[AuthProvider] Auth change — syncing progress for", userId);
        syncWithSupabase(userId);
      }
      if (!userId) {
        synced.current = null; // reset on sign-out
      }
    });

    return () => subscription.unsubscribe();
  }, [syncWithSupabase]);

  return <>{children}</>;
}

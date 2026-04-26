"use client";

import { useEffect, useRef } from "react";
import { useProgressStore } from "@/store/useProgressStore";
import { createClient } from "@/lib/supabase";

/**
 * Hook that syncs progress with Supabase when user is authenticated.
 * Place this in the root layout or a shared component.
 */
export function useProgressSync() {
  const hasSynced = useRef(false);

  useEffect(() => {
    if (hasSynced.current) return;

    const doSync = async () => {
      // Skip sync if user just reset progress
      if (typeof window !== 'undefined' && sessionStorage.getItem('deutsch-just-reset')) {
        console.log("[ProgressSync] Just reset — skipping sync");
        sessionStorage.removeItem('deutsch-just-reset');
        return;
      }
      
      // Skip sync if no level set (fresh state)
      const currentLevel = useProgressStore.getState().level;
      if (!currentLevel) {
        console.log("[ProgressSync] No level set — skipping sync (fresh/reset state)");
        return;
      }

      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user && !hasSynced.current) {
        hasSynced.current = true;
        console.log("[ProgressSync] Syncing for user:", user.email);
        await useProgressStore.getState().syncWithSupabase(user.id);
      }
    };

    // Wait for Zustand to hydrate first, then sync
    if (useProgressStore.persist.hasHydrated()) {
      doSync();
    } else {
      useProgressStore.persist.onFinishHydration(() => {
        doSync();
      });
    }
  }, []);
}

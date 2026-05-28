"use client";

import { useEffect, useState } from "react";

import { INTRO_REMOVE_MS, INTRO_STORAGE_KEY } from "@/lib/intro";

/** Wait for full-screen intro to finish before playing header logo animation */
export function useHeaderLogoReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(INTRO_STORAGE_KEY)) {
      const immediate = window.setTimeout(() => setReady(true), 0);
      return () => window.clearTimeout(immediate);
    }

    const timer = window.setTimeout(() => setReady(true), INTRO_REMOVE_MS);
    return () => window.clearTimeout(timer);
  }, []);

  return ready;
}

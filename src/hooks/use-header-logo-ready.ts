"use client";

import { useEffect, useState } from "react";

import { INTRO_ACTIVE_CLASS, INTRO_REMOVE_MS, INTRO_STORAGE_KEY } from "@/lib/intro";

/** Wait for full-screen intro to finish before playing header logo animation */
export function useHeaderLogoReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const start = () => {
      const timer = window.setTimeout(() => setReady(true), 80);
      return () => window.clearTimeout(timer);
    };

    if (sessionStorage.getItem(INTRO_STORAGE_KEY)) {
      return start();
    }

    if (!document.documentElement.classList.contains(INTRO_ACTIVE_CLASS)) {
      return start();
    }

    const timer = window.setTimeout(() => setReady(true), INTRO_REMOVE_MS);
    return () => window.clearTimeout(timer);
  }, []);

  return ready;
}

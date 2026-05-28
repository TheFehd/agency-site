"use client";

import { useEffect, useState } from "react";

import { HustlgramLogoAnimated } from "@/components/brand/hustlgram-logo-animated";
import { INTRO_EXIT_MS, INTRO_REMOVE_MS, INTRO_STORAGE_KEY } from "@/lib/intro";
import { cn } from "@/lib/utils";

export function IntroSplash() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem(INTRO_STORAGE_KEY);
    if (seen) return;

    const showTimer = window.setTimeout(() => setVisible(true), 0);
    document.body.style.overflow = "hidden";

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const exitDelay = prefersReduced ? 400 : INTRO_EXIT_MS;
    const removeDelay = prefersReduced ? 700 : INTRO_REMOVE_MS;

    const exitTimer = window.setTimeout(() => {
      setExiting(true);
      sessionStorage.setItem(INTRO_STORAGE_KEY, "1");
    }, exitDelay);

    const removeTimer = window.setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, removeDelay);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-600 ease-out",
        exiting && "pointer-events-none opacity-0",
      )}
      aria-hidden={exiting}
    >
      <HustlgramLogoAnimated size="splash" />
    </div>
  );
}

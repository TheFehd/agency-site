"use client";

import { useEffect, useState } from "react";

import { HustlgramLogoAnimated } from "@/components/brand/hustlgram-logo-animated";
import {
  INTRO_ACTIVE_CLASS,
  INTRO_EXIT_MS,
  INTRO_REMOVE_MS,
  INTRO_STORAGE_KEY,
} from "@/lib/intro";
import { cn } from "@/lib/utils";

function clearIntroLock() {
  document.documentElement.classList.remove(INTRO_ACTIVE_CLASS);
  document.body.style.overflow = "";
}

export function IntroSplash() {
  const [active, setActive] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const shouldPlay =
      document.documentElement.classList.contains(INTRO_ACTIVE_CLASS) ||
      !sessionStorage.getItem(INTRO_STORAGE_KEY);

    if (!shouldPlay) {
      clearIntroLock();
      return;
    }

    if (!document.documentElement.classList.contains(INTRO_ACTIVE_CLASS)) {
      document.documentElement.classList.add(INTRO_ACTIVE_CLASS);
    }

    setActive(true);
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
      clearIntroLock();
      setActive(false);
    }, removeDelay);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
      clearIntroLock();
    };
  }, []);

  if (!active) return null;

  return (
    <div
      id="intro-splash"
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-700 ease-out",
        exiting && "pointer-events-none opacity-0",
      )}
      aria-hidden={exiting}
    >
      <HustlgramLogoAnimated size="splash" />
    </div>
  );
}

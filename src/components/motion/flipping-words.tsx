"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

type FlippingWordsProps = {
  words: readonly string[];
  interval?: number;
  className?: string;
};

export function FlippingWords({
  words,
  interval = 2800,
  className,
}: FlippingWordsProps) {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  const longestWord = useMemo(
    () => words.reduce((a, b) => (a.length >= b.length ? a : b), words[0]),
    [words],
  );

  useEffect(() => {
    if (prefersReducedMotion || words.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [interval, prefersReducedMotion, words.length]);

  if (prefersReducedMotion) {
    return <span className={className}>{words[0]}</span>;
  }

  return (
    <span
      className={cn(
        "relative inline-grid align-bottom [perspective:800px]",
        className,
      )}
      aria-live="polite"
    >
      <span className="invisible col-start-1 row-start-1 whitespace-nowrap" aria-hidden>
        {longestWord}
      </span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          className="col-start-1 row-start-1 inline-block origin-center whitespace-nowrap"
          initial={{ y: "75%", opacity: 0, rotateX: -80, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, rotateX: 0, filter: "blur(0px)" }}
          exit={{ y: "-75%", opacity: 0, rotateX: 80, filter: "blur(4px)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

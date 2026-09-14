"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

type FlippingWordsProps = {
  words: readonly string[];
  interval?: number;
  className?: string;
};

/**
 * Width reserved per character, in em, for the rotating word's slot.
 *
 * Measured against DM Sans at the hero's own font size: the four hero words run
 * 0.497–0.551em per character. 0.58 clears the widest with headroom.
 *
 * This is a floor, not a cap — `min-width` lets the grid grow if a longer word is
 * ever added, so an underestimate would cause reflow but never clipping. Erring
 * high is the safe direction.
 *
 * Deliberately not `ch`: that unit is the advance of "0", which is 0.69em in this
 * face — it over-reserved by ~30% and left a visible gap after "for".
 */
const EM_PER_CHARACTER = 0.58;

/**
 * Reserves space for the longest word without rendering it.
 *
 * An earlier version sized the slot with a visually-hidden copy of the longest
 * word, which put that word into the server-rendered HTML a second time — the
 * <h1> serialised as "businessesbusinesses", which is what search engines read.
 * A pure CSS width keeps the slot stable (so the heading never reflows as words
 * swap) while leaving exactly one instance of the word in the markup, and is
 * identical on the server and the client, so it costs no layout shift.
 */
const slotWidth = (words: readonly string[]) => {
  const longest = words.reduce(
    (length, word) => Math.max(length, word.length),
    0,
  );
  return `${(longest * EM_PER_CHARACTER).toFixed(2)}em`;
};

export function FlippingWords({
  words,
  interval = 2800,
  className,
}: FlippingWordsProps) {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  const minWidth = useMemo(() => slotWidth(words), [words]);

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
      style={{ minWidth }}
    >
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

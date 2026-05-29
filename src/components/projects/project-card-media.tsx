"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

type ProjectCardMediaProps = {
  project: Project;
  className?: string;
};

export function ProjectCardMedia({ project, className }: ProjectCardMediaProps) {
  const prefersReducedMotion = useReducedMotion();
  const slides = project.images ?? [project.image];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1 || prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [slides.length, prefersReducedMotion]);

  return (
    <div className={cn("relative aspect-[16/10] overflow-hidden rounded-xl bg-muted", className)}>
      {project.recent ? (
        <span className="absolute top-3 left-3 z-10 rounded-full bg-[#86efac] px-2.5 py-0.5 text-xs font-bold tracking-wide text-[#15803d] uppercase dark:bg-[#4ade80]/90 dark:text-[#14532d]">
          Recent
        </span>
      ) : null}

      {slides.length > 1 && !prefersReducedMotion ? (
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={slides[index]}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={slides[index]}
              alt=""
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>
      ) : (
        <Image
          src={slides[0]}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      )}

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60"
        aria-hidden
      />
    </div>
  );
}

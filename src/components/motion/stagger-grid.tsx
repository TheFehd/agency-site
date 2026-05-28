"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import { reducedMotionViewport, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

type StaggerGridProps = {
  children: ReactNode;
  className?: string;
};

export function StaggerGrid({ children, className }: StaggerGridProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={reducedMotionViewport}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

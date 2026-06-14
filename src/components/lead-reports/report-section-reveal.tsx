"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ReportSectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function ReportSectionReveal({
  children,
  className,
  delay = 0,
}: ReportSectionRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px", amount: 0.15 }}
      transition={{
        type: "spring",
        stiffness: 78,
        damping: 21,
        mass: 0.85,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

type ReportStaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
};

export function ReportStagger({
  children,
  className,
  stagger = 0.07,
}: ReportStaggerProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px", amount: 0.12 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: 0.04 },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function ReportStaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, y: 22, scale: 0.98, filter: "blur(6px)" },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: {
            type: "spring",
            stiffness: 82,
            damping: 20,
            mass: 0.8,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

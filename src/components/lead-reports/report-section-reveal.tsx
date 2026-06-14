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
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px 0px", amount: 0.08 }}
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
};

export function ReportStagger({ children, className }: ReportStaggerProps) {
  return <div className={cn(className)}>{children}</div>;
}

type ReportStaggerItemProps = {
  children: ReactNode;
  className?: string;
  index?: number;
};

export function ReportStaggerItem({
  children,
  className,
  index = 0,
}: ReportStaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 22, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-24px 0px", amount: 0.06 }}
      transition={{
        type: "spring",
        stiffness: 82,
        damping: 20,
        mass: 0.8,
        delay: index * 0.06,
      }}
    >
      {children}
    </motion.div>
  );
}

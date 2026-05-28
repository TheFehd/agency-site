"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type BlurTextRevealProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p" | "span";
  delay?: number;
  /** word = natural spacing; block = one fade for the whole line; char = per-letter */
  by?: "char" | "word" | "block";
};

const containerVariants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.04, delayChildren: delay },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, filter: "blur(8px)", y: 6 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const blockVariants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 8 },
  visible: (delay: number) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function BlurTextReveal({
  text,
  className,
  as: Tag = "span",
  delay = 0,
  by = "word",
}: BlurTextRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion.create(Tag);

  if (prefersReducedMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  if (by === "block") {
    return (
      <MotionTag
        className={cn(className)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        custom={delay}
        variants={blockVariants}
      >
        {text}
      </MotionTag>
    );
  }

  if (by === "char") {
    const chars = [...text];
    return (
      <MotionTag
        className={cn(className)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        custom={delay}
        variants={containerVariants}
      >
        {chars.map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            className="inline"
            variants={itemVariants}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </MotionTag>
    );
  }

  const words = text.split(/\s+/).filter(Boolean);

  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      custom={delay}
      variants={containerVariants}
    >
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          {index > 0 ? " " : null}
          <motion.span className="inline" variants={itemVariants}>
            {word}
          </motion.span>
        </Fragment>
      ))}
    </MotionTag>
  );
}

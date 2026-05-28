"use client";

import { BlurTextReveal } from "@/components/motion/blur-text-reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-3",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <BlurTextReveal
          as="p"
          text={eyebrow}
          by="block"
          delay={0}
          className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
        />
      ) : null}
      <BlurTextReveal
        as="h2"
        text={title}
        by="word"
        delay={0.06}
        className="font-heading text-3xl font-medium leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl"
      />
      {description ? (
        <BlurTextReveal
          as="p"
          text={description}
          by="word"
          delay={0.12}
          className="text-base leading-relaxed text-muted-foreground sm:text-lg"
        />
      ) : null}
    </div>
  );
}

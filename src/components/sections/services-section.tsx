"use client";

import { motion, useReducedMotion } from "motion/react";

import { BlurTextReveal } from "@/components/motion/blur-text-reveal";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { SectionReveal } from "@/components/motion/section-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/content/services";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="scroll-mt-20 border-b border-border/60 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeading
            eyebrow="Services"
            title="Everything you need to launch with confidence"
            description="Strategy, design, development, and launch—handled by one team that cares how the details feel."
          />
        </SectionReveal>

        <StaggerGrid className="mt-14 grid gap-4 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            const Card = prefersReducedMotion ? "div" : motion.div;

            return (
              <Card
                key={service.id}
                variants={prefersReducedMotion ? undefined : fadeUp}
                className={cn(
                  "group rounded-2xl border border-border bg-background p-6 transition-colors hover:border-foreground/25 sm:p-8",
                )}
              >
                <div className="mb-4 inline-flex rounded-lg border border-border/80 bg-muted p-2.5 text-foreground">
                  <Icon className="size-5" aria-hidden />
                </div>
                <h3 className="font-heading text-xl font-medium">
                  <BlurTextReveal as="span" text={service.title} by="word" />
                </h3>
                <BlurTextReveal
                  as="p"
                  text={service.description}
                  by="word"
                  delay={0.06}
                  className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base"
                />
              </Card>
            );
          })}
        </StaggerGrid>
      </div>
    </section>
  );
}

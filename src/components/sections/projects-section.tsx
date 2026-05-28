"use client";

import { ProjectsCarousel } from "@/components/projects/projects-carousel";
import { SectionReveal } from "@/components/motion/section-reveal";
import Link from "next/link";

import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-b border-border/60 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeading
            eyebrow="Work"
            title="Selected projects"
            description="A curated set of refined digital experiences—each built to feel bespoke and perform in the real world."
          />
        </SectionReveal>

        <ProjectsCarousel />

        <div className="mt-12 flex justify-center">
          <Link
            href="#book"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 rounded-full px-6",
            )}
          >
            Start your project
          </Link>
        </div>
      </div>
    </section>
  );
}

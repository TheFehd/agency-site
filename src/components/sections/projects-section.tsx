"use client";

import { ProjectsCarousel } from "@/components/projects/projects-carousel";
import { SectionReveal } from "@/components/motion/section-reveal";
import { StartProjectButton } from "@/components/ui/start-project-button";
import { SectionHeading } from "@/components/ui/section-heading";

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
          <StartProjectButton />
        </div>
      </div>
    </section>
  );
}

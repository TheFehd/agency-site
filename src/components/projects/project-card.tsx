"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { BlurTextReveal } from "@/components/motion/blur-text-reveal";
import { ProjectCardMedia } from "@/components/projects/project-card-media";
import type { Project } from "@/content/projects";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const Card = prefersReducedMotion ? "article" : motion.article;

  const inner = (
    <>
      <ProjectCardMedia project={project} />
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs text-muted-foreground">{project.year}</p>
          <h3 className="mt-1 font-heading text-xl font-medium sm:text-2xl">
            <BlurTextReveal as="span" text={project.title} by="word" />
          </h3>
          <BlurTextReveal
            as="p"
            text={project.description}
            by="word"
            delay={0.05}
            className="mt-2 text-sm leading-relaxed text-muted-foreground"
          />
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border/80 px-2.5 py-0.5 text-xs text-muted-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        {project.href ? (
          <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
        ) : null}
      </div>
    </>
  );

  const cardClass = cn(
    "group block rounded-2xl border border-border bg-background p-4 transition-colors hover:border-foreground/30 sm:p-5",
    className,
  );

  if (project.href) {
    return (
      <Card
        variants={prefersReducedMotion ? undefined : fadeUp}
        className={cardClass}
      >
        <Link href={project.href} className="block">
          {inner}
        </Link>
      </Card>
    );
  }

  return (
    <Card variants={prefersReducedMotion ? undefined : fadeUp} className={cardClass}>
      {inner}
    </Card>
  );
}

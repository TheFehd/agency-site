"use client";

import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/content/projects";

export function ProjectsCarousel() {
  return (
    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} className="h-full" />
      ))}
    </div>
  );
}

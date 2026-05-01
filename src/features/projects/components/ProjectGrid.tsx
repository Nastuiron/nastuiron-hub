// src/features/projects/components/ProjectGrid.tsx

import { projects } from '../data/projects.data';
import { ProjectCard } from './ProjectCard';

export function ProjectGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </section>
  );
}

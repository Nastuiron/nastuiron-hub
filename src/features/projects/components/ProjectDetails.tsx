'use client';

import { ProjectArchitecture } from './ProjectArchitecture';
import { ProjectStack } from './ProjectStack';
import type { Project } from '../types/project.types';
import { useProjectMode } from './ProjectModeContext';

type ProjectDetailsProps = {
  project: Project;
};

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const { mode } = useProjectMode();
  return (
    <article className="space-y-12">
      <section className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
          Projet
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
          {project.name}
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          {project.description}
        </p>

        <div className="mt-6">
          <ProjectStack stack={project.stack} />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
            >
              Ouvrir le projet
            </a>
          )}

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-zinc-300 transition hover:bg-white/5"
            >
              Voir le code
            </a>
          )}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-white">
          Fonctionnalités
        </h2>

        <ul className="grid gap-3 md:grid-cols-2">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-zinc-300"
            >
              {feature}
            </li>
          ))}
        </ul>
      </section>

      {mode === 'dev' && (
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Architecture technique
          </h2>

          <ProjectArchitecture architecture={project.architecture} />
        </section>
      )}
    </article>
  );
}

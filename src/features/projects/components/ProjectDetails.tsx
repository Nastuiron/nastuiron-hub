'use client';

import { ProjectArchitecture } from './ProjectArchitecture';
import { ProjectStack } from './ProjectStack';
import type { Project } from '../types/project.types';
import { useProjectMode } from './ProjectModeContext';

type ProjectDetailsProps = {
  project: Project;
};

function UserView({ project }: { project: Project }) {
  return (
    <>
      <section className="max-w-3xl">
        <h1 className="text-4xl font-bold text-white">{project.name}</h1>

        <p className="mt-6 text-lg text-zinc-400">{project.description}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">
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
    </>
  );
}

function DevView({ project }: { project: Project }) {
  return (
    <>
      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Stack technique
        </h2>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">Architecture</h2>

        <div className="space-y-2 text-zinc-400">
          <div>
            <strong>Frontend:</strong>{' '}
            {project.architecture.frontend.join(', ')}
          </div>

          {project.architecture.backend && (
            <div>
              <strong>Backend:</strong>{' '}
              {project.architecture.backend.join(', ')}
            </div>
          )}

          {project.architecture.infra && (
            <div>
              <strong>Infra:</strong> {project.architecture.infra.join(', ')}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const { mode } = useProjectMode();

  return (
    <article className="space-y-12">
      {mode === 'user' ? (
        <UserView project={project} />
      ) : (
        <DevView project={project} />
      )}
    </article>
  );
}

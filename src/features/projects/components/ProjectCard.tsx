'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import type { Project } from '../types/project.types';
import { useProjectMode } from './ProjectModeContext';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { mode } = useProjectMode();
  return (
    <Card className="transition hover:-translate-y-1 hover:border-blue-500/40">
      <div className="flex h-full flex-col gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{project.name}</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            {project.shortDescription}
          </p>
        </div>

        {mode === 'dev' && (
          <div className="mt-4 space-y-2 text-xs text-zinc-500">
            <div>
              <span className="font-medium text-zinc-400">Frontend:</span>{' '}
              {project.architecture.frontend.join(', ')}
            </div>

            {project.architecture.backend && (
              <div>
                <span className="font-medium text-zinc-400">Backend:</span>{' '}
                {project.architecture.backend.join(', ')}
              </div>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-auto flex gap-3 pt-4">
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
          >
            Voir le projet
          </Link>

          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/5"
            >
              Ouvrir
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}

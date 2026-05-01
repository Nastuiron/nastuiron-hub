import { Card } from '@/components/ui/Card';
import type { Project } from '../types/project.types';

type ProjectArchitectureProps = {
  architecture: Project['architecture'];
};

export function ProjectArchitecture({
  architecture,
}: ProjectArchitectureProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <ArchitectureBlock title="Frontend" items={architecture.frontend} />
      {architecture.backend && (
        <ArchitectureBlock title="Backend" items={architecture.backend} />
      )}
      {architecture.infra && (
        <ArchitectureBlock title="Infrastructure" items={architecture.infra} />
      )}
    </div>
  );
}

type ArchitectureBlockProps = {
  title: string;
  items: string[];
};

function ArchitectureBlock({ title, items }: ArchitectureBlockProps) {
  return (
    <Card>
      <h3 className="text-lg font-semibold text-white">{title}</h3>

      <ul className="mt-4 space-y-2 text-sm text-zinc-400">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </Card>
  );
}

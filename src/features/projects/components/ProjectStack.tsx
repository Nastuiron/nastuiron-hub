import { Badge } from '@/components/ui/Badge';
import type { Project } from '../types/project.types';

type ProjectStackProps = {
  stack: Project['stack'];
};

export function ProjectStack({ stack }: ProjectStackProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <Badge key={tech}>{tech}</Badge>
      ))}
    </div>
  );
}

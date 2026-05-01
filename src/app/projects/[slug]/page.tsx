import { notFound } from 'next/navigation';
import { Container } from '@/components/layout/Container';
import { ProjectDetails } from '@/features/projects/components/ProjectDetails';
import {
  getProjectBySlug,
  projects,
} from '@/features/projects/data/projects.data';

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 py-16">
      <Container>
        <ProjectDetails project={project} />
      </Container>
    </main>
  );
}

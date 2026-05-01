import { Container } from '@/components/layout/Container';
import { ProjectGrid } from '@/features/projects/components/ProjectGrid';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 py-16">
      <Container>
        <section className="mb-12 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Projets
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Tous mes projets
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Une sélection de projets web, outils et expérimentations techniques.
          </p>
        </section>

        <ProjectGrid />
      </Container>
    </main>
  );
}

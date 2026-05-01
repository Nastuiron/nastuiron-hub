// src/app/page.tsx

import { Container } from '@/components/layout/Container';
import { ProjectGrid } from '@/features/projects/components/ProjectGrid';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 py-16">
      <Container>
        <section className="mb-12 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Nastuiron Hub
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Mes projets web, outils et expérimentations.
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Un hub central pour présenter mes applications, mes choix techniques
            et l’architecture de mes projets.
          </p>
        </section>

        <ProjectGrid />
      </Container>
    </main>
  );
}

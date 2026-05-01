import { ProjectModeToggle } from '@/features/projects/components/ProjectModeToggle';

export function Header() {
  return (
    <header className="border-b border-white/10 bg-zinc-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <h1 className="text-white font-bold">Nastuiron</h1>

        <ProjectModeToggle />
      </div>
    </header>
  );
}

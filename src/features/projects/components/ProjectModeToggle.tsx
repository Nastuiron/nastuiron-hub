'use client';

import { useProjectMode } from './ProjectModeContext';

export function ProjectModeToggle() {
  const { mode, toggleMode } = useProjectMode();

  return (
    <button
      onClick={toggleMode}
      className="rounded-xl border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:bg-white/5"
    >
      Mode : {mode === 'user' ? 'Utilisateur' : 'Développeur'}
    </button>
  );
}

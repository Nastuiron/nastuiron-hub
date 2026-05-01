'use client';

import { createContext, useContext, useState } from 'react';

type Mode = 'user' | 'dev';

type ProjectModeContextType = {
  mode: Mode;
  toggleMode: () => void;
};

const ProjectModeContext = createContext<ProjectModeContextType | null>(null);

export function ProjectModeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<Mode>('user');

  function toggleMode() {
    setMode((prev) => (prev === 'user' ? 'dev' : 'user'));
  }

  return (
    <ProjectModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ProjectModeContext.Provider>
  );
}

export function useProjectMode() {
  const context = useContext(ProjectModeContext);

  if (!context) {
    throw new Error('useProjectMode must be used within ProjectModeProvider');
  }

  return context;
}

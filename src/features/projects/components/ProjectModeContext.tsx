'use client';

import { createContext, useContext, useSyncExternalStore } from 'react';

type Mode = 'user' | 'dev';

type ProjectModeContextType = {
  mode: Mode;
  toggleMode: () => void;
};

const STORAGE_KEY = 'project-mode';

const ProjectModeContext = createContext<ProjectModeContextType | null>(null);

function isMode(value: string | null): value is Mode {
  return value === 'user' || value === 'dev';
}

function getSnapshot(): Mode {
  const savedMode = window.localStorage.getItem(STORAGE_KEY);

  if (isMode(savedMode)) {
    return savedMode;
  }

  return 'user';
}

function getServerSnapshot(): Mode {
  return 'user';
}

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener('project-mode-change', callback);

  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('project-mode-change', callback);
  };
}

function setProjectMode(mode: Mode) {
  window.localStorage.setItem(STORAGE_KEY, mode);
  window.dispatchEvent(new Event('project-mode-change'));
}

export function ProjectModeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const mode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggleMode() {
    const nextMode = mode === 'user' ? 'dev' : 'user';
    setProjectMode(nextMode);
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

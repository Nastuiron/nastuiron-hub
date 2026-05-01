import { Project } from '../types/project.types';

export const projects: Project[] = [
  {
    slug: 'albums',
    name: 'Photo Albums',
    shortDescription: "Plateforme de gestion et partage d'albums photos",
    description:
      'Application permettant de créer, gérer et partager des albums photos avec gestion des accès publics/privés.',

    links: {
      live: 'https://albums.nastuiron.fr',
      github: 'https://github.com/Nastuiron/photo-albums-app',
    },

    stack: ['Next.js', 'Prisma', 'PostgreSQL', 'Docker'],

    features: [
      "Création d'albums",
      'Upload de photos',
      'Partage via lien',
      'Gestion public/privé',
    ],

    architecture: {
      frontend: ['Next.js App Router', 'Feature-based architecture'],
      backend: ['API REST', 'Prisma ORM'],
      infra: ['Docker', 'Nginx Proxy Manager'],
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

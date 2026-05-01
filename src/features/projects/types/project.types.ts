export type Project = {
  slug: string;

  name: string;
  description: string;

  shortDescription: string; // pour les cards

  image?: string;

  links: {
    live?: string;
    github?: string;
  };

  stack: string[];

  features: string[];

  architecture: {
    frontend: string[];
    backend?: string[];
    infra?: string[];
  };
};

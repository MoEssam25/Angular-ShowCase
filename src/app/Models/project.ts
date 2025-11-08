export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  imageUrl: string;
  technologies: string[];
  contributors: string[];
  category: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  icon: string;
  route: string;
}
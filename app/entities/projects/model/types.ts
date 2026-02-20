import type { Skill } from "~/entities/biography";
import type { ProjectStatus, ProjectType } from "../api/types";

export interface Contributor {
  id: number;
  name: string;
  url: string;
  description: string;
  avatar: string;
}
export interface ProjectImage {
  id: number;
  image: string;
  alt: string;
  order: number;
}
export interface Project {
  id: number;
  
  title: string;
  slug: string;
  subtitle: string;
  dateCreated: Date;
  dateCompleted?: Date;

  background: string;
  content: string;
  excerpt: string;
  isFavorite: boolean;

  status: ProjectStatus;
  type: ProjectType;
  role?: string;

  codeURL: string|null;
  file: { name: string, url: string }|null;
  runURL: string|null;

  primarySkills: Skill[];
  skills: Skill[];
  contributors: Contributor[];
  images: ProjectImage[];
}
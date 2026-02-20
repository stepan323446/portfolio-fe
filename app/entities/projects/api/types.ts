import type { SkillDto } from "~/entities/biography";

export interface ContributorDto {
  id: number;
  name: string;
  url: string;
  description: string;
  avatar: string;
}
export interface ProjectImageDto {
  id: number;
  image: string;
  alt: string;
  order: number;
}

export type ProjectStatus = 'planning'|'in_progress'|'realesed'|'archive';
export type ProjectType = 'commercial'|'pet'|'open_source'|'startup';

export interface ProjectDto {
  id: number;
  
  title: string;
  slug: string;
  subtitle: string;
  date_created: string;
  date_completed?: string;

  background: string;
  content: string;
  excerpt: string;
  is_favorite: boolean;

  status: ProjectStatus;
  type: ProjectType;
  role?: string;

  code_url: string|null;
  file: string|null;
  run_url: string|null;

  primary_skills: SkillDto[];
  skills: SkillDto[];
  contributors: ContributorDto[];
  images: ProjectImageDto[];
}
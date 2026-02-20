import type { ProjectDto } from "~/entities/projects";

export interface PrimaryBiographyDto {
  id: number;
  photo: string;
  description: string;
  url_resume?: string;
}

export interface SkillCategoryDto {
  id: number;
  title: string;
  skills: SkillDto[];
}
export interface SkillDto {
  id: number;
  name: string;
  icon: string;
  is_filter: boolean;
  icon_svg: string;
  background: string;
  cat: number;
}
export interface EducationDto {
  id: number;
  name: string;
  subname: string;
  icon: string;
  url: string;
  content: string;
  
  time_start: string;
  time_end: string;

  document_name: string;
  document: string|null;
  
  skills: SkillDto[];
}
export interface JobDto {
  id: number;
  name: string;
  company: string;
  icon: string;

  time_start: string;
  time_end?: string;

  content: string;
  skills: string;
}
export interface FileDto {
  id: number;

  title: string;
  slug: string;
  content: string;

  textAlign: "center"|"left"|"right";
  order: 0;
  file_type: "default";

  image: string|null;
  button_text: string|null;
  button_url: string|null;
  is_contact_file: boolean;

  folder: null;

  cats: SkillCategoryDto[];
  projects: ProjectDto[];
  educations: EducationDto[];
  jobs: JobDto[];
}
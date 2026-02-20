import type { Project } from "~/entities/projects";

export interface PrimaryBiography {
  id: number;
  photo: string;
  description: string;
  urlResume?: string;
}
export interface SkillCategory {
  id: number;
  title: string;
  skills: Skill[];
}
export interface Skill {
  id: number;
  name: string;
  icon: string;
  isFilter: boolean;
  iconSVG: string;
  background: string;
  cat: number;
}
export interface Education {
  id: number;
  name: string;
  subname: string;
  icon: string;
  url: string;
  content: string;
  
  timeStart: Date;
  timeEnd: Date;

  documentName: string;
  document: string|null;
  
  skills: Skill[];
}
export interface Job {
  id: number;
  name: string;
  company: string;
  icon: string;

  timeStart: Date;
  timeEnd?: Date;

  content: string;
  skills: string;
}
export interface FileInfo {
  id: number;

  title: string;
  slug: string;
  content: string;

  textAlign: "center"|"left"|"right";
  order: 0;
  fileType: "default";

  image: string|null;
  buttonText: string|null;
  buttonUrl: string|null;
  isContactFile: boolean;

  folder: null;

  cats: SkillCategory[];
  projects: Project[];
  educations: Education[];
  jobs: Job[];
}
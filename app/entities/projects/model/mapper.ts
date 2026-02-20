import { mapSkillResponseDtoToModel } from "~/entities/biography";
import type { ContributorDto, ProjectDto } from "../api/types";
import type { Contributor, Project } from "./types";

export const mapContributorDtoToModel = (dto: ContributorDto): Contributor => {
  return {
    id: dto.id,
    name: dto.name,
    url: dto.url,
    description: dto.description,
    avatar: dto.avatar
  }
}

export const mapProjectResponseDtoToModel = (dto: ProjectDto): Project => {
  let file = null;
  if(dto.file) {
    const parts = dto.file.split('|');
    file = {
      name: parts[0] as string,
      url: parts[1] as string
    };
  }

  return {
    id: dto.id,
    title: dto.title,
    slug: dto.slug,
    subtitle: dto.subtitle,
    dateCreated: new Date(dto.date_created),
    dateCompleted: dto.date_completed ? new Date(dto.date_completed) : undefined,
    
    background: dto.background,
    content: dto.content,
    excerpt: dto.excerpt,
    isFavorite: dto.is_favorite,

    status: dto.status,
    type: dto.type,
    role: dto.role,
    
    codeURL: dto.code_url,
    file: file,
    runURL: dto.run_url,
    
    primarySkills: dto.primary_skills.map(skDto => mapSkillResponseDtoToModel(skDto)),
    skills: dto.skills.map(skDto => mapSkillResponseDtoToModel(skDto)),

    contributors: dto.contributors.map(ctDto => mapContributorDtoToModel(ctDto)),
    images: dto.images
  }
}
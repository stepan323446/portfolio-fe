import { mapProjectResponseDtoToModel } from "~/entities/projects/model/mapper";
import type { EducationDto, FileDto, JobDto, PrimaryBiographyDto, SkillCategoryDto, SkillDto } from "../api/types";
import type { Education, FileInfo, Job, PrimaryBiography, Skill, SkillCategory } from "./types";

export const mapBioResponseDtoToModel = (dto: PrimaryBiographyDto): PrimaryBiography => {
  return {
    id: dto.id,
    photo: dto.photo,
    description: dto.description,
    urlResume: dto.url_resume
  }
}
export const mapSkillResponseDtoToModel = (dto: SkillDto): Skill => {
  return {
    id: dto.id,
    name: dto.name,
    icon: dto.icon,
    isFilter: dto.is_filter,
    iconSVG: dto.icon_svg,
    background: dto.background,
    cat: dto.cat
  }
}
export const mapSkillCategoryDtoToModel = (dto: SkillCategoryDto): SkillCategory => {
  return {
    id: dto.id,
    title: dto.title,
    skills: dto.skills.map(dtSkill => mapSkillResponseDtoToModel(dtSkill))
  }
}
export const mapEducationDtoToModel = (dto: EducationDto): Education => {
  return {
    id: dto.id,
    name: dto.name,
    subname: dto.subname,
    icon: dto.icon,
    url: dto.url,
    content: dto.content,
    timeStart: new Date(dto.time_start),
    timeEnd: new Date(dto.time_end),
    documentName: dto.document_name,
    document: dto.document,
    skills: dto.skills.map(dtSkill => mapSkillResponseDtoToModel(dtSkill))
  }
}
export const mapJobDtoToModel = (dto: JobDto): Job => {
  return {
    id: dto.id,
    name: dto.name,
    company: dto.company,
    icon: dto.icon,
    timeStart: new Date(dto.time_start),
    timeEnd: dto.time_end ? new Date(dto.time_end) : undefined,
    content: dto.content,
    skills: dto.skills
  }
}
export const mapFileDtoToModel = (dto: FileDto): FileInfo => {
  return {
    id: dto.id,
    title: dto.title,
    slug: dto.slug,
    content: dto.content,
    textAlign: dto.textAlign,
    order: dto.order,
    fileType: dto.file_type,
    image: dto.image,
    buttonText: dto.button_text,
    buttonUrl: dto.button_url,
    isContactFile: dto.is_contact_file,
    folder: dto.folder,
    cats: dto.cats.map(dtCat => mapSkillCategoryDtoToModel(dtCat)),
    projects: dto.projects.map(dtProj => mapProjectResponseDtoToModel(dtProj)),
    educations: dto.educations.map(dtEd => mapEducationDtoToModel(dtEd)),
    jobs: dto.jobs.map(dtJob => mapJobDtoToModel(dtJob))
  }
}
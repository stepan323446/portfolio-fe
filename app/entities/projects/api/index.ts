import type { ProjectDto } from "./types";

export const getProjectList = async () => {
  const config = useRuntimeConfig();

  return await $fetch<ProjectDto[]>('api/projects/', {
    baseURL: config.public.apiBase
  });
}

export const getProject = async (slug: string) => {
  const config = useRuntimeConfig();

  return await $fetch<ProjectDto>(`api/projects/${slug}/`, {
    baseURL: config.public.apiBase
  });
}
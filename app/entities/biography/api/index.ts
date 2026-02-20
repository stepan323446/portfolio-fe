import type { PrimaryBiographyDto, FileDto } from "./types";

export const getPrimaryBiography = async () => {
  const config = useRuntimeConfig();

  return await $fetch<PrimaryBiographyDto>('/api/bio/primary-info/', {
    baseURL: config.public.apiBase
  });
}

export const getFiles = async () => {
  const config = useRuntimeConfig();

  return await $fetch<FileDto[]>('/api/bio/files/', {
    baseURL: config.public.apiBase
  });
}
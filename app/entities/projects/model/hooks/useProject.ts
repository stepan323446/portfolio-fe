import type { AsyncOptions } from "~/types/asyncData";
import { getProject } from "../../api";
import { mapProjectResponseDtoToModel } from "../mapper";

const useProject = (slug: string, options?: AsyncOptions) => {
  return useAsyncData(
    `project-${slug}`,
    () => getProject(slug),
    {
      transform: (dto) => mapProjectResponseDtoToModel(dto),
      ...options
    }
  );
}

export default useProject;
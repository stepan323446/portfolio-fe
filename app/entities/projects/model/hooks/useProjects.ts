import type { AsyncOptions } from "~/types/asyncData";
import { getProjectList } from "../../api";
import { mapProjectResponseDtoToModel } from "../mapper";

const useProjects = (options?: AsyncOptions) => {
  return useAsyncData(
    'projects',
    getProjectList,
    {
      transform: (dto) => dto.map(dtProj => mapProjectResponseDtoToModel(dtProj)),
      ...options
    }
  );
}

export default useProjects;
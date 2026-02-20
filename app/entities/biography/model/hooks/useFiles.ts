import type { AsyncOptions } from "~/types/asyncData";
import { getFiles } from "../../api";
import { mapFileDtoToModel } from "../mapper";

const useFiles = (options?: AsyncOptions) => {
  return useAsyncData(
    'files',
    getFiles,
    {
      transform: (dto) => dto.map(dtFile => mapFileDtoToModel(dtFile)),
      ...options
    }
  );
}

export default useFiles;
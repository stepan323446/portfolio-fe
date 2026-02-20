import type { AsyncOptions } from "~/types/asyncData";
import { getPrimaryBiography } from "../../api";
import { mapBioResponseDtoToModel } from "../mapper";

const usePrimaryBiography = (options?: AsyncOptions) => {
  return useAsyncData(
    'primary-bio',
    getPrimaryBiography,
    {
      transform: (dto) => mapBioResponseDtoToModel(dto),
      ...options
    }
  );
}

export default usePrimaryBiography;
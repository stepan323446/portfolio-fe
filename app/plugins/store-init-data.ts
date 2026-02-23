import { getPrimaryBiography, mapBioResponseDtoToModel } from '~/entities/biography';
import useBioStore from '~/store/useBioStore';

export default defineNuxtPlugin(async () => {
  const { setBiography, biography } = useBioStore();

  if (!biography) {
    const data = await getPrimaryBiography();
    if(data)
      setBiography(mapBioResponseDtoToModel(data));
  }
})
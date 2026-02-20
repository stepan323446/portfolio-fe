import type { PrimaryBiography } from "~/entities/biography";

interface BiographyStore {
  biography?: PrimaryBiography
}

const store = defineStore('biography', {
  state: (): BiographyStore => ({
    biography: undefined
  }),
  actions: {
    setBiography(bio: PrimaryBiography) {
      this.$state.biography = bio;
    }
  }
});

export default store;
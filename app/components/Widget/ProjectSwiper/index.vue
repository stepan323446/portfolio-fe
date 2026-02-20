<template>
    <Swiper
    :modules="[Pagination]"
    :slides-per-view="1"
    :space-between="20"
    :watch-overflow="true"
    :pagination="{ clickable: true }"
    :breakpoints="breakpoints">
        <SwiperSlide v-for="proj in projects" :key="proj.id" class="height-slide">
            <FeatureProjectItem :project="proj" class="mx-auto h-full" />
        </SwiperSlide>
    </Swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import type { Project } from '~/entities/projects';

interface ProjectSwiperProps {
    projects: Project[]
}

const breakpoints = {
  640: {
    slidesPerView: 2,
  },
  1450: {
    slidesPerView: 3,
  },
  1650: {
    slidesPerView: 4,
  }
};

defineProps<ProjectSwiperProps>();
</script>

<style scoped>
.height-slide {
    height: auto !important;
}
</style>
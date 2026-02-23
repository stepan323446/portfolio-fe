<template>
    <SharedPanel class="p-4 block xl:flex min-w-0">
        <div class="min-w-0 mr-5 w-full">
            <ClientOnly>
                <Swiper
                    v-if="project && project.images.length > 0"
                    :modules="[Thumbs, Navigation]"
                    :thumbs="{ swiper: thumbsSwiper }"
                    :slides-per-view="1"
                    :space-between="10"
                    :navigation="true"
                    class="mb-4"
                    @init="() => isSwiperReady = true">
                        <SwiperSlide v-for="image in project.images" :key="image.id">
                            <div class="relative rounded-md overflow-hidden">
                                <div class="absolute left-0 top-0 h-full w-full opacity-25 blur-md">
                                    <SharedImageLazy 
                                    :src="image.image" 
                                    :alt="image.alt" />
                                </div>
                                <SharedImageLazy :src="image.image" :alt="image.alt" object-fit="contain" class="h-[220px] sm:h-[420px] w-full" />
                            </div>
                        </SwiperSlide>
                </Swiper>
            </ClientOnly>
            <SharedNoPanel 
                v-if="project && project.images.length == 0"
                class="w-full h-[400px] rounded-md"
                :icon="faBorderNone"
                text="No Images"
                />
            <SharedSkeleton v-if="!isSwiperReady && (!project || project?.images.length > 0)" class="rounded-md w-full h-[220px] sm:h-[420px] mb-4" />

            <ClientOnly>
                <Swiper
                    v-if="project && project.images.length > 0"
                    class="swiper-thumb-project"
                    :modules="[Thumbs]"
                    watch-slides-progress
                    :slides-per-view="1"
                    :breakpoints="thumbBreakpoints"
                    :space-between="10"
                    @init="() => isThumbSwiperReady = true"
                    @swiper="setThumbsSwiper"
                    >
                        <SwiperSlide v-for="image in project.images" :key="image.id">
                            <SharedImageLazy :src="image.image" :alt="image.alt" class="h-[80px] sm:h-[120px] w-full rounded-md" />
                        </SwiperSlide>
                </Swiper>
            </ClientOnly>
            <SharedSkeleton v-if="!isThumbSwiperReady && (!project || project?.images.length > 0)" class="rounded-md w-full h-[80px] sm:h-[120px]" />
        </div>
        <div class="xl:max-w-[320px] w-full shrink-0 mt-4 xl:mt-0">
            <SharedImageLazy v-if="project" :src="project.background" class="hidden xl:block h-28 w-full rounded-md mb-6" />
            <SharedSkeleton v-else class="w-full h-28 mb-6 rounded-md" />

            <div v-if="project" class="mb-4">
                {{ project.excerpt }}
            </div>
            <SharedSkeleton v-else class="w-full h-28 mb-4 rounded-md" />

            <FeatureProjectStatusBadge v-if="project" :status="project.status" class="mb-4" />

            <div class="space-y-4 pr-7 mb-4">
                <WidgetProjectHeadInfoSection title="Type" :value="typeLabel" />

                <WidgetProjectHeadInfoSection title="Duration" :value="durationTime" />

                <WidgetProjectHeadInfoSection v-if="project && project.role" title="Role" :value="project.role" />
            </div>

            <div v-if="project" class="px-6 space-y-2">
                <SharedBaseButton v-if="project.codeURL" v-slot="slotProps" as-child>
                    <a v-bind="slotProps" class="w-full" :href="project.codeURL" target="_blank">
                        <FontAwesomeIcon :icon="faCode" /> Code
                    </a>
                </SharedBaseButton>
                <SharedBaseButton v-if="project.runURL" v-slot="slotProps" as-child variant="primary">
                    <a v-bind="slotProps" class="w-full" :href="project.runURL" target="_blank">
                        <FontAwesomeIcon :icon="faPlay" /> Demo
                    </a>
                </SharedBaseButton>
            </div>
        </div>
    </SharedPanel>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Thumbs, Navigation } from 'swiper/modules';
import { PROJECT_TYPE_LABELS, type Project } from '~/entities/projects';
import type { Swiper as SwiperType } from 'swiper/types';
import dayjs from 'dayjs';
import { faBorderNone, faCode, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

interface ProjectHeadInfoProps {
    project?: Project
}
const { project = undefined } = defineProps<ProjectHeadInfoProps>();
    
const isSwiperReady = ref(false);
const isThumbSwiperReady = ref(false);
const thumbsSwiper = ref<SwiperType|null>(null);

const typeLabel = computed(() => {
    return project ? PROJECT_TYPE_LABELS[project.type] : 'none';
});

const thumbBreakpoints = {
    120: {
        slidesPerView: 2
    },
    560: {
        slidesPerView: 3
    },
    1350: {
        slidesPerView: 4,
    },
    1450: {
        slidesPerView: 5,
    }
};

const setThumbsSwiper = (swiper: SwiperType) => {
    thumbsSwiper.value = swiper;
};

const durationTime = computed(() => {
    if (!project)
        return 'None';

    const start = dayjs(project.dateCreated)
    const end = project.dateCompleted ? dayjs(project.dateCompleted) : dayjs();

    const years = end.diff(start, "year")
    const months = end.diff(start.add(years, "year"), "month")
    const days = end.diff(
        start
            .add(years, "year")
            .add(months, "month"),
        "day"
    )

    const parts = []

    if (years > 0)
        parts.push(`${years} year${years > 1 ? 's' : ''}`)

    if (months > 0)
        parts.push(`${months} month${months > 1 ? 's' : ''}`)

    if (days > 0)
        parts.push(`${days} day${days > 1 ? 's' : ''}`)

    return parts.length ? parts.join(' ') : '0 days'
});
</script>

<style>
.swiper-thumb-project .swiper-slide-thumb-active {
    opacity: 0.4;
}
.swiper-thumb-project .swiper-slide {
    cursor: pointer;
}
</style>
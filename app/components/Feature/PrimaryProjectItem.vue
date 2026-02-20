<template>
    <SharedPanel v-if="project" class="w-full sm:flex overflow-hidden">
        <NuxtLink :to="link" class="block w-full h-[200px] sm:h-[300px] relative">
            <ImageLazy :src="project.background" class="w-full h-full" />
            <SharedImageShadowBg>
                <div class="absolute bottom-4 left-4 flex sm:hidden">
                    <FeaturePrimarySkillIcon 
                    v-for="skill in project.primarySkills"
                    :key="skill.id"
                    :skill="skill"
                    class="mr-2 mb-2"
                    />
                </div>
                <div class="absolute bottom-3 left-4 flex flex-wrap">
                    <FeaturePrimarySkillIcon
                    v-for="skill in project.primarySkills"
                    :key="skill.id"
                    class="hidden sm:flex mr-2 mb-2" display-text :skill="skill" />
                </div>
            </SharedImageShadowBg>
        </NuxtLink>
        <div class="w-fill sm:w-[300px] 2xl:w-[400px] shrink-0 p-5 flex flex-col items-start justify-between">
            <div>
                <div class="text-2xl text-white mb-2">{{ project.title }}</div>
                <div class="mb-2 line-clamp-5">{{ project.excerpt }}</div>
            </div>
            <SharedBaseButton v-slot="slotProps" as-child>
                <NuxtLink :to="link" :class="slotProps.class">view-project</NuxtLink>
            </SharedBaseButton>
        </div>
    </SharedPanel>
    <SharedSkeleton v-else class="h-[300px] w-full rounded-md" />
</template>

<script setup lang="ts">
import type { Project } from '~/entities/projects';
import ImageLazy from '../Shared/ImageLazy.vue';

interface PrimaryProjectItemsProps {
    project?: Project
}

const { project = undefined } = defineProps<PrimaryProjectItemsProps>();

const link = computed(() => {
    return `/projects/${project?.slug}`;
})
</script>
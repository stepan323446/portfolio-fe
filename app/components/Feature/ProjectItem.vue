<template>
    <div v-if="project" class="max-w-[360px] w-full flex flex-col">
        <div class="mb-4 truncate">
            <span class="text-accent3 font-bold">{{ project.title }}</span> // <span>{{ project.subtitle }}</span>
        </div>
        <SharedPanel class="rounded-md overflow-hidden flex flex-col flex-1">
            <NuxtLink :to="link" class="relative block h-36 shrink-0">
                <SharedImageLazy class="w-full h-full" :src="project.background" />
                <div class="absolute top-4 right-4 flex flex-wrap">
                    <FeaturePrimarySkillIcon 
                    v-for="skill in project.primarySkills"
                    :key="skill.id"
                    :skill="skill"
                    class="mr-2 mb-2"
                    />
                </div>
            </NuxtLink>
            <div class="p-6 flex flex-col justify-between items-start flex-1">
                <div class="mb-4 line-clamp-3">
                    {{ project.excerpt }}
                </div>
                <SharedBaseButton v-slot="slotProps" as-child>
                    <NuxtLink :to="link" :class="slotProps.class">view-project</NuxtLink>
                </SharedBaseButton>
            </div>
        </SharedPanel>
    </div>
    <div v-else>

    </div>
</template>

<script setup lang="ts">
import type { Project } from '~/entities/projects';

interface ProjectItemsProps {
    project?: Project
}

const { project = undefined } = defineProps<ProjectItemsProps>();

const link = computed(() => {
    return `/projects/${project?.slug}`;
})
</script>

<style scoped>

</style>
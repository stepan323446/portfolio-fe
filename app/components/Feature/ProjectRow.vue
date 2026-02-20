<template>
    <NuxtLink v-if="project" :to="link" class="block hover:opacity-75">
        <SharedPanel class="flex overflow-hidden">
            <SharedImageLazy :src="project.background" class="block size-[90px] shrink-0" />
            <div class="p-3">
                <div class="text-white text-lg truncate">{{ project.title }}</div>
                <div class="truncate">{{ primarySkillNames }}</div>
            </div>
        </SharedPanel>
    </NuxtLink>
    <SharedSkeleton v-else class="h-[91px] w-full rounded-md" />
</template>

<script setup lang="ts">
import type { Project } from '~/entities/projects';

interface ProjectRowProps {
    project?: Project
}

const { project = undefined } = defineProps<ProjectRowProps>();

const link = computed(() => {
    return `/projects/${project?.slug}`;
})

const primarySkillNames = computed(() => {
    if(!project)
        return '';

    const names = project.primarySkills.map((skill => skill.name));

    return names.join(',');
});
</script>

<style scoped>

</style>
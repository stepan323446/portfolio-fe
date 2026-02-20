<template>
    <div>
        <h2 class="text-white text-2xl text-center mb-4">{{ file.title }}</h2>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="text-center mb-5 dynamic-content" v-html="file.content"></div>

        <div v-if="file.cats.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FeatureSkillCategory v-for="cat in file.cats" :key="cat.id" :cat="cat" />
        </div>
        <div v-if="file.jobs.length > 0">
            <FeatureJobTree :jobs="file.jobs" />
        </div>
        <div v-if="file.projects.length > 0">
            <ClientOnly>
                <WidgetProjectSwiper :projects="file.projects" />
            </ClientOnly>
        </div>
        <div v-if="file.educations.length > 0">
            <FeatureEducation v-for="ed in file.educations" :key="ed.id" :education="ed" class="mb-5 mx-auto" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { FileInfo } from '~/entities/biography';

interface FileProps {
    file: FileInfo
}

const { file } = defineProps<FileProps>();
</script>

<style scoped>

</style>
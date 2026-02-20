<template>
    <div class="relative">
        <span class="absolute top-1/2 left-[15px] lg:left-1/2 lg:-translate-x-1/2 -translate-y-1/2 bg-white w-[2px] h-full"></span>
        <div v-for="(job, i) in jobs" :key="job.id" class="relative mb-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <FeatureJob 
            :job="job" 
            :class="[
                'ml-11', 'lg:ml-0',
                { 'lg:ml-auto': i % 2 == 0 },
                {'lg:order-2': i % 2}
            ]" />
            <div class="size-10 lg:size-[50px] absolute left-[-4px] lg:left-1/2 lg:-translate-x-1/2 top-5 border-2 border-white overflow-hidden rounded-full">
                <SharedImageLazy :src="job.icon" />
            </div>
            <div :class="['hidden lg:block text-white', 'mt-9', { 'ml-auto': i % 2 }]">{{ formatLocaleDate(job.timeStart) }} - {{ formatLocaleDate(job.timeEnd) }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Job } from '~/entities/biography';

interface JobTreeProps {
    jobs: Job[]
}

const { jobs } = defineProps<JobTreeProps>();
</script>

<style scoped>

</style>
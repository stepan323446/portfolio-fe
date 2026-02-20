<template>
    <SharedPanel class="max-w-[650px] p-4">
        <div class="flex mb-5">
            <ImageLazy :src="job.icon" class="rounded-md shrink-0 size-12 mr-4" />
            <div>
                <div class="text-white text-lg mb-1">## {{ job.company }}</div>
                <div class="font-bold">{{ job.name }}</div>
                <div class="text-sm">{{ startTimeText }} - {{ endTimeText }}</div>
            </div>
        </div>
        <div>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <pre class="whitespace-pre-wrap mb-5" v-html="job.content"></pre>
            <div><b class="text-[#a8b8c7]">Skills: </b> {{ job.skills }}</div>
        </div>
    </SharedPanel>
</template>

<script setup lang="ts">
import type { Job } from '~/entities/biography';
import ImageLazy from '../Shared/ImageLazy.vue';

interface JobProps {
    job: Job
}

const { job } = defineProps<JobProps>();

const startTimeText = computed(() => {
    return formatLocaleDate(job.timeStart);
});
const endTimeText = computed(() => {
    return formatLocaleDate(job.timeEnd);
});
</script>

<style scoped>

</style>
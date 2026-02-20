<template>
    <SharedPanel class="max-w-[800px] p-4">
        <div class="flex mb-5">
            <SharedImageLazy :src="education.icon" class="rounded-md shrink-0 size-12 mr-4" object-fit="contain" />
            <div>
                <div class="text-white text-lg mb-1">## {{ education.name }}</div>
                <div class="font-bold">{{ education.subname }}</div>
                <div class="text-sm">{{startTimeText }} - {{ endTimeText }}</div>
            </div>
        </div>
        <div>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <pre class="whitespace-pre-wrap mb-5" v-html="education.content"></pre>
            <div>
                <FeatureSkill v-for="skill in education.skills" :key="skill.id" :skill="skill" class="mr-4 mb-4" />
            </div>
        </div>
    </SharedPanel>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import type { Education } from '~/entities/biography';

interface EducationProps {
    education: Education;
}
const { education } = defineProps<EducationProps>();

const startTimeText = computed(() => {
    return dayjs(education.timeStart).format('YYYY-MM-DD');
});
const endTimeText = computed(() => {
    return dayjs(education.timeEnd).format('YYYY-MM-DD');
});
</script>

<style scoped>

</style>
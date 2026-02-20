<template>
    <div v-if="skill" class="inline-flex items-center p-[10px] border-border-color border-2 rounded-lg">
        <SharedImageLazy :src="skill.icon" class="size-[30px] mr-2 inline-block" object-fit="contain" />
        <span>{{ skill.name }}</span>
    </div>
    <SharedSkeleton v-else class="size-[30px] rounded-lg" />
</template>

<script setup lang="ts">
import type { Skill } from '~/entities/biography';

interface SkillProps {
    skill?: Skill
}

const { skill = undefined } = defineProps<SkillProps>();
</script>

<style scoped>

</style>
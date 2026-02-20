<template>
    <div 
    class="rounded-md p-1 w-fit flex items-center" 
    :style="{ backgroundColor: skill.background }">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="skill-icon flex items-center justify-center p-1 size-7" v-html="skill.iconSVG"></div>
        <div v-if="displayText" class="ml-2 mr-2 text-black">{{ skill.name }}</div>
    </div>
</template>

<script setup lang="ts">
import type { Skill } from '~/entities/biography';

interface PrimarySkillIconProps {
    displayText?: boolean,
    skill: Skill
}

defineProps<PrimarySkillIconProps>();
</script>

<style scoped>
.skill-icon svg {
    width: 100%;
    height: 100%;
}
</style>
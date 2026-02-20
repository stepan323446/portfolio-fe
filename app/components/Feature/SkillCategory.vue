<template>
    <SharedPanel class="p-4">
        <h3 class="text-white text-lg mb-4 text-center"># {{ cat.title }} #</h3>

        <div class="text-center">
            <FeatureSkill v-for="skill in cat.skills" :key="skill.id" :skill="skill" class="mr-4 mb-4" />
        </div>
    </SharedPanel>
</template>

<script setup lang="ts">
import type { SkillCategory } from '~/entities/biography';

interface SkillProps {
    cat: SkillCategory
}

const { cat } = defineProps<SkillProps>();
</script>

<style scoped>

</style>
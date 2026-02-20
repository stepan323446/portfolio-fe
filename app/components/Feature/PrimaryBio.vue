<template>
    <div v-if="biography">
        <SharedImageLazy
        class="size-40 rounded-sm mx-auto mb-4"
        :src="biography.photo" alt="My profile picture" />
        <h1 class="text-white text-lg mb-3">I'm Stepan Turitsin</h1>

        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="text-sm mb-4" v-html="biography.description"></div>

        <SharedBaseButton 
        v-if="biography.urlResume" 
        v-slot="slotProps" as-child 
        variant="primary">
            <a :href="biography.urlResume" :class="slotProps.class" target="_blank">Check Resume</a>
        </SharedBaseButton>
    </div>
    <div v-else>
        <SharedSkeleton class="size-40 rounded-sm mx-auto mb-4" />
        <SharedSkeleton class="w-44 h-6 rounded-sm mb-3" />
        <SharedSkeleton class="w-full h-24 rounded-sm mb-4" />
    </div>
</template>

<script setup lang="ts">
import type { PrimaryBiography } from '~/entities/biography';

interface PrimaryBioProps {
    biography?: PrimaryBiography
}

const { biography = undefined } = defineProps<PrimaryBioProps>();
</script>

<style scoped>

</style>
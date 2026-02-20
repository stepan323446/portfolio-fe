<template>
    <a :href="contributor.url" target="_blank" class="block hover:opacity-80">
        <SharedPanel class="flex items-center w-full overflow-hidden">
            <SharedImageLazy class="size-12 overflow-hidden mr-3 shrink-0" :src="contributor.avatar" :alt="contributor.name" />
            <div>{{ contributor.name }}</div>
        </SharedPanel>        
    </a>
</template>

<script setup lang="ts">
import type { Contributor } from '~/entities/projects';

interface ContributorItemProps {
    contributor: Contributor
}

defineProps<ContributorItemProps>();
</script>
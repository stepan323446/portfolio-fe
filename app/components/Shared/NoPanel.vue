<template>
    <div class="bg-gray-700 text-gray-300 flex items-center justify-center flex-col">
        <div class="text-6xl mb-4">
            <FontAwesomeIcon :icon="icon" />
        </div>
        <div class="text-center">
            {{ text }}
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

interface NoPanelProps {
    icon: IconDefinition;
    text: string;
}

defineProps<NoPanelProps>();
</script>

<style scoped>

</style>
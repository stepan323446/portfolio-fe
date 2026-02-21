<template>
    <div class="flex items-center justify-center flex-col max-w-[420px] w-full mx-auto">
        <div class="text-6xl mb-4" :style="{ color: iconColor }">
            <FontAwesomeIcon :icon="icon" />
        </div>
        <div class="text-center text-white text-xl mb-2">
            {{ title }}
        </div>
        <div class="text-center ">
            {{ text }}
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

interface NoPanelProps {
    icon: IconDefinition;
    iconColor?: string;
    title: string;
    text?: string;
}

defineProps<NoPanelProps>();
</script>

<style scoped>

</style>
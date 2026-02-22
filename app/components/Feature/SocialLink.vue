<template>
    <a 
    class="block border rounded-md p-3 hover:animate-pulse"
    :style="{ 
        backgroundColor: backgroundColorHSL,
        borderColor: borderColorHSL
    }"
    :href="link" 
    target="_blank">
        <div class="flex items-center mb-3">
            <div 
            class="text-white text-2xl size-12 flex items-center justify-center rounded-md mr-3"
            :style="{
                backgroundColor: borderColorHSL
            }">
                <FontAwesomeIcon :icon="icon" />
            </div>
            <div class="text-white text-lg">
                {{ name }}
            </div>
        </div>
        <div>
            {{ description }}
        </div>
    </a>
</template>

<script setup lang="ts">
import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

interface SocialLinkProps {
    icon: IconDefinition;
    name: string;
    description: string;
    link: string;
    colorHue: number;
}

const { colorHue } = defineProps<SocialLinkProps>();

const backgroundColorHSL = computed(() => {
    return `hsla(${colorHue} 100% 55% / 0.15)`
})
const borderColorHSL = computed(() => {
    return `hsla(${colorHue} 100% 55% / 1)`
})
</script>

<style scoped>

</style>
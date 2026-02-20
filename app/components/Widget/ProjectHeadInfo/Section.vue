<template>
    <div class="flex items-center justify-between">
        <div>
            {{ title }}
        </div>
        <div class="text-white">
            {{ value }}
        </div>
    </div>
</template>

<script setup lang="ts">
interface SectionProps {
    title: string;
    value: string;
}

defineProps<SectionProps>();
</script>

<style scoped>

</style>
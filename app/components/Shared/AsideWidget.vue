
<template>
    <SharedPanel class="p-4">
        <h2 class="text-white mb-4"># {{ title }}</h2>
        <div>
            <slot></slot>
        </div>
    </SharedPanel>
</template>

<script setup lang="ts">
interface AsideWidgetProps {
    title: string;
}

defineProps<AsideWidgetProps>();
</script>

<style scoped>

</style>
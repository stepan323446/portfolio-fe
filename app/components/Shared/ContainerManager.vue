<template>
    <div class="h-full flex flex-col lg:flex-row min-w-0">
        <aside v-if="withAside" class="lg:h-full shrink-0 w-full lg:w-[300px] border-border-color border-r-2 scrollbar">
            <slot name="sidebar"></slot>
        </aside>
        <div class="w-full min-w-0">
            <div class="w-full text-center h-10 flex items-center justify-center border-border-color border-b-2 border-t-2 lg:border-t-0">
                {{ title }}
            </div>
            <div v-if="hasSeparate" class="h-full flex">
                <div class="content scrollbar scrollbar-always w-1/2 border-border-color lg:border-r-2">
                    <slot name="left"></slot>
                </div>
                <div class="content scrollbar scrollbar-always w-1/2">
                    <slot name="right"></slot>
                </div>
            </div>
            <div v-else class="h-full content scrollbar scrollbar-always">
                <div class="container mx-auto min-w-0">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface ContainerManagerProps {
    withAside?: boolean,
    title: string;
    hasSeparate?: boolean;
}

const {
    title,
    hasSeparate = false,
    withAside = true
} = defineProps<ContainerManagerProps>();
</script>

<style scoped>
.scrollbar {
    @apply overflow-y-auto;
}
.scrollbar::-webkit-scrollbar {
    @apply w-5 border-0 border-l-2 border-border-color border-solid;
}
.scrollbar::-webkit-scrollbar-thumb {
    @apply bg-default border-[5px] border-solid border-transparent outline-0 bg-clip-padding;
}
.scrollbar-always {
    @apply overflow-y-auto lg:overflow-y-scroll;
}
.content {
    @apply py-5 px-3 lg:px-10 lg:h-[calc(100%-40px)];
}
</style>
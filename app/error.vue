<template>
    <NuxtLayout>
        <div class="h-screen lg:h-full flex items-center justify-center">
            <div class="max-w-80 text-center">
                <h1 class="text-8xl mb-3">{{ error.status }}</h1>
                <div class="text-xl">{{ errorMessage }}</div>
            </div> 
        </div>     
    </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

interface ErrorPageProps {
    error: NuxtError;
}
const { error } = defineProps<ErrorPageProps>()

useSeoMeta({
    title: error.status
});

const errorMessage = computed(() => {
    switch (error.status) {
        case 404:
            return 'Page not found';
    }
    return 'Unknown Error';
});
</script>

<style scoped>

</style>
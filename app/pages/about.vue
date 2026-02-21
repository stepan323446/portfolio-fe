<template>
    <SharedContainerManager title="about-me">
        <template #sidebar>
            <SharedManagerSelect hide-top-border title="personal-info">
                <FeaturePrimaryBio :biography="biography" />
            </SharedManagerSelect>
            <SharedManagerSelect title="contacts">
                <FeatureManagerSocialLinks />
            </SharedManagerSelect>
        </template>
        <template #default>
            <h1 class="hidden">About Me</h1>
            <SharedLoading v-if="!files && status == 'pending'" />
            <WidgetFile v-for="file in files" :key="file.id" :file="file" class="mb-16" />
        </template>
    </SharedContainerManager>
</template>

<script setup lang="ts">
import useBioStore from '~/store/useBioStore';
import { useFiles } from '~/entities/biography';

useSeoMeta({
    description: "Hi, I'm Stepan Turitsin. Fullstack Web Developer specializing in Nuxt, Next, and Django. Building scalable SSR applications, REST APIs, and e-commerce solutions with TypeScript, Docker, and modern web technologies."
})

const { biography } = useBioStore();
const { data: files, status } = await useFiles({
    lazy: true
});
</script>

<style scoped>

</style>
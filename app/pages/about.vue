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
            <SharedLoading v-if="!files && status == 'pending'" />
            <WidgetFile v-for="file in files" :key="file.id" :file="file" class="mb-16" />
        </template>
    </SharedContainerManager>
</template>

<script setup lang="ts">
import useBioStore from '~/store/useBioStore';
import { useFiles } from '~/entities/biography';

const { biography } = useBioStore();
const { data: files, status } = useFiles();
</script>

<style scoped>

</style>
<template>
    <SharedContainerManager :with-aside="false" title="projects">
        <div class="grid grid-cols-1 lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_450px] mb-8 gap-5">
            <div>
                <h2 class="text-white text-lg mb-4"># Latest project</h2>
                <FeaturePrimaryProjectItem :project="latestProject" />
            </div>
            <div>
                <h2 class="text-white text-lg mb-4"># Favorites</h2>
                <div v-if="favoriteProjects" class="space-y-3">
                    <FeatureProjectRow v-for="proj in favoriteProjects" :key="proj.id" :project="proj" />
                </div>
                <div v-else  class="space-y-3">
                    <FeatureProjectRow />
                    <FeatureProjectRow />
                    <FeatureProjectRow />
                </div>
            </div>
        </div>
        <div>
            <h2 class="text-white text-lg mb-4"># All projects</h2>
            <div v-if="projects" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <div v-for="proj in projects" :key="proj.id">
                    <FeatureProjectItem :project="proj" class="h-full" />
                </div>
            </div>
            <SharedLoading v-else />
        </div>
    </SharedContainerManager>
</template>

<script setup lang="ts">
import { useProjects } from '~/entities/projects';


const { data: projects } = await useProjects({
    lazy: true
});
const latestProject = computed(() => {
    if(!projects.value)
        return projects.value;

    return projects.value.reduce((prev, curr) => prev.dateCreated > curr.dateCreated ? prev : curr);
});

const favoriteProjects = computed(() => {
    if(!projects.value)
        return projects.value;

    return projects.value.filter(proj => proj.isFavorite == true);
});
</script>

<style scoped>

</style>
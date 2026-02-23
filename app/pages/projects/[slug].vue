<template>
    <SharedContainerManager :title="slug">
        <template #sidebar>
            <SharedManagerSelect hide-top-border title="contacts">
                <FeatureManagerSocialLinks />
            </SharedManagerSelect>
        </template>
        <template #default>
            <div v-if="project" class="text-3xl text-white mb-4"># <h1 class="inline-block">{{ project.title }}</h1></div>
            <SharedSkeleton v-else class="h-9 w-44 mb-4 rounded-md" />
            <WidgetProjectHeadInfo :project="project" class="mb-4" />
            <div class="flex flex-col-reverse xl:flex-row mb-12">
                <div class="w-full xl:mr-3 space-y-3">
                    <SharedSkeleton v-if="!project" class="h-[600px] w-full rounded-md" />

                    <SharedPanel v-if="project" class="p-4 w-full h-fit">
                        <SharedContent :content-html="project.content" />
                    </SharedPanel>
                    <SharedAsideWidget v-if="project" title="Skills">
                        <FeatureSkill v-for="skill in project.skills" :key="skill.id" :skill="skill" class="mr-4 mb-4" />
                    </SharedAsideWidget>
                </div>
                <div class="xl:w-[350px] shrink-0 space-y-3 mb-4 xl:mb-0">
                    <SharedSkeleton v-if="!project" class="h-[200px] w-full rounded-md" />

                    <SharedAsideWidget v-if="project" title="Primary Skill">
                        <div class="flex flex-wrap">
                            <FeaturePrimarySkillIcon v-for="skill in project.primarySkills" :key="skill.id" display-text :skill="skill" class="mr-2 mb-2" />
                        </div>
                    </SharedAsideWidget>
                    <SharedAsideWidget title="Timeline">
                        <div class="space-y-2">
                            <div>
                                <div class="text-gray-300">Date Start:</div>
                                <div>{{ formatLocaleDate(project?.dateCreated) }}</div>
                            </div>
                            <div>
                                <div class="text-gray-300">Date End:</div>
                                <div>{{ formatLocaleDate(project?.dateCompleted) }}</div>
                            </div>
                        </div>
                    </SharedAsideWidget>
                    <SharedAsideWidget v-if="project && project.contributors.length > 0" title="Contributors">
                        <div class="space-y-2">
                            <FeatureContributorItem v-for="contr in project.contributors" :key="contr.id" :contributor="contr" />
                        </div>
                    </SharedAsideWidget>
                </div>
            </div>
            <div>
                <h2 class="text-white text-xl mb-4"># Other projects</h2>
                <WidgetProjectSwiper v-if="projects" :projects="projects" />
                <SharedLoading v-else />
            </div>
        </template>
    </SharedContainerManager>
</template>

<script setup lang="ts">
import { useProject, useProjects } from '~/entities/projects';

const route = useRoute()
const slug = route.params.slug as string;

const { data: project, error } = await useProject(slug, {
    lazy: true
});

useSeoMeta({
    title: computed(() => project.value?.title ?? 'Loading...'),
    description: computed(() => project.value?.excerpt ?? ''),
    ogImage: computed(() => project.value?.background ?? '')
})

const { data: projects } = useProjects({
    server: false
});

if(error.value) {

    if (error.value.status == 404)
        throw createError({ status: 404, statusText: 'Project not found' })
    else
        throw createError({ status: 500 })
} 
</script>

<style scoped>

</style>
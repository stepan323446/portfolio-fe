<template>
    <div class="h-screen lg:h-full flex items-center justify-center space-x-5 overflow-hidden">
        <div class="px-3 z-10">
            <div class="text-white mb-2">
                <div class="text-lg">
                    Hi all, I am
                </div>
                <h1 class="text-6xl">
                    Stepan Turitsin
                </h1>
            </div>
            <div class="text-3xl text-accent3 mb-4 lg:mb-0">
                > <SharedTypingText :lines="typingLines" />
            </div>
            <SharedCode class="text-accent2 mb-4 hidden lg:block" :code="code" />
            <div class="space-x-3">
                <SharedBaseButton v-slot="slotProps" as-child variant="primary">
                    <NuxtLink to="/about" :class="slotProps.class">about-me</NuxtLink>
                </SharedBaseButton>
                <SharedBaseButton v-slot="slotProps">
                    <NuxtLink to="/projects" :class="slotProps.class">projects</NuxtLink>
                </SharedBaseButton>
            </div>
        </div>
        <SharedBlurEffect>
            <SharedSnakeGame />
        </SharedBlurEffect>
    </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

const code = `
// Let's play snake for a bit
// you can also see it on my Github page
const githubLink = "https://github.com/stepan323446/snake2d"
`;

const typingLines = config.public.homepageLines;

useHead({
    title: 'Stepan Turitsin - Fullstack Web Developer | Nuxt, Next, Django',
    titleTemplate: null,
});

useSeoMeta({
    description: "Hi, I'm Stepan Turitsin. Fullstack Web Developer specializing in Nuxt, Next, and Django. Building scalable SSR applications, REST APIs, and e-commerce solutions with TypeScript, Docker, and modern web technologies."
});

</script>
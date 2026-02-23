<script setup lang="ts">
import 'swiper/css';
const url = useRequestURL()

const fullUrl = `${url.protocol}//${url.host}`

useHead({
    titleTemplate: '%s - Stepan Turitsin'
});

useSeoMeta({
    description: "Hi, I'm Stepan Turitsin. Fullstack Web Developer specializing in Nuxt, Next, and Django. Building scalable SSR applications, REST APIs, and e-commerce solutions with TypeScript, Docker, and modern web technologies.",
    ogImage: `${fullUrl}/thumbnail.png`,
    ogType: 'website',
    twitterCard: 'summary_large_image'
});
</script>

<template>
    <div class="bg-main-background min-h-screen">
        <WidgetHeader />
        <div class="lg:h-[calc(100vh-105px)] flex flex-col">
            <slot></slot>
        </div>
        <WidgetFooter />
    </div>
</template>
<script setup lang="ts">
import 'swiper/css';

useHead({
    titleTemplate: '%s - Stepan Turitsin',
    
})
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
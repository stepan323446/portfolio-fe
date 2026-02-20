<script setup lang="ts">
import 'swiper/css';
</script>

<template>
    <div class="bg-main-background min-h-screen">
        <WidgetHeader />
        <div class="lg:h-[calc(100vh-105px)]">
            <slot></slot>
        </div>
        <WidgetFooter />
    </div>
</template>
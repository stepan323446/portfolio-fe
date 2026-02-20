<template>
    <div class="absolute bg-shadow w-full h-full left-0 top-0">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.bg-shadow {
    background: linear-gradient(180deg,rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0) 64%, rgba(0, 0, 0, 0.55) 100%);
}
</style>
<template>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="content-ckeditor" v-html="contentHtml"></div>
</template>

<script setup lang="ts">
interface ContentProps {
    contentHtml: string;
}

defineProps<ContentProps>();
</script>

<style>
.content-ckeditor p,
.content-ckeditor ul {
    margin-bottom: 25px;
}
.content-ckeditor ul {
    list-style:disc;
}
.content-ckeditor ul {
    padding-left: 35px;
}
.content-ckeditor li {
    margin-bottom: 10px;
}
.content-ckeditor h2 {
    @apply text-white mb-4 text-2xl;
}
.content-ckeditor h3 {
    @apply text-white mb-4 text-lg;
}
</style>
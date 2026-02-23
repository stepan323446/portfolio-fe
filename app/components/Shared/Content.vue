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
.content-ckeditor {
    font-family: "Roboto", sans-serif;
}
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
    @apply text-white mb-4 text-2xl font-sans;
}
.content-ckeditor h3 {
    @apply text-white mb-4 text-lg font-sans;
}
.content-ckeditor blockquote {
    @apply p-2 pl-4 border-accent3 border-l-4 bg-black/25 mb-4;
}
.content-ckeditor blockquote p:last-child {
    @apply mb-0;
}
</style>
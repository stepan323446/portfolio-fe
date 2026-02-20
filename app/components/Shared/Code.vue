<template>
    <pre class="font-medium"><code ref="code-block" :class="[`language-${language}`]">{{ code }}</code></pre>
</template>

<script setup lang="ts">
import hljs from 'highlight.js/lib/core'

const codeBlock = useTemplateRef('code-block');

interface CodeProps {
    code: string,
    language?: 'javascript'|'typescript'
}

const { code, language = 'javascript' } = defineProps<CodeProps>()

onMounted(() => {
    if(codeBlock.value)
        hljs.highlightElement(codeBlock.value);
});
</script>

<style>
.hljs-comment {
    @apply text-default;
}
.hljs-keyword {
    @apply text-accent3;
}
.hljs-string {
    @apply text-accent1;
}
</style>
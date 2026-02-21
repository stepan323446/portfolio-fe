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

const highlight = async () => {
  await nextTick()

  if (!codeBlock.value) return

  codeBlock.value.removeAttribute('data-highlighted')
  codeBlock.value.classList.remove('hljs')

  hljs.highlightElement(codeBlock.value)
}

onMounted(() => {
    highlight();
});

watch(() => code, highlight)
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
.hljs .function_ {
    @apply text-yellow-300;
}
.hljs-attr {
    @apply text-gray-300;
}
</style>
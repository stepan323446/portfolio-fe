<template>
    <span class="text-typing">
        <span class="text-typing">{{ currentLineWrite }}</span>
        <span class="cursor-typing">|</span>
    </span>
</template>

<script setup lang="ts">
interface TypingTextProps {
    lines: string[],
    wordTypingTime?: number,
    delayLine?: number
}

const { 
    lines,
    wordTypingTime = 100,
    delayLine = 1000
} = defineProps<TypingTextProps>();

const controller = new AbortController();
let isActiveLoop = false;

const currentLineIndex = ref(0);
const currentLineWrite = ref('');

const asyncWriteLoop = async () => {
    while (isActiveLoop) {
        const currentLine = lines[currentLineIndex.value] || 'not-found';

        for (let i = 0; i < currentLine.length; i++) {
            currentLineWrite.value = currentLine.substring(0, i + 1);

            await sleep(wordTypingTime, controller.signal);
        }
        await sleep(delayLine, controller.signal);

        for (let i = currentLine.length; i > 0; i--) {
            currentLineWrite.value = currentLine.substring(0, i - 1);

            await sleep(wordTypingTime, controller.signal);
        }
        await sleep(delayLine, controller.signal);

        if (currentLineIndex.value == lines.length - 1)
            currentLineIndex.value = 0;
        else
            currentLineIndex.value++;
    }
}

onMounted(() => {
    isActiveLoop = true;
    asyncWriteLoop();
});
onUnmounted(() => {
    isActiveLoop = false;
    controller.abort();
})
</script>
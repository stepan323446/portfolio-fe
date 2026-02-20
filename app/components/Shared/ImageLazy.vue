<template>
    <div class="overflow-hidden relative">
        <img 
        ref="image-element"
        :class="[
            'w-full', 'h-full',
            {'opacity-0': !imageLoaded},
            { 'object-cover': objectFit == 'cover' },
            { 'object-contain': objectFit == 'contain' },
        ]"
        :src="src" 
        :alt="alt" 
        loading="lazy" @load="onImageLoaded" />

        <SharedSkeleton v-if="!imageLoaded" class="w-full h-full absolute top-0 left-0" />
    </div>
</template>

<script setup lang="ts">
interface ImageLazyProps { 
    src: string,
    alt?: string,
    objectFit?: "cover"|"contain"
}

const { src, alt = '', objectFit = 'cover' } = defineProps<ImageLazyProps>();
const imageLoaded = ref(false);
const imageElement = useTemplateRef<HTMLImageElement | null>('image-element');

const onImageLoaded = () => {
    imageLoaded.value = true;
}

onMounted(() => {
    if(!imageElement.value) return

    if(imageElement.value?.complete && imageElement.value?.src)
        onImageLoaded();
});
</script>
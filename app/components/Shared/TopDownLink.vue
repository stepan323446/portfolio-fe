<template>
    <a v-if="isExternal" :class="classes" :href="link" target="_blank" @click="clickOnLink()">
        <slot></slot>
    </a>
    <NuxtLink 
    v-else 
    :class="classes" 
    :to="link" 
    active-class="text-white active"
    @click="clickOnLink()">
        <slot></slot>
    </NuxtLink>
</template>

<script setup lang="ts">
interface TopDownLinkProps {
    link: string;
    borderSide?: 'left'|'right';
    isExternal?: boolean;
}
interface TopDownLinkEmits {
    (e: 'click'): void
}

const {
    link,
    borderSide = 'right',
    isExternal = false
} = defineProps<TopDownLinkProps>();

const emit = defineEmits<TopDownLinkEmits>();

const classes = [
    'relative', 'block', 'px-8', 'py-4', 'font-light', 'hover:text-white', 'text-base/4',
    'border-border-color',
    'border-b-[1px]', 'lg:border-b-0',
    {
        'border-l-2': borderSide === 'left',
        'border-r-2': borderSide === 'right'
    }
];

const clickOnLink = () => {
    emit('click');
}
</script>

<style scoped>
.active::before {
    content: '';
    @apply absolute left-0 bottom-0 w-[6px] h-full lg:w-full lg:h-[3px] bg-accent1;
}
</style>
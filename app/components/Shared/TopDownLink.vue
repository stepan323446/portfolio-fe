<template>
    <a v-if="isExternal" :class="classes" :href="link" target="_blank" @click="clickOnLink()">
        <slot></slot>
    </a>
    <NuxtLink 
    v-else 
    :class="classes" 
    :to="link" 
    active-class="text-white border-l-[7px] lg:border-l-0 lg:border-b-[3px] lg:border-b-accent1 border-l-accent1"
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
    'block', 'px-8', 'py-4', 'font-light', 'hover:text-white', 'text-base/4',
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
<template>
    <slot v-if="asChild" :class="classes"></slot>
    <button v-else :class="classes">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

interface BaseButtonProps {
    variant?: 'primary' | 'secondary';
    asChild?: boolean;
    disabled?: boolean;
}
interface BaseButtonSlots {
    class?: HTMLAttributes['class']
}

defineSlots<{
    default(props: BaseButtonSlots): unknown
}>();

const { 
    variant = 'secondary',
    asChild = false,
    disabled = false
} = defineProps<BaseButtonProps>();

const classes: HTMLAttributes['class'] = [
    'font-medium', 'text-sm', 'text-nowrap', 'text-center', 'inline-block',
    'px-4', 'py-2', 'rounded-lg',
    'cursor-pointer',
    'hover:text-white', 'hover:bg-accent3',
    'select-none',
    {
        'bg-accent1 text-[#000]': variant === 'primary',
        'bg-button-background text-white': variant === 'secondary',
        'opacity-50 cursor-not-allowed': disabled
    }
];
</script>
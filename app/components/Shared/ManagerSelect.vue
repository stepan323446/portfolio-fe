<template>
    <div>
        <button 
        :class="[
            'h-[40px]', 'text-white', 'px-2', 'flex', 'items-center', 
            'border-border-color', 'bg-border-color', 
            'lg:bg-transparent', 'border-b-2', 'w-full',
            { 'border-t-2': !hideTopBorder }
        ]" 
        @click="openCloseContent">
            <FontAwesomeIcon
            :class="[
                'mr-2', 'transition-transform',
                {'rotate-90': open}
            ]"
            :icon="faCaretRight" /> {{ title }}
        </button>
        <div v-show="open" class="px-4 py-6">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

interface ManagerOpenBoxProps {
    title: string
    hideTopBorder?: boolean
}

const { title, hideTopBorder = false } = defineProps<ManagerOpenBoxProps>();
const open = ref(true);

const openCloseContent = () => {
    open.value = !open.value;
}
</script>
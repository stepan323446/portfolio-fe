<template>
    <div
    :class="[
        'py-1', 'px-3', 'text-white', 'rounded-md', 'border-2', 'text-center',
        { 'border-orange-700': status == 'in_progress' },
        { 'border-green-800': status == 'realesed' },
        { 'border-blue-800': status == 'planning' },
        { 'border-yellow-700': status == 'archive' },
    ]"
    >
        <FontAwesomeIcon :icon="faIcon" class="mr-2" />
        <span>{{ statusLabel }}</span>
    </div>
</template>

<script setup lang="ts">
import { faBoxArchive, faCalendarDay, faCheck, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { PROJECT_STATUS_LABELS, type ProjectStatus } from '~/entities/projects';

interface StatusBadgeProps {
    status: ProjectStatus
}

const { status } = defineProps<StatusBadgeProps>();

const statusLabel = PROJECT_STATUS_LABELS[status];

const faIcon = computed(() => {
    let icon = faClockRotateLeft;

    switch (status) {
        case 'planning':
            icon = faCalendarDay;
            break;

        case 'archive':
            icon = faBoxArchive;
            break;

        case 'realesed':
            icon = faCheck;
            break;
    }

    return icon;
});
</script>

<style scoped>

</style>
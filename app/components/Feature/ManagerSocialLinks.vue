<template>
    <div class="space-y-2">
        <a 
        v-for="link in links" 
        :key="link.name" 
        :href="link.href" target="_blank"
        class="block hover:text-white">
            <FontAwesomeIcon :icon="link.icon" /> {{ link.name }}
        </a>
    </div>
</template>

<script setup lang="ts">
import { faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, type IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

interface Link {
    name: string;
    href: string;
    icon: IconDefinition;
}

const links: Link[] = [
    {
        name: 'linked-in',
        href: 'https://www.linkedin.com/in/stepan-turitsin/',
        icon: faLinkedin
    },
    {
        name: 'telegram',
        href: 'https://t.me/SteveDekart',
        icon: faTelegram
    },
    {
        name: 'e-mail',
        href: 'mailto:stevedekart2020@gmail.com',
        icon: faEnvelope
    }
]

</script>

<style scoped>

</style>
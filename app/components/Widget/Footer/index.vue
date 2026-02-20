<template>
    <div class="hidden sm:flex border-t-2 border-border-color w-full">
        <div class="border-r-2 border-border-color flex items-center shrink-0 px-4">
            find me in:
        </div>
        <nav class="w-full">
            <ul class="flex justify-start">
                <li v-for="(link, i) in links" :key="link.to" :class="['w-fit', { 'ml-auto': i === links.length - 1 }]">
                    <SharedTopDownLink is-external :link="link.to" :border-side="i === links.length - 1 ? 'left' : 'right'">
                        {{ link.name }} <FontAwesomeIcon :icon="link.icon" />
                    </SharedTopDownLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { faGithub, faLinkedin, type IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

interface FooterLink {
    name?: string;
    icon: IconDefinition;
    to: string;
}

const links: FooterLink[] = [
    { icon: faLinkedin, to: 'https://www.linkedin.com/in/stepan-turitsin/' },
    { name: '@stepan323446', icon: faGithub, to: 'https://github.com/stepan323446' }
];
</script>
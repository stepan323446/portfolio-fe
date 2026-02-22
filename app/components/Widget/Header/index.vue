<template>
    <div class="fixed lg:relative flex border-b-2 border-border-color bg-main-background z-50 w-full">
        <div class="lg:border-r-2 border-border-color flex items-center py-3 pl-6 w-[300px] shrink-0">
            stepan-turitsin
        </div>
        <nav 
        :class="[
            { 'hidden': !burgerMenu },
            'lg:flex', 'w-full', 'bg-main-background', 'z-50',
            'lg:relative', 'lg:mt-0', 'lg:h-auto',
            'fixed', 'mt-[49px]', 'h-[calc(100%-50px)]'

        ]">
            <ul 
            :class="[
                'justify-start', 'w-full',
                'lg:flex', 'block'
            ]">
                <li v-for="(link, i) in links" :key="link.to" :class="['w-full lg:w-fit', { 'ml-auto': i === links.length - 1 }]">
                    <SharedTopDownLink :link="link.to" :border-side="i === links.length - 1 ? 'left' : 'right'" @click="openCloseBurger()">
                        {{ link.name }}
                    </SharedTopDownLink>
                </li>
            </ul>
        </nav>
        <div class="flex lg:hidden items-center justify-center text-lg select-none h-auto w-14 ml-auto" @click="openCloseBurger()">
            <FontAwesomeIcon v-show="!burgerMenu" :icon="faBars"/>
            <FontAwesomeIcon v-show="burgerMenu" :icon="faClose"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { faBars, faClose }  from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const burgerMenu = ref(false);

interface HeaderLink {
    name: string;
    to: string;
}
const links: HeaderLink[] = [
    { name: '_hello', to: '/' },
    { name: '_about-me', to: '/about' },
    { name: '_projects', to: '/projects' },
    { name: '_contacts', to: '/contacts' }
];

const openCloseBurger = () => burgerMenu.value = !burgerMenu.value;
</script>
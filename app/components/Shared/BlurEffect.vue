<template>
    <div class="effect">
        <div class="blur blur-green blur-1"></div>
        <div class="blur blur-blue blur-2"></div>
        <div class="blur blur-blue blur-3"></div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.effect {
    position: relative;
}
.blur {
    position: absolute;

    width: 500px;
    height: 500px;
    opacity: 0.3;
    background: radial-gradient(circle at center, rgba(67, 217, 173, 1) 0%, rgba(67, 217, 173, 0) 70%);
}
.blur.blur-green {
    top: calc(50% - 160px);
    left: calc(50% - 140px);
    transform: translate(-50%, -50%);
}
.blur.blur-blue {
    bottom: calc(50% - 80px);
    right: calc(50% - 120px);
    transform: translate(50%, 50%);

    background: radial-gradient(circle at center, #4D5BCE 0%, #4d5bce00 70%);
}

.blur.blur-3 {
    bottom: calc(50% - 150px);
    right: calc(50% + 80px);
}

@keyframes blur-1-anim {

    0%,
    100% {
        top: calc(50% - 160px);
        left: calc(50% - 140px);
    }

    40% {
        top: calc(50% - 160px);
        left: calc(50% - 50px);
    }

    60% {
        top: calc(50% - 140px);
        left: calc(50% - 30px);
    }

    80% {
        top: calc(50% - 130px);
        left: calc(50% - 100px);
    }
}

@keyframes blur-2-anim {

    0%,
    100% {
        bottom: calc(50% - 80px);
        right: calc(50% - 120px);
    }

    40% {
        bottom: calc(50% - 200px);
        right: calc(50% - 100px);
    }

    60% {
        bottom: calc(50% - 140px);
        right: calc(50% - 30px);
    }

    80% {
        bottom: calc(50% - 130px);
        right: calc(50% - 100px);
    }
}

@keyframes blur-3-anim {

    0%,
    100% {
        bottom: calc(50% - 150px);
        right: calc(50% + 80px);
    }

    40% {
        bottom: calc(50% - 200px);
        right: calc(50% + 150px);
    }

    60% {
        bottom: calc(50% - 240px);
        right: calc(50% + 100px);
    }

    80% {
        bottom: calc(50% - 130px);
        right: calc(50% + 100px);
    }
}

.blur-1 {
    animation: blur-1-anim 7s infinite;
    animation-timing-function: linear;
}

.blur-2 {
    animation: blur-2-anim 7s infinite;
    animation-timing-function: linear;
}

.blur-3 {
    animation: blur-3-anim 7s infinite;
    animation-timing-function: linear;
}
</style>
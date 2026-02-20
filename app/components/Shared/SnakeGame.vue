<template>
    <div class="game-box">
        <div class="pin top left">
            <div class="pin-inner"></div>
        </div>
        <div class="pin top right">
            <div class="pin-inner"></div>
        </div>
        <div class="pin bottom left">
            <div class="pin-inner"></div>
        </div>
        <div class="pin bottom right">
            <div class="pin-inner"></div>
        </div>

        <div class="game-box__inner">
            <div class="game-canvas">
                <div class="game-canvas__info">
                    <div v-if="gameOver && !gameStarted" id="snake2d-text" class="text">
                        {{ gameOverText }}
                    </div>
                    <BaseButton v-if="!gameStarted" type="button" variant="primary" @click="startGame">
                        start-game
                    </BaseButton>
                </div>
                <canvas 
                    ref="canvas" 
                    :class="{
                        'first-show': !gameInit
                    }"
                    :style="{
                        backgroundImage: `url(${previewSnake})`
                    }"
                    width="225" height="390">
                </canvas>
            </div>
            <div class="game-info">
                <div class="game-info__control game-info__container">
                    <span>// use keyboard<br/>// arrows to play</span>

                    <div class="game-keys">
                        <div></div>
                        <div :class="['arrow', {'active': buttons.has('ArrowUp')}]">
                            <FontAwesomeIcon :icon="faCaretUp" />
                        </div>
                        <div></div>

                        <div :class="['arrow', {'active': buttons.has('ArrowLeft')}]">
                            <FontAwesomeIcon :icon="faCaretLeft" />
                        </div>
                        <div :class="['arrow', {'active': buttons.has('ArrowDown')}]">
                            <FontAwesomeIcon :icon="faCaretDown" />
                        </div>
                        <div :class="['arrow', {'active': buttons.has('ArrowRight')}]">
                            <FontAwesomeIcon :icon="faCaretRight" />
                        </div>
                    </div>
                </div>
                <div class="game-info__container">
                    <span>// food left</span>
                    <div class="food-list">
                        <div v-for="i in foodLeft" :key="i" class="food"></div>
                        <div v-for="i in foodEaten" :key="i" class="food eaten"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { faCaretUp, faCaretDown, faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Snake2d from '@/assets/snake2d'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import BaseButton from "./BaseButton.vue";
import previewSnake from '~/assets/snake.png';

const canvas = useTemplateRef('canvas')
const foodLimit = 10;

const foodEaten = ref(0);
const gameStarted = ref(false);
const gameInit = ref(false);
const gameOver = ref(false);
const buttons = reactive(new Set<string>());
const snakeGame = ref<null|Snake2d>(null);

const startGame = () => {
    gameInit.value = true;
    snakeGame.value?.Start();
}
const gameOverText = computed(() => {
    if(foodLimit == foodEaten.value)
        return "Win";

    return "Game Over";
});
const foodLeft = computed(() => {
    return foodLimit - foodEaten.value;
});

onMounted(() => {
    if(!canvas.value)
        return;

    Snake2d.config.sizeCeil = 15;
    snakeGame.value = new Snake2d({
        gameCanvas: canvas.value,

         onGameOver: () => {
            gameOver.value = true;
            gameStarted.value = false;
        },
        onStart: () => {
            gameStarted.value = true;
        },
        onGameScore: (score) => {
            foodEaten.value = score;
            if(foodEaten.value == foodLimit)
                snakeGame.value?.Stop();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (!snakeGame.value?._playing)
            return;

        // Control game by arrows
        snakeGame.value?.snake?.Control(e.code);

        // Key btn on display
        buttons.add(e.code);
    });
    document.addEventListener("keyup", (e) => {
        buttons.delete(e.code);
    });
});
</script>

<style scoped>
.game-box {
    position: relative;

    width: 510px;
    height: 475px;
    box-shadow: 2px 2px 15px -2px rgba(0, 0, 0, 0.53);

    background: linear-gradient(156deg, rgba(23, 85, 83, 1) 0%, rgba(67, 217, 173, 0.20) 100%);


    border: 3px solid #000;
    border-radius: 8px;
}

.game-box__inner {
    display: flex;
    box-shadow: inset -3px 16px 0px -12px rgb(255 255 255 / 29%);
    padding: 35px 30px;
    border-radius: 8px;
}

.game-box .pin {
    position: absolute;
    width: 13px;
    height: 13px;
    background: radial-gradient(circle, rgba(25, 108, 106, 1) 0%, rgba(17, 75, 74, 1) 100%);
    box-shadow: 3px 4px 10px -2px rgba(0, 0, 0, 0.75);
    border-radius: 100%;
}

.game-box .pin-inner {
    position: relative;
    box-shadow: inset -1px 9px 18px -17px rgb(255 255 255 / 75%);
    width: 100%;
    height: 100%;
    border-radius: 100%;
}

.game-box .pin.top {
    top: 12px;
}

.game-box .pin.bottom {
    bottom: 12px;
}

.game-box .pin.left {
    left: 12px;
}

.game-box .pin.right {
    right: 12px;
}

.game-box .pin-inner::before,
.game-box .pin-inner::after {
    content: '';
    top: 6px;
    left: 3px;

    position: absolute;
    width: 7px;
    height: 2px;
    background: #114944;
}

.game-box .pin-inner::before {
    transform: rotateZ(45deg);
}

.game-box .pin-inner::after {
    transform: rotateZ(-45deg);
}

.game-canvas {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 240px;
    height: 405px;
    border-radius: 8px;
    box-shadow: inset -1px -2px 15px -2px rgba(0, 0, 0, 0.75);
    background: #011627;
}

.game-canvas canvas.first-show {
    background-size: contain;
}
.game-canvas canvas:not(.first-show) {
    background-image: none !important;
}

.game-canvas__info {
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    left: 0;
    bottom: 65px;
    width: 100%;
}

.game-canvas__info .text {
    @apply text-accent2;
    font-size: 24px;
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
    background: #00101cd6;
    box-shadow: inset 2px 2px 15px -2px rgba(0, 0, 0, 0.53);

    width: 100%;
    padding: 12px 10px;
    margin-bottom: 20px;
}



.game-info {
    margin-left: 24px;
}

.game-info span {
    display: block;
    font-size: 14px;
    line-height: 1.3;
    color: #fff;
}

.game-info__container {
    padding: 13px;
}

.game-info__control {
    background: rgb(1 20 35 / 19%);
    border-radius: 8px;
    margin-bottom: 20px;
}

.game-info__control .game-keys {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 15px;
    gap: 5px;
    width: 100%;
}

.game-info__control .game-keys .arrow {
    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;
    line-height: 1;
    width: 49px;
    height: 28px;

    background: #010C15;
    border: 1px solid #1E2D3D;
    border-radius: 8px;
}

.game-info__control .game-keys .arrow.active {
    background: #4f5153;
}

.game-info .food-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin-top: 10px;
    column-gap: 0px;
    row-gap: 18px;
}

.game-info .food {
    position: relative;
    width: 11px;
    height: 11px;
    border-radius: 3px;
    @apply bg-accent2;

    box-shadow: 0px 0px 0px 5px #43d9ad2e;
}

.game-info .food.eaten {
    opacity: 0.3;
}
@media only screen and (max-width: 1200px) {
  .game-box {
    display: none;
  }
}
</style>
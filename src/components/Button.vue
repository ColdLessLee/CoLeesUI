<script setup lang="ts">
import { ref } from "vue";

export interface cssModule {
    height?: number,
    width?: number,
    background?: string,
    backgroundModule?: {
        backgroundImage?: string,
        backgroundColor?: string
    },
    border?: string,
    borderModule?: {
        borderColor?: string,
        borderWidth?: string,
        borderRadios?: string,
    },
    cursor?: string,
    hover?: {}
}

const emits = defineEmits(['click'])
defineProps<{ cssModule?: cssModule, styllers?: string }>()
const coButton = ref<SVGElement | null | EventTarget | any>()
function mainClick(e?: Event) {
    coButton.value = e?.currentTarget
    emits('click', e?.currentTarget)
}
</script>

<template>
    <svg draggable="true" :style="$props.cssModule || {}" :height="$props.cssModule?.height || 60"
         :width="$props.cssModule?.width || 120" id="cobutton" @click="mainClick">
        <rect x="0" y="0" height="100%" rx="8" ry="8" width="100%" />
    </svg>
</template>

<style scoped>
#cobutton {
    overflow: visible;
    fill: skyblue;
    stroke: pink;
    stroke-width: 2;
    transition: linear .3s;
}
</style>
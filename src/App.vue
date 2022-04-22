<script setup lang="ts">
import { ref, watchEffect } from "vue";

const test = ref<number>(0)

function handelClick(params?: any) {
  test.value += 1
  console.log(test.value)

}

</script>

<template>
  <h1 style="margin-bottom: 25px;">hi CoUI</h1>
  <coButton @click="handelClick" :cssModule="{
    width: 180, height: 80, cursor: 'pointer',
  }" />
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  width: 100%;
  user-select: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  height: 100%;
  padding-top: 150px;
}
</style>

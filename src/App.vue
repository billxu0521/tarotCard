<script >
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { defineComponent } from 'vue';
import store from "./store/index.js";
import { provide } from "vue";

export default defineComponent({
  name: 'App',
  setup() {
    provide("mapStore", store);
  },
})
</script>

<template>
  <router-view />
</template>

<style scoped>

</style>

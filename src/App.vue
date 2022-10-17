<script >
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import BasicCard from './views/BasicCard.vue'
import { defineComponent } from 'vue';
import store from "./store/index.js";
import { provide } from "vue";


export default defineComponent({
  name: 'App',
  components: {
    BasicCard
  },
  setup() {
    provide("mapStore", store);
  },
})
</script>

<template>
    <BasicCard />

</template>

<style scoped>

</style>

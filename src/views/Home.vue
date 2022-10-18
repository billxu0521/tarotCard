<script >
import Button from '../components/Button.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    Button
  },
  setup() {
    const goToPage = (url) => {
      console.log(url)
      window.location.href =  '/'+url;
    }
    
    return {
      goToPage,
    };
  },
})

</script>

<template>
  
  <Button class="rounded-full" @click="goToPage('diamondcard')"><a href="">鑽石牌陣</a></Button>
  <Button class="rounded-full" @click="goToPage('selectcard')"><a href="">選擇牌陣</a></Button>

</template>

<style scoped>

</style>

<script >
import Button from '../components/Button.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ChiocePage',
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
  
  
  <div class="container mx-auto px-4 my-20 flex flex-col items-center">
    
    <Button class="rounded-full my-4" @click="goToPage('diamondcard')">鑽石牌陣</Button>
    <Button class="rounded-full my-4" @click="goToPage('selectcard')">選擇牌陣</Button>
    <Button class="rounded-full my-4" >時間之流</Button>
    <Button class="rounded-full my-4" >關係牌陣</Button>

    <Button class="rounded-full my-4" @click="goToPage('')">返回</Button>

  </div>  
</template>

<style scoped>

</style>

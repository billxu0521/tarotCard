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
      <div  class="my-2 hover:text-blue-600/75 hover:subpixel-antialiased antialiased">和人有關，想知道對方怎麼看自己還有未來發展</div>
      <div @click="goToPage('selectcard')" class="my-2 hover:text-blue-600/75 hover:subpixel-antialiased antialiased">已經有想好的做法或項目，但不知道哪一個好</div>
      <div class="my-2 hover:text-blue-600/75 hover:subpixel-antialiased antialiased">想確定時間，未來六個月內的情形</div>
      <div @click="goToPage('diamondcard')" class="my-2 hover:text-blue-600/75 hover:subpixel-antialiased antialiased">想知道關鍵問題、影響和解決方式</div>
    </div>
</template>

<style scoped>

</style>

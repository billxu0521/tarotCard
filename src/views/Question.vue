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
    <div class="md:container md:mx-auto sm:container sm:mx-auto h-screen px-4 my-20 grid grid-cols-2 gap-4">
      <div  class="">
        <div class="text-5xl">時間之流</div>
        <div class="my-5 text-xl">如果已經有想好的做法或項目，但不知道哪一個好</div>
        <div class="my-1">> 要不要換工作，要或不要？</div>
        <div class="my-1">> 要不要分手，要或不要？</div>
        <div class="my-1">> A工作還是B工作，哪個好？</div>
        <div class="my-1">> 選A還是選B？</div>
      </div>
      <div  class="">
        <div class="text-5xl">鑽石牌陣</div>
        <div class="my-5 text-xl">想知道關鍵問題、影響和解決方式</div>
        <div class="my-1">> 和某人為什麼處不來？</div>
        <div class="my-1">> 和某人為什麼不能熟悉起來？</div>
        <div class="my-1">> 工作為什麼不順利？</div>
        <div class="my-1">> 找工作困難的原因？</div>
      </div>
      <div  class="">
        <div class="text-5xl">選擇牌陣</div>
        <div class="my-5 text-xl">想確定時間，未來六個月內的情形</div>
        <div class="my-1">> 桃花運</div>
        <div class="my-1">> 工作運</div>
        <div class="my-1">> 某件事什麼時候進行比較適合？</div>
      </div>
      <div  class="">
        <div class="text-5xl">關係牌陣</div>
        <div class="my-1">和人有關，想知道對方怎麼看自己還有未來發展</div>
        <div class="my-1">和對方未來的發展</div>
        <div class="my-1">包括戀愛、情侶、朋友</div>
        <div class="my-1">上司、認識的人等等</div>
      </div>
     
    </div>
</template>

<style scoped>

</style>

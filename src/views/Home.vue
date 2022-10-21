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
  <div class="absolute -top-2 -left-2 ">        
    <img class="h-20 w-20 -rotate-90" src="../assets/bg-2.png" alt=""/>
  </div>
  <div class="absolute -top-2 -right-2">
    <img class="h-20 w-20 rotate-0" src="../assets/bg-2.png" alt=""/>
  </div>
  <div class="absolute -bottom-2 -left-2">
    <img class="h-20 w-20 -rotate-180" src="../assets/bg-2.png" alt=""/>
  </div>
  <div class="absolute -bottom-2 -right-2">
    <img class="h-20 w-20 rotate-90" src="../assets/bg-2.png" alt=""/>
  </div>
  <div class="container h-screen flex flex-col justify-center item-center mx-auto">
    <div class="flex flex-row justify-around items-center ">
      <div class="flex flex-col items-center ">
        <div class="">
          <img class="mx-auto w-1/2 md:w-1/3" src="../assets/image-1-1.png" alt=""/>
        </div>
        <div class="">
          <img class="mx-auto w-1/2 md:w-1/3" src="../assets/image-1-3.png" alt=""/>
        </div>
      </div>
      <div class="w-3/6 flex flex-col justify-center items-center hidden md:inline">
        <div id="pagetitle" class="my-10 text-8xl text-center text-[#FFDB72] ">
        <h1>塔羅</h1>
        <h1>線上抽牌</h1>
        </div>
        <div>
          <div class="text-xl text-center">
          從你的問題
          </div>
          <div class="text-xl text-center">
          使用最適合的牌陣
          </div>
          <div class="text-xl text-center">
          獲得最清楚的答案
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <div class="">
          <img class="mx-auto w-1/2 md:w-1/3" src="../assets/image-1-2.png" alt=""/>
        </div>
        <div class="">
          <img class="mx-auto w-1/2 md:w-1/3" src="../assets/image-1-3.png" alt=""/>
        </div>
      </div>
    </div>
  <div class="">
    <div class="mx-auto w-3/6 flex flex-col justify-center items-center inline md:hidden">
      <div id="pagetitle" class="my-10 text-5xl text-center text-[#FFDB72] ">
      <h1>塔羅</h1>
      <h1>線上抽牌</h1>
      </div>
      <div>
        <div class="text-xl text-center">
        從你的問題
        </div>
        <div class="text-xl text-center">
        使用最適合的牌陣
        </div>
        <div class="text-xl text-center">
        獲得最清楚的答案
        </div>
      </div>
  </div>
  
    </div>
  </div>
  <div class="container mx-auto md:container md:mx-auto sm:container sm:mx-auto h-min md:h-screen   grid grid-cols-1 md:grid-cols-2 gap-4 text-center " >
      <div>
        <div class="text-5xl mt-20 hover:text-[#FFDB72]" @click="goToPage('selectcard')">選擇牌陣</div>
        <div class="flex flex-row justify-around">
          <div  class=" pb-30">
            <img class="w-40 pb-30" src="../assets/image-2-1.png" alt=""/>
          </div>
          <div class="text-left">
            <div class="my-5 text-2xl">已經有想好的做法或項目，但不知道哪一個好</div>
            <div class="my-1 text-xl">> 要不要換工作，要或不要</div>
            <div class="my-1 text-xl">> 要不要分手，要或不要</div>
            <div class="my-1 text-xl">> Ａ工作還是Ｂ工作好</div>
            <div class="my-1 text-xl">> 選Ａ好還是選Ｂ好</div>
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-row justify-around">
          <div class="text-5xl mt-20 hover:text-[#FFDB72]" @click="goToPage('diamondcard')">鑽石牌陣</div>
          <div  class=" ">
            <img class="w-40" src="../assets/image-2-4.png" alt=""/>
          </div>
        </div>
        <div class="mx-10 sm:mx-10 md:40 text-left">
            <div class="my-5 text-2xl">想知道關鍵問題、影響和解決方式</div>
            <div class="my-1 text-xl">> 和某人為什麼處不來</div>
            <div class="my-1 text-xl">> 和某人為什麼不能熟悉起來</div>
            <div class="my-1 text-xl">> 工作為什麼不順利</div>
            <div class="my-1 text-xl">> 找工作困難的原因</div>
          </div>
      </div>
      <div class="">
        <div class="flex flex-row justify-center">
          <div  class="">
            <img class="w-40 pb-30" src="../assets/image-2-2.png" alt=""/>
          </div>
          <div class="text-5xl mt-20 hover:text-[#FFDB72]">時間之流</div>
        </div>
        <div class="mx-10 sm:mx-10 md:40 text-left">
            <div class="my-5 text-2xl">想確定未來六個月內的狀況</div>
            <div class="my-1 text-xl">> 桃花運</div>
            <div class="my-1 text-xl">> 工作運</div>
            <div class="my-1 text-xl">> 某件事什麼時候比較適合進行</div>
          </div>
      </div>
      <div class="flex flex-row justify-center my-20">
        <div  class="">
            <img class="w-40 " src="../assets/image-2-3.png" alt=""/>
          </div>
          <div class="">
            <div class="text-5xl hover:text-[#FFDB72]">關係牌陣</div>
            <div class="ml-10 my-5 text-xl text-left ">
              <div class="my-1">和人有關</div>
              <div class="my-1">想知道對方怎麼看自己、</div>
              <div class="my-1">和對方的未來發展</div>
              <div class="my-1">包括戀愛、情侶、朋友、上司、認識的人等</div>
          </div>
          </div>
        
      </div>
     
    </div>
  <div class="container mx-auto h-screen flex flex-col  justify-center items-center ">
    <img class="scale-50 spin-slow" src="../assets/image-3-1.png" alt="">
    <div class=" text-xl text-center ">
      若需要解牌請洽
      <div id="shopeelink" class="my-10 text-7xl text-center text-[#FFDB72] hover:text-[#012966]">
        塔羅占卜
      </div>
      
    </div>
    
  </div>    
</template>

<style scoped>
#pagetitle , #shopeelink{
  -webkit-text-stroke: 1px #000000;
}

#contact{

}
</style>

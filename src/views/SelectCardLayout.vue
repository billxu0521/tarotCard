
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
  <div class="container  flex flex-col justify-between item-center mx-auto">
    <div class="flex flex-col justify-center item-center mx-auto w-[60vw] text-xl h-screen ">
      <div class="text-gray-600" @click="scrollPageTo('select')">
        <p class="text-center">占卜前：</p>
        <p class="text-left">1. 占卜只有占與自己相關的事情才會準確
          與自己無關的事情問了也沒用</p>
        <p class="text-left">2. 盡量在安靜、可以集中精神的地方</p>
        <p class="text-left">3. 在心中默念你的問題，直到你覺得可以了為止</p>
        <p class="text-left">4. 點選抽牌</p>
        <p class="text-center" >準備好了就繼續往下看</p>
      </div>
    </div>
    <div id="select" class="flex flex-col justify-between item-center h-full">
      <diamond-card-layout v-if="componentController['diamondcard']" :key="componentKey" ></diamond-card-layout>
      <chioce-card-layout v-else-if="componentController['chiocecard']" :key="componentKey" ></chioce-card-layout>
      <relation-card-layout v-else-if="componentController['relationcard']" :key="componentKey" ></relation-card-layout>
      <time-flow-card-layout v-else-if="componentController['timeflowcard']" :key="componentKey" ></time-flow-card-layout>

      <div class="flex flex-row justify-center p-10">
        <button
        @click="reDeal"
          class="py-2 px-4 bg-transparent text-[#012966] font-semibold border border-[#012966] rounded hover:bg-[#012966] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 "
        >重抽一次
        </button>
        <button
          class="py-2 px-4 bg-transparent text-[#012966] font-semibold border border-[#012966] rounded hover:bg-[#012966] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 "
          >若需個人化解讀服務，請洽塔羅占卜
        </button>
        <button
          class="py-2 px-4 bg-transparent text-[#012966] font-semibold border border-[#012966] rounded hover:bg-[#012966] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 "
            @click="goToPage('')"
          >回首頁
        </button>
      </div>
    </div>

  </div>
</template>

<script>
import { onMounted,defineComponent,getCurrentInstance,reactive,ref } from 'vue';
import SingleCard  from '../components/SingleCard.vue';
import { useRoute, useRouter } from 'vue-router';
import DiamondCardLayout  from '../views/DiamondCardLayout.vue';
import ChioceCardLayout  from '../views/ChioceCardLayout.vue';
import RelationCardLayout  from '../views/RelationCardLayout.vue';
import TimeFlowCardLayout  from '../views/TimeFlowCardLayout.vue';

export default defineComponent({
  name: 'SelectCardLayout',
  components: { 
    SingleCard,
    DiamondCardLayout,
    ChioceCardLayout,
    RelationCardLayout,
    TimeFlowCardLayout
  },
  props:{

  },
  theme: {
    container: {
      center: true,
    },
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const { page } = route.params;
    const componentController = reactive({
      diamondcard : false,
      chiocecard : false,
      relationrcard : false,
      timeflowcard : false,
    })
    
    const componentKey = ref(0);

    const forceRerender = () => {
      componentKey.value += 1;
    };

    const reDeal = () => {
      forceRerender();
    }

    const goToPage = (url) => {
      console.log(url)
      window.location.href =  '/'+url;
    }

    console.log(page);
    const scrollPageTo = (navEl) => {
      console.log(`#${navEl}`);
      let element = document.querySelector(`#${navEl}`);
      console.log(element);
      element.scrollIntoView({ behavior: "smooth" });
    };
  
    //等基本DOM渲染後再讀資料
    onMounted(() => {
      componentController[page] = true
      console.log(componentController)
    });
    
    return {
      reDeal,
      componentKey,
      componentController,
      scrollPageTo,
      goToPage
    }
  },
  
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>



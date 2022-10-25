<template>
  <div class="md:pt-20 grid md:grid-flow-col-dense md:grid-cols-3 md:grid-rows-3 gap-4">
    <div class="col-span-1 md:row-span-3 md:col-span-2 ">
      <div class="grid grid-cols-3 gap-2 h-[80vh] ">
        <single-card :filedtitle="'結果'" :sort="0"></single-card>
        <div ></div>
        <single-card :filedtitle="'過程'" :sort="1"></single-card>
        <single-card :filedtitle="'結果'" :sort="2"></single-card>
        <div></div>
        <single-card :filedtitle="'過程'" :sort="3"></single-card>
        <div class="text-center">A.選項</div>
        <single-card :filedtitle="'結果'" :sort="4"></single-card>
        <div class="text-center">B.選項</div>
      </div>
  
    </div>
    <div class="col-span-1  md:col-span-1 md:relative">
      <div class="text-xl md:text-2xl md:absolute md:bottom-0">
        <div>選擇牌陣用於對單一事件已經想好選項但是不知道該選哪個，或是遇到的問題為是非題的時候使用。</div>
      </div>
    </div>
    <div class="col-span-1  md:row-span-2 md:col-span-1 text-base md:text-lg subpixel-antialiased font-light">
      <div>
          <div>1. 目前狀態：你本身目前的狀況如何，作為結合後續牌面解讀參考使用左排為A選項，右排為B選項</div>
          <div>2. A/B選項過程：你選擇該選項之後，會遇到的一些狀況和心情</div>
          <div>3. A/B選項結果：你選擇該選項之後，最後會得到的結果（通常為三個月至半年左右的狀態）</div>
        </div>
    </div>
  </div>
  </template>

<script>
import { inject,reactive,onMounted,defineComponent,ref } from 'vue';
import cardData from "../data/data.json";
import SingleCard  from '../components/SingleCard.vue';

export default defineComponent({
  name: 'ChioceCardLayout',
  components: { 
    SingleCard,
  },
  theme: {
    container: {
      center: true,
    },
  },
  setup() {
    const mapStore = inject("mapStore");
    const { state, setCurrentCard, setAllCurrentCard, addSelectCard} = mapStore;
    const data = reactive({
      selectedCard:[],
    });

    
    const selectSort = ref(0)
    const isOpen = ref(false)

    const createSeed = () => {
      let max = (state.currentCard).length
      let seed = Math.floor(Math.random() * max);
      return seed
    }

    //發牌
    const dealAllCard = () => {
      for (let index = 0; index < 5; index++) {
        let seed = createSeed()
        let pickACard = state.currentCard[seed]
        addSelectCard(pickACard.name,index)
        setCurrentCard(pickACard.name)
        
      }
    }

    const reDeal = () => {
      location.reload();
    }

    //等基本DOM渲染後再讀資料
    onMounted(() => {
      data.allCard = cardData.tarot
      setAllCurrentCard(cardData.tarot)
      dealAllCard()

    });
    
    return {
      data,
      cardData,
      isOpen,
      selectSort,  
      reDeal    
    }
  },
  
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>



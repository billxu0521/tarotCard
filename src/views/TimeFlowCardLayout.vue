
<template>
<div class="pt-20 grid md:grid-flow-col-dense md:grid-cols-3 md:grid-rows-3 gap-4 ">
  <div class="md:row-span-3 md:col-span-2 overflow-auto">
    <div class="flex md:grid md:grid-cols-6 gap-2 h-[80vh] w-[80vw] md:w-[50vw]">
      <single-card class="min-w-[200px]" :filedtitle="'一個月後'" :sort="0"></single-card>
      <single-card class="min-w-[200px]" :filedtitle="'兩個月後'" :sort="1"></single-card>
      <single-card class="min-w-[200px]" :filedtitle="'三個月後'" :sort="2"></single-card>
      <single-card class="min-w-[200px]" :filedtitle="'四個月後'" :sort="3"></single-card>
      <single-card class="min-w-[200px]" :filedtitle="'五個月後'" :sort="4"></single-card>
      <single-card class="min-w-[200px]" :filedtitle="'六個月後'" :sort="5"></single-card>
    </div>

  </div>
  <div class="col-span-1  md:row-span-2 md:col-span-1  md:relative">
    <div class="text-xl md:text-2xl md:absolute md:bottom-20">
      <div>時間之流用於想知道運勢或事件發展，通常第一張牌會以抽牌時的當月或下個月為主，後面依此類推</div>
    </div>
  </div>
 
</div>
</template>

<script>
import { inject,reactive,onMounted,defineComponent,ref } from 'vue';
import cardData from "../data/data.json";
import SingleCard  from '../components/SingleCard.vue';

export default defineComponent({
  name: 'TimeFlowCardLayout',
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
      for (let index = 0; index < 6; index++) {
        let seed = createSeed()
        let pickACard = state.currentCard[seed]
        addSelectCard(pickACard.name,index)
        setCurrentCard(pickACard.name)
        
      }
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
           
    }
  },
  
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>



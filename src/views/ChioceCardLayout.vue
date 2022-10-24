
<template>
<div class="py-20 grid md:grid-flow-col-dense md:grid-cols-3 md:grid-rows-3 gap-4">
  <div class="col-span-1 md:row-span-3 md:col-span-2 h-[70vh]">
    <div class="grid grid-cols-3 gap-2 h-min	h-[70vh]">
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
  <div class="col-span-1  md:col-span-1 h-[30vh] md:relative">
    <div class="text-xl md:absolute md:bottom-0">
      <div>關係牌陣用於得知別人如何看自己，以及打算如何對待你，還有未來的發展或相處情形。</div>
    </div>
  </div>
  <div class="col-span-1  md:row-span-2 md:col-span-1">
    <div>
        <div>1. 對方對你的看法：對方如何看待你</div>
        <div>2. 過去：一直以來你們相處的狀況，可做為其他牌面解讀的參考</div>
        <div>3. 現在：目前雙方相處的狀況，若是負面牌，也可視為目前雙方遇到的問題</div>
        <div>4. 未來：目前狀況繼續發展下去，兩人之間的關係狀況</div>
        <div>5. 對方目前想採取的作法：對方目前為止判斷你的方式讓他之後想要如何與你相處</div>
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



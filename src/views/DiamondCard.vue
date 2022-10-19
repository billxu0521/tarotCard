
<template>
  <div class="container mx-auto ">
    <button @click="reDeal" title=""
      class="fixed z-90 bottom-10 right-8 bg-blue-600 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-xl ">
      重新翻牌
    </button>
    <div class="grid grid-cols-3 gap-2 h-screen">
      <div></div>
      <single-card :filedtitle="'結果'" :sort="0"></single-card>
      <div></div>
      <single-card :filedtitle="'內心掙扎'" :sort="1"></single-card>
      <single-card :filedtitle="'核心問題'" :sort="2"></single-card>
      <single-card :filedtitle="'外部紛擾'" :sort="3"></single-card>
      <div></div>
      <single-card :filedtitle="'建議'" :sort="4"></single-card>
      <div></div>
    </div>
   
    <!-- <Button class="rounded-full" @click="openCardModal" >抽牌</Button> -->
    <!-- <modal :open="isOpen" :sort="selectSort" @close="isOpen = !isOpen"> -->
  <!-- </modal> -->
  </div>
  
</template>

<script>
import { inject,reactive,onMounted,defineComponent,ref } from 'vue';
import cardData from "../data/data.json";
import SingleCard  from '../components/SingleCard.vue';

export default defineComponent({
  name: 'DiamondCard',
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



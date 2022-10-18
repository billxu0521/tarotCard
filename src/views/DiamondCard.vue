
<template>
  <div class="container mx-auto ">
    <div class="grid grid-cols-3 gap-2 h-screen">
      <div></div>
      <single-card @click="openCardModal(0)" :isFlop="data.isFlop[0]" :filedtitle="'結果'" :sort="0"></single-card>
      <div></div>
      <single-card @click="openCardModal(1)" :isFlop="data.isFlop[1]" :filedtitle="'內心掙扎'" :sort="1"></single-card>
      <single-card @click="openCardModal(2)" :isFlop="data.isFlop[2]" :filedtitle="'核心問題'" :sort="2"></single-card>
      <single-card @click="openCardModal(3)" :isFlop="data.isFlop[3]" :filedtitle="'外部紛擾'" :sort="3"></single-card>
      <div></div>
      <single-card @click="openCardModal(4)" :isFlop="data.isFlop[4]" :filedtitle="'建議'" :sort="4"></single-card>
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
import Button from '../components/Button.vue';

export default defineComponent({
  name: 'DiamondCard',
  components: { 
    SingleCard,
    Button
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
      allCard:'',
      selectedCard:[],
      isFlop:[false,false,false,false,false],
    });

    
    const selectSort = ref(0)
    const isOpen = ref(false)

    const openCardModal = (sort) =>{
      //if((state.selectedCard).length > 4) return
      //if(state.selectedCard[sort] != '') return
      //isOpen.value = !isOpen.value;
      //selectSort.value = sort
      //console.log(selectSort)
      data.isFlop[sort] = true
      console.log(data.isFlop[sort])
      
    }
    const createSeed = () => {
      let max = (state.currentCard).length
      let seed = Math.floor(Math.random() * max);
      return seed
    }

    const dealAllCard = () => {
      for (let index = 0; index < 5; index++) {
        let seed = createSeed()
        let pickACard = state.currentCard[seed]
        addSelectCard(pickACard.name,index)
        setCurrentCard(pickACard.name)
        
      }
    }



    //等基本DOM渲染後再讀資料
    onMounted(() => {
      console.log(cardData)  
      data.allCard = cardData.tarot
      setAllCurrentCard(cardData.tarot)
      console.log(state.currentCard)  
      dealAllCard()
      console.log(state.selectedCard)  
      //直接抽五張

    });
    
    return {
      data,
      cardData,
      isOpen,
      selectSort,
      openCardModal,
      
    }
  },
  
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>



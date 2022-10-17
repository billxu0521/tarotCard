
<template>
  <div class="container mx-auto ">
    <div class="grid grid-cols-3 gap-2 h-screen">
      <div></div>
      <single-card @click="openCardModal(0)" :filedtitle="'1.結果'" :sort="0"></single-card>
      <div></div>
      <single-card @click="openCardModal(1)" :filedtitle="'2.內心掙扎'" :sort="1"></single-card>
      <single-card @click="openCardModal(2)" :filedtitle="'3.核心問題'" :sort="2"></single-card>
      <single-card @click="openCardModal(3)" :filedtitle="'4.外部紛擾'" :sort="3"></single-card>
      <div></div>
      <single-card @click="openCardModal(4)" :filedtitle="'5.建議'" :sort="4"></single-card>
      <div></div>
    </div>
    <!-- <Button class="rounded-full" @click="openCardModal" >抽牌</Button> -->
    <modal :open="isOpen" :sort="selectSort" @close="isOpen = !isOpen">
  </modal>
  </div>
</template>

<script>
import { inject,reactive,onMounted,defineComponent,ref } from 'vue';
import cardData from "../data/data.json";
import SingleCard  from '../components/SingleCard.vue';
import Modal  from '../components/Modal.vue';
import Button from '../components/Button.vue';

export default defineComponent({
  name: 'BasicCard',
  components: { 
    SingleCard,
    Modal,
    Button
  },
  theme: {
    container: {
      center: true,
    },
  },
  setup() {
    const mapStore = inject("mapStore");
    const { state, setAllCurrentCard} = mapStore;

    const data = reactive({
      allCard:'',
      selectedCard:[],
    });

    const selectSort = ref(0)
    const isOpen = ref(false)

    const openCardModal = (sort) =>{
      //if((state.selectedCard).length > 4) return
      if(state.selectedCard[sort] != '') return
      isOpen.value = !isOpen.value;
      selectSort.value = sort
      console.log(selectSort)
    }

    //等基本DOM渲染後再讀資料
    onMounted(() => {
      console.log(cardData)  
      data.allCard = cardData.tarot
      setAllCurrentCard(cardData.tarot)
      console.log(state.currentCard)  
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



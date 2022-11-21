
<template>
<div class="md:pt-20 grid md:grid-flow-col-dense md:grid-cols-3 md:grid-rows-3 gap-4">
  <div class="col-span-1 md:row-span-3 md:col-span-2 ">
    <div class="grid grid-cols-3 gap-2 h-[80vh] ">
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

  </div>
  <div class="col-span-1  md:col-span-1 md:relative">
    <div class="text-xl md:text-2xl md:absolute md:bottom-0">
      <div>鑽石牌陣用於確認單一事件的核心問題與尋找解決方法。</div>
    </div>
  </div>
  <div class="col-span-1  md:row-span-2 md:col-span-1 text-base md:text-lg subpixel-antialiased font-light">
    <div>
        <div>1. 核心問題：你想問的事件最主要面對的問題是什麼，我們在對事情感到困惑的時候，常常會因為注意細節而忽略最重要的問題，這張牌會告訴你那個最重要的核心、第一個必須解決的是什麼</div>
        <div>2. 內心掙扎：你個人面對這個問題的時候的內心想法和掙扎</div>
        <div>3. 外部紛擾：目前外界有什麼影響著這件事情，或是環境有什麼干擾</div>
        <div>4. 建議：建議你該怎麼去調整作法或心境，才能夠朝向想要的結果</div>
        <div>5. 結果：若沒有照著建議進行，是以目前的狀況持續下去，會得到什麼結果</div>
      </div>
  </div>
</div>
</template>

<script>
import { inject,reactive,onMounted,defineComponent,ref } from 'vue';
import cardData from "../data/data.json";
import SingleCard  from '../components/SingleCard.vue';

export default defineComponent({
  name: 'DiamondCardLayout',
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
        addSelectCard(pickACard.image,index)
        //setCurrentCard(pickACard.name)
        
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



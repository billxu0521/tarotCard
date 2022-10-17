<template>
  <transition name="fade">
    <div class="vue-modal" v-show="open">
      <transition name="drop-in">
        <div class="vue-modal-inner" v-show="open">
          <div class="vue-modal-content">
            <slot />
            <img src="../assets/hxt9hEx.png" alt="">
            {{data.nowCard.name }}
            <Button class="rounded-full" @click="selectCard(data.nowCard.name)">翻牌</Button>
            <br/>
            <Button class="rounded-full" @click="changeCard">換牌</Button>
            <br/>
            <Button class="rounded-full" @click="close">關閉</Button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import { inject, toRefs,reactive,onMounted, onUnmounted } from 'vue';
import Button from '../components/Button.vue';

export default {
  name:'Modal',
  components:{
    Button
  },
  props: {
    open: {
      type: Boolean,
      required: true,
    },
    sort:{
      type:Number,
    }
  },
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };
    
    const handleKeyup = (event) => {
      if (event.keyCode === 27) {
        close();
      }
    };

    onMounted(() => document.addEventListener("keyup", handleKeyup));
    onUnmounted(() => document.removeEventListener("keyup", handleKeyup));

    //這邊處理翻牌事件
    const mapStore = inject("mapStore");
    const { state, addSelectCard, setCurrentCard,setAllCurrentCard} = mapStore;
    const data = reactive({
      nowCard:'',
    });

    return { 
      close,
      data,
      ...toRefs(state),
      addSelectCard, 
      setCurrentCard,
      setAllCurrentCard
    };
  },
  watch:{
    'open': function openTraggle () {
      let max = (this.currentCard).length
      let seed = Math.floor(Math.random() * max);
      this.data.nowCard = this.currentCard[seed]
      console.log(this.sort)
    }
  },
  methods: {
    selectCard(cardName){
      // if((this.selectedCard).length > 4) {
      //   data.nowCard = ''
      //   this.close()
      //   return
      // }
      let _i = this.sort
      console.log(_i)
      this.addSelectCard(cardName,_i)
      this.setCurrentCard(cardName)
      console.log(this.selectedCard)
      console.log(this.currentCard)
      
      this.close()
    },
    changeCard(){
      let max = (this.currentCard).length
      let seed = Math.floor(Math.random() * max);
      this.data.nowCard = this.currentCard[seed]
    }
  }
};
</script>

<style scoped>
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.vue-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.vue-modal-inner {
  max-width: 500px;
  margin: 2rem auto;
}

.vue-modal-content {
  position: relative;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-clip: padding-box;
  border-radius: 0.3rem;
  padding: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.drop-in-enter-active,
.drop-in-leave-active {
  transition: all 0.3s ease-out;
}

.drop-in-enter-from,
.drop-in-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
</style>

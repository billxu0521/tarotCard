<template>
  <div class="common-layout">
    <el-container>
      <el-main class="card-container">

        <el-row style="overflow: auto;padding-bottom: 5%;padding-top: 1%;">
          選牌區:
          <el-col style="height: 200px;position: relative;">
            <div class="tarot-card" :style="{ left:20 * i + `px` }" v-for="(card,i) in data.card" @click="selectCard(i)" :key="i">{{card.name}}</div>
          </el-col>
        </el-row>


        鑽石牌陣
        <el-row>
          <el-col :span="8"></el-col>
          <el-col :span="8">
            <div class="cardarry box-card">
              結果:
              <div class="cardselect" v-if="data.select[0] != null" @click="removeCard(0)">{{data.select[0].name}} </div>
            </div>
          </el-col>
          <el-col :span="8"></el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="cardarry box-card">
              內心掙扎:
              <div class="cardselect" v-if="data.select[1] != null" @click="removeCard(1)">{{data.select[1].name}}</div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="cardarry box-card">
              核心問題:
              <div class="cardselect" v-if="data.select[2] != null" @click="removeCard(2)">{{data.select[2].name}}</div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="cardarry box-card">
              外部紛擾:
              <div class="cardselect" v-if="data.select[3] != null" @click="removeCard(3)">{{data.select[3].name}}</div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
          <el-col :span="8">
            <div class="cardarry box-card">
              建議:
              <div class="cardselect" v-if="data.select[4] != null" @click="removeCard(4)">{{data.select[4].name}}</div>
            </div>
          </el-col>
          <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
        </el-row>


       
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { reactive,onMounted,defineComponent } from 'vue';
import cardData from "../data/data.json";

export default defineComponent({
  name: 'BasicCard',
  setup() {
  const data = reactive({
    card:'',
    select:[]
  });
  //等基本DOM渲染後再讀資料
  onMounted(() => {
    console.log(cardData)  
    data.card = cardData.tarot
      
  });
  
  return {
    data,
    cardData
    };
  },
  methods: {
    selectCard(i) {
      if ((this.data.select).length >  5)  return;
      (this.data.select).push(this.data.card[i])
      this.data.card.splice(i, 1); 
      
      console.log(this.data.select)
    },
    removeCard(i){
      if ((this.data.select).length == 0)  return;
      (this.data.card).push(this.data.select[i])
      this.data.select.splice(i, 1); 
    }
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cardarry{
  border-style:groove;
  margin: auto;
  height: 100%;
  width: 100%;
}

.tarot-card{
  position:absolute;
  height: 200px;
  width: 150px;
  background-image: url('../assets/hxt9hEx.png');
  background-size: cover;
  
}

.tarot-card:hover{
  top:-30px;
}

.cardselect{
  height: 200px;
  width: 150px;
  background-image: url('../assets/hxt9hEx.png');
  background-size: cover;
  margin: auto;
}

</style>

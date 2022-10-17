<template>
  <div class="p-2 mx-auto rounded-xl flex flex-col justify-between w-full">
    <div class="text-gray-500 flex justify-center">
      <p>{{title}}</p>
    </div>
    <div class="flex justify-center max-h-full ">
      <div class="border-2 rounded-lg w-1/3 h-44">
      <div v-if="selectedCard[index] == ''">
      <img  src="../assets/hxt9hEx.png" alt="">
      </div>
      <div v-else>{{selectedCard[index]}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, toRefs,defineComponent } from 'vue';

export default defineComponent({
  name: 'SingleCard',
  props:{
    'filedtitle':{
      type: String,
    },
    'sort':{
      type: Number,
    }
  },
  setup(props) {
    const title = props.filedtitle
    const index = props.sort
    
    const mapStore = inject("mapStore");
    const { state } = mapStore;
    return {
      title,
      index,
      ...toRefs(state),
      };
    },
  methods: {
  },
})

</script>



<style scoped>

</style>

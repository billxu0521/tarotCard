import { reactive, readonly } from "vue";

const state = reactive({
  selectedCard : ['','','','','','','','','','','','',''],
  currentCard : [],
});

const addSelectCard = (cardName,index) => {
  //(state.selectedCard).push(cardName)
  (state.selectedCard).splice(index, 1,cardName); 
  console.log(state.selectedCard);
};

const setCurrentCard = (cardName) => {
  const index = (state.currentCard).map(object => object.name).indexOf(cardName);
  (state.currentCard).splice(index, 1); 
};

const setAllCurrentCard = (allCard) => {
  state.currentCard = allCard
};

export default {
  state: readonly(state),
  addSelectCard,
  setCurrentCard,
  setAllCurrentCard

};
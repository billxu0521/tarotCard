import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/chiocepage',
    name: 'ChiocePage',
    component: () => import('../views/ChiocePage.vue'),
  },
  {
    path: '/question',
    name: 'Question',
    component: () => import('../views/Question.vue'),
  },
  {
    path: '/diamondcard',
    name: 'DiamondCard',
    component: () => import('../views/DiamondCard.vue'),
  },
  {
    path: '/selectcard',
    name: 'SelectCard',
    component: () => import('../views/SelectCard.vue'),
  },
  
] 

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router;


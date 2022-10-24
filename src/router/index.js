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
    path: '/divination/:page',
    name: 'Divination',
    component: () => import('../views/SelectCardLayout.vue'),
  },
  
] 

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router;


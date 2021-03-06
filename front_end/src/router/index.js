import { createRouter, createWebHistory } from 'vue-router';
import MainView from '../views/MainView.vue';

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: MainView
  },
  {
    path: '/handle',
    name: 'HandleView',
    component: () => import('../views/HandleView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Welcome from '../views/Welcome.vue';
import AboutView from '../views/AboutView.vue';
import Params from '../views/Params.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Welcome
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/params/:id',
      name: 'params',
      component: Params
    }
  ]
})

export default router

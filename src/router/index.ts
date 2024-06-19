import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import loginView from '../views/loginView.vue';
import registerView from '../views/registerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: loginView
    },
    {
      path: '/register',
      name: 'register',
      component: registerView
    },
  ]
})

export default router

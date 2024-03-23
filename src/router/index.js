import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import QuoranView from '@/views/QuoranView.vue'
import SalatView from '@/views/SalatView.vue'
import DoaaView from '@/views/DoaaView.vue'
import SettingView from '@/views/SettingView.vue'
import AyatView from '@/views/AyatView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Quoran',
      name: 'Quoran',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:QuoranView
    },
    {
      path: '/Salat',
      name: 'Salat',
      component: SalatView
    },
    {
      path: '/Doaa',
      name: 'Doaa',
      component: DoaaView
    },
    {
      path: '/Setting',
      name: 'Setting',
      component: SettingView
    },
    {
      path: '/Quoran/:id',
      name: 'Ayat',
      component: AyatView
    },

    
  ],
  linkActiveClass: "isActive",
  linkExactActiveClass: "exact-active",
})

export default router

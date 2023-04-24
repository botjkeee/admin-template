import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/',
         name: 'home',
         component: () => import('@/pages/HomePage.vue')
      },
      {
         path: '/doors',
         name: 'doors',
         component: () => import('@/pages/DoorsPage.vue')
      }
   ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import exportData from '../views/exportData.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/export',
    name: 'export',
    component: exportData
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

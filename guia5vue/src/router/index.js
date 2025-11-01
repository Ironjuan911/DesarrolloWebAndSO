import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import ProductView from '@/views/ProductView.vue'

const routes = [
  { 
    path: '/', 
    component: LoginView 
  },
  { 
    path: '/dashboard', 
    component: DashboardView 
  },
  { 
    path: '/productos', 
    component: ProductView 
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Usamos import.meta.env.BASE_URL para Vue CLI/Vite
  routes
})

export default router
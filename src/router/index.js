import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Features from '../views/Features.vue'
import Team from '../views/Team.vue'
import Contact from '../views/Contact.vue'
import Download from '../views/Download.vue'
import Dashboard from '../views/Dashboard.vue'
import Auth from '../views/Auth.vue'

// 📌 تعريف routes
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/features', component: Features },
  { path: '/team', component: Team },
  { path: '/contact', component: Contact },
  { path: '/download', component: Download },

  { path: '/dashboard', component: Dashboard },
  { path: '/login', component: Auth }
]

// 📌 إنشاء router
const router = createRouter({
  history: createWebHistory(),
  routes
})

// 🔐 حماية dashboard
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token")

  if (to.path === "/dashboard" && !token) {
    next("/login")
  } else {
    next()
  }
})

export default router
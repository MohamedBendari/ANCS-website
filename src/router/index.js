import { createRouter, createWebHistory } from 'vue-router'

import Home      from '../views/Home.vue'
import About     from '../views/About.vue'
import Features  from '../views/Features.vue'
import Team      from '../views/Team.vue'
import Contact   from '../views/Contact.vue'
import Download  from '../views/Download.vue'
import Dashboard from '../views/Dashboard.vue'
import Auth      from '../views/Auth.vue'
import NotFound  from '../views/NotFound.vue'

const routes = [
  { path: '/',          component: Home,      meta: { title: 'ANCS - Automated Network Configuration System' } },
  { path: '/about',     component: About,     meta: { title: 'About - ANCS' } },
  { path: '/features',  component: Features,  meta: { title: 'Features - ANCS' } },
  { path: '/team',      component: Team,      meta: { title: 'Team - ANCS' } },
  { path: '/contact',   component: Contact,   meta: { title: 'Contact - ANCS' } },
  { path: '/download',  component: Download,  meta: { title: 'Download - ANCS' } },
  {
    path: '/dashboard',
    component: Dashboard,
    meta: { title: 'Dashboard - ANCS', requiresAuth: true, hideLayout: true }
  },
  {
    path: '/login',
    component: Auth,
    meta: { title: 'Login - ANCS', hideLayout: true, guestOnly: true }
  },
  // 404 — يجب أن يكون آخر route دائماً
  { path: '/:pathMatch(.*)*', component: NotFound, meta: { title: '404 - Page Not Found' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Scroll to top on every route change
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to, from, next) => {
  // Update page title
  document.title = to.meta.title || 'ANCS'

  const token = localStorage.getItem('token')

  // Protect dashboard — redirect to login if no token
  if (to.meta.requiresAuth && !token) {
    return next('/login')
  }

  // Redirect logged-in users away from login page
  if (to.meta.guestOnly && token) {
    return next('/dashboard')
  }

  next()
})

export default router

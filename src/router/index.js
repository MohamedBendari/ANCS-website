import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Features from '../views/Features.vue'
import Team from '../views/Team.vue'
import Contact from '../views/Contact.vue'
import Download from '../views/Download.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/features', component: Features },
    { path: '/team', component: Team },
    { path: '/contact', component: Contact },
    { path: '/download', component: Download }
  ]
})

export default router
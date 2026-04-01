import './assets/main.css'
import { createApp, nextTick } from 'vue'          // ← أضف nextTick هنا
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi }
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          background: '#0f172a',
          surface: '#020617',
          primary: '#3b82f6',
          'primary-darken-1': '#2563eb',
          secondary: '#64748b',
          accent: '#8b5cf6',
          error: '#ef4444',
          info: '#0ea5e9',
          success: '#10b981',
          warning: '#f59e0b'
        }
      }
    }
  }
})

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(vuetify)

// Mount the app
app.mount('#app')

// Force dark theme for Vuetify in production
nextTick(() => {
  document.documentElement.classList.add('v-theme--dark')
  document.body.classList.add('v-theme--dark')

  const vApp = document.querySelector('.v-application')
  if (vApp) {
    vApp.classList.add('v-theme--dark')
  }
})
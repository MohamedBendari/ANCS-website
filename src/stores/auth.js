import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  // ── State ──
  const token    = ref(localStorage.getItem('token') || '')
  const username = ref(localStorage.getItem('dash-username') || '')

  // ── Getters ──
  const isLoggedIn = computed(() => !!token.value)

  // ── Actions ──
  function loginSuccess(accessToken, user) {
    token.value    = accessToken
    username.value = user || 'Admin'
    localStorage.setItem('token',         accessToken)
    localStorage.setItem('dash-username', user || 'Admin')
  }

  function logout() {
    token.value    = ''
    username.value = ''
    localStorage.removeItem('token')
    localStorage.removeItem('dash-username')
  }

  return { token, username, isLoggedIn, loginSuccess, logout }
})

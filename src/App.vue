<template>
  <div id="app">
    <nav class="navbar" :class="{ 'scrolled': isScrolled }">
      <div class="nav-container">
        <div class="logo">
          <img src="./assets/ancs-logo.png" alt="ANCS Logo">
          <h2>ANCS</h2>
        </div>

        <!-- Mobile Menu Button -->
        <button class="mobile-toggle" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div class="links" :class="{ 'active': isMenuOpen }">
          <router-link to="/" @click="closeMenu">Home</router-link>
          <router-link to="/about" @click="closeMenu">About</router-link>
          <router-link to="/features" @click="closeMenu">Features</router-link>
          <router-link to="/team" @click="closeMenu">Team</router-link>
          <router-link to="/contact" @click="closeMenu">Contact</router-link>
          <router-link to="/download" class="download-btn" @click="closeMenu">Download</router-link>
        </div>
      </div>
    </nav>

    <router-view v-slot="{ Component }">
      <transition name="fade" >
          <component :is="Component" :key="$route.fullPath" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  width: 100%;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: #0b1c2c;
  color: white;
  line-height: 1.6;
}

#app {
  width: 100%;
  min-height: 100vh;
}

/* Navbar */
.navbar {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: rgba(22, 41, 61, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(36, 59, 85, 0.5);
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(11, 28, 44, 0.98);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo img {
  width: 40px;
  height: 40px;
  border-radius: 8px;
}

.logo h2 {
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(135deg, #42a5f5, #0077b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.links {
  display: flex;
  gap: 30px;
  align-items: center;
}

.links a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

.links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #42a5f5;
  transition: width 0.3s ease;
}

.links a:hover::after,
.links a.router-link-active::after {
  width: 100%;
}

.links a:hover {
  color: #42a5f5;
}

.download-btn {
  background: linear-gradient(135deg, #0077b6, #0096c7);
  padding: 10px 20px !important;
  border-radius: 8px;
  color: white !important;
}

.download-btn::after {
  display: none !important;
}

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 119, 182, 0.4);
}

/* Mobile Toggle */
.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.mobile-toggle span {
  width: 25px;
  height: 3px;
  background: white;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.mobile-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-container {
    padding: 0 20px;
  }

  .mobile-toggle {
    display: flex;
  }

  .links {
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    background: rgba(11, 28, 44, 0.98);
    flex-direction: column;
    padding: 30px;
    gap: 20px;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .links.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .links a {
    font-size: 18px;
  }
}
</style>
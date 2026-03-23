<script setup>
import { ref } from 'vue'
import preview from "../assets/ancs-app.png"

// التحكم في إظهار النافذة المنبثقة (Modal)
const showAuthModal = ref(false)
const isLogin = ref(true)

const loginData = ref({ email: '', password: '' })
const signupData = ref({ name: '', email: '', password: '' })

// دالة لفتح النافذة وتحديد النوع (Login أو Signup)
const openAuth = (type) => {
  isLogin.value = type === 'login'
  showAuthModal.value = true
  document.body.style.overflow = 'hidden' // منع التمرير في الخلفية عند فتح النافذة
}

const closeAuth = () => {
  showAuthModal.value = false
  document.body.style.overflow = 'auto'
}

const handleLogin = () => {
  console.log("Logging in...", loginData.value)
  // هنا يتم الربط مع الـ API لاحقاً
}

const handleSignup = () => {
  console.log("Signing up...", signupData.value)
  // هنا يتم الربط مع الـ API لاحقاً
}
</script>

<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo-area">
        <img src="../assets/ancs-logo.png" alt="Logo" class="nav-logo-img">
        <span class="nav-logo-text">ANCS</span>
      </div>
      
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/features">Features</router-link>
        <router-link to="/team">Team</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>

      <div class="nav-actions">
        <div class="auth-group">
          <button @click="openAuth('login')" class="login-link">Login</button>
          <button @click="openAuth('signup')" class="signup-btn">Sign Up</button>
        </div>
        <router-link to="/download" class="nav-download-btn">Download</router-link>
      </div>
    </div>
  </nav>

  <Transition name="modal-fade">
    <div v-if="showAuthModal" class="modal-overlay" @click.self="closeAuth">
      <div class="auth-modal">
        <button class="close-x" @click="closeAuth">&times;</button>
        
        <div class="modal-tabs">
          <button :class="{ active: isLogin }" @click="isLogin = true">Login</button>
          <button :class="{ active: !isLogin }" @click="isLogin = false">Sign Up</button>
        </div>

        <form v-if="isLogin" @submit.prevent="handleLogin" class="modal-form">
          <h2>Welcome Back</h2>
          <p>Access your network automation tools</p>
          <input type="email" v-model="loginData.email" placeholder="Email Address" required>
          <input type="password" v-model="loginData.password" placeholder="Password" required>
          <button type="submit" class="submit-modal-btn">Login</button>
        </form>

        <form v-else @submit.prevent="handleSignup" class="modal-form">
          <h2>Create Account</h2>
          <p>Start your automation journey with ANCS</p>
          <input type="text" v-model="signupData.name" placeholder="Full Name" required>
          <input type="email" v-model="signupData.email" placeholder="Email Address" required>
          <input type="password" v-model="signupData.password" placeholder="Password" required>
          <button type="submit" class="submit-modal-btn signup-color">Join Now</button>
        </form>
      </div>
    </div>
  </Transition>

  <section class="hero">
    <div class="hero-content fade-up">
      <img src="../assets/ancs-logo.png" class="hero-logo">
      <h1>ANCS</h1>
      <h3>Automated Network Configuration System</h3>
      <p>
        A modern platform that helps network engineers automate
        router and switch configuration using intelligent tools.
      </p>
      <div class="buttons">
        <router-link to="/download" class="btn primary">Download</router-link>
        <router-link to="/about" class="btn secondary">Learn More</router-link>
      </div>
    </div>
  </section>

  <section class="stats">
    <div class="stats-grid">
      <div class="stat-card">
        <h2>10x</h2>
        <p>Faster Configuration</p>
      </div>
      <div class="stat-card">
        <h2>AI</h2>
        <p>Powered Analysis</p>
      </div>
      <div class="stat-card">
        <h2>24/7</h2>
        <p>Automation</p>
      </div>
    </div>
  </section>

  <section class="platforms">
    <h2>Works With</h2>
    <div class="platform-grid">
      <div class="platform">🪟 Windows</div>
      <div class="platform">🐧 Linux</div>
      <div class="platform">🌐 Cisco</div>
      <div class="platform">⚙️ GNS3</div>
      <div class="platform">🔐 SSH</div>
      <div class="platform">📡 Telnet</div>
    </div>
  </section>

  <section class="tech">
    <h2>Built With Modern Technologies</h2>
    <div class="tech-icons">
      <div class="tech-card">Python</div>
      <div class="tech-card">Vue.js</div>
      <div class="tech-card">Netmiko</div>
      <div class="tech-card">Machine Learning</div>
      <div class="tech-card">PostgreSQL</div>
    </div>
  </section>

  <section class="overview">
    <div class="container">
      <h2>What is ANCS?</h2>
      <p>
        ANCS is a network automation platform designed to simplify
        configuration management for routers and switches.
        Engineers can generate configurations automatically,
        detect errors before deployment, and manage multiple
        network devices from one centralized interface.
      </p>
    </div>
  </section>

  <section class="advantages">
    <h2>Why Engineers Use ANCS</h2>
    <div class="adv-grid">
      <div class="adv-card">
        <h3>Automation</h3>
        <p>Automate repetitive network configuration tasks.</p>
      </div>
      <div class="adv-card">
        <h3>AI Analysis</h3>
        <p>Machine learning detects abnormal network behaviour.</p>
      </div>
      <div class="adv-card">
        <h3>Secure</h3>
        <p>Encrypted credentials and safe SSH/Telnet execution.</p>
      </div>
      <div class="adv-card">
        <h3>Centralized</h3>
        <p>Manage all devices from a single dashboard.</p>
      </div>
    </div>
  </section>

  <section class="workflow">
    <h2>How ANCS Works</h2>
    <div class="steps">
      <div class="step"><span>1</span><p>Discover Network Devices</p></div>
      <div class="step"><span>2</span><p>Create Configurations</p></div>
      <div class="step"><span>3</span><p>AI Validation</p></div>
      <div class="step"><span>4</span><p>Deploy Securely</p></div>
    </div>
  </section>

  <section class="preview">
    <h2>Application Preview</h2>
    <p>Experience the intuitive ANCS interface</p>
    <div class="preview-box">
      <img :src="preview" class="preview-img">
    </div>
  </section>

  <section class="cta">
    <h2>Start Automating Your Network Today</h2>
    <router-link to="/download" class="btn primary">
      Download ANCS
    </router-link>
  </section>
</template>

<style scoped>
/* NAVBAR STYLES */
.navbar {
  position: fixed;
  top: 0; left: 0; width: 100%;
  z-index: 1000;
  background: rgba(11, 28, 44, 0.9);
  backdrop-filter: blur(12px);
  padding: 15px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
}

.logo-area { display: flex; align-items: center; gap: 10px; color: white; font-weight: bold; font-size: 22px; }
.nav-logo-img { width: 35px; }

.nav-links { display: flex; gap: 25px; }
.nav-links a { text-decoration: none; color: rgba(255, 255, 255, 0.75); font-size: 15px; transition: 0.3s; }
.nav-links a:hover { color: #42a5f5; }

.nav-actions { display: flex; align-items: center; gap: 25px; }
.auth-group { display: flex; align-items: center; gap: 18px; }

.login-link { background: none; border: none; color: white; cursor: pointer; font-size: 15px; font-weight: 500; }
.signup-btn { 
  background: rgba(66, 165, 245, 0.1); 
  border: 1px solid #42a5f5; 
  color: #42a5f5; 
  padding: 8px 18px; 
  border-radius: 8px; 
  cursor: pointer; 
  font-weight: 600;
  transition: 0.3s;
}
.signup-btn:hover { background: #42a5f5; color: white; box-shadow: 0 0 15px rgba(66, 165, 245, 0.3); }

.nav-download-btn { 
  background: #0077b6; 
  color: white; 
  text-decoration: none; 
  padding: 10px 20px; 
  border-radius: 8px; 
  font-weight: bold; 
  font-size: 14px;
}

/* MODAL STYLES */
.modal-overlay {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex; align-items: center; justify-content: center;
  z-index: 2000;
}

.auth-modal {
  background: #16293d;
  width: 90%;
  max-width: 420px;
  padding: 40px;
  border-radius: 24px;
  position: relative;
  border: 1px solid rgba(66, 165, 245, 0.2);
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
}

.close-x { position: absolute; top: 15px; right: 20px; background: none; border: none; color: white; font-size: 30px; cursor: pointer; opacity: 0.6; }

.modal-tabs { display: flex; background: rgba(0,0,0,0.2); border-radius: 12px; margin-bottom: 30px; padding: 5px; }
.modal-tabs button { flex: 1; padding: 12px; border: none; background: none; color: rgba(255,255,255,0.6); cursor: pointer; font-weight: 600; border-radius: 10px; }
.modal-tabs button.active { background: #42a5f5; color: white; }

.modal-form h2 { color: white; margin-bottom: 5px; font-size: 28px; }
.modal-form p { font-size: 14px; margin-bottom: 25px; opacity: 0.7; }
.modal-form input { width: 100%; padding: 14px; margin-bottom: 15px; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; color: white; outline: none; }
.modal-form input:focus { border-color: #42a5f5; }

.submit-modal-btn { width: 100%; padding: 15px; background: #42a5f5; border: none; border-radius: 10px; color: white; font-weight: bold; font-size: 16px; cursor: pointer; }
.signup-color { background: #0077b6; }

.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity 0.3s; }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; }

/* ORIGINAL STYLES */
section{ padding:120px 20px; text-align:center; }
h2{ font-size:42px; margin-bottom:30px; }
p{ color:#cbd5e1; }

.hero{
  min-height:100vh;
  background:linear-gradient(180deg,#0b1c2c,#081520);
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
}

.hero-logo{ width:100px; margin-bottom:20px; }
.hero h1{ font-size:72px; }
.buttons{ margin-top:30px; display:flex; gap:20px; justify-content:center; }

.btn{ padding:14px 30px; border-radius:10px; text-decoration:none; font-weight:600; transition:0.3s; }
.primary{ background:#0077b6; color:white; }
.primary:hover{ background:#0096c7; transform:translateY(-3px); }
.secondary{ border:1px solid white; color:white; }

.stats{ background:#081520; }
.stats-grid{ display:flex; justify-content:center; gap:60px; flex-wrap:wrap; }
.stat-card{ background:#16293d; padding:30px 40px; border-radius:10px; transition:0.3s; }
.stat-card:hover{ transform:translateY(-6px) scale(1.05); background:#1e3f5f; }

.platforms{ background:#102b44; color:white; }
.platform-grid{ display:flex; gap:25px; flex-wrap:wrap; justify-content:center; }
.platform{ background:#16293d; padding:18px 30px; border-radius:12px; font-size:18px; transition:0.3s; }
.platform:hover{ transform:translateY(-6px); background:#1e3f5f; }

.tech{ background:#102b44; color:white; }
.tech-icons{ display:flex; gap:20px; justify-content:center; flex-wrap:wrap; }
.tech-card{ background:#16293d; padding:20px 30px; border-radius:10px; transition:0.3s; }
.tech-card:hover{ transform:translateY(-5px); background:#1d3a57; }

.overview{ background:#0b1c2c; color:white; }
.overview p{ max-width:700px; margin:auto; line-height:1.7; }

.advantages{ background:#102b44; color:white; }
.adv-grid{ display:grid; grid-template-columns:repeat(auto-fit,minmax(250px,1fr)); gap:25px; }
.adv-card{ background:#16293d; padding:30px; border-radius:12px; transition:0.3s; }
.adv-card:hover{ transform:translateY(-6px); background:#1e3f5f; }

.workflow{ background:#0b1c2c; color:white; }
.steps{ display:flex; justify-content:center; gap:30px; flex-wrap:wrap; }
.step{ background:#16293d; padding:25px; border-radius:10px; width:200px; transition:0.3s; }
.step:hover{ transform:translateY(-6px); }
.step span{ font-size:30px; font-weight:bold; }

.preview{ background:#102b44; color:white; }
.preview-box{ margin-top:40px; background:#0b1c2c; padding:20px; border-radius:15px; box-shadow:0 25px 50px rgba(0,0,0,0.6); display:inline-block; animation:float 6s ease-in-out infinite; }
.preview-img{ width:900px; max-width:100%; border-radius:10px; }

@keyframes float{ 
  0%, 100%{transform:translateY(0)} 
  50%{transform:translateY(-10px)} 
}

.cta{ background:linear-gradient(180deg,#0b1c2c,#081520); color:white; }
</style>
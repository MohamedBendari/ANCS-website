<script setup>
import { ref } from 'vue'
import preview from "../assets/ancs-app.png"

const emit = defineEmits(['open-auth'])
const openAuth = (type) => emit('open-auth', type)
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <img src="../assets/ancs-logo.png" class="hero-logo">
      <h1>ANCS</h1>
      <h3>Automated Network Configuration System</h3>
      <p>
        A modern platform that helps network engineers automate
        router and switch configuration using intelligent tools.
      </p>
      <div class="buttons">
        <router-link to="/download" class="btn primary">Download</router-link>
        <button @click="openAuth('signup')" class="btn secondary">Get Started</button>
        <router-link to="/about" class="btn ghost">Learn More</router-link>
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
    <div class="cta-buttons">
      <router-link to="/download" class="btn primary">Download ANCS</router-link>
      <button @click="openAuth('signup')" class="btn secondary">Create Free Account</button>
    </div>
  </section>
</template>

<style scoped>
section { padding: 120px 20px; text-align: center; }
h2 { font-size: 42px; margin-bottom: 30px; }
p { color: #cbd5e1; }

.hero {
  min-height: 100vh;
  background: linear-gradient(180deg, #0b1c2c, #081520);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero-logo { width: 100px; margin-bottom: 20px; }
.hero h1 { font-size: 72px; }
.buttons { margin-top: 30px; display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

.btn { padding: 14px 30px; border-radius: 10px; text-decoration: none; font-weight: 600; transition: 0.3s; font-family: inherit; cursor: pointer; font-size: 15px; }
.primary { background: #0077b6; color: white; border: none; }
.primary:hover { background: #0096c7; transform: translateY(-3px); }
.secondary { border: 1px solid rgba(66,165,245,0.5); color: #42a5f5; background: rgba(66,165,245,0.08); }
.secondary:hover { background: rgba(66,165,245,0.15); transform: translateY(-3px); }
.ghost { border: 1px solid rgba(255,255,255,0.2); color: rgba(255,255,255,0.8); background: none; }
.ghost:hover { border-color: rgba(255,255,255,0.5); color: white; }

.stats { background: #081520; }
.stats-grid { display: flex; justify-content: center; gap: 60px; flex-wrap: wrap; }
.stat-card { background: #16293d; padding: 30px 40px; border-radius: 10px; transition: 0.3s; }
.stat-card:hover { transform: translateY(-6px) scale(1.05); background: #1e3f5f; }

.platforms { background: #102b44; color: white; }
.platform-grid { display: flex; gap: 25px; flex-wrap: wrap; justify-content: center; }
.platform { background: #16293d; padding: 18px 30px; border-radius: 12px; font-size: 18px; transition: 0.3s; }
.platform:hover { transform: translateY(-6px); background: #1e3f5f; }

.tech { background: #102b44; color: white; }
.tech-icons { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; }
.tech-card { background: #16293d; padding: 20px 30px; border-radius: 10px; transition: 0.3s; }
.tech-card:hover { transform: translateY(-5px); background: #1d3a57; }

.overview { background: #0b1c2c; color: white; }
.overview p { max-width: 700px; margin: auto; line-height: 1.7; }

.advantages { background: #102b44; color: white; }
.adv-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 25px; }
.adv-card { background: #16293d; padding: 30px; border-radius: 12px; transition: 0.3s; }
.adv-card:hover { transform: translateY(-6px); background: #1e3f5f; }

.workflow { background: #0b1c2c; color: white; }
.steps { display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; }
.step { background: #16293d; padding: 25px; border-radius: 10px; width: 200px; transition: 0.3s; }
.step:hover { transform: translateY(-6px); }
.step span { font-size: 30px; font-weight: bold; }

.preview { background: #102b44; color: white; }
.preview-box {
  margin-top: 40px; background: #0b1c2c; padding: 20px;
  border-radius: 15px; box-shadow: 0 25px 50px rgba(0,0,0,0.6);
  display: inline-block; animation: float 6s ease-in-out infinite;
}
.preview-img { width: 900px; max-width: 100%; border-radius: 10px; }
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }

.cta { background: linear-gradient(180deg, #0b1c2c, #081520); color: white; }
.cta-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-top: 10px; }
</style>

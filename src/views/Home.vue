<template>
  <section class="hero">
    <div class="hero-bg">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
    </div>
    
    <div class="hero-content">
      <div class="logo-container" data-aos="fade-down">
        <img src="../assets/ancs-logo.png" class="hero-logo" alt="ANCS Logo">
        <div class="logo-glow"></div>
      </div>

      <h1 data-aos="fade-up" data-aos-delay="100">ANCS</h1>
      
      <h3 data-aos="fade-up" data-aos-delay="200">
        Automated Network Configuration System
      </h3>

      <p data-aos="fade-up" data-aos-delay="300">
        Empowering network engineers with intelligent automation. 
        Configure routers and switches instantly with our AI-powered platform.
      </p>

      <div class="buttons" data-aos="fade-up" data-aos-delay="400">
        <router-link to="/download" class="btn primary">
          <i class="fas fa-download"></i>
          Download Project
        </router-link>

        <router-link to="/about" class="btn secondary">
          <i class="fas fa-arrow-right"></i>
          Learn More
        </router-link>
      </div>

      <div class="stats" data-aos="fade-up" data-aos-delay="500">
        <div class="stat">
          <span class="stat-number">10x</span>
          <span class="stat-label">Faster Config</span>
        </div>
        <div class="stat">
          <span class="stat-number">AI</span>
          <span class="stat-label">Powered</span>
        </div>
        <div class="stat">
          <span class="stat-number">24/7</span>
          <span class="stat-label">Support</span>
        </div>
      </div>

      <div class="platforms" data-aos="fade-up" data-aos-delay="600">
        <p>Available on</p>
        <div class="icons">
          <span><i class="fab fa-windows"></i> Windows</span>
          <span><i class="fab fa-linux"></i> Linux</span>
          <span><i class="fab fa-github"></i> GitHub</span>
        </div>
      </div>
    </div>

    <div class="scroll-indicator">
      <div class="mouse">
        <div class="wheel"></div>
      </div>
      <p>Scroll to explore</p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #0b1c2c;
  color: white;
  position: relative;
  overflow: hidden;
  padding-top: 70px;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
}

.orb-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, #0077b6, transparent);
  top: -200px;
  right: -200px;
  animation: float 20s infinite ease-in-out;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #42a5f5, transparent);
  bottom: -100px;
  left: -100px;
  animation: float 15s infinite ease-in-out reverse;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}

.hero-content {
  max-width: 800px;
  padding: 40px 20px;
  position: relative;
  z-index: 1;
}

.logo-container {
  position: relative;
  display: inline-block;
  margin-bottom: 30px;
}

.hero-logo {
  width: 120px;
  height: 120px;
  border-radius: 24px;
  position: relative;
  z-index: 2;
  animation: pulse 2s infinite;
}

.logo-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(66, 165, 245, 0.4), transparent);
  border-radius: 50%;
  z-index: 1;
  animation: glow 3s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes glow {
  0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
}

h1 {
  font-size: 80px;
  font-weight: 800;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #ffffff, #42a5f5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -2px;
}

h3 {
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
}

p {
  font-size: 18px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
}

.buttons {
  margin-top: 40px;
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 16px 32px;
  border-radius: 12px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
}

.btn.primary {
  background: linear-gradient(135deg, #0077b6, #0096c7);
  color: white;
  box-shadow: 0 4px 15px rgba(0, 119, 182, 0.4);
}

.btn.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 119, 182, 0.5);
}

.btn.secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

.btn.secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-3px);
}

.stats {
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-top: 60px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.stat-number {
  font-size: 36px;
  font-weight: 700;
  color: #42a5f5;
}

.stat-label {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.platforms {
  margin-top: 40px;
  font-size: 14px;
  opacity: 0.9;
}

.platforms p {
  margin-bottom: 15px;
  font-size: 14px;
}

.icons {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.icons span {
  background: rgba(16, 43, 68, 0.8);
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.icons span:hover {
  background: rgba(66, 165, 245, 0.2);
  transform: translateY(-2px);
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  opacity: 0.7;
  animation: bounce 2s infinite;
}

.mouse {
  width: 26px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  position: relative;
}

.wheel {
  width: 4px;
  height: 8px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll 1.5s infinite;
}

@keyframes scroll {
  0% { opacity: 1; top: 8px; }
  100% { opacity: 0; top: 20px; }
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-10px); }
}

/* Responsive */
@media (max-width: 768px) {
  h1 {
    font-size: 48px;
  }

  h3 {
    font-size: 18px;
  }

  .hero-logo {
    width: 80px;
    height: 80px;
  }

  .stats {
    gap: 30px;
    padding: 20px;
  }

  .stat-number {
    font-size: 28px;
  }

  .buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
}
</style>
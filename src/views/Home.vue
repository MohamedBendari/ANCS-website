```vue
<template>

<section class="hero">

  <div class="hero-content">

    <img src="../assets/ancs-logo.png" class="hero-logo" alt="ANCS Logo">

    <h1>ANCS</h1>

    <h3>Automated Network Configuration System</h3>

    <p>
      A tool that helps network engineers automatically configure
      routers and switches quickly and efficiently.
    </p>

    <div class="buttons">

      <router-link to="/download" class="btn download">
        ⬇ Download Project
      </router-link>

      <router-link to="/about" class="btn learn">
        Learn More
      </router-link>

    </div>

    <div class="platforms">

      <p>Available on</p>

      <div class="icons">
        <span>🪟 Windows</span>
        <span>🐧 Linux</span>
        <span>🐙 GitHub</span>
      </div>

    </div>

  </div>

</section>

</template>


<style>

.hero{
  width:100%;
  min-height:calc(100vh - 70px);
  display:flex;
  justify-content:center;
  align-items:center;
  text-align:center;
  background:#0b1c2c;
  color:white;
}

.hero-content{
  max-width:700px;
  padding:20px;
}

.hero-logo{
  width:90px;
  margin-bottom:20px;
}

.hero h1{
  font-size:64px;
  margin-bottom:10px;
}

.hero h3{
  font-size:22px;
  margin-bottom:20px;
  font-weight:400;
}

.hero p{
  font-size:18px;
  line-height:1.6;
}

/* buttons */

.buttons{
  margin-top:30px;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:15px;
}

.btn{
  width:220px;
  padding:14px;
  text-align:center;
  border-radius:8px;
  text-decoration:none;
  font-size:16px;
}

.download{
  background:#0077b6;
  color:white;
}

.download:hover{
  background:#0096c7;
}

.learn{
  background:transparent;
  border:2px solid #0077b6;
  color:white;
}

.learn:hover{
  background:#0077b6;
}

/* platforms */

.platforms{
  margin-top:25px;
  font-size:14px;
  opacity:0.9;
}

.icons{
  margin-top:10px;
  display:flex;
  gap:15px;
  justify-content:center;
}

.icons span{
  background:#102b44;
  padding:6px 12px;
  border-radius:6px;
  font-size:14px;
}

</style>
```

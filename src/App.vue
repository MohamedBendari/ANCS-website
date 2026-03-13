```vue
<template>
  <div id="app">

    <nav class="navbar">

      <div class="logo">
        <img src="./assets/ancs-logo.png" alt="ANCS Logo">
        <h2>ANCS</h2>
      </div>

      <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/features">Features</router-link>
        <router-link to="/team">Team</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/download">Download</router-link>
      </div>

    </nav>

    <router-view />

  </div>
</template>


<style>

/* reset */

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html,body{
  width:100%;
  font-family:Arial, Helvetica, sans-serif;
  background:#0b1c2c;
  color:white;
}


/* app layout */

#app{
  width:100%;
  min-height:100vh;
}


/* navbar */

.navbar{
  width:100%;
  height:70px;

  display:flex;
  justify-content:space-between;
  align-items:center;

  padding:0 60px;

  background:#16293d;
  border-bottom:1px solid #243b55;
}


/* logo */

.logo{
  display:flex;
  align-items:center;
  gap:12px;
}

.logo img{
  width:40px;
  height:40px;
}

.logo h2{
  font-size:22px;
  font-weight:600;
}


/* navigation links */

.links{
  display:flex;
  gap:30px;
}

.links a{
  color:white;
  text-decoration:none;
  font-size:15px;
  transition:0.25s;
  opacity:0.9;
}

.links a:hover{
  color:#42a5f5;
  opacity:1;
}


/* active route */

.router-link-active{
  color:#42a5f5;
}

</style>
```

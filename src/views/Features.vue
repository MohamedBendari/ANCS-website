```vue
<template>

<section class="features">

<h1>Project Features</h1>

<div class="grid">

<div class="card">
<h3>Device Management</h3>
<p>Create and manage routers and switches.</p>
</div>

<div class="card">
<h3>Templates</h3>
<p>Create reusable configuration templates.</p>
</div>

<div class="card">
<h3>GNS3 Integration</h3>
<p>Import network devices automatically from GNS3.</p>
</div>

<div class="card">
<h3>Network Communication</h3>
<p>Send configuration via SSH, Telnet, or Serial.</p>
</div>

</div>

</section>

</template>

<style>

.features{
padding:80px;
text-align:center;
}

.grid{
display:grid;
grid-template-columns:repeat(2,1fr);
gap:20px;
margin-top:40px;
}

.card{
background:#f5f5f5;
padding:20px;
border-radius:8px;
}

</style>
```

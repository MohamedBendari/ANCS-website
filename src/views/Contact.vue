```vue
<template>

<section class="contact">

<h1>Contact Us</h1>

<form class="form">

<input type="text" placeholder="Your Name" />

<input type="email" placeholder="Your Email" />

<textarea placeholder="Your Message"></textarea>

<button type="submit">Send Message</button>

</form>

</section>

</template>

<style>

.contact{
padding:100px;
text-align:center;
}

.form{
display:flex;
flex-direction:column;
width:400px;
margin:auto;
gap:15px;
}

input, textarea{
padding:10px;
border-radius:5px;
border:1px solid #ccc;
}

button{
padding:12px;
background:#0077b6;
color:white;
border:none;
border-radius:6px;
}

</style>
```

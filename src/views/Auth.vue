<template>
  <div class="auth">
    <h1>🔐 Login</h1>

    <form @submit.prevent="login">
      <input
        v-model="username"
        placeholder="Username"
        required
      />

      <input
        v-model="password"
        type="password"
        placeholder="Password"
        required
      />

      <button type="submit">Login</button>
    </form>

    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const username = ref("")
const password = ref("")
const error = ref("")
const router = useRouter()

const login = async () => {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value
      })
    })

    const data = await res.json()

    if (!res.ok) {
      throw new Error("Login failed")
    }

    // 🔥 حفظ التوكن
    localStorage.setItem("token", data.access)

    // 🚀 تحويل للداشبورد
    router.push("/dashboard")

  } catch (err) {
    error.value = "Invalid username or password"
  }
}
</script>

<style scoped>
.auth {
  max-width: 400px;
  margin: 100px auto;
  text-align: center;
  color: white;
}

input {
  display: block;
  width: 100%;
  padding: 12px;
  margin: 10px 0;
}

button {
  padding: 12px;
  width: 100%;
  background: #0077b6;
  color: white;
  border: none;
}

.error {
  color: red;
}
</style>
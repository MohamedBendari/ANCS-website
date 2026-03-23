<template>
  <div class="layout">

    <!-- 🟦 Sidebar -->
    <div class="sidebar">
      <h2 class="logo">ANCS</h2>

      <ul>
        <li class="active">📩 Messages</li>
        <li>👥 Users</li>
        <li>⚙ Settings</li>
      </ul>
    </div>

    <!-- 🟩 Main -->
    <div class="main">

      <!-- 🔝 Topbar -->
      <div class="topbar">
        <h1>Dashboard</h1>
        <button @click="logout">Logout</button>
      </div>

      <!-- 🔎 Search -->
      <input
        v-model="search"
        @input="fetchMessages()"
        placeholder="Search..."
        class="search"
      />

      <!-- 📊 Table -->
      <div class="table-box">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Purpose</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="msg in messages" :key="msg.id">
              <td>{{ msg.name }}</td>
              <td>{{ msg.email }}</td>

              <td>
                <span :class="['badge', msg.purpose]">
                  {{ msg.purpose }}
                </span>
              </td>

              <td>{{ msg.message }}</td>
              <td>{{ formatDate(msg.created_at) }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 📄 Pagination -->
      <div class="pagination">
        <button @click="prevPage" :disabled="!previous">Prev</button>
        <button @click="nextPage" :disabled="!next">Next</button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const messages = ref([])
const next = ref(null)
const previous = ref(null)
const search = ref("")

const token = localStorage.getItem("token")

if (!token) router.push("/login")

const fetchMessages = async (url = "http://127.0.0.1:8000/api/messages/") => {
  let finalUrl = url

  if (search.value) {
    finalUrl += finalUrl.includes("?")
      ? `&search=${search.value}`
      : `?search=${search.value}`
  }

  const res = await fetch(finalUrl, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  if (res.status === 401) return logout()

  const data = await res.json()

  messages.value = data.results
  next.value = data.next
  previous.value = data.previous
}

const nextPage = () => next.value && fetchMessages(next.value)
const prevPage = () => previous.value && fetchMessages(previous.value)

const logout = () => {
  localStorage.removeItem("token")
  router.push("/login")
}

const formatDate = (d) => new Date(d).toLocaleString()

onMounted(fetchMessages)
</script>

<style scoped>

/* 🔲 Layout */
.layout {
  display: flex;
  height: 100vh;
  background: #0f172a;
  color: white;
}

/* 🟦 Sidebar */
.sidebar {
  width: 220px;
  background: #020617;
  padding: 20px;
}

.logo {
  margin-bottom: 30px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  padding: 12px;
  cursor: pointer;
  border-radius: 6px;
}

.sidebar li:hover,
.sidebar .active {
  background: #1e293b;
}

/* 🟩 Main */
.main {
  flex: 1;
  padding: 30px;
}

/* 🔝 Topbar */
.topbar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.topbar button {
  background: red;
  border: none;
  padding: 8px 15px;
  color: white;
  cursor: pointer;
}

/* 🔎 Search */
.search {
  padding: 10px;
  margin-bottom: 20px;
  width: 300px;
  border-radius: 5px;
  border: none;
}

/* 📊 Table */
.table-box {
  background: #020617;
  padding: 20px;
  border-radius: 10px;
}

table {
  width: 100%;
}

th, td {
  padding: 12px;
  border-bottom: 1px solid #1e293b;
}

/* 🎯 Badge */
.badge {
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
}

.buy { background: #2563eb; }
.support { background: orange; }
.question { background: purple; }
.partnership { background: green; }

/* 📄 Pagination */
.pagination {
  margin-top: 20px;
}

button {
  margin-right: 10px;
  padding: 8px 15px;
  cursor: pointer;
}

</style>
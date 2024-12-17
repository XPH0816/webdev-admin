<script setup>
import { onMounted } from 'vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const rememberMe = ref(false)
const errorMessage = ref('')

const router = useRouter()

function login() {
  // Example login logic
  if (username.value === 'admin' && password.value === 'password') {
    errorMessage.value = ''
    alert('Login successful!')
    document.getElementById('interface').style = ''
    router.push('/user')
  } else {
    errorMessage.value = 'Invalid username or password!'
  }
}

function forgotPassword() {
  alert('Forgot Password clicked!')
  // Here you can handle the forgot password logic (e.g., show a modal or redirect to a recovery page)
}

onMounted(() => {
  document.getElementById('interface').style.marginLeft = '0'
})
</script>

<template>
  <div class="app-container">
    <div class="login-form">
      <h1>Admin Login</h1>
      <form @submit.prevent="login">
        <div class="input-group">
          <input
            v-model="username"
            type="text"
            id="username"
            placeholder="Enter your username"
            required
          />
          <span class="bx bx-user icon"></span>
        </div>
        <div class="input-group">
          <input
            v-model="password"
            type="password"
            id="password"
            placeholder="Enter your password"
            required
          />
          <span class="bx bx-key icon"></span>
        </div>
        <div class="remember-me">
          <input v-model="rememberMe" type="checkbox" id="rememberMe" />
          <label for="rememberMe">Remember me</label>
        </div>
        <button type="submit">Login</button>
      </form>
      <p class="forgot-password" @click="forgotPassword">Forgot Password?</p>
      <p class="error" v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: 'Comic Neue', 'Comic Sans MS', cursive, sans-serif;
}

.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
}

.login-form {
  background-color: #fff;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 350px;
  /* Ensure the form does not exceed this width */
  box-sizing: border-box;
  /* Include padding in the width calculation */
}

h1 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-group {
  width: 100%;
  position: relative;
}

.input-group input {
  width: 100%;
  padding: 12px;
  padding-right: 40px;
  border: 1px solid #000000;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
}

.input-group .icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%) scale(1.4);
  font-size: 18px;
  color: #000000;
}

.input-wrapper {
  width: 100%;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  /* Green color */
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
  /* Darker green on hover */
}

.remember-me {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.remember-me input {
  margin-right: 5px;
}

.forgot-password {
  text-align: center;
  color: #28a745;
  /* Green color for the link */
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
}

.forgot-password:hover {
  text-decoration: underline;
}

.error {
  color: red;
  text-align: center;
  margin-top: 10px;
}
</style>

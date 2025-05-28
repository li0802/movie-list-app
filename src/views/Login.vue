<template>
  <div class="login-container">
    <div class="login-box">
      <h2>欢迎回来，主人~</h2>
      <input v-model="username" type="text" placeholder="请输入账号" />
      <input v-model="password" type="password" placeholder="请输入密码" />
      <button @click="login">登录</button>
      <p class="hint">账号：admin ｜ 密码：123456</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

const login = () => {
  const savedPassword = localStorage.getItem('userPassword') || '123456'
  if (username.value === 'admin' && password.value === savedPassword) {
    localStorage.setItem('isLoggedIn', 'true')
    router.push('/mine')
  } else {
    alert('账号或密码错误哟~')
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=ZCOOL+KuaiLe&display=swap');

.login-container {
  height: 100vh;
  background: linear-gradient(135deg, #d3cce3, #e9e4f0);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'ZCOOL KuaiLe', sans-serif;
}

.login-box {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  text-align: center;
  width: 300px;
}

.avatar {
  width: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.login-box h2 {
  margin-bottom: 20px;
  color: #6c5ce7;
}

.login-box input {
  display: block;
  width: 93%;
  margin: 10px 0;
  padding: 10px;
  border: none;
  border-radius: 10px;
  outline: none;
  font-size: 16px;
  background-color: #ffffffcc;
}

.login-box button {
  width: 100%;
  padding: 10px;
  background: #a29bfe;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}

.login-box button:hover {
  background: #6c5ce7;
}

.hint {
  font-size: 12px;
  color: #888;
  margin-top: 15px;
}
</style>

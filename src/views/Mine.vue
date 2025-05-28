<template>
  <div class="mine-container">
    <div class="mine-box">
      <img class="avatar" src="https://foruda.gitee.com/avatar/1709456521780287417/11426222_li0802_1709456521.png!avatar200" />
      <h2>欢迎回来，主人～</h2>
      <button @click="showPasswordModal = true">修改密码</button>
      <button @click="logout">退出登录</button>

      <!-- 修改密码弹窗 -->
      <div v-if="showPasswordModal" class="modal-mask">
        <div class="modal">
          <h3>请输入新密码：</h3>
          <input v-model="newPassword" type="password" placeholder="新密码至少4位" />
          <div class="modal-buttons">
            <button @click="changePassword">确认</button>
            <button @click="showPasswordModal = false">取消</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const showPasswordModal = ref(false)
const newPassword = ref('')
const isLoggedIn = ref(false)

onMounted(() => {
  isLoggedIn.value = localStorage.getItem('isLoggedIn') === 'true'
  if (!isLoggedIn.value) {
    router.push('/login')
  }
})

const logout = () => {
  localStorage.removeItem('isLoggedIn')
  router.push('/login')
}

const changePassword = () => {
  if (newPassword.value.length < 4) {
    alert('密码太短了，至少4位')
    return
  }
  localStorage.setItem('userPassword', newPassword.value)
  alert('密码修改成功，请重新登录')
  localStorage.removeItem('isLoggedIn')
  showPasswordModal.value = false
  router.push('/login')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=ZCOOL+KuaiLe&display=swap');

.mine-container {
  height: 100vh;
  background: linear-gradient(135deg, #d3cce3, #e9e4f0);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'ZCOOL KuaiLe', sans-serif;
}

.mine-box {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 300px;
}

.avatar {
  width: 180px;
  border-radius: 50%;
  margin-bottom: 10px;
  justify-self: center;
}

.mine-box h2 {
  color: #6c5ce7;
  margin-bottom: 20px;
}

.mine-box button {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  background: #a29bfe;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

.mine-box button:hover {
  background: #6c5ce7;
}

.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffffee;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  width: 280px;
}

.modal h3 {
  color: #6c5ce7;
  margin-bottom: 10px;
}

.modal input {
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.modal-buttons button {
  margin: 0 5px;
  padding: 8px 16px;
  margin-top: 10px;
  background: #a29bfe;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
}

.modal-buttons button:hover {
  background: #6c5ce7;
}
</style>

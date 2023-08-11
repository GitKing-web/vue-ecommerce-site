<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted, reactive } from 'vue'
import Button from '../components/Button.vue'
import Error from '../components/Error.vue';
import axios from 'axios'
const logData = reactive({
  username: '',
  password: ''
})

const Login = async () => {
  try {
    const res = await axios.post(
      'http://localhost:3005/user/api/login',
      {
        username: logData.username,
        password: logData.password
      },
      { headers: { 'Content-Type': 'application/json' } }
    )
    console.log(res.data)
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  Login()
})
</script>

<template>
  <div class="div">
    <div class="card p-5">
      <div class="title">SignIn</div>
      <Error />
      <div class="form">
        <input type="text" name="" id="" placeholder="username" v-model="logData.username" />
        <input type="password" name="" id="" placeholder="password" v-model="logData.password" />
      </div>
      <Button title="Login" @click.prevent="Login()" />
      <div class="links">
        <RouterLink to="/register">Create Account</RouterLink><br />
        <RouterLink to="/register">Forgot Password?</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
.title {
  font-weight: 500;
  font-size: 24px;
}
.card {
  width: 30%;
}
.form {
  display: flex;
  flex-direction: column;
}
input {
  flex: 1;
  min-width: 40%;
  margin: 12px 10px 0 0;
  padding: 8px;
}
.policy {
  font-style: 12px;
  margin: 20px 0;
}
button {
  width: 40%;
  padding: 8px 4px;
  margin: 20px 0px;
  border: none;
  background-color: #182848;
  color: #fff;
}

@media (max-width: 700px) {
  .div {
    width: 100vw;
    height: 80vh;
  }
  .card {
    width: 80vw;
  }
  .links a {
    font-size: 14px;
  }
}
</style>

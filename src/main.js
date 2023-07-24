import { createApp } from 'vue'
import { createPinia } from 'pinia'


import router from './router'
import store from './vuex/store'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/assets/fontawesome-free-6.3.0-web/css/all.min.css'



const app = createApp(App)

app.use(createPinia())
// app.use(router)

app
.use(router)
.use(store)
.mount('#app')

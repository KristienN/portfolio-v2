import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router'
import './main.css'
import './assets/css/global.css'

const app = createApp(App)

app.use(MotionPlugin)
app.use(router)
app.mount('#app')

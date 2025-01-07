// import './assets/main.css'
import '@centrogeomx/sisdai-css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import SisdaiComponentes from '@centrogeomx/sisdai-componentes'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(SisdaiComponentes)

app.mount('#app')

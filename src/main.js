import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueDragscroll from 'vue-dragscroll'


import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(VueDragscroll)

app.mount('#app')

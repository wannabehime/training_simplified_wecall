import './assets/main.css'
import liff from '@line/liff'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

await liff.init({ liffId: '2006858338-7J5NbWdO', withLoginOnExternalBrowser: true }).then(() => {
  if (window.location.pathname === '/') {
    window.location.href = '/entry'
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

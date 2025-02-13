import './assets/main.css'
import liff from '@line/liff'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


const app = createApp(App)
app.use(createPinia())
app.use(router)

await liff.init({ liffId: liffId, withLoginOnExternalBrowser: true }).then(() => {
  if (router.currentRoute.value.path === '/') {
    router.push('/entry')
  }
})

app.mount('#app')

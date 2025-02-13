import './assets/main.css'
import liff from '@line/liff'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const liffId = import.meta.env.VITE_LIFF_ID as string
await liff.init({ liffId: '2006858338-7J5NbWdO', withLoginOnExternalBrowser: true }).then(() => {
  if (window.location.pathname === '/') {
    window.location.href = '/entry'
  }
  const idToken = liff.getIDToken();
  console.log(idToken);
})

const app = createApp(App)
app.use(createPinia())
app.use(router)

await liff.init({ liffId: liffId, withLoginOnExternalBrowser: true }).then(() => {
  if (router.currentRoute.value.path === '/') {
    router.push('/entry')
  }
})

app.mount('#app')

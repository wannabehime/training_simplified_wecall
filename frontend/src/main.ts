import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import liff from '@line/liff'
import { useLineStore } from './stores/lineStore'
import { storeToRefs } from 'pinia'
import App from './App.vue'
import router from './router'

const liffId = import.meta.env.VITE_LIFF_ID as string

const app = createApp(App)
app.use(createPinia())
app.use(router)

const { idToken: idTokenRef } = storeToRefs(useLineStore())
await liff.init({ liffId: liffId, withLoginOnExternalBrowser: true })
if (router.currentRoute.value.path === '/') {
  router.push('/entry')
}
if (!liff.isLoggedIn()) {
  liff.login()
}
const idToken = liff.getIDToken()
if (idToken) idTokenRef.value = idToken

app.mount('#app')

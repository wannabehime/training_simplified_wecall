<script setup lang="ts">
import { RouterView } from 'vue-router'
// import { onMounted } from 'vue'
// import liff from '@line/liff'
// import router from './router'
// import { useLineStore } from './stores/lineStore'
// import { storeToRefs } from 'pinia'

// const liffId = import.meta.env.VITE_LIFF_ID as string
// const { idToken: idTokenRef } = storeToRefs(useLineStore())

// onMounted(async () => {
//   await liff.init({ liffId: liffId, withLoginOnExternalBrowser: true })
//   if (router.currentRoute.value.path === '/') {
//     router.push('/entry')
//   }

//   if (!liff.isLoggedIn()) {
//     console.log('not loggedin')

//     liff.login()
//   }

//   const idToken = liff.getIDToken()
//   if (idToken) idTokenRef.value = idToken
//   console.log(idToken)
//   console.log(idTokenRef.value)
// })
</script>

<template>
  <RouterView />
</template>

<style scoped></style>

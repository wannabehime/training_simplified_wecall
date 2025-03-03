import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLineStore = defineStore('line-store', () => {
  const idToken = ref<string>('')
  const clientId = import.meta.env.VITE_LINE_CLIENT_ID as string

  return {
    idToken,
    clientId,
  }
})

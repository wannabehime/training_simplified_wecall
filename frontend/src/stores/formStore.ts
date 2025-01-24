import type { Entry } from '@/types/entry'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFormStore = defineStore('form-store', () => {
  const formData = ref<Entry>({
    name: '',
    gender: '',
    birthday: '',
    prefecture: '',
    tel: '',
    email: '',
    is_accompanied: '',
    visit_day: '',
    visit_time: '',
  })

  function pushToFormData(submittedData: Entry) {
    formData.value = submittedData
    console.log(formData.value)
  }

  const entryData = ref<Entry[]>([])

  function pushToEntryData() {
    entryData.value.push(formData.value)
    console.log(entryData.value)
  }

  return { formData, pushToFormData, entryData, pushToEntryData }
})

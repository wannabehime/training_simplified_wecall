import type { Entry } from '@/types/entry'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFormStore = defineStore('form-store', () => {
  const entryData = ref<Entry>({
    name: '',
    gender: '',
    birthday: '',
    prefecture: '',
    tel: '',
    email: '',
    isAccompanied: '',
    visitDay: '',
    visitTime: '',
  })

  function saveEntryData(submittedData: Entry) {
    entryData.value = submittedData
    console.log(entryData.value)
  }

  function getEntryData() {
    entryData.value = {
      name: '山田太郎',
      gender: '男性',
      birthday: '1994年4月23日',
      prefecture: '東京都',
      tel: '09012345678',
      email: 'xxxxxx@xxxxxx.co.jp',
      isAccompanied: 'あり',
      visitDay: '2025年1月1日(水)',
      visitTime: '14:00',
    }
  }

  return { entryData, saveEntryData, getEntryData }
})

import type { Entry } from '@/types/entry'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useEntriesAPI } from '@/composables/useEntriesAPI'

const { useAddEntryAPI: useAddEntryAPI } = useEntriesAPI()

export const useEntryStore = defineStore('entry-store', () => {
  const entryData = ref<Entry>({
    familyName: '',
    personalName: '',
    familyNameKana: '',
    personalNameKana: '',
    gender: '',
    birthday: '',
    prefecture: '',
    tel: '',
    email: '',
    isAccompanied: '',
    visitDay: '',
    visitTime: '',
  })

  const errorMsg = ref<string>()

  async function registerEntry(submittedEntry: Entry) {
    console.log(submittedEntry)
    try {
      await useAddEntryAPI(submittedEntry)
    } catch (error) {
      if (error) errorMsg.value = 'サーバーエラーにより予約できませんでした'
      // return null
    }
  }

  function saveEntryToStore(entry: Entry) {
    entryData.value = entry
  }

  function deleteEntryData() {
    entryData.value = {
      name: '',
      gender: '',
      birthday: '',
      prefecture: '',
      tel: '',
      email: '',
      isAccompanied: '',
      visitDay: '',
      visitTime: '',
    }
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

  return { entryData, registerEntry, saveEntryToStore, deleteEntryData, getEntryData }
})

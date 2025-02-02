import type { Entry, EntryReturnedByAPI } from '@/types/entry'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useEntriesAPI } from '@/composables/useEntriesAPI'

const { useAddEntryAPI: useAddEntryAPI, useGetEntryAPI: useGetEntryAPI } = useEntriesAPI()

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

  async function getEntry(id: number): Promise<EntryReturnedByAPI | null> {
    try {
      return await useGetEntryAPI(id)
    } catch (error) {
      if (error) errorMsg.value = '該当データを取得できませんでした'
      return null
    }
  }

  async function registerEntry(submittedEntry: Entry) {
    // console.log(submittedEntry)
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

  return { entryData, registerEntry, saveEntryToStore, deleteEntryData, getEntry }
})

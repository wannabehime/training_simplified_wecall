import type { Entry, EntryReturnedByAPI, updatedEntryProperties } from '@/types/entry'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useEntriesAPI } from '@/composables/useEntriesAPI'

const {
  useGetEntryAPI: useGetEntryAPI,
  useAddEntryAPI: useAddEntryAPI,
  useUpdateEntryAPI: useUpdateEntryAPI,
  useDeleteEntryAPI: useDeleteEntryAPI,
} = useEntriesAPI()

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

  async function changeEntry(id: number, changedProperties: updatedEntryProperties) {
    try {
      if ((await useGetEntryAPI(id)) !== null) {
        await useUpdateEntryAPI(id, changedProperties)
      }
    } catch (error) {
      if (error) errorMsg.value = 'サーバーエラーにより予約できませんでした'
    }
  }

  function saveEntryToStore(entry: Entry) {
    entryData.value = entry
  }

  async function cancelEntry(id: number) {
    try {
      await useDeleteEntryAPI(id)
    } catch (error) {
      if (error) errorMsg.value = 'サーバーエラーによりキャンセルできませんでした'
    }
  }

  return {
    entryData,
    registerEntry,
    saveEntryToStore,
    getEntry,
    changeEntry,
    cancelEntry,
  }
})

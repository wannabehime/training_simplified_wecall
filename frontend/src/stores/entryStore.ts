import type { Entry, StringEntry, UpdatedEntryProperties } from '@/types/entry'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useEntriesAPI } from '@/composables/useEntriesAPI'
import { format } from 'date-fns'

const { useGetEntryAPI, useAddEntryAPI, useUpdateEntryAPI, useDeleteEntryAPI } = useEntriesAPI()

export const useEntryStore = defineStore('entry-store', () => {
  const entryData = ref<Entry>({
    familyName: '',
    personalName: '',
    familyNameKana: '',
    personalNameKana: '',
    gender: '',
    birthday: new Date(),
    prefecture: '',
    tel: '',
    email: '',
    isAccompanied: true,
    visitDay: new Date(),
    visitTime: '',
  })

  const errorMsg = ref<string>()

  function saveEntryToStore(entry: Entry) {
    console.log(entry)
    entryData.value = entry
    console.log(entryData)
  }

  async function getEntry(id: number): Promise<Entry | null> {
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

  async function cancelEntry(id: number) {
    try {
      if ((await useGetEntryAPI(id)) !== null) {
        await useDeleteEntryAPI(id)
      }
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

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

  function initInput(): StringEntry {
    return {
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
    }
  }

  function convertInputToEntry(input: StringEntry): Entry {
    console.log(input)
    console.log(input.birthday)
    return {
      ...input,
      birthday: new Date(input.birthday),
      isAccompanied: input.isAccompanied === 'あり',
      visitDay: new Date(input.visitDay),
    }
  }

  function convertEntryToString(entry: Entry): StringEntry {
    return {
      ...entry,
      birthday: format(entry.birthday, 'yyyy-MM-dd'),
      isAccompanied: entry.isAccompanied === true ? 'あり' : 'なし',
      visitDay: format(entry.visitDay, 'yyyy-MM-dd'),
    }
  }

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

  async function registerEntry(submittedEntry: Entry, idToken: string, clientId: string) {
    try {
      await useAddEntryAPI(submittedEntry, idToken, clientId)
    } catch (error) {
      if (error) errorMsg.value = 'サーバーエラーにより予約できませんでした'
    }
  }

  async function changeEntry(id: number, changedProperties: UpdatedEntryProperties) {
    try {
      if ((await useGetEntryAPI(id)) !== null) {
        await useUpdateEntryAPI(id, changedProperties)
      }
    } catch (error) {
      if (error) errorMsg.value = 'サーバーエラーにより予約を変更できませんでした'
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
    initInput,
    convertInputToEntry,
    convertEntryToString,
    registerEntry,
    saveEntryToStore,
    getEntry,
    changeEntry,
    cancelEntry,
  }
})

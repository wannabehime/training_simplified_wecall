import type { Entry } from '@/types/entry'

export function useEntriesAPI() {
  class EntryAddFailure extends Error {
    constructor() {
      super()
    }
  }

  const useAddEntryAPI = async (entry: Entry) => {
    console.log(JSON.stringify(entry))
    const response = await fetch('http://localhost:3000/entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entry),
    })

    if (!response.ok) {
      console.log(response)
      throw new EntryAddFailure()
    }
  }

  return {
    useAddEntryAPI,
  }
}

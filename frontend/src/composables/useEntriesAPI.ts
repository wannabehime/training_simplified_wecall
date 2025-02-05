import type { Entry, EntryReturnedByAPI } from '@/types/entry'

export function useEntriesAPI() {
  class EntryGetFailure extends Error {
    constructor() {
      super()
    }
  }

  const useGetEntryAPI = async (id: number): Promise<EntryReturnedByAPI> => {
    const response = await fetch(`http://localhost:3000/entries/${id}`, {
      method: 'GET',
    })

    if (!response.ok) {
      throw new EntryGetFailure()
    }

    return (await response.json()) as EntryReturnedByAPI
  }
  class EntryAddFailure extends Error {
    constructor() {
      super()
    }
  }

  const useAddEntryAPI = async (entry: Entry) => {
    // console.log(JSON.stringify(entry))
    const response = await fetch('http://localhost:3000/entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entry),
    })

    if (!response.ok) {
      // console.log(response)
      throw new EntryAddFailure()
    }
  }

  return {
    useGetEntryAPI,
    useAddEntryAPI,
  }
}

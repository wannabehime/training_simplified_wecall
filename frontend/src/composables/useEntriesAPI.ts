import type { Entry, UpdatedEntryProperties } from '@/types/entry'

export function useEntriesAPI() {
  class EntryGetFailure extends Error {
    constructor() {
      super()
    }
  }

  const useGetEntryAPI = async (id: number): Promise<Entry> => {
    const response = await fetch(`/api/entries/${id}`, {
      method: 'GET',
    })

    if (!response.ok) {
      throw new EntryGetFailure()
    }

    return (await response.json()) as Entry
  }
  class EntryAddFailure extends Error {
    constructor() {
      super()
    }
  }

  const useAddEntryAPI = async (entry: Entry) => {
    console.log(entry)
    console.log(JSON.stringify(entry, null, 2))
    const response = await fetch('/api/entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entry),
    })

    if (!response.ok) {
      throw new EntryAddFailure()
    }
  }

  class EntryUpdateFailure extends Error {
    constructor() {
      super()
    }
  }

  const useUpdateEntryAPI = async (id: number, properties: UpdatedEntryProperties) => {
    console.log(properties)
    const response = await fetch(`/api/entries/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(properties),
    })

    if (!response.ok) {
      throw new EntryUpdateFailure()
    }
  }
  class EntryDeleteFailure extends Error {
    constructor() {
      super()
    }
  }

  const useDeleteEntryAPI = async (id: number) => {
    const response = await fetch(`/api/entries/${id}`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      throw new EntryDeleteFailure()
    }
  }

  return {
    useGetEntryAPI,
    useAddEntryAPI,
    useUpdateEntryAPI,
    useDeleteEntryAPI,
  }
}

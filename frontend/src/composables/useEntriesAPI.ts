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

  const useAddEntryAPI = async (entry: Entry, idToken: string, clientId: string) => {
    const response = await fetch('/api/entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ entry, idToken, clientId }),
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

  const useUpdateEntryAPI = async (
    id: number,
    properties: UpdatedEntryProperties,
    idToken: string,
    clientId: string,
  ) => {
    const response = await fetch(`/api/entries/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ entry: properties, idToken, clientId }),
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

  const useDeleteEntryAPI = async (id: number, idToken: string, clientId: string) => {
    const response = await fetch(`/api/entries/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idToken, clientId }),
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

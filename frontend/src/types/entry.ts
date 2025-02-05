export interface Entry {
  familyName: string
  personalName: string
  familyNameKana: string
  personalNameKana: string
  gender: string
  birthday: Date
  prefecture: string
  tel: string
  email: string
  isAccompanied: boolean
  visitDay: Date
  visitTime: string
}

export type UpdatedEntryProperties = Pick<Entry, 'isAccompanied' | 'visitDay' | 'visitTime'>
  familyName: string
  personalName: string
  familyNameKana: string
  personalNameKana: string
  gender: string
  prefecture: string
  tel: string
  email: string
  isAccompanied: string
  visitDay: string
  visitTime: string

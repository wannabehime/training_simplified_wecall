export interface Entry {
  familyName: string
  personalName: string
  familyNameKana: string
  personalNameKana: string
  gender: string
  birthday: string
  prefecture: string
  tel: string
  email: string
  isAccompanied: string
  visitDay: string
  visitTime: string
}

export interface EntryReturnedByAPI {
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
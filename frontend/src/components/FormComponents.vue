<script setup lang="ts">
import { useEntryStore } from '@/stores/entryStore'

import GenderField from '@/components/fields/Gender/GenderField.vue'
import BirthdayField from '@/components/fields/Birthday/BirthdayField.vue'
import PrefectureField from '@/components/fields/Prefecture/PrefectureField.vue'
import PhoneField from '@/components/fields/Phone/PhoneField.vue'
import EmailField from '@/components/fields/Email/EmailField.vue'
import CompanionField from '@/components/fields/Companion/CompanionField.vue'
import CalendarDateField from '@/components/fields/Calendar/CalendarDateField.vue'
import CalendarTimeField from '@/components/fields/Calendar/CalendarTimeField.vue'
import PrivacyField from '@/components/fields/Agreement/PrivacyField.vue'
import TermsField from '@/components/fields/Agreement/TermsField.vue'
import RouterLinkButton from './atoms/Button/RouterLinkButton.vue'
import NameField from './fields/Name/NameField.vue'
import NameKanaField from './fields/Name/NameKanaField.vue'
import type { StringEntry } from '@/types/entry'
import { ref, computed } from 'vue'

const { saveEntryToStore, initInput, convertInputToEntry } = useEntryStore()
const input = ref<StringEntry>(initInput())
const entry = computed(() => convertInputToEntry(input.value))

const isError = ref({
  familyName: false,
  personalName: false,
  familyNameKana: false,
  personalNameKana: false,
  gender: false,
  birthday: false,
  prefecture: false,
  tel: false,
  email: false,
  isAccompanied: false,
  visitDay: false,
  visitTime: false,
})
const validateForm = () => {
  if (input.value.familyName === '') {
    isError.value.familyName = true
  }

  return Object.keys(errors.value).length === 0
}
</script>

<template>
  <NameField
    v-model:familyName="input.familyName"
    v-model:personalName="input.personalName"
    :is-empty="isError.familyName"
  />
  <NameKanaField
    v-model:familyNameKana="input.familyNameKana"
    v-model:personalNameKana="input.personalNameKana"
  />
  <GenderField v-model="input.gender" />
  <BirthdayField v-model="input.birthday" />
  <PrefectureField v-model="input.prefecture" />
  <PhoneField v-model="input.tel" />
  <EmailField v-model="input.email" />

  <hr />

  <CompanionField v-model="input.isAccompanied" />
  <CalendarDateField v-model="input.visitDay" />
  <CalendarTimeField v-model="input.visitTime" />

  <PrivacyField />
  <TermsField />

  <RouterLinkButton to="/entry/confirm" @click-event="saveEntryToStore(entry)">
    入力内容確認画面へ
  </RouterLinkButton>
  <RouterLinkButton to=""> 戻る </RouterLinkButton>
</template>

<script setup lang="ts">
import { useFormStore } from '@/stores/formStore'

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

const formStore = useFormStore()
const saveEntryData = formStore.saveEntryData
const entryData = {
  name: '',
  gender: '',
  birthday: '',
  prefecture: '',
  tel: '',
  email: '',
  isAccompanied: '',
  visitDay: '',
  visitTime: '',
}
</script>

<template>
  <NameField v-model="entryData.name" />
  <GenderField v-model="entryData.gender" />
  <BirthdayField v-model="entryData.birthday" />
  <PrefectureField v-model="entryData.prefecture" />
  <PhoneField v-model="entryData.tel" />
  <EmailField v-model="entryData.email" />

  <hr />

  <CompanionField v-model="entryData.isAccompanied" />
  <CalendarDateField v-model="entryData.visitDay" />
  <CalendarTimeField v-model="entryData.visitTime" />

  <PrivacyField />
  <TermsField />

  <RouterLinkButton to="/entry/confirm" @click-event="saveEntryData(entryData)">
    入力内容確認画面へ
  </RouterLinkButton>
  <RouterLinkButton to=""> 戻る </RouterLinkButton>
</template>

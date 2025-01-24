<script setup lang="ts">
import type { Entry } from '@/types/entry'
import { ref } from 'vue'
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
const pushToFormData = formStore.pushToFormData
const formData = formStore.formData
</script>

<template>
  <NameField v-model="formData.name" />
  <GenderField v-model="formData.gender" />
  <BirthdayField v-model="formData.birthday" />
  <PrefectureField v-model="formData.prefecture" />
  <PhoneField v-model="formData.tel" />
  <EmailField v-model="formData.email" />

  <hr />

  <CompanionField v-model="formData.is_accompanied" />
  <CalendarDateField v-model="formData.visit_day" />
  <CalendarTimeField v-model="formData.visit_time" />

  <PrivacyField />
  <TermsField />

  <RouterLinkButton to="/entry/confirm" @click-event="pushToFormData(formData)">
    入力内容確認画面へ
  </RouterLinkButton>
  <RouterLinkButton to=""> 戻る </RouterLinkButton>
</template>

<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import CompanionField from '@/components/fields/Companion/CompanionField.vue'
import CalendarDateField from '@/components/fields/Calendar/CalendarDateField.vue'
import CalendarTimeField from '@/components/fields/Calendar/CalendarTimeField.vue'
import RouterLinkButton from '@/components/atoms/Button/RouterLinkButton.vue'
import { useEntryStore } from '@/stores/entryStore'
// import { ref } from 'vue'
// import { storeToRefs } from 'pinia'

const { entryData, saveEntryData } = useEntryStore()

// const isAccompanied = ref<string>('')
// const visitDay = ref<string>('')
// const visitTime = ref<string>('')
const changedData = {
  name: entryData.name,
  gender: entryData.gender,
  birthday: entryData.birthday,
  prefecture: entryData.prefecture,
  tel: entryData.tel,
  email: entryData.email,
  isAccompanied: entryData.isAccompanied,
  visitDay: entryData.visitDay,
  visitTime: entryData.visitTime,
}
</script>

<template>
  <PageTitle title="日程変更" message="入力内容を変更" />

  <CompanionField v-model="changedData.isAccompanied" />
  <CalendarDateField v-model="changedData.visitDay" />
  <CalendarTimeField v-model="changedData.visitTime" />

  <RouterLinkButton to="/entry/change/confirm" @click-event="saveEntryData(changedData)">
    入力内容確認画面へ
  </RouterLinkButton>
  <RouterLinkButton to="/confirm"> 戻る </RouterLinkButton>
</template>

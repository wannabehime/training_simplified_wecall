<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import CompanionField from '@/components/fields/Companion/CompanionField.vue'
import CalendarDateField from '@/components/fields/Calendar/CalendarDateField.vue'
import CalendarTimeField from '@/components/fields/Calendar/CalendarTimeField.vue'
import RouterLinkButton from '@/components/atoms/Button/RouterLinkButton.vue'
import { useEntryStore } from '@/stores/entryStore'
import { format, parse } from 'date-fns'
import { ja } from 'date-fns/locale'

const { entryData, saveEntryToStore } = useEntryStore()
const parsedDate = parse(entryData.visitDay, 'yyyy年M月d日(EEE)', new Date(), { locale: ja })
const changedEntry = {
  ...entryData,
  visitDay: format(parsedDate, 'yyyy-MM-dd'),
}
</script>

<template>
  <PageTitle title="日程変更" message="入力内容を変更" />

  <CompanionField v-model="changedEntry.isAccompanied" />
  <CalendarDateField v-model="changedEntry.visitDay" />
  <CalendarTimeField v-model="changedEntry.visitTime" />

  <RouterLinkButton to="/entry/change/confirm" @click-event="saveEntryToStore(changedEntry)">
    入力内容確認画面へ
  </RouterLinkButton>
  <RouterLinkButton to="/confirm"> 戻る </RouterLinkButton>
</template>

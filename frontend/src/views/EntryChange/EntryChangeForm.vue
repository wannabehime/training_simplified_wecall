<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import CompanionField from '@/components/fields/Companion/CompanionField.vue'
import CalendarDateField from '@/components/fields/Calendar/CalendarDateField.vue'
import CalendarTimeField from '@/components/fields/Calendar/CalendarTimeField.vue'
import RouterLinkButton from '@/components/atoms/Button/RouterLinkButton.vue'
import { useEntryStore } from '@/stores/entryStore'
import { ref, computed } from 'vue'

const { entryData, saveEntryToStore, convertEntryToString, convertInputToEntry } = useEntryStore()
const input = ref<InputEntry>({
  ...convertEntryToString(entryData),
})
const changedEntry = computed(() => convertInputToEntry(input.value))
</script>

<template>
  <PageTitle title="日程変更" message="入力内容を変更" />

  <CompanionField v-model="input.isAccompanied" />
  <CalendarDateField v-model="input.visitDay" />
  <CalendarTimeField v-model="input.visitTime" />

  <RouterLinkButton to="/entry/change/confirm" @click-event="saveEntryToStore(changedEntry)">
    入力内容確認画面へ
  </RouterLinkButton>
  <RouterLinkButton to="/confirm"> 戻る </RouterLinkButton>
</template>

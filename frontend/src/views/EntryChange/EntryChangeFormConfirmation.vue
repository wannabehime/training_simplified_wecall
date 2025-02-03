<script setup lang="ts">
import ConfirmationContentDisplay from '@/components/ConfirmationContentDisplay.vue';
import PageTitle from '@/components/PageTitle.vue'
import RouterLinkButton from '@/components/atoms/Button/RouterLinkButton.vue';
import { useEntryStore } from '@/stores/entryStore';

const entryStore = useEntryStore()
const entryData = entryStore.entryData
const changedProperties = {
  isAccompanied: entryData.isAccompanied,
  visitDay: entryData.visitDay,
  visitTime: entryData.visitTime,
}
const changeEntry = entryStore.changeEntry
</script>

<template>
  <PageTitle title="入力内容確認画面" message="以下の内容で変更しますか？" />
  <ConfirmationContentDisplay />

  <RouterLinkButton to="/entry/change/complete" @click-event="changeEntry(13, changedProperties)">
    予約内容を変更する
  </RouterLinkButton>
  <RouterLinkButton to="/entry/change"> 内容を修正する </RouterLinkButton>
</template>

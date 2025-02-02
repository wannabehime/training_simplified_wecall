<script setup lang="ts">
import ConfirmationContentDisplay from '@/components/ConfirmationContentDisplay.vue';
import PageTitle from '@/components/PageTitle.vue'
import RouterLinkButton from '@/components/atoms/Button/RouterLinkButton.vue';
import { useEntryStore } from '@/stores/entryStore';

const entryStore = useEntryStore()
const entryData = entryStore.entryData
const registerEntry = entryStore.registerEntry
</script>

<template>
  <PageTitle title="入力内容確認画面" message="以下の内容で予約しますか？" />
  <ConfirmationContentDisplay />

  <RouterLinkButton to="/entry/complete" @click-event="registerEntry(entryData)">
    予約する
  </RouterLinkButton>
  <RouterLinkButton to="/entry"> 内容を修正する </RouterLinkButton>
</template>

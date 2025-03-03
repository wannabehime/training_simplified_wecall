<script setup lang="ts">
import ConfirmationContentDisplay from '@/components/ConfirmationContentDisplay.vue'
import PageTitle from '@/components/PageTitle.vue'
import RouterLinkButton from '@/components/atoms/Button/RouterLinkButton.vue'
import { useEntryStore } from '@/stores/entryStore'
import { useLineStore } from '@/stores/lineStore'

const { entryData, registerEntry } = useEntryStore()
const { idToken, clientId } = useLineStore()
</script>

<template>
  <PageTitle title="入力内容確認画面" message="以下の内容で予約しますか？" />
  <ConfirmationContentDisplay />

  <RouterLinkButton to="/entry/complete" @click-event="registerEntry(entryData, idToken, clientId)">
    予約する
  </RouterLinkButton>
  <RouterLinkButton to="/entry"> 内容を修正する </RouterLinkButton>
</template>

<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import RouterLinkButton from '@/components/atoms/Button/RouterLinkButton.vue'
import ConfirmationContentDisplay from '@/components/ConfirmationContentDisplay.vue'
import { onMounted } from 'vue'
import { useEntryStore } from '@/stores/entryStore'
import { useLineStore } from '@/stores/lineStore'

const { getEntry, saveEntryToStore, cancelEntry } = useEntryStore()

onMounted(async () => {
  const registeredEntry = await getEntry(15)
  if (registeredEntry !== null) {
    saveEntryToStore(registeredEntry)
  }
})
const { idToken, clientId } = useLineStore()
</script>

<template>
  <PageTitle title="予約キャンセル" message="以下の内容をキャンセルしますか？" />
  <ConfirmationContentDisplay />

  <RouterLinkButton to="/entry/cancel/complete" @click-event="cancelEntry(46, idToken, clientId)">
    予約をキャンセルする
  </RouterLinkButton>
  <RouterLinkButton to=""> 閉じる </RouterLinkButton>
</template>

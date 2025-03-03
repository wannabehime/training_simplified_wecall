<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import RouterLinkButton from '@/components/atoms/Button/RouterLinkButton.vue'
import ConfirmationContentDisplay from '@/components/ConfirmationContentDisplay.vue'
import { onMounted } from 'vue'
import { useEntryStore } from '@/stores/entryStore'

const { getEntry, saveEntryToStore } = useEntryStore()

onMounted(async () => {
  const registeredEntry = await getEntry(45)
  if (registeredEntry !== null) {
    saveEntryToStore(registeredEntry)
  }
})
</script>

<template>
  <PageTitle title="予約内容の確認" message="" />
  <ConfirmationContentDisplay />

  <RouterLinkButton to="/entry/change"> 予約内容を変更する </RouterLinkButton>
  <RouterLinkButton to=""> 閉じる </RouterLinkButton>
</template>

<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import RouterLinkButton from '@/components/atoms/Button/RouterLinkButton.vue'
import ConfirmationContentDisplay from '@/components/ConfirmationContentDisplay.vue'
import { onMounted } from 'vue'
import { useEntryStore } from '@/stores/entryStore'

const { getEntryData, deleteEntryData } = useEntryStore()

onMounted(() => {
  getEntryData()
})
</script>

<template>
  <PageTitle title="予約キャンセル" message="以下の内容をキャンセルしますか？" />
  <ConfirmationContentDisplay />

  <RouterLinkButton to="/entrycancel/complete" @click-event="deleteEntryData()">
    予約をキャンセルする
  </RouterLinkButton>
  <RouterLinkButton to=""> 閉じる </RouterLinkButton>
</template>

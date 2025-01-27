<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import RouterLinkButton from '@/components/atoms/Button/RouterLinkButton.vue'
import ConfirmationContentDisplay from '@/components/ConfirmationContentDisplay.vue'
import { onMounted } from 'vue'
import { useFormStore } from '@/stores/formStore'

const { getEntryData } = useFormStore()

onMounted(() => {
  getEntryData()
})
</script>

<template>
  <PageTitle title="予約内容の確認" message="" />
  <ConfirmationContentDisplay />

  <RouterLinkButton to="/entrychange"> 予約内容を変更する </RouterLinkButton>
  <RouterLinkButton to=""> 閉じる </RouterLinkButton>
</template>

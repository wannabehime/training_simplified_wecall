<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import RouterLinkButton from '@/components/atoms/Button/RouterLinkButton.vue'
import ConfirmationContentDisplay from '@/components/ConfirmationContentDisplay.vue'
import { onMounted } from 'vue'
import { useEntryStore } from '@/stores/entryStore'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'

const { getEntry, saveEntryToStore, deleteEntryData } = useEntryStore()

onMounted(async () => {
  const registeredEntry = await getEntry(12)
  const formattedEntry = {
    ...registeredEntry,
    birthday: format(registeredEntry.birthday, 'yyyy年M月d日'),
    isAccompanied: registeredEntry.isAccompanied ? 'あり' : 'なし',
    visitDay: format(registeredEntry.visitDay, 'yyyy年M月d日(EEE)', { locale: ja }),
  }
  saveEntryToStore(formattedEntry)
})
</script>

<template>
  <PageTitle title="予約キャンセル" message="以下の内容をキャンセルしますか？" />
  <ConfirmationContentDisplay />

  <RouterLinkButton to="/entry/cancel/complete" @click-event="deleteEntryData()">
    予約をキャンセルする
  </RouterLinkButton>
  <RouterLinkButton to=""> 閉じる </RouterLinkButton>
</template>

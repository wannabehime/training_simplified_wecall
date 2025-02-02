<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import RouterLinkButton from '@/components/atoms/Button/RouterLinkButton.vue'
import ConfirmationContentDisplay from '@/components/ConfirmationContentDisplay.vue'
import { onMounted } from 'vue'
import { useEntryStore } from '@/stores/entryStore'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'

const { getEntry, saveEntryToStore } = useEntryStore()

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
  <PageTitle title="予約内容の確認" message="" />
  <ConfirmationContentDisplay />

  <RouterLinkButton to="/entry/change"> 予約内容を変更する </RouterLinkButton>
  <RouterLinkButton to=""> 閉じる </RouterLinkButton>
</template>

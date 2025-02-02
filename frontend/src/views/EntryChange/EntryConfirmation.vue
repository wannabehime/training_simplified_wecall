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
  let formattedEntry = {
    familyName: '',
      personalName: '',
      familyNameKana: '',
      personalNameKana: '',
      gender: '',
      birthday: '',
      prefecture: '',
      tel: '',
      email: '',
      isAccompanied: '',
      visitDay: '',
      visitTime: '',
  }
  if (registeredEntry !== null) {
    formattedEntry = {
      ...registeredEntry,
      birthday: format(registeredEntry.birthday, 'yyyy年MM月dd日'),
      isAccompanied: registeredEntry.isAccompanied ? 'あり' : 'なし',
      visitDay: format(registeredEntry.visitDay, 'yyyy年MM月dd日(EEE)', { locale: ja }),
    }
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

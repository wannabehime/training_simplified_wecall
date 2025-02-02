<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import RouterLinkButton from '@/components/atoms/Button/RouterLinkButton.vue'
import ConfirmationContentDisplay from '@/components/ConfirmationContentDisplay.vue'
import { onMounted } from 'vue'
import { useEntryStore } from '@/stores/entryStore'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'

const { getEntry, saveEntryToStore, cancelEntry } = useEntryStore()

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
  <PageTitle title="予約キャンセル" message="以下の内容をキャンセルしますか？" />
  <ConfirmationContentDisplay />

  <RouterLinkButton to="/entry/cancel/complete" @click-event="cancelEntry(12)">
    予約をキャンセルする
  </RouterLinkButton>
  <RouterLinkButton to=""> 閉じる </RouterLinkButton>
</template>

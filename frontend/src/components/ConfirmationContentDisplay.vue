<script setup lang="ts">
import { useEntryStore } from '@/stores/entryStore'
import { storeToRefs } from 'pinia'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'
import {computed} from 'vue'

const { entryData } = storeToRefs(useEntryStore())
const name = computed(() => {
  const entryValue = entryData.value
  return `${entryValue.familyName} ${entryValue.personalName}（${entryValue.familyNameKana} ${entryValue.personalNameKana}）`
})
const birthday = computed(() => format(entryData.value.birthday, 'yyyy年M月d日'))
const isAccompanied = computed(() => entryData.value.isAccompanied === true ? 'あり' : 'なし')
const visitDay = computed(() => format(entryData.value.visitDay, 'yyyy年M月d日(EEE)', { locale: ja }))
</script>

<template>
  <div>
    <p>お名前</p>
    <p>
      {{ name }}
    </p>
  </div>
  <div>
    <p>性別</p>
    <p>{{ entryData.gender }}</p>
  </div>
  <div>
    <p>生年月日</p>
    <p>{{ birthday }}</p>
  </div>
  <div>
    <p>都道府県</p>
    <p>{{ entryData.prefecture }}</p>
  </div>
  <div>
    <p>電話番号</p>
    <p>{{ entryData.tel }}</p>
  </div>
  <div>
    <p>メールアドレス</p>
    <p>{{ entryData.email }}</p>
  </div>
  <div>
    <p>同伴者</p>
    <p>{{ isAccompanied }}</p>
  </div>
  <div>
    <p>来場日</p>
    <p>{{ visitDay }}</p>
  </div>
  <div>
    <p>来場時間</p>
    <p>{{ entryData.visitTime }}</p>
  </div>
</template>

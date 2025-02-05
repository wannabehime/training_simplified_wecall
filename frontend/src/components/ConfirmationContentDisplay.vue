<script setup lang="ts">
import { useEntryStore } from '@/stores/entryStore'
import { storeToRefs } from 'pinia'

const { entryData } = storeToRefs(useEntryStore())
</script>

<template>
  <div>
    <p>お名前</p>
    <p>
      {{
        entryData.familyName +
        ' ' +
        entryData.personalName +
        '（' +
        entryData.familyNameKana +
        ' ' +
        entryData.personalNameKana +
        '）'
      }}
    </p>
  </div>
  <div>
    <p>性別</p>
    <p>{{ entryData.gender }}</p>
  </div>
  <div>
    <p>生年月日</p>
    <p>{{ entryData.birthday }}</p>
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
    <p>{{ entryData.isAccompanied }}</p>
  </div>
  <div>
    <p>来場日</p>
    <p>{{ entryData.visitDay }}</p>
  </div>
  <div>
    <p>来場時間</p>
    <p>{{ entryData.visitTime }}</p>
  </div>
</template>

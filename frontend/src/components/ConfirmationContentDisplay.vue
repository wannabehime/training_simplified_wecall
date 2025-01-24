<script setup lang="ts">
import { useFormStore } from '@/stores/formStore'

const { formData } = useFormStore()
const {
  name,
  gender,
  birthday,
  prefecture,
  tel,
  email,
  is_accompanied,
  visit_day,
  visit_time,
} = formData
</script>

<template>
  <div>
    <p>お名前</p>
    <p>{{ name }}</p>
  </div>
  <div>
    <p>性別</p>
    <p>{{ gender }}</p>
  </div>
  <div>
    <p>生年月日</p>
    <p>{{ birthday }}</p>
  </div>
  <div>
    <p>都道府県</p>
    <p>{{ prefecture }}</p>
  </div>
  <div>
    <p>電話番号</p>
    <p>{{ tel }}</p>
  </div>
  <div>
    <p>メールアドレス</p>
    <p>{{ email }}</p>
  </div>
  <div>
    <p>同伴者</p>
    <p>{{ is_accompanied }}</p>
  </div>
  <div>
    <p>来場日</p>
    <p>{{ visit_day }}</p>
  </div>
  <div>
    <p>来場時間</p>
    <p>{{ visit_time }}</p>
  </div>
</template>

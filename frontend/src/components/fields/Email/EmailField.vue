<script setup lang="ts">
import TextInput from '@/components/atoms/TextInput.vue'
const model = defineModel<string>()
</script>

<template>
  <TextInput :label="'メールアドレス'" v-model="model" />
  <p>※本イベントに関して、ご連絡させていただく可能性がございます。</p>
</template>

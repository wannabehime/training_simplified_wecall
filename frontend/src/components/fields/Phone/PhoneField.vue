<script setup lang="ts">
import TextInput from '@/components/atoms/TextInput.vue'
const model = defineModel<string>()
</script>

<template>
  <TextInput label="電話番号" v-model="model" />
</template>

<script setup lang="ts">
import TextInput from '@/components/atoms/TextInput.vue'

const model = defineModel<string>()
</script>

<template>
  <TextInput :label="'お名前'" v-model="model" />
</template>

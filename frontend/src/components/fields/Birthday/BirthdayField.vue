<script setup lang="ts">
import DateInput from '@/components/atoms/DateInput.vue'
const model = defineModel<string>()
</script>

<template>
  <DateInput label="生年月日" v-model="model"/>
</template>

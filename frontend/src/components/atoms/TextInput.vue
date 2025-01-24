<script setup lang="ts">
const model = defineModel<string>()
const props = defineProps<{
  label: string
}>()
</script>

<template>
  <label
    >{{ props.label }}
    <input v-model="model" />
  </label>
</template>

<script setup lang="ts">
const props = defineProps<{ items: string[] }>()
const model = defineModel<string>()
</script>

<template>
  <select v-model="model">
    <option
      v-for="(item, index) in props.items"
      :key="index"
      :value="item"
    >
      {{ item }}
    </option>
  </select>
</template>

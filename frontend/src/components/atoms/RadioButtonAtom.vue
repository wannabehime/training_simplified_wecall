<script setup lang="ts">
const props = defineProps<{ name: string, value: string; }>()
const model = defineModel<string>()
</script>

<template>
  <label>
    <input type="radio" :name="props.name" :value="props.value" v-model="model"/>
    {{ props.value }}
  </label>
</template>

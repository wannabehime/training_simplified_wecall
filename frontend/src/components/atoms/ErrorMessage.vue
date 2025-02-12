<script setup lang="ts">
const props = defineProps<{
  isEmpty: boolean
}>()
</script>

<template>
  <div v-if="props.isEmpty">
    <slot />
  </div>
</template>

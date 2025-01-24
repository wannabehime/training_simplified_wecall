<script setup lang="ts">
import { RouterLink } from 'vue-router'
const props = defineProps<{ to: string }>()
</script>

<template>
  <RouterLink :to="props.to" @click="$emit('clickEvent')">
    <slot />
  </RouterLink>
</template>

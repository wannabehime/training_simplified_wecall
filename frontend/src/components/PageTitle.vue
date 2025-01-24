<script setup lang="ts">
const props = defineProps<{ title: string; message: string }>()
</script>

<template>
  <p>GENEROSITY</p>
  <p>WeCALL サービス体験</p>
  <p>{{ props.title }}</p>
  <p>{{ props.message }}</p>
</template>

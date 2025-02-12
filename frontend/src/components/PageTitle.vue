<script setup lang="ts">
const props = defineProps<{ title: string; message: string }>()
</script>

<template>
  <div>
    <p class="inline-center">GENEROSITY</p>
    <p class="inline-center">WeCALL サービス体験</p>
    <p class="inline-center">{{ props.title }}</p>
    <p class="inline-center">{{ props.message }}</p>
  </div>
</template>

<style scoped>
.inline-center {
  text-align: center;
}
</style>

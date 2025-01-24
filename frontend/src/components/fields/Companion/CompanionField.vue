<script setup lang="ts">
import DropdownAtom from '@/components/atoms/DropdownAtom.vue'
const model = defineModel<string>()
const isAccompanied = ['あり', 'なし']
</script>

<template>
  <label>
    同伴者
    <DropdownAtom :items="isAccompanied" v-model="model" />
  </label>
  <p>※同伴者の追加は1名様までになります。</p>
</template>

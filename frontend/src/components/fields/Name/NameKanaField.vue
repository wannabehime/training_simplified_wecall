<script setup lang="ts">
import TextInput from '@/components/atoms/TextInput.vue'

const familyNameKana = defineModel<string>('familyNameKana')
const personalNameKana = defineModel<string>('personalNameKana')
</script>

<template>
  <TextInput label="セイ" v-model="familyNameKana" />
  <TextInput label="メイ" v-model="personalNameKana" />
</template>

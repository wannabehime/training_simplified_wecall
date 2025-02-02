<script setup lang="ts">
import TextInput from '@/components/atoms/TextInput.vue'

const familyName = defineModel<string>('familyName')
const personalName = defineModel<string>('personalName')
</script>

<template>
  <TextInput label="姓" v-model="familyName" />
  <TextInput label="名" v-model="personalName" />
</template>

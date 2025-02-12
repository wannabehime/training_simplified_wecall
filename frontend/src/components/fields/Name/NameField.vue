<script setup lang="ts">
import ErrorMessage from '@/components/atoms/ErrorMessage.vue';
import TextInput from '@/components/atoms/TextInput.vue'

// const errorMessage = defineModel<string>()
const props = defineProps<{
  isEmpty: boolean
}>()

const familyName = defineModel<string>('familyName')
const personalName = defineModel<string>('personalName')
</script>

<template>
  <TextInput label="姓" v-model="familyName" />
  <TextInput label="名" v-model="personalName" />
  <ErrorMessage :is-empty="props.isEmpty">※入力してください</ErrorMessage>
</template>

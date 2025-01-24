<script setup lang="ts">
import RadioButton from '@/components/atoms/RadioButtonAtom.vue'

const model = defineModel<string>()
</script>

<template>
  <fieldset>
    <legend>性別</legend>
    <RadioButton name="gender" :value="'男性'" v-model="model"/>
    <RadioButton name="gender" :value="'女性'" v-model="model"/>
    <RadioButton name="gender" :value="'その他'" v-model="model"/>
  </fieldset>
</template>

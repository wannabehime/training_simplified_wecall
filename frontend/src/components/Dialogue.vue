<script setup lang="ts">
import ButtonAtom from './atoms/Button/ButtonAtom.vue';

</script>

<template>
  <div class="background">
    <div class="container">

      <!-- <ButtonAtom v-if="">{{ buttonText }}</ButtonAtom> -->
      <ButtonAtom>閉じる</ButtonAtom>
    </div>
  </div>
</template>

<style scoped>
.background {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
}

.container {
  height: auto;
  width: 70%;
  margin: 0 auto;
  background-color: white;
}
</style>

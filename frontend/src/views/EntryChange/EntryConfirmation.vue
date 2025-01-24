<script setup lang="ts">
import ConfirmationContentDisplay from '@/components/ConfirmationContentDisplay.vue';
import PageTitle from '@/components/PageTitle.vue'
import RouterLinkButton from '@/components/atoms/Button/RouterLinkButton.vue';

</script>

<template>
  <PageTitle :title="'予約内容の確認'" :message="''" />
  <ConfirmationContentDisplay />

  <RouterLinkButton to="/entry/complete">
    予約する
  </RouterLinkButton>
  <RouterLinkButton to="/entry"> 内容を修正する </RouterLinkButton>
</template>

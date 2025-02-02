<script setup lang="ts">
import ConfirmationContentDisplay from '@/components/ConfirmationContentDisplay.vue';
import PageTitle from '@/components/PageTitle.vue'
import RouterLinkButton from '@/components/atoms/Button/RouterLinkButton.vue';

</script>

<template>
  <PageTitle title="入力内容確認画面" message="以下の内容で変更しますか？" />
  <ConfirmationContentDisplay />

  <RouterLinkButton to="/entry/change/complete">
    予約内容を変更する
  </RouterLinkButton>
  <RouterLinkButton to="/entry/change"> 内容を修正する </RouterLinkButton>
</template>

<script setup lang="ts">
import RouterLinkButton from '@/components/atoms/Button/RouterLinkButton.vue';
import PageTitle from '@/components/PageTitle.vue'

</script>

<template>
  <PageTitle :title="'予約完了'" :message="''" />
  <p>ご予約が完了しました。LINEのトークルームにご予約情報をお送りしておりますのでご確認ください。</p>
  <RouterLinkButton to=""> 閉じる </RouterLinkButton>
</template>

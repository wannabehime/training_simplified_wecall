<script setup lang="ts">
import RouterLinkButton from '@/components/atoms/Button/RouterLinkButton.vue';
import PageTitle from '@/components/PageTitle.vue'

</script>

<template>
  <PageTitle title="予約キャンセル完了" message="" />
  <p>ご予約をキャンセルしました。LINEのトークルームから再予約が可能です。</p>
  <RouterLinkButton to=""> 閉じる </RouterLinkButton>
</template>

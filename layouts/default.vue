<script setup lang="ts">
import { usePageStore } from '~/stores/page';
const pageStore = usePageStore();

const nuxtApp = useNuxtApp();
nuxtApp.hook("page:start", () => pageStore.SET_LOADING(true));
nuxtApp.hook("page:finish", () => pageStore.SET_LOADING(false));
</script>

<template>
  <main class="main min-h-screen h-auto w-screen bg-white">
    <CustomPageLoadingHLoading />
    <BaseHeaderHHeader />
    <slot></slot>
    <BaseFooterHFooter />
  </main>
</template>

<style lang="scss" scoped>
// .main {}
</style>
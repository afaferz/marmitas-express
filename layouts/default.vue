<template>
  <main class="main h-screen w-screen bg-white">
    <CustomPageLoadingHLoading />
    <BaseHeaderHHeader />
    <slot />
    <BaseFooterHFooter />
  </main>
</template>

<style lang="scss">
// .main {
//   width: 100vw;
//   height: 100vh;
// }
</style>

<script setup lang="ts">
import { usePageStore } from "~/stores/page";
const pageStore = usePageStore();

const nuxtApp = useNuxtApp();
nuxtApp.hook("page:start", () => pageStore.SET_LOADING(true));
nuxtApp.hook("page:finish", () => pageStore.SET_LOADING(false));
</script>

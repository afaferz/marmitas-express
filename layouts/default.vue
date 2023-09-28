<script setup lang="ts">
import { usePageStore } from '~/stores/page';
const pageStore = usePageStore();

const nuxtApp = useNuxtApp();
nuxtApp.hook('page:start', () => pageStore.SET_LOADING(true));
nuxtApp.hook('page:finish', () => pageStore.SET_LOADING(false));
</script>

<template>
    <BaseHeaderHHeader />
    <CustomPageLoadingHLoading />
    <main class="main h-screen pt-20 bg-white">
        <slot></slot>
    </main>
    <BaseFooterHFooter />
</template>

<style lang="scss" scoped>
// .main {}
</style>

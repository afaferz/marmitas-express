<script setup lang="ts">
import MenuProducts from '~/components/Pages/Cardapio/MenuProducts.vue';
useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>
<template>
  <div>
    <MenuProducts />
  </div>
</template>

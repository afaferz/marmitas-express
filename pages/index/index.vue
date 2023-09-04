<script setup lang="ts">
useSeoMeta({
  title: "My Amazing Site",
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>
<template>
  <section class="min-h-screen h-full w-screen page-index bg-white">
    <div class="w-full">
      <PagesIndexSectionsHSection1 />
    </div>
  </section>
</template>
<style scoped>
.page-index {
  background-image: repeating-radial-gradient(
      circle at 0 0,
      transparent 0,
      #82bc34 10px
    ),
    repeating-linear-gradient(#1f1f1f55, #1f1f1f);
}
</style>

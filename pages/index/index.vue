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
  /* background-color: #82bc34; */
  /* opacity: 0.8;
  background: linear-gradient(135deg, #1f1f1f55 25%, transparent 25%) -10px 0/
      20px 20px,
    linear-gradient(225deg, #1f1f1f 25%, transparent 25%) -10px 0/ 20px 20px,
    linear-gradient(315deg, #1f1f1f55 25%, transparent 25%) 0px 0/ 20px 20px,
    linear-gradient(45deg, #1f1f1f 25%, #82bc34 25%) 0px 0/ 20px 20px; */
  background-color: #82bc34;
  opacity: 0.8;
  background-image: linear-gradient(
      30deg,
      #1f1f1f 12%,
      transparent 12.5%,
      transparent 87%,
      #1f1f1f 87.5%,
      #1f1f1f
    ),
    linear-gradient(
      150deg,
      #1f1f1f 12%,
      transparent 12.5%,
      transparent 87%,
      #1f1f1f 87.5%,
      #1f1f1f
    ),
    linear-gradient(
      30deg,
      #1f1f1f 12%,
      transparent 12.5%,
      transparent 87%,
      #1f1f1f 87.5%,
      #1f1f1f
    ),
    linear-gradient(
      150deg,
      #1f1f1f 12%,
      transparent 12.5%,
      transparent 87%,
      #1f1f1f 87.5%,
      #1f1f1f
    ),
    linear-gradient(
      60deg,
      #1f1f1f77 25%,
      transparent 25.5%,
      transparent 75%,
      #1f1f1f77 75%,
      #1f1f1f77
    ),
    linear-gradient(
      60deg,
      #1f1f1f77 25%,
      transparent 25.5%,
      transparent 75%,
      #1f1f1f77 75%,
      #1f1f1f77
    );
  background-size: 20px 35px;
  background-position: 0 0, 0 0, 10px 18px, 10px 18px, 0 0, 10px 18px;
}
</style>

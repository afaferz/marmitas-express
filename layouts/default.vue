<template>
  <main class="main bg-white">
    <BaseHeaderHHeader />
    <slot />
    <BaseFooterHFooter />
  </main>
</template>

<style lang="scss">
.main {
  width: 100vw;
  height: 100vh;
}
</style>

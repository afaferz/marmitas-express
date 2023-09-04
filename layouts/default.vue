<template>
  <main class="main">
    <BaseHeaderHHeader />
    <slot />
    <BaseFooterHFooter />
  </main>
</template>

<style lang="scss">
.main {
  width: 100vw;
  height: 100vh;
  background-color: aquamarine;
}
</style>

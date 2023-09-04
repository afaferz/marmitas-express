<script lang="ts">
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { useMenuStore } from "~/stores/menu";
export default defineComponent({
  name: "BaseFooterFooter",
  setup() {
    const menuStore = useMenuStore();
    const { navbar, lgpd } = storeToRefs(menuStore);
    return { navbar, lgpd };
  },
});
</script>

<template>
  <footer class="footer h-16 w-full bg-primary">
    <NavHNavFooter :items="navbar" :items-lgpd="lgpd" />
  </footer>
</template>
<style scoped>
.footer {
  height: auto;
}
.footer::after {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.07), transparent);
  content: "";
  display: block;
  height: 8px;
  margin-bottom: 10px;
  pointer-events: none;
  position: absolute;
  top: 100%;
  width: 100%;
}
</style>

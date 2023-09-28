<script lang="ts">
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { useMenuStore } from "~/stores/menu";
export default defineComponent({
  name: "BaseHeaderHHeader",
  setup() {
    const menuStore = useMenuStore();
    const { navbar } = storeToRefs(menuStore);
    return { navbar };
  },
});
</script>

<template>
  <header class="header h-20 py-4 w-full fixed bg-primary z-10">
    <NavHNavHeader :items="navbar" />
  </header>
</template>
<style scoped>
.header {
    border-radius: 0 0 1.25rem 1.25rem;
}
/* .header::after {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.07), transparent);
  content: "";
  display: block;
  height: 8px;
  margin-bottom: 10px;
  pointer-events: none;
  position: absolute;
  top: 100%;
  width: 100%;
} */
</style>

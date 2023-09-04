<template>
  <div v-if="loading" class="h-screen w-screen fixed top-0 left-0 right-0 bottom-0 bg-primary z-10 grid place-content-center">
    <div class="text-white">Loading...</div>
  </div>
</template>

<script lang="ts">
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { usePageStore } from "~/stores/page";

export default defineComponent({
  setup() {
      const store = usePageStore();
      const { GET_LOADING } = storeToRefs(store);
      return { loading: GET_LOADING };
  },
});
</script>

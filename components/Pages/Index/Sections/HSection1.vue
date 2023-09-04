<script lang="ts">
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { usePlansStore } from "~/stores/plans";
export default defineComponent({
  name: "PagesIndexSection1HSection1",
  setup() {
    const planStore = usePlansStore();
    const { items } = storeToRefs(planStore);
    return { items };
  },
});
</script>

<template>
  <div class="p-8 lg:text-center mx-auto w-full px-4 lg:w-3/4">
    <div class="bg-primary p-4 skew-x-12">
      <h4 class="text-4xl font-bold text-white --subtitle lg:text-6xl">
        Conheça nossos planos
      </h4>
    </div>
    <div
      class="grid grid-cols-1 gap-4 grid-rows-auto max-w-fit md:grid-cols-2 lg:grid-cols-3 my-8 mx-auto"
    >
      <DSCardHeroHCard
        v-for="(item, index) in items"
        :key="index"
        :item="item"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.--subtitle {
  text-shadow: 1px 1px 0 #d5d8ce, 1px 2px 2px #e3e3e3,
    2px 2px 2px rgba(206, 89, 55, 0);
  font-family: "ADLaM Display", cursive;
}
</style>

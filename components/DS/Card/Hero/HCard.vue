<script lang="ts">
import { defineComponent } from "vue";
import { Plans } from "~/models/plans";

export default defineComponent({
  name: "DSCardHeroHCard",
  props: {
    item: {
      type: Object as () => Plans.Viva,
      default: () => ({}),
    },
  },
  setup() {},
});
</script>

<template>
  <div>
    <NuxtLink
      class="group cursor-pointer card-wrapper w-full h-auto rounded-lg grid grid-cols-1 grid-row-2 bg-primary hover:bg-secondary ease-in-out duration-300"
      :aria-label="item.title"
      :to="item.linkUrl"
      tabindex="0"
    >
      <div
        class="card__img w-full min-h-40 grid place-content-center rounded-lg"
        tabindex="-1"
      >
        <NuxtImg class="p-2" :src="item.linkImage" :alt="item.title" />
      </div>
      <div
        class="card__content my-3 p-4 text-left text-white flex flex-col gap-2"
        tabindex="-1"
      >
        <h3 class="font-bold text-2xl">{{ item.title }}</h3>
        <p class="font-light text-overflow ellipsis" dir="ltr">
          {{ item.description }}
        </p>
      </div>
      <div class="card__action p-4 text-white" tabindex="-1">
        <DSButtonMainHButton
          :icon="['fas', 'arrow-right']"
          class="p-2 w-full bg-secondary group-hover:bg-primary rounded"
          tabindex="0"
        >
          <NuxtLink to="/contato" class="inline-block h-full">
            {{ item.callTitle }}
          </NuxtLink>
        </DSButtonMainHButton>
      </div>
    </NuxtLink>
  </div>
</template>

<style lang="scss">
.card__img {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
</style>

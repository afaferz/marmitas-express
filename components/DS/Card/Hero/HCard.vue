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
    inverse: Boolean,
  },
  setup() {},
});
</script>

<template>
  <div>
    <NuxtLink
      class="group cursor-pointer card-wrapper w-full h-auto rounded-lg grid grid-cols-1 grid-row-2 bg-primary drop-shadow-lg"
      :aria-label="item.title"
      :to="item.linkUrl"
      tabindex="0"
    >
      <div
        class="card__img w-full h-40 min-h-40 max-h-40 flex flex-col justify-center items-center rounded-lg px-2 py-6"
        tabindex="-1"
      >
        <NuxtImg :src="item.linkImage" :alt="item.title" class="w-3/4 h-full" />
      </div>
      <div
        class="text-white group-hover:bg-white group-hover:text-primary ease-in-out duration-300"
      >
        <div
          class="card__content my-3 p-4 text-left flex flex-col gap-2"
          tabindex="-1"
        >
          <h3 class="font-bold text-2xl">{{ item.title }}</h3>
          <p class="font-light text-overflow ellipsis" dir="ltr">
            {{ item.description }}
          </p>
        </div>
        <div
          class="card__action p-4"
          tabindex="-1"
        >
          <DSButtonMainHButton
            :icon="['fas', 'arrow-right']"
            class="p-2 w-full text-left group-hover:bg-primary group-hover:text-white rounded"
            tabindex="0"
          >
            <NuxtLink to="/contato" class="inline-block h-full">
              {{ item.callTitle }}
            </NuxtLink>
          </DSButtonMainHButton>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style lang="scss">
.card-wrapper {
  // background: rgb(10, 9, 9);
  // background: -moz-linear-gradient(
  //   175deg,
  //   rgba(10, 9, 9, 0) 26.75%,
  //   rgba(130, 188, 52, 1) 30%
  // );
  // background: -webkit-linear-gradient(
  //   175deg,
  //   rgba(10, 9, 9, 0) 26.75%,
  //   rgba(130, 188, 52, 1) 30%
  // );
  // background: linear-gradient(
  //   175deg,
  //   rgba(10, 9, 9, 0) 26.75%,
  //   rgba(130, 188, 52, 1) 30%
  // );
  // filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0a0909",endColorstr="#82bc34",GradientType=1);
}
.card__img {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top: 2px solid #82bc34;
  filter: blur(0.5);
}
</style>

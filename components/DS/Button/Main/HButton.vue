<template>
  <button type="button" v-bind="htmlAttr">
    <slot />
    <fa-icon v-if="icon" class="ml-2 vertical-middle" :icon="[...icon]" />
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { ButtonProps } from "./types";

export default defineComponent({
  props: {
    icon: {
      type: Array as () => Array<string>,
      required: false,
    },
    htmlAttr: Object as () => ButtonProps,
  },
  setup() {},
});
</script>

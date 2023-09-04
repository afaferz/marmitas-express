<template>
  <button type="button" v-bind="htmlAttr">
    <slot />
    <fa-icon
      v-if="icon"
      class="ml-2 vertical-middle"
      :icon="[...icon]"
      :class="[...iconClass]"
    />
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
    iconClass: {
      type: Array as () => Array<string>,
      default: () => [],
    },
    htmlAttr: Object as () => ButtonProps,
  },
  setup() {},
});
</script>

<template>
    <a href="http://" target="_blank" v-if="!!href" v-bind="htmlAttr">
        <div class="flex gap-2 items-center justify-center px-2 mx-auto w-full text-center">
            <slot />
            <fa-icon
                v-if="icon"
                class="vertical-middle"
                :icon="[...icon]"
                :class="[...iconClass]"
            />
        </div>
    </a>
    <button type="button" v-bind="htmlAttr" v-else>
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
import { defineComponent } from 'vue';
import { ButtonProps } from './types';

export default defineComponent({
    props: {
        href: {
            type: String,
            default: '',
        },
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

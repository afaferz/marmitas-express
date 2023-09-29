<script lang="ts">
import { defineComponent } from 'vue';
import { Products } from '~/models/products';
import CardModal from './CardModal.vue';
export default defineComponent({
    components: { CardModal },
    name: 'CardPreview',
    props: {
        item: {
            type: Object as PropType<Products.SingleProduct>,
            default: () => {},
            required: true,
        },
    },
    setup() {
        const $item = reactive({});
        return { $item };
    },
});
</script>

<template>
    <div>
        <a @click.prevent="item.show = true" class="cursor-pointer">
            <div
                class="shadow-xl rounded-xl min-h-full h-auto w-full p-4 bg-white"
            >
                <div class="rounded-xl h-36 lg:h-48">
                    <div
                        class="rounded-xl border-solid border-primary border-2 h-36 w-full lg:h-48"
                    >
                        <img
                            src=""
                            alt=""
                            class="block rounded-xl h-full w-full"
                        />
                    </div>
                </div>
                <div class="rounded-xl h-22 pt-4">
                    <h3 class="text-primary font-nromal text-lg --subtitle">
                        {{ item.title }}
                    </h3>
                </div>
            </div>
        </a>
        <CardModal v-model:opened="item.show" :item="item" />
    </div>
</template>
<style lang="scss" scoped>
.--subtitle {
    text-shadow: 1px 1px 0 #d5d8ce, 1px 2px 2px #e3e3e3,
        2px 2px 2px rgba(206, 89, 55, 0);
    font-family: 'ADLaM Display', cursive;
}
</style>

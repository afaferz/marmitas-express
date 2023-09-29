<script lang="ts">
import { storeToRefs } from 'pinia';
import { useProductsStore } from '~/stores/products';
import { defineComponent } from 'vue';
import CardGrid from './CardGrid.vue';
export default defineComponent({
    components: { CardGrid },
    name: 'Products',
    props: {
        item: {
            type: Object,
            default: () => {},
            required: true,
        },
    },
    setup() {
        const productsStore = useProductsStore();
        const { steak, chicken, brazilian, sideDish, drink, desert } =
            storeToRefs(productsStore);
        return { steak, chicken, brazilian, sideDish, drink, desert };
    },
});
</script>

<template>
    <div class="">
        <div class="products products-steak">
            <CardGrid :category="steak" />
        </div>
        <div class="products products-chicken">
            <CardGrid :category="chicken" />
        </div>
        <div class="products products-brazilian">
            <CardGrid :category="brazilian" />
        </div>
        <div class="products products-side-dish">
            <CardGrid :category="sideDish" />
        </div>
        <div class="products products-drink">
            <CardGrid :category="drink" />
        </div>
        <div class="products products-desert">
            <CardGrid :category="desert" />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.--subtitle {
    text-shadow: 1px 1px 0 #d5d8ce, 1px 2px 2px #e3e3e3,
        2px 2px 2px rgba(206, 89, 55, 0);
    font-family: 'ADLaM Display', cursive;
}
</style>

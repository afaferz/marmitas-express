<script lang="ts">
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { useProductsStore } from '~/stores/products';

export default defineComponent({
    setup() {
        const formatMoney = computed(
            () => (value: number) =>
                new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(value)
        );
        const productsStore = useProductsStore();
        const { steak, chicken, brazilian, sideDish, drink, desert } =
            storeToRefs(productsStore);
        return {
            steak,
            chicken,
            brazilian,
            sideDish,
            drink,
            desert,
            formatMoney,
        };
    },
});
</script>

<template>
    <div class="bg-primary h-auto w-full">
        <div class="mx-auto text-center py-10">
            <h3 class="--subtitle text-white text-3xl">Cardápio</h3>
            <span class="text-xs text-white font-light">
                * As opçôes podem mudar
            </span>
        </div>
        <div class="steak my-2">
            <h3
                class="px-12 lg:px-32 flex w-1/2 font-bold text-2xl text-center text-secondary"
            >
                {{ steak.title }}
            </h3>
            <div
                v-for="item in steak.items"
                :key="item.id"
                class="px-12 lg:px-32 flex flex-row py-2 my-2"
            >
                <div class="w-1/2 flex flex-col gap-1 product pb-2">
                    <span class="product-name font-bold text-white">
                        {{ item.title }}
                    </span>
                    <span
                        class="product-description text-sm font-normal text-white"
                    >
                        {{ item.description }}
                    </span>
                </div>
                <div
                    class="w-1/2 flex flex-col items-end justify-center font-extrabold text-xl text-secondary product pb-2"
                >
                    <span class="product-price">
                        {{ formatMoney(item.price) }}
                    </span>
                    <DSButtonMainHButton
                        :icon="['fas', 'arrow-up-right-from-square']"
                        :icon-class="['text-primary font-bold']"
                        class="p-1 w-1/2 lg:w-1/6 bg-white rounded-lg"
                        tabindex="0"
                        :href="item.linkUrl"
                        target="_blank"
                    >
                        <span class="text-primary font-bold text-sm">
                            Pedir
                        </span>
                    </DSButtonMainHButton>
                </div>
            </div>
        </div>
        <div class="chicken my-2">
            <h3
                class="px-12 lg:px-32 flex w-1/2 font-bold text-2xl text-center text-secondary"
            >
                {{ chicken.title }}
            </h3>
            <div
                v-for="item in chicken.items"
                :key="item.id"
                class="px-12 lg:px-32 flex flex-row py-2 my-2"
            >
                <div class="w-1/2 flex flex-col gap-1 product pb-2">
                    <span class="product-name font-bold text-white">
                        {{ item.title }}
                    </span>
                    <span
                        class="product-description text-sm font-normal text-white"
                    >
                        {{ item.description }}
                    </span>
                </div>
                <div
                    class="w-1/2 flex flex-col items-end justify-center font-extrabold text-xl text-secondary product pb-2"
                >
                    <span class="product-price">
                        {{ formatMoney(item.price) }}
                    </span>
                    <DSButtonMainHButton
                        :icon="['fas', 'arrow-up-right-from-square']"
                        :icon-class="['text-primary font-bold']"
                        class="p-1 w-1/2 lg:w-1/6 bg-white rounded-lg"
                        tabindex="0"
                        :href="item.linkUrl"
                        target="_blank"
                    >
                        <span class="text-primary font-bold text-sm">
                            Pedir
                        </span>
                    </DSButtonMainHButton>
                </div>
            </div>
        </div>
        <div class="brazilian my-2">
            <h3
                class="px-12 lg:px-32 flex w-1/2 font-bold text-2xl text-center text-secondary"
            >
                {{ brazilian.title }}
            </h3>
            <div
                v-for="item in brazilian.items"
                :key="item.id"
                class="px-12 lg:px-32 flex flex-row py-2 my-2"
            >
                <div class="w-1/2 flex flex-col gap-1 product pb-2">
                    <span class="product-name font-bold text-white">
                        {{ item.title }}
                    </span>
                    <span
                        class="product-description text-sm font-normal text-white"
                    >
                        {{ item.description }}
                    </span>
                </div>
                <div
                    class="w-1/2 flex flex-col items-end justify-center font-extrabold text-xl text-secondary product pb-2"
                >
                    <span class="product-price">
                        {{ formatMoney(item.price) }}
                    </span>
                    <DSButtonMainHButton
                        :icon="['fas', 'arrow-up-right-from-square']"
                        :icon-class="['text-primary font-bold']"
                        class="p-1 w-1/2 lg:w-1/6 bg-white rounded-lg"
                        tabindex="0"
                        :href="item.linkUrl"
                        target="_blank"
                    >
                        <span class="text-primary font-bold text-sm">
                            Pedir
                        </span>
                    </DSButtonMainHButton>
                </div>
            </div>
        </div>
        <div class="sideDish my-2">
            <h3
                class="px-12 lg:px-32 flex w-1/2 font-bold text-2xl text-center text-secondary"
            >
                {{ sideDish.title }}
            </h3>
            <div
                v-for="item in sideDish.items"
                :key="item.id"
                class="px-12 lg:px-32 flex flex-row py-2 my-2"
            >
                <div class="w-1/2 flex flex-col gap-1 product pb-2">
                    <span class="product-name font-bold text-white">
                        {{ item.title }}
                    </span>
                    <span
                        class="product-description text-sm font-normal text-white"
                    >
                        {{ item.description }}
                    </span>
                </div>
                <div
                    class="w-1/2 flex flex-col items-end justify-center font-extrabold text-xl text-secondary product pb-2"
                >
                    <span class="product-price">
                        {{ formatMoney(item.price) }}
                    </span>
                    <DSButtonMainHButton
                        :icon="['fas', 'arrow-up-right-from-square']"
                        :icon-class="['text-primary font-bold']"
                        class="p-1 w-1/2 lg:w-1/6 bg-white rounded-lg"
                        tabindex="0"
                        :href="item.linkUrl"
                        target="_blank"
                    >
                        <span class="text-primary font-bold text-sm">
                            Pedir
                        </span>
                    </DSButtonMainHButton>
                </div>
            </div>
        </div>
        <div class="drink my-2">
            <h3
                class="px-12 lg:px-32 flex w-1/2 font-bold text-2xl text-center text-secondary"
            >
                {{ drink.title }}
            </h3>
            <div
                v-for="item in drink.items"
                :key="item.id"
                class="px-12 lg:px-32 flex flex-row py-2 my-2"
            >
                <div class="w-1/2 flex flex-col gap-1 product pb-2">
                    <span class="product-name font-bold text-white">
                        {{ item.title }}
                    </span>
                    <span
                        class="product-description text-sm font-normal text-white"
                    >
                        {{ item.description }}
                    </span>
                </div>
                <div
                    class="w-1/2 flex flex-col items-end justify-center font-extrabold text-xl text-secondary product pb-2"
                >
                    <span class="product-price">
                        {{ formatMoney(item.price) }}
                    </span>
                    <DSButtonMainHButton
                        :icon="['fas', 'arrow-up-right-from-square']"
                        :icon-class="['text-primary font-bold']"
                        class="p-1 w-1/2 lg:w-1/6 bg-white rounded-lg"
                        tabindex="0"
                        :href="item.linkUrl"
                        target="_blank"
                    >
                        <span class="text-primary font-bold text-sm">
                            Pedir
                        </span>
                    </DSButtonMainHButton>
                </div>
            </div>
        </div>
        <div class="desert mt-2 mb-0">
            <h3
                class="px-12 lg:px-32 flex w-1/2 font-bold text-2xl text-center text-secondary"
            >
                {{ desert.title }}
            </h3>
            <div
                v-for="item in desert.items"
                :key="item.id"
                class="px-12 lg:px-32 flex flex-row py-2 mt-2"
            >
                <div class="w-1/2 flex flex-col gap-1 product pb-2">
                    <span class="product-name font-bold text-white">
                        {{ item.title }}
                    </span>
                    <span
                        class="product-description text-sm font-normal text-white"
                    >
                        {{ item.description }}
                    </span>
                </div>
                <div
                    class="w-1/2 flex flex-col items-end justify-center font-extrabold text-xl text-secondary product pb-2"
                >
                    <span class="product-price">
                        {{ formatMoney(item.price) }}
                    </span>
                    <DSButtonMainHButton
                        :icon="['fas', 'arrow-up-right-from-square']"
                        :icon-class="['text-primary font-bold']"
                        class="p-1 w-1/2 lg:w-1/6 bg-white rounded-lg"
                        tabindex="0"
                        :href="item.linkUrl"
                        target="_blank"
                    >
                        <span class="text-primary font-bold text-sm">
                            Pedir
                        </span>
                    </DSButtonMainHButton>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.--subtitle {
    font-family: 'ADLaM Display', cursive !important;
    text-transform: uppercase;
}
.product {
    border-bottom: 3px dotted #fff;
}
</style>

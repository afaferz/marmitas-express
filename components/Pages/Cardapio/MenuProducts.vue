<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>

<template>
    <div class="bg-primary h-auto w-full">
        <div class="mx-auto text-center py-10">
            <h3 class="--subtitle text-white text-3xl">Cardápio</h3>
            <span class="text-xs text-white font-light">* As opçôes podem mudar</span>
        </div>
        <div class="steak my-2">
            <h3 class="px-12 lg:px-32 flex w-1/2 font-bold text-2xl text-center text-secondary">Carnes</h3>
            <div class="px-12 lg:px-32 flex flex-row py-2 my-2">
                <div class="w-1/2 flex flex-col gap-1 product pb-2">
                    <span class="product-name font-bold text-white">
                        Produto 1
                    </span>
                    <span class="product-description text-sm font-normal text-white">
                        Lorem ipsum dolor lorem ipsum dolor
                    </span>
                </div>
                <div class="w-1/2 flex flex-col items-end justify-center font-extrabold text-xl text-secondary product pb-2">
                    <span class="product-price">
                        R$ 12,00
                    </span>
                </div>
            </div>
        </div>
        <div class="chicken my-2">
            <h3 class="px-12 lg:px-32 flex w-1/2 font-bold text-2xl text-center text-secondary">Frango</h3>
            <div class="px-12 lg:px-32 flex flex-row py-2 my-2">
                <div class="w-1/2 flex flex-col gap-1 product pb-2">
                    <span class="product-name font-bold text-white">
                        Produto 1
                    </span>
                    <span class="product-description text-sm font-normal text-white">
                        Lorem ipsum dolor lorem ipsum dolor
                    </span>
                </div>
                <div class="w-1/2 flex flex-col items-end justify-center font-extrabold text-xl text-secondary product pb-2">
                    <span class="product-price">
                        R$ 12,00
                    </span>
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
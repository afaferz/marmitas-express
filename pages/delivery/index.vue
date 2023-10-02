<script setup lang="ts">
useSeoMeta({
    title: 'Marmitas Express | Delivery',
    ogTitle: 'Marmitas Express | Delivery',
    description: 'Delivery de pedidos do Marmitas Express',
    ogDescription: 'Delivery de pedidos do Marmitas Express',
    ogImage: '/images/logo.png',
    twitterCard: 'summary_large_image',
});
</script>
<template>
    <section class="h-screen w-screen bg-secondary">
        <div class="px-12 pt-44 pb-40 lg:pt-24 text-center">
            <h3 class="text-primary --subtitle text-2xl lg:text-4xl">Nosso Delivery esperando por você</h3>
            <div class="box-logo my-12 flex items-center justify-center">
                <NuxtImg src="/delivery/delivery.png" sizes="sm:105vw md:50vw lg:750px" alt="Delivery Marmitas Express" />
            </div>
            <div class="box-call my-4 flex justify-center items-center">
            </div>
            <div class="box-subtitle text-2xl font-bold my-4">
                PEÇA AGORA NO DELIVERY
                <br />
                <h4 class="--subtitle text-3xl mt-2">
                    <b>#</b>
                    <span class="text-primary">MARMITAS EXPRESS</span>
                </h4>
            </div>
            <div
                class="box-cta flex flex-row gap-3 my-4 items-center justify-center"
            >
                <DSButtonMainHButton
                    :icon="['fas', 'arrow-up-right-from-square']"
                    :icon-class="['text-[#fff] font-bold']"
                    class="p-3 w-1/2 lg:w-1/6 bg-[#25D366] rounded-lg"
                    tabindex="0"
                    target="_blank"
                >
                    <span class="text-[#fff] font-bold text-sm">
                        WhatsApp
                    </span>
                </DSButtonMainHButton>
                <DSButtonMainHButton
                    :icon="['fas', 'utensils']"
                    :icon-class="['text-[#fff] font-bold']"
                    class="p-3 w-1/2 lg:w-1/6 bg-[#e32929] rounded-lg"
                    tabindex="0"
                    target="_blank"
                >
                    <span class="text-[#fff] font-bold text-sm">
                        Delivery
                    </span>
                </DSButtonMainHButton>
            </div>
            <div class="box-disponibility">
                <span class="font-bold text-black text-xs">* VERIFIQUE A DISPONIBILIDADE DE SUA REGIÃO</span>
            </div>
        </div>
    </section>
</template>
<style scoped>
.--subtitle {
    font-family: 'ADLaM Display', cursive !important;
    text-transform: uppercase;
}
</style>

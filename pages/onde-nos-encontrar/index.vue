<script setup lang="ts">
useSeoMeta({
    title: 'Marmitas Express | Localização',
    ogTitle: 'Marmitas Express | Localização',
    description: 'Localização do restaurante Marmitas Express',
    ogDescription: 'Localização do restaurante Marmitas Express',
    ogImage: '/img/logo.png',
    twitterCard: 'summary_large_image',
});
</script>
<template>
    <section class="h-auto w-screen bg-secondary">
        <div class="px-10 pt-24 pb-40 text-center">
            <h3 class="text-primary --subtitle text-2xl lg:text-4xl">
                Venha visitar nosso restaurante
            </h3>
            <address class="block my-6 text-left font-bold text-black w-6/6 lg:w-3/6 mx-auto">
                <span> Av. Araucária 4155, Bl A Apto 508 </span>
                <br />
                <span> Loja 3 </span>
                <br />
                <span>CEP: 71936-250</span>
            </address>
            <div class="box-location my-4 flex justify-center items-center">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15340.252885097438!2d-48.0538697!3d-16.0102241!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935981b9621d0343%3A0x9823b03ed9668e30!2sMarmita%20Express!5e0!3m2!1spt-BR!2sbr!4v1696208445628!5m2!1spt-BR!2sbr"
                    width="600"
                    height="450"
                    style="border: 0"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div class="box-subtitle text-2xl font-bold my-4">
                <h4 class="--subtitle text-3xl mt-2">
                    <b>#</b>
                    <span class="text-primary">MARMITAS EXPRESS</span>
                </h4>
            </div>
            <div class="box-contact text-2xl font-bold my-4">
                <span class="mt-4 block text-primary font-bold">
                    Nosso Contato
                </span>
                <address
                    class="flex flex-col justify-center items-center gap-4"
                >
                    <div>
                        <span class="text-primary">Telefone: </span>
                        <span>
                            <a href="tel:+13115552368">(61) 3303-3333</a>
                        </span>
                    </div>
                    <div class="flex flex-row gap-2 w-100">
                        <DSButtonMainHButton
                            :icon="['fab', 'whatsapp']"
                            :icon-class="['text-[#fff] font-bold']"
                            class="p-3 w-1/2 bg-[#25D366] rounded-lg"
                            tabindex="0"
                            target="_blank"
                        >
                            <span class="text-[#fff] font-bold text-sm">
                                WhatsApp
                            </span>
                        </DSButtonMainHButton>
                        <DSButtonMainHButton
                            :icon="['fab', 'instagram']"
                            :icon-class="['text-[#fff] font-bold']"
                            class="p-3 w-1/2 bg-[instagram] rounded-lg"
                            tabindex="0"
                            target="_blank"
                        >
                            <span class="text-[#fff] font-bold text-sm">
                                Instagram
                            </span>
                        </DSButtonMainHButton>
                    </div>
                </address>
            </div>
        </div>
    </section>
</template>
<style scoped>
.--subtitle {
    font-family: 'ADLaM Display', cursive !important;
    text-transform: uppercase;
}
.bg-\[instagram\] {
    background: radial-gradient(
            circle farthest-corner at 35% 90%,
            #fec564,
            transparent 50%
        ),
        radial-gradient(
            circle farthest-corner at 0 140%,
            #fec564,
            transparent 50%
        ),
        radial-gradient(
            ellipse farthest-corner at 0 -25%,
            #5258cf,
            transparent 50%
        ),
        radial-gradient(
            ellipse farthest-corner at 20% -50%,
            #5258cf,
            transparent 50%
        ),
        radial-gradient(
            ellipse farthest-corner at 100% 0,
            #893dc2,
            transparent 50%
        ),
        radial-gradient(
            ellipse farthest-corner at 60% -20%,
            #893dc2,
            transparent 50%
        ),
        radial-gradient(
            ellipse farthest-corner at 100% 100%,
            #d9317a,
            transparent
        ),
        linear-gradient(
            #6559ca,
            #bc318f 30%,
            #e33f5f 50%,
            #f77638 70%,
            #fec66d 100%
        );
}
</style>

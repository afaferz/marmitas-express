<script lang="ts">
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { useMenuStore } from '~/stores/menu';
export default defineComponent({
    name: 'BaseFooterFooter',
    setup() {
        const menuStore = useMenuStore();
        const { navbar, lgpd, social } = storeToRefs(menuStore);
        return { navbar, lgpd, social };
    },
});
</script>

<template>
    <footer class="footer h-16 w-full bg-primary flex flex-col gap-4 mb-4">
        <div class="footer-top z-3 relative bg-[#fff] h-[350px] w-full"></div>
        <div class="footer-middle mt-4 h-60 flex items-end pt-52 z-3 relative">
            <div class="w-full px">
                <div
                    class="mx-auto py-4 flex flex-col gap-3 justify-center items-center lg:flex-row lg:justify-around"
                >
                    <div class="footer-logo">
                        <img src="" alt="" />
                    </div>
                    <div class="footer-nav">
                        <ul class="flex flex-col lg:flex-row gap-3">
                            <li
                                v-for="item in navbar"
                                :key="item.name"
                                class="text-center"
                            >
                                <NuxtLink
                                    :to="item.href"
                                    tabindex="0"
                                    class="text-[#fff] font-bold"
                                >
                                    <span class="capitalize">
                                        {{ item.name }}
                                    </span>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-social-links">
                        <ul
                            class="flex flex-row lg:flex-row gap-3 mt-4 lg:mt-0"
                        >
                            <li
                                v-for="item in social"
                                :key="item.name"
                                class="text-center"
                            >
                                <a
                                    :to="item.href"
                                    tabindex="0"
                                    class="text-[#fff] text-lg font-bold"
                                >
                                    <fa-icon
                                        :icon="item.icon"
                                        class="text-[#fff]"
                                        size="xl"
                                    >
                                    </fa-icon>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom mt-4 bg-secondary">
            <div class="w-full px-4">
                <div class="mx-auto w-96 py-4">
                    <p class="text-xs text-center text-primary">
                        <b> Copyright &copy; 2023 - Marmitas Express </b>
                        <br />
                        Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>
<style scoped>
.footer {
    height: auto;
}
.footer::after {
    content: '';
    display: block;
    height: 8px;
    margin-bottom: 10px;
    pointer-events: none;
    position: absolute;
    top: 100%;
    width: 100%;
}
.footer-top {
    background-image: url(/images/bg-pattern-flame.png);
    background-repeat: no-repeat;
    background-size: 100% 350px;
    background-position: bottom center;
    position: relative;
}
.footer-top::after {
    content: '';
    background-image: url(/images/bg-pattern-flame.png);
    background-repeat: no-repeat;
    background-size: 100% 350px;
    background-position: bottom center;
    position: absolute;
    position: absolute;
    bottom: -300px;
    z-index: 0;
    left: 0;
    height: 300px;
    width: 100%;
    display: block;
    transform: rotate(-180deg) scaleX(-1);
}
</style>

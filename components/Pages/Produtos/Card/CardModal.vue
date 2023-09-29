<script lang="ts">
import { Products } from '~/models/products';
import { defineComponent, PropType } from 'vue';
export default defineComponent({
    name: 'CardModal',
    props: {
        opened: {
            type: Boolean,
            default: false,
        },
        item: {
            type: Object as PropType<Products.SingleProduct>,
            default: () => {},
        },
    },
    emits: ['update:opened'],
});
</script>

<template>
    <Teleport to="body">
        <div
            class="product-modal-container w-screen h-screen bg-[rgba(0,0,0,0.65)] fixed top-0 left-0 z-50 flex items-center justify-center"
            :id="`${item.id}`"
            v-show="opened"
        >
            <div
                class="product-modal relative shadow-xl w-5/6 lg:w-2/4 h-auto p-8 border-solid border-[#fff] border-2 rounded-xl bg-white z-0 flex flex-col justify-evenly"
            >
                <button
                    @click.stop="$emit('update:opened', false)"
                    class="absolute top-[-15px] right-[-15px] rounded-full w-6 h-6 grid place-content-center bg-primary p-2 z-20"
                >
                    <fa-icon
                        :icon="['fas', 'xmark']"
                        size="1x"
                        class="text-[#fff]"
                    ></fa-icon>
                </button>
                <div class="product-modal__context">
                    <div class="h-[185px] w-full">
                        A
                        <img src="" alt="" />
                    </div>
                    <div class="w-full h-auto flex flex-col gap-3">
                        <span class="--subtitle text-3xl text-primary">{{
                            item.title
                        }}</span>
                        <br />
                        <span
                            class="rounded-full bg-secondary py px-3 font-bold text-[#000] max-w-[200px] w-fit text-center"
                        >
                            {{ item.category['STEAK'] }}
                        </span>
                        <br />
                        <p class="font-normal my-4">
                            {{ item.description }}
                            Lorem ipsum dolor Lorem ipsum dolorLorem ipsum
                            dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum
                            dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum
                            dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum
                            dolorLorem ipsum dolorLorem ipsum dolor
                        </p>
                    </div>
                </div>
                <div
                    class="product-modal__cta flex flex-col gap-4 justify-start items-center my-12 lg:flex-row lg:items-start"
                >
                    <DSButtonMainHButton
                        :icon="['fas', 'arrow-up-right-from-square']"
                        :icon-class="['text-[#fff] font-bold']"
                        class="p-2 w-full bg-[#25D366] rounded-lg"
                        tabindex="0"
                        href="http://google.com.br"
                        target="_blank"
                    >
                        <span class="text-[#fff] font-bold text-sm">
                            Pedir no WhatsApp
                        </span>
                    </DSButtonMainHButton>
                    <DSButtonMainHButton
                        :icon="['fas', 'utensils']"
                        :icon-class="['text-[#fff] font-bold']"
                        class="p-2 w-full bg-[#e32929] rounded-lg"
                        tabindex="0"
                        href="http://google.com.br"
                        target="_blank"
                    >
                        <span class="text-[#fff] font-bold text-sm">
                            Pedir no iFood
                        </span>
                    </DSButtonMainHButton>
                </div>
                <div class="product-modal__more"></div>
            </div>
        </div>
    </Teleport>
</template>
<style lang="scss" scoped>
.--subtitle {
    font-family: 'ADLaM Display', cursive !important;
    text-transform: uppercase;
}
.product-modal {
    box-shadow: 0 0 0 6px rgb(227 6 19 / var(--tw-border-opacity));
    animation: modal 0.3s;
}
@keyframes modal {
    from {
        opacity: 0;
        transform: translate3d(0, -60px, 0);
    }
    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}
</style>

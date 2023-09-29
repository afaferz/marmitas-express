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
    <!-- <div
        v-if="opened"
        class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="product-modal"
        tabindex="-1"
        aria-labelledby="product-modal"
        :aria-hidden="opened"
    >
        <div
            data-te-modal-dialog-ref
            class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"
        >
            <div
                class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600"
            >
                <div
                    class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
                >
                    <h5
                        class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                        id="product-modal"
                    >
                        Modal title
                    </h5>
                    <button
                        type="button"
                        class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        data-te-modal-dismiss
                        aria-label="Close"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-6 w-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <div class="relative flex-auto p-4" data-te-modal-body-ref>
                    Modal body text goes here.
                </div>

                <div
                    class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
                >75
                    <button
                        type="button"
                        class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                        data-te-modal-dismiss
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        @click.stop="$emit('update:opened', false)"
                    >
                        Close
                    </button>
                    <button
                        type="button"
                        class="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                    >
                        Save changes
                    </button>
                </div>
            </div>
        </div>
    </div> -->
    <div
        class="product-modal-container w-screen h-screen bg-blue-50 fixed top-0 left-0 z-50 flex items-center justify-center"
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
                class="product-modal__cta flex flex-col gap-4 justify-start items-center my-12"
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
            <div class="product-modal__more">
                <!-- <div class="flex flex-col gap-4">
                    <div
                        class="flex flex-col lg:flex-row items-start lg:justify-between overflow-y-scroll h-20"
                    >
                        <aside class="flex flex-col gap-2">
                            <span class="--subtitle">Ingredientes:</span>
                            <ul class="list-disc">
                                <li class="font-normal text-[#111111]"></li>
                            </ul>
                        </aside>
                        <hr />
                        <aside class="flex flex-col gap-2">
                            <span class="--subtitle">Quantidade:</span>
                            <ul class="list-disc">
                                <li class="font-normal text-[#111111]"></li>
                            </ul>
                        </aside>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
    <Teleport to="body"> </Teleport>
</template>
<style lang="scss" scoped>
.--subtitle {
    font-family: 'ADLaM Display', cursive !important;
    text-transform: uppercase;
}
.product-modal {
    box-shadow: 0 0 0 6px rgb(227 6 19 / var(--tw-border-opacity));
}
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Menu } from '~/models/menu';

export default defineComponent({
    name: 'HNavHeader',
    props: {
        items: {
            type: Array as () => Menu.Navbar[],
            default: () => [],
            required: true,
        },
    },
    setup() {
        const checked = ref(false);
        return {
            checked,
        };
    },
});
</script>
<template>
    <nav
        class="nav h-full w-full flex flex-row items-center justify-around p-2 mx-auto z-10 lg:py-0"
    >
        <NuxtLink to="/" @click="checked = false" class="flex flex-row items-center justify-center gap-3">
            <NuxtImg src="/logo.png" sizes="sm:25vw md:50vw lg:105px" />
            <span class="--subtitle text-secondary"><b class="text-black mr-1">#</b>Marmitas Express</span>
        </NuxtLink>
        <DSButtonHambuguerDotHamburguerDot v-model:checked="checked" />
        <div
            class="menu header invisible opacity-0 max-h-max flex flex-col items-center absolute gap-4 top-24 w-screen bg-primary h-screen px-10 py-6 z-10 md:px-28 lg:opacity-100 lg:scale-y-100 lg:grid lg:grid-flow-col lg:auto-cols-auto lg:static lg:h-full lg:w-1/4 lg:p-0 lg:gap-0 lg:grid-rows-1 lg:px-0"
        >
            <div
                class="menu__item group flex flex-col items-start w-full mx-auto font-bold text-[#fff] lg:after:bg-secondary lg:h-full lg:visible lg:w-auto lg:inline-block lg:text-[#fff]"
                v-for="item in items"
                :key="item.name"
            >
                <button
                    class="menu__link cursor-pointer w-full p-2 flex flex-row h-full items-center lg:max-w-fit"
                    :tabindex="!item.nuxtLink ? '0' : '1'"
                >
                    <NuxtLink
                        class="lg:w-auto"
                        active-class="menu__link--active"
                        exact-active-class="menu__link--exact-active"
                        :to="item.href"
                        v-if="item.nuxtLink"
                        tabindex="0"
                        @click="checked = false"
                    >
                        {{ item.name }}
                    </NuxtLink>
                    <div v-else class="lg:w-auto">
                        {{ item.name }}
                        <span v-if="!item.nuxtLink"></span>
                    </div>
                </button>
                <ul
                    class="menu__submenu invisible px-2 translate-x-[-100vw] group-focus:translate-x-0 group-focus-within:translate-x-0 z-9 lg:group-hover:block lg:visible lg:absolute lg:top-[80px] lg:block lg:bg-[#fff] lg:h-0 lg:translate-x-0 lg:scale-x-0 lg:auto"
                    v-if="item.submenu.length > 0"
                >
                    <li
                        v-for="subitem in item.submenu"
                        :key="subitem.name"
                        class="py-3 text-primary w-full"
                    >
                        <NuxtLink
                            class="block p-1 h-full w-full whitespace-nowrap hover:bg-primary hover:text-[#fff] hover:rounded-sm"
                            active-class="menu__link--active"
                            exact-active-class="menu__link--exact-active"
                            :to="subitem.href"
                            tabindex="0"
                        >
                            {{ subitem.name }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.--subtitle {
    font-family: 'ADLaM Display', cursive !important;
    text-transform: uppercase;
}
.menu.header {
    transition: 0.3s cubic-bezier(1, 1.1, 0.8, 1.4);
    transform-origin: center top;
    .menu__item {
        position: relative;
        &::after {
            position: absolute;
            content: '';
            height: 3px;
            width: 0;
            bottom: 5px;
            border-bottom-right-radius: 4px;
            border-top-left-radius: 4px;
            transition: width 0.2s ease-in-out;
        }
        &:hover::after {
            width: 95%;
        }
        &:hover > .menu__submenu {
            visibility: inherit;
            transform: translate(0, 0);
            transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
            transition-duration: 350ms;
            opacity: 1;
            height: auto;
        }
        .menu__link {
            user-select: none;
        }
        .menu__link > div span {
            display: inline-block;
            width: 0;
            height: 0;
            margin-left: 4px;
            border-top: 6px solid transparent;
            border-bottom: 6px solid rgb(255 237 0 / var(--tw-text-opacity));
            border-left: 6px solid transparent;
        }
        .menu__submenu {
            height: 0;
            visibility: hidden;
            transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
            transition-duration: 75ms;
            opacity: 0;
        }
        .menu__link ~ .menu__submenu:focus-within,
        .menu__link:focus ~ .menu__submenu {
            visibility: inherit;
            transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
            transition-duration: 350ms;
            opacity: 1;
            height: auto;
        }
    }
    .menu__link--active,
    .menu__link--exact-active {
        position: relative;
        background-color: rgb(255 237 0 / var(--tw-text-opacity));
        color: rgb(227 6 19 / var(--tw-bg-opacity)) !important;
        padding: 4px;
        padding-inline: 12px;
        border-radius: 4px;
    }
}
#button__toggle:checked ~ .menu.header {
    visibility: visible;
    height: 100vh;
    animation: --anim-fade-in 0.3s ease-out 1 normal both;
}
@keyframes --anim-fade-in {
    0% {
        opacity: 0;
        transform: scaleY(0);
        height: 0;
    }
    100% {
        opacity: 1;
        transform: scaleY(1);
        height: 100vh;
    }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { Menu } from "~/models/menu";

export default defineComponent({
  props: {
    items: {
      type: Array as () => Menu.Navbar[],
      default: () => [],
      required: true,
    },
  },
  setup() {},
});
</script>
<template>
  <nav
    class="nav h-full w-full flex flex-row items-center justify-around p-2 mx-auto z-9 lg:py-0"
  >
    <NuxtLink to="/">
      <NuxtImg src="/logo.png" sizes="sm:75vw md:50vw lg:250px" />
    </NuxtLink>
    <DSButtonHambuguerDotHamburguerDot />
    <div
      class="menu invisible h-0 max-h-max flex flex-col items-center absolute gap-4 top-16 w-screen bg-primary h-screen px-10 py-6 z-9 lg:grid lg:grid-flow-col lg:auto-cols-auto lg:static lg:h-full lg:w-2/4 lg:p-0 lg:gap-0 lg:grid-rows-1 lg:px-0"
    >
      <div
        class="menu__item group flex flex-col items-start w-full mx-auto text-secondary lg:after:bg-secondary lg:h-full lg:visible lg:w-auto lg:inline-block lg:text-white"
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
          >
            {{ item.name }}
          </NuxtLink>
          <div v-else class="lg:w-auto">
            {{ item.name }}
            <span v-if="!item.nuxtLink"></span>
          </div>
        </button>
        <ul
          class="menu__submenu invisible px-2 translate-x-[-100vw] group-focus:translate-x-0 group-focus-within:translate-x-0 z-9 lg:group-hover:block lg:visible lg:absolute lg:top-14 lg:block lg:bg-primary lg:h-0 lg:translate-x-0 lg:scale-x-0 lg:auto"
          v-if="item.submenu.length > 0"
        >
          <li
            v-for="subitem in item.submenu"
            :key="subitem.name"
            class="py-3 text-white w-full"
          >
            <NuxtLink
              class="block p-1 h-full w-full whitespace-nowrap hover:bg-secondary hover:rounded-sm"
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
.menu {
  transition: 350ms cubic-bezier(0.8, 0.5, 0.2, 1.4);
}
.menu__item {
  position: relative;
  &::after {
    position: absolute;
    content: "";
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
    border-bottom: 6px solid #82bc34;
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
  background-color: #82bc34;
  color: #f8fafc !important;
  padding: 4px;
  border-radius: 4px;
}
#button__toggle:checked ~ .menu {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
  height: 100vh;
}
</style>

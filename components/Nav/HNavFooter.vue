<script lang="ts">
import { defineComponent } from "vue";
import { Menu } from "~/models/menu";

export default defineComponent({
  name: "HNavFooter",
  props: {
    items: {
      type: Array as () => Menu.Navbar[],
      default: () => [],
      required: true,
    },
    itemsLgpd: {
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
    class="nav h-full w-full flex flex-row items-center justify-around p-2 py-10 mx-auto grid grid-rows-auto gap-6 lg:items-start lg:grid-cols-2 lg:grid-rows-auto"
  >
    <div class="lg:col-span-1">
      <NuxtImg src="/logo.png" sizes="sm:75vw md:50vw lg:250px" class="px-10" />
    </div>
    <div
      class="menu footer h-auto max-h-max flex flex-col items-center gap-4 w-screen bg-primary px-10 z-9 lg:items-start lg:flex-row lg:w-full lg:pt-0 lg:col-span-2"
    >
      <div
        class="menu__item group flex flex-col items-start w-full mx-auto text-white lg:after:bg-white lg:h-full lg:w-full lg:visible lg:text-white"
        v-for="item in items"
        :key="item.name"
      >
        <button
          class="menu__link cursor-pointer w-full py-2 flex flex-row h-full items-center lg:h-auto"
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
          class="menu__submenu h-0 invisible translate-x-[-100vw] group-focus:translate-x-0 group-focus-within:translate-x-0 z-9 lg:visible lg:flex flex-col lg:opacity-100 lg:h-full lg:block lg:bg-primary lg:h-0 lg:translate-x-0"
          v-if="item.submenu.length > 0"
        >
          <li
            v-for="subitem in item.submenu"
            :key="subitem.name"
            class="py-3 text-white w-full font-light"
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
    <div
      class="menu footer h-auto max-h-max flex flex-col items-center gap-2 w-screen bg-primary px-10 pt-6 z-9 lg:w-full lg:pt-0 lg:h-full lg:w-full lg:row-start-3"
    >
      <span class="w-full text-secondary font-bold">Políticas</span>
      <div
        class="menu__item group flex flex-col items-start w-full mx-auto text-white lg:after:bg-white lg:visible lg:w-full lg:inline-block lg:text-white"
        v-for="item in itemsLgpd"
        :key="item.name"
      >
        <button
          class="menu__link cursor-pointer w-full py-2 flex flex-row h-full items-center lg:max-w-fit"
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
      </div>
    </div>
    <div
      class="flex flex-col gap-2 items-center px-10 text-white text-left lg:col-start-2 lg:col-end-2 lg:row-start-3 lg:row-end-3"
    >
      <span class="w-full font-bold text-secondary">Fale Conosco</span>
      <div class="flex flex-col gap-4 w-full">
        <span class="font-light">Central de Atendimento</span>
        <span>0800 720 5600</span>
      </div>
      <div class="flex flex-col gap-4 w-full">
        <span class="font-light">Canal WhatsApp</span>
        <span>0800 720 5600</span>
      </div>
      <div class="flex flex-col gap-4 w-full">
        <span class="font-light">Horários de Atendimento</span>
        <span>SEG à SEX: 09h às 17h</span>
      </div>
      <div class="flex flex-col gap-4 w-full">
        <span class="font-light">Atendimento Presencial</span>
        <span>0800 720 5600 - Agendamento</span>
      </div>
      <div class="flex flex-col gap-4 w-full items-start py-2">
        <DSButtonMainHButton :icon="['fas', 'user']" class="p-2 bg-secondary rounded">
          <NuxtLink to="/contato" class="inline-block h-full">
            Outros > Fale Conosco
          </NuxtLink>
        </DSButtonMainHButton>
      </div>
    </div>
  </nav>
  <div
    class="flex flex-col gap-2 items-center px-10 pb-10 text-white text-left"
  >
    <span class="w-full font-bold text-secondary">Endereço</span>
    <address class="w-full">
      Setor de Múltiplas Atividades Sul – SMAS
      <br />
      Trecho 03, conj 03, Bl-“E”, 4º andar, salas 409 a 416
      <br />
      Ed. The Union Office – Zona Industrial – Guará
      <br />
      CEP: 70.610-053
      <br />
      Brasília – DF
    </address>
  </div>
  <div class="copyright mx-auto flex flex-col px-10">
    <span class="w-full text-white font-light">
      &copy; 2022
      <br />
      Vivaprev S.A. CNPJ: 18.868.955.0001/20
    </span>
  </div>
  <div class="author-label px-10">by &copy; <a href="/" target="_blank">Natus Ak</a></div>
</template>

<style lang="scss" scoped>
.menu.footer {
  transition: 0.3s cubic-bezier(1, 1.1, 0.8, 1.4);
  transform-origin: center top;
  .menu__item {
    .menu__link {
      user-select: none;
    }
    .menu__link > div span {
      display: inline-block;
      width: 0;
      height: 0;
      margin-left: 4px;
      border-top: 6px solid transparent;
      border-bottom: 6px solid #f8fafc;
      border-left: 6px solid transparent;
    }
    // .menu__submenu {
    //   height: 0;
    //   visibility: hidden;
    //   transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
    //   transition-duration: 75ms;
    //   opacity: 0;
    // }
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
}
.author-label {
  display: flex;
  justify-content: flex-end;
  align-content: flex-end;
  background-color: rgba($color: #000000, $alpha: 0.2);
  color: aliceblue;
  font-size: 0.65rem;
  font-family: "ADLaM Display", cursive;
  a {
    text-decoration: underline;
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

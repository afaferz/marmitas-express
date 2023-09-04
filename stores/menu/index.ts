import { defineStore } from "pinia";
import { MAIN_MENU_ITEMS } from "./constants";
import { MenuItems } from "./types";
export const useMenuStore = defineStore("menu", {
  state: () => ({
    items: MAIN_MENU_ITEMS as MenuItems[],
  }),
});


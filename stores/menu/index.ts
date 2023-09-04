import { defineStore } from "pinia";
import { MAIN_MENU_ITEMS } from "@/constants";
import { Menu } from "~/models/menu";
export const useMenuStore = defineStore("menu", {
  state: () => ({
    items: MAIN_MENU_ITEMS as Menu.Navbar[],
  }),
});


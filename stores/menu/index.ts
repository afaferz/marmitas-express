import { defineStore } from "pinia";
import { MAIN_MENU_ITEMS, MAIN_MENU_SOCIAL_ITEMS } from "@/constants";
import { Menu } from "~/models/menu";
export const useMenuStore = defineStore("menu", {
  state: () => ({
    navbar: MAIN_MENU_ITEMS as Menu.Navbar[],
    social: MAIN_MENU_SOCIAL_ITEMS as Menu.Navbar[],
  }),
});


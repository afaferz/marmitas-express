import { defineStore } from "pinia";
import { BRAZILIAN_PRODUCTS, CHICKEN_PRODUCTS, DESERTS_PRODUCTS, DRINKS_PRODUCTS, SIDE_DISH_PRODUCTS, STEAK_PRODUCTS } from "~/constants";
export const useProductsStore = defineStore("products", {
    state: () => ({
        steak: { title: 'Carnes', items: STEAK_PRODUCTS },
        chicken: { title: 'Frango', items: CHICKEN_PRODUCTS },
        brazilian: { title: 'Típicas', items: BRAZILIAN_PRODUCTS },
        drink: { title: 'Bebidas', items: DRINKS_PRODUCTS },
        sideDish: { title: 'Acompanhamentos', items: SIDE_DISH_PRODUCTS },
        desert: { title: 'Sobremesas', items: DESERTS_PRODUCTS }
    }),
});

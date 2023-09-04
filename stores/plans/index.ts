import { defineStore } from "pinia";
import { VIVA_PLANS } from "~/constants/Plans";
import { Plans } from "~/models/plans";
export const usePlansStore = defineStore("plans", {
  state: () => ({
    items: VIVA_PLANS as Plans.Viva[],
  }),
});

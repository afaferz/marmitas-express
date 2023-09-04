import { defineStore } from "pinia";
import { Actions, Getters } from "./types";
export const usePageStore = defineStore("page", {
  state: () => ({
    loading: false,
  }),
  actions: {
    [Actions.SET_LOADING](loading: boolean) {
      this.loading = loading;
    },
  },
  getters: {
    [Getters.GET_LOADING]: (state) => state.loading,
  },
});

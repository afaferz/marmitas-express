import { defineNuxtPlugin } from "#imports";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;

library.add(far, fas, fab);

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.component("fa-icon", FontAwesomeIcon);
});

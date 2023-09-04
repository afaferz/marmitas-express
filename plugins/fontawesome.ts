import { defineNuxtPlugin } from "#app"; // remove if 'vue3' is recognised and global by default

import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// This is important, we are going to let Nuxt not worry about the CSS
config.autoAddCss = false;

library.add(far, fas, fab);

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.component("fa-icon", FontAwesomeIcon);
});

import { library, config } from '@fortawesome/fontawesome-svg-core';
/* eslint-disable */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;
library.add(faBars);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});

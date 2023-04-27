import { library, config } from '@fortawesome/fontawesome-svg-core';
/* eslint-disable */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faBars,
  faBicycle,
  faRoute,
  faUmbrellaBeach,
  faPhoneAlt,
  faParking,
} from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;
library.add(
  faBars,
  faBicycle,
  faRoute,
  faUmbrellaBeach,
  faPhoneAlt,
  faParking,
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});

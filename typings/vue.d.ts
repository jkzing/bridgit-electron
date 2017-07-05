/**
 * Augment the typings of Vue.js
 */

import Electron = require('electron');
import Vue = require("vue");

declare module "vue/types/vue" {
  interface Vue {
    $electron: Electron.AllElectron
    $alert: Function
  }
}
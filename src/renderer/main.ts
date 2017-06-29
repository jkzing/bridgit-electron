import Vue from 'vue'
import Vuetify from 'vuetify'

import App from './App.vue'
import router from './router'
import store from './store'

import './stylus/main.styl'
import './styles/font.scss'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

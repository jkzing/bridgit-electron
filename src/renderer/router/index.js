import Vue from 'vue'
import VueRouter from 'vue-router'

import LandingPage from '@/components/LandingPage.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: LandingPage
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'

import LandingPage from '@/components/LandingPage.vue'
import HawkConfig from '@/components/HawkConfig.vue'
import HawkOutput from '@/components/HawkOutput.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/new_hawk_config',
      name: 'NewHawkConfig',
      component: HawkConfig
    },
    {
      path: '/hawk/:confId',
      name: 'HawkOutput',
      component: HawkOutput
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

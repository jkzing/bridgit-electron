<template>
  <v-app id="app">
    <main-sidebar :value="drawer"></main-sidebar>
    <main-navbar @toggle-drawer="drawer = !drawer"></main-navbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import MainSidebar from '@/components/MainSidebar.vue'
import MainNavbar from '@/components/MainNavbar.vue'

@Component({
  name: 'App',
  components: {
    MainSidebar,
    MainNavbar
  }
})
export default class App extends Vue {
  drawer = true
  right = null

  mounted() {
    console.log('App')
  }
}
</script>

<style lang="scss" scoped>
#app {
  position: relative;
  width: 100%;
  height: 100%;
}

.header-toolbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>

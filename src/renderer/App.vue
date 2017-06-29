<template>
  <!--<v-app id="app" dark>
    <v-card>
      <v-toolbar class="header-toolbar" light>
        <v-toolbar-side-icon light></v-toolbar-side-icon>
        <v-toolbar-title>Inbox</v-toolbar-title>
        <v-btn light icon>
          <v-icon>search</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
    <router-view></router-view>
  </v-app>-->
  <v-app id="example-2">
    <main-sidebar></main-sidebar>
    <v-toolbar fixed class="indigo darken-4" light>
      <v-toolbar-side-icon light @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Toolbar</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <div class="title">Click on sidebar to re-open.</div>
        <!--v-router-->
      </v-container>
    </main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import MainSidebar from '@/components/MainSidebar.vue'

@Component({
  name: 'App',
  components: {
    MainSidebar,
  }
})
export default class App extends Vue {
  drawer = true
  items = [
    { title: 'Home', icon: 'dashboard' },
    { title: 'About', icon: 'question_answer' }
  ]
  mini = false
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

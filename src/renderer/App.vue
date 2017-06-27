<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'App'
})
export default class App extends Vue {
  mounted() {
    console.log('App')
  }
}
</script>

<style>
  /* CSS */
</style>

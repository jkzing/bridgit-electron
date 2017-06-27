<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'App',
  components: {}
})
export default class App extends Vue {
  mounted() {

  }
}
</script>

<style>
  /* CSS */
</style>

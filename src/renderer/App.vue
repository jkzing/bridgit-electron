<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { Vue, Component } from 'av-ts'

@Component
export default class App extends Vue {
  name = 'bridgit-electron'
}
</script>

<style>
  /* CSS */
</style>

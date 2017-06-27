<template>
  <div id="wrapper">
    <button @click="startHawk">start</button>
    <button @click="printBridgitProcess">bridgitProcess</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import BridgitMgr from '../../bridgit/BridgitManager'

@Component({
   name: 'LandingPage',
   components: {}
})
export default class LandingPage extends Vue {
  beforeDestroy() {
    BridgitMgr.stopAll()
  }

  open(link) {
      this.$electron.shell.openExternal(link)
  }
  startHawk() {
    BridgitMgr.createBridgit()
  }

  printBridgitProcess() {
    console.log(process.env.BRIDGIT_PID)
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
}

#wrapper {
  background: radial-gradient( ellipse at top left,
  rgba(255, 255, 255, 1) 40%,
  rgba(229, 229, 229, .9) 100%);
  height: 100vh;
  padding: 60px 80px;
  width: 100vw;
}
</style>

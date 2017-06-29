<template>
  <v-toolbar fixed class="indigo darken-4" light>
    <v-toolbar-side-icon light @click.native.stop="$emit('toggle-drawer')"></v-toolbar-side-icon>
    <v-toolbar-title>Toolbar</v-toolbar-title>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'MainNavbar',
})
export default class MainNavbar extends Vue {

}
</script>

<style lang="scss">

</style>



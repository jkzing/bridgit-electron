<template>
  <v-toolbar fixed class="indigo darken-4" light>
    <v-menu bottom right>
      <v-toolbar-side-icon slot="activator" light></v-toolbar-side-icon>
      <v-list>
        <v-list-item class="action-item">
          <v-list-tile @click.native="navTo('NewHawkConfig')">
            <v-list-tile-title>New Hawk Config</v-list-tile-title>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-toolbar-title>Bridgit</v-toolbar-title>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'MainNavbar',
})
export default class MainNavbar extends Vue {
  navTo(name) {
    this.$router.push({ name })
  }
}
</script>

<style lang="scss" scoped>
.action-menu {
  min-width: 48px;
}
</style>



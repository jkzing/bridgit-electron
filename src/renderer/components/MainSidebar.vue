<template>
  <v-navigation-drawer
    :mini-variant.sync="mini"
    permanent
    persistent
    light
  >
    <v-list class="pa-0">
      <v-list-item>
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="../assets/zzzz.png"></img>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Running Instances</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon @click.native.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list-item>
    </v-list>
    <v-list class="pt-0" dense>
      <v-divider></v-divider>
      <v-list-item v-for="(conf, key) in confs" :key="key">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>{{ 'dashboard' }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ conf.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import { State } from '../utils/decorators'

@Component({
  name: 'MainSidebar',
  props: {
    value: Boolean
  }
})
export default class MainSidebar extends Vue {
  mini = true
  items = [
    { title: 'Home', icon: 'dashboard' },
    { title: 'About', icon: 'question_answer' }
  ]

  @State('conf.saved') confs
}
</script>

<style lang="scss">
</style>
<template>
  <div>
    <template v-if="config">
      <v-layout row align-center>
        <v-flex xs2>
          <p>Name: </p>
        </v-flex>
        <v-flex xs4>
          <p>{{ name }}</p>
        </v-flex>
      </v-layout>
      <v-layout row align-center>
        <v-flex xs2>
          <p>ID: </p>
        </v-flex>
        <v-flex xs4>
          <p>{{ config.id }}</p>
        </v-flex>
        <v-flex xs2>
          <p>Key: </p>
        </v-flex>
        <v-flex xs4>
          <p>{{ config.key }}</p>
        </v-flex>
      </v-layout>
      <v-card class="mt-1">
        <div style="height: 500px">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline white--text">hehe</span>
              </v-flex>
            </v-layout>
          </v-container>
        </div>
        <v-divider></v-divider>
        <v-card-actions class="instance-actions white">
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>favorite</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>bookmark</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>share</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { HawkOptions } from 'bridgit'

import { State } from '../utils/decorators'

@Component({
  name: 'HawkOutput'
})
export default class HawkOutput extends Vue {
  name: string = ''
  config: HawkOptions | null = null

  @State('conf.saved') confs

  mounted() {
    let conf = this.confs[this.$route.params.confId]
    this.name = conf.name
    this.config = conf.config
  }
}
</script>

<style lang="scss">
.instance-actions {
  padding: 8px 4px;
  display: flex;
  justify-content: flex-end;
}
</style>



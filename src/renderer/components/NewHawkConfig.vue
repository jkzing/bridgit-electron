<template>
  <div class="hawk-config">
    <div class="title">Add Hawk Config</div>
    <v-layout row justify-center>
      <v-flex xs8>
        <v-text-field
          name="input-name"
          label="Name"
          v-model="configName"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-flex xs2>
        <v-text-field
          name="input-port"
          label="Port"
          v-model="config.port"
        ></v-text-field>
      </v-flex>
      <v-flex xs6>
        <v-text-field
          name="input-origin"
          label="Origin"
          v-model="config.origin"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-flex xs8>
        <v-text-field
          name="input-id"
          label="ID"
          v-model="config.id"
          required
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-flex xs8>
        <v-text-field
          name="input-key"
          label="Key"
          v-model="config.key"
          required
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-flex xs8>
        <v-text-field
          name="input-prefix"
          label="Header Prefix"
          v-model="config.prefix"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-center>
      <v-flex xs4>
        <v-text-field
          name="input-algorithm"
          label="Algorithm"
          v-model="config.algorithm"
        ></v-text-field>
      </v-flex>
      <v-flex xs4>
        <v-switch
          :label="config.encryptPayload ? 'On' : 'Off'"
          v-model="config.encryptPayload"
          dark
        ></v-switch>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-btn
        primary
        :light="!saveDisabled"
        :disabled="saveDisabled"
        @click.native="saveChanges"
      >Save Changes</v-btn>
      <v-btn primary flat>Cancel</v-btn>
    </v-layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapMutations} from 'vuex'
import Component from 'vue-class-component'
import { HawkOptions } from 'bridgit'
import types from '../store/mutation-types'
import { Mutation } from '../utils/decorators'


@Component({
  name: 'NewHawkConfig',
})
export default class NewHawkConfig extends Vue {
  configName: string = ''
  config: HawkOptions = {
    id: '',
    key: '',
    encryptPayload: true,
    algorithm: 'sha256'
  }

  @Mutation(types.SAVE_CONFIGURATION) saveConfiguration

  get saveDisabled() {
    return !this.config.id || !this.config.key
  }

  saveChanges() {
    this.saveConfiguration({
      name: this.configName,
      config: this.config
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.title {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}

</style>

<template>
  <div class="hawk-config">
    <div class="title">hawk config</div>
    <v-layout row justify-center>
      <v-flex xs8>
        <v-text-field
          name="input-1"
          label="Name"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-flex xs2>
        <v-text-field
          name="input-1"
          label="Port"
        ></v-text-field>
      </v-flex>
      <v-flex xs6>
        <v-text-field
          name="input-1"
          label="Origin"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-flex xs8>
        <v-text-field
          name="input-1"
          label="ID"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-flex xs8>
        <v-text-field
          name="input-1"
          label="Key"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-flex xs8>
        <v-text-field
          name="input-1"
          label="Header Prefix"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-center>
      <v-flex xs4>
        <v-text-field
          name="input-1"
          label="Algorithm"
        ></v-text-field>
      </v-flex>
      <v-flex xs4>
        <v-checkbox label="Encrypt Payload" value="true" primary dark hide-details></v-checkbox>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-btn primary light>Save Changes</v-btn>
      <v-btn primary flat>Cancel</v-btn>
    </v-layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'NewHawkConfig'
})
export default class NewHawkConfig extends Vue {

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

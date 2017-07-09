<template>
  <div>output</div>
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

</style>



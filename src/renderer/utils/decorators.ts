import { createDecorator } from 'vue-class-component'
import _ from 'lodash'

export function Mutation(mutationType) {
  return createDecorator((options, key) => {
    if (!options.methods) options.methods = {}
    options.methods[key] = function (payload) {
      return this.$store.commit(mutationType, payload)
    }
  })
}

export function State(path) {
  return createDecorator((options, key) => {
    if (!options.computed) options.computed = {}
    options.computed[key] = function () {
      return _.get(this.$store.state, path)
    }
  })
}
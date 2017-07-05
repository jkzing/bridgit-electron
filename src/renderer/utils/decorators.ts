import { createDecorator } from 'vue-class-component'

export function Mutation(mutationType) {
  return createDecorator((options, key) => {
    if (!options.methods) options.methods = {}
    options.methods[key] = function (payload) {
      return this.$store.commit(mutationType, payload)
    }
  })
}

import { Module, ActionTree, GetterTree, MutationTree } from 'vuex'

class State {
  name = 'instance'
}

const Getters = {

}

const Actions = {

}

const Mutations = {
  FUCK_WECHAT(state: State) {

  }
}

export default class Instance implements Module<State, any> {

  state: State
  mutations = Mutations
  getters = Getters
  actions = Actions

  constructor() {
      this.state = new State()
  }
}
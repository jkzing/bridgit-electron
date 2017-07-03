import { Module, ActionTree, ActionContext, GetterTree, MutationTree } from 'vuex'
import types from '../mutation-types'
import { HawkOptions } from 'bridgit'

type ConfigPayload = {
  name: string,
  config: HawkOptions
}

class State {
  saved: Object = {}
}

const Getters = {

}

const Actions = {

}

const Mutations = {
  [types.SAVE_CONFIGURATION](state: State, payload: ConfigPayload) {
    const {
      name,
      config
    } = payload
    state.saved = Object.assign({}, state.saved, {
      [name]: config
    })
  }
}

export default class Configuration implements Module<State, any> {

  state: State
  mutations = Mutations
  getters = Getters
  actions = Actions

  constructor() {
      this.state = new State()
  }
}
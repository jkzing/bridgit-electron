import { Module, ActionTree, ActionContext, GetterTree, MutationTree } from 'vuex'
import types from '../mutation-types'
import { HawkOptions } from 'bridgit'
import _ from 'lodash'

let configId = 0

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
    let toSave = _.cloneDeep(payload)
    // make sure name exists
    toSave.name = toSave.name || 'Default Name'
    state.saved = Object.assign({}, state.saved, {
      [configId++]: toSave
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
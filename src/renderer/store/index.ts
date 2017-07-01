import Vue from 'vue'
import Vuex, { Module, GetterTree, MutationTree, ActionTree, Plugin } from 'vuex'
import { State } from './state'
import Mutations from './mutations'
import Getters from './getters'
import Actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
    },
    state: new State(),
    mutations: Mutations,
    getters: Getters,
    actions: Actions,
})
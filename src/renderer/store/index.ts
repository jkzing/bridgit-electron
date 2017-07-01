import Vue from 'vue'
import Vuex, { Module, GetterTree, MutationTree, ActionTree, Plugin } from 'vuex'
import Getters from './getters'
import Actions from './actions'
import Instance from './modules/instance'
import Configuration from './modules/configuration'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        instance: new Instance(),
        conf: new Configuration(),
    },
    actions: Actions,
    getters: Getters,
    strict: debug
})
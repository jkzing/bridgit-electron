export default class Store implements Module<State, any> {

    // resolve namespacing, applies "foo/bar/..." stuff automatically
    namespaced: boolean = true

    // default properties required for vuex stores/modules
    state: State
    mutations = Mutations
    getters = Getters
    actions = Actions
    plugins?: Plugin<State>[] = []

    // create everything
    constructor(plugins?: Plugin<State>[]) {
        this.state = new State()
        this.plugins = plugins
    }
}
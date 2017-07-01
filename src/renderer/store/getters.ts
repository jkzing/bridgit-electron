import { Getter, GetterTree } from 'vuex'
import { State } from './state'

// sum of all persons
export function total (state: State): number {
    return state.adults + state.juveniles + state.children
}

// export everything compliant to the vuex specification for getters
export default <GetterTree<State, any>> {
    total
}
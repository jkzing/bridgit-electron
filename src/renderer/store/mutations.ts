import { Mutation, MutationTree } from 'vuex'
import { State } from './state'

// export type personIdentifier = 'adults' | 'juveniles' | 'children'

// swaps the persons amounts of adults and juveniles
export function SWAP (state: State) {
    const { adults, juveniles } = state
    state.juveniles = adults
    state.adults = juveniles
}

// export everything compliant to the vuex specification for getters
export default <MutationTree<State>> {
    SWAP
}
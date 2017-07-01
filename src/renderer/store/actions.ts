import { ActionTree, ActionContext } from 'vuex'
import { State } from './state'

// increment a person type by one if possible
// export function inc (store: ActionContext<State, any>, key: personIdentifier) {
//     if (store.getters['canInc']) {
//         store.commit('INC', key)
//     }
// }

// export everything compliant to the vuex specification for actions
export default <ActionTree<State, any>> {
}
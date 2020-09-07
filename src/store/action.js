import {
    ADD_SHOPING,
    SHOW_CHOOSE,
    ADD_COUNT
} from './mutation-type'

export default {
    addshoping({ state, commit }, shop) {
        let oldshop = state.shoping.find(item => item.iid === shop.iid)
        if (oldshop) {
            commit(ADD_COUNT, { oldshop, shop })
        } else {
            shop.checked = false
            commit(ADD_SHOPING, { shop })
        }
    },
    showchoose({ commit }, isChooseshow) {
        commit(SHOW_CHOOSE, isChooseshow)
    }
}
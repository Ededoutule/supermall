import {
    ADD_SHOPING,
    SHOW_CHOOSE,
    ADD_COUNT,
    CHOOSE_CHECKED
} from './mutation-type'


export default {
    addshoping({ state, commit }, shop) {
        return new Promise((resolve, reject) => {
            let oldshop = state.shoping.find(item => item.iid === shop.iid)
            if (oldshop) {
                commit(ADD_COUNT, { oldshop, shop })
            } else {
                shop.checked = false
                commit(ADD_SHOPING, { shop })
            }
            resolve('添加购物车成功')
        })

    },
    showchoose({ commit }, isChooseshow) {
        commit(SHOW_CHOOSE, isChooseshow)
    },
    chooseChcek({ state, commit }, { cartitem, check }) {
        let oldshop = state.shoping.find(item => item.iid === cartitem.iid)
        commit(CHOOSE_CHECKED, { oldshop, check })
    }
}
import {
    ADD_SHOPING,
    SHOW_CHOOSE,
    ADD_COUNT,
    CHOOSE_CHECKED
} from './mutation-type'

export default {
    [ADD_SHOPING](state, { shop }) {
        // for (const item of state.shoping) {
        //     if (item.iid === shop.iid && item.style === shop.style && item.size === shop.size) {
        //         newshop = item
        //     }
        //     if (item.iid === shop.iid && (item.style !== shop.style || item.size !== shop.size)) {
        //         shops = item
        //     }
        //     if (item.iid === shop.iid) {
        //         newshop = item
        //     }
        // }
        // let newshop = state.shoping.find((item) => { item.iid === shop.iid && item.style === shop.style && item.size === shop.size })
        // let shops = state.shoping.find((item) => { item.iid === shop.iid && (item.style !== shop.style || item.size !== shop.size) })
        // if (newshop && shops) {
        //     newshop.count += shop.count
        //     console.log('id，颜色，样式都相同')
        // } else {

        //     state.shoping.shops.unshift(shop)
        //     console.log('id都相同')
        // }
        state.shoping.unshift(shop)
    },
    [ADD_COUNT](state, { shop, oldshop }) {
        oldshop.count += shop.count
    },
    [SHOW_CHOOSE](state, isChooseshow) {
        state.isChooseshow = isChooseshow
    },
    [CHOOSE_CHECKED](state, { oldshop, check }) {
        oldshop.checked = check
    }
}
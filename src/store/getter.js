export default {
    cartList(state) {
        return state.shoping.filter((item) => {
            return item.checked
        })
    },
    cartCount(state, getters) {
        return getters.cartList.reduce((preValue, item) => {
            return preValue + item.count * item.newPrice
        }, 0)
    }
}
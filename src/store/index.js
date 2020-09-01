import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import getters from './getter'
import states from './state'
import mutations from './mutation'
Vue.use(Vuex)

export default new Vuex.Store({
    states,
    getters,
    mutations,
    actions,
})
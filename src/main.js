import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './filter/Data'
Vue.config.productionTip = false

import VueLazyLoad from 'vue-lazyload'
import fastClick from 'fastclick'

fastClick.attach(document.body);
Vue.use(VueLazyLoad, {
    loading: require('assets/img/common/placeholder.png'),
})

import toast from 'components/common/toast/index'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(toast)
Vue.use(Vant);
Vue.prototype.$bus = new Vue()

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
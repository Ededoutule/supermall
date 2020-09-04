// import Vue from 'vue'


import Vue from 'vue'
import moment from 'moment'

Vue.filter('data-formt', (value) => {
    return moment(value).format('YYYY-MM-DD HH:mm:ss')
})


Vue.filter('changeData', (value) => {
    var dat = new Date(value)
    return dat.getFullYear() + "-" + (dat.getMonth() - 1) + "-" + dat.getDay()
})
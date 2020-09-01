import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () =>
    import ('../views/home/Home.vue')
const Cart = () =>
    import ('../views/cart/Cart.vue')
const Category = () =>
    import ('../views/category/Category.vue')
const Profile = () =>
    import ('../views/profile/Profile.vue')
const routes = [{
        path: '/',
        // name: 'Home',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/category',
        name: 'Category',
        component: Category
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    }
]
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
    mode: 'hash',
    // baseURL: prompt,
    routes
})

export default router
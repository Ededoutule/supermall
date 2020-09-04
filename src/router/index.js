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
const Detail = () =>
    import ('../views/detail/Detail.vue')
const routes = [{
        path: '/',
        // name: 'Home',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            isTabbar: true
        }
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart,
        meta: {
            isTabbar: true
        }
    },
    {
        path: '/category',
        name: 'Category',
        component: Category,
        meta: {
            isTabbar: true
        }
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: {
            isTabbar: true
        }
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail,
        props: true,
        meta: {
            isTabbar: false
        }
    }
]
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
    mode: 'history',
    // baseURL: prompt,
    routes
})

export default router
import Toast from './Toast.vue'

const obj = {}
obj.install = (Vue) => {
    // Vue.extends(Toast)
    // Vue.prototype.$toast = obj
    // console.log('执行了install')
    //1 创建组件构造器
    const Toastinstance = Vue.extend(Toast)
        //2 new的方法，根据组件构造器，可以创建一个组件对象
    const toast = new Toastinstance()
        //3 将组件对象，手动挂载到一个元素上
    toast.$mount(document.createElement('div'))
        //4 toast.$el对应的就是div
    document.body.appendChild(toast.$el)
    Vue.prototype.$toast = toast
}

export default obj;
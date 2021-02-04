// Vue 插件的注册
let Vue

// 插件挂载
function install(_vue) {
    Vue = _vue
    Vue.mixin({
        beforeCreate() {
            console.log(this.$options.store)
            if(this.$options.store){
                Vue.prototype.$store = this.$options.store
                // Vue.prototype.$store = this.$options.store;
            }
        }
    })

}

class Store{
    constructor(option) {

        this.mutations = option.mutations || {}  // 存储mutations
        // this.state = option.state || {}  // 存储 state
        this.actions = option.actions || {}  // 存储actions
        // 数据响应式变化
        this.state = new Vue({
            data:option.state
        })
    }
    commit(type,arg){
        this.mutations[type](this.state,arg)
    }
    dispatch(type,arg){
        this.actions[type]({
           commit: this.commit,
           state: this.state
        },arg)
    }
}

export default{Store, install}
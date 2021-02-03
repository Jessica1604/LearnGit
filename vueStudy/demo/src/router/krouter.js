// 创建一个router 类
let Vue
export default class KvueRouter {
    constructor(options) {
        this.$options = options
        this.routerMap = {}
        // 响应url 的变化 响应数据的变化
        this.app = new Vue({
            data: {  
                current: '/'
            }
        })
    }
    init() {
        // 事件监听
        this.bindEvents()

        // 路由的映射
        this.createRouteMap()
        
        //注册全局组件
        this.initComponent()
    }
    createRouteMap () {
        this.$options.routes.map(item => {
            this.routerMap[item.path] = item
        })
    }
    
    bindEvents () {

       window.addEventListener('load', this.hashChange.bind(this))
       window.addEventListener('hashchange', this.hashChang.bind(this))
       
    }
    
    hashChange () {
        this.app.current = window.location.hash.slice(1) || '/'
    }

    initComponent () {
        // router-link
        // router-view  tag data children
        // router-link
        // router-view
        // Vue.component("router-link", {
        //     props: {
        //         to: String,
        //     },
        //     render(h) {
        //         return h('a', 
        //         {attrs: {href: '#' + this.to}}, 
        //         [this.$slots.default])
        //     }
        // })
        Vue.component('router-link', {
            props: {
                to: String
            },
            render(h) {
                // return <a href={this.to}>{this.$slots.default}</a>
                // h(tag, data, children)
                // this是组件实例
                return h('a', {attrs: {href: '#'+this.to}}, [this.$slots.default])
            }
        })
        
        // 数据的更新带动 组件更新
        // Vue.component("router-view", {
        //     render: (h) => {
        //         let component = this.routerMap[this.app.current].component
        //         return h(component)
        //     }
        // })
        Vue.component('router-view', {
            render: (h) => {
                // 拿出要渲染的组件
                // this希望是Router实例
                const component = this.routeMap[this.app.current].component;
                return h(component)
            }
        })
    }
}


// 实现插件的挂载
KvueRouter.install = function (_vue) {
    Vue = _vue
    Vue.mixin({
        beforeCreate() {
            // 判断是否是根节点
            if(this.$options.router) {
                // this.$options.router = router
                Vue.prototype.$router = this.$options.router
                // this.init()
                this.$options.router.init()
            }
        }
    })
}

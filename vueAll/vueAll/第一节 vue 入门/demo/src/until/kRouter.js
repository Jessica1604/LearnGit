let Vue
// 创建一个router 类

export default class vueRouter{
    constructor(option) {
        // 获取到
        this.$options = option
        // 路由遍历的时候进行存储
        this.routerMap = {}
        // 动态响应路由的变化
        this.app = new Vue({
            data() {
                return {
                    current: '/'
                }
            }
        })

    }
    init() {
      // 监听url 的响应
      this.bindEvents()
      // 路由的映射
      this.routerChange()
      // 组件的初始化
      this.initComponent()
    }

    routerChange() {
      // 没有考虑到路由的层级嵌套 只是做一个简单的循环
    //   console.log(this.$options)
      this.$options.routes.map(item => {
          this.routerMap[item.path] = item
      })
    }
    bindEvents() {
        window.addEventListener('load',this.onhashChange.bind(this, false))
        window.addEventListener('hashchange',this.onhashChange.bind(this, false))
    }
    onhashChange() {
        // 截取 # 后面的内容
        this.app.current = window.location.hash.slice(1)
    }
    initComponent() {
        Vue.component('router-link',{
            props: {
                to: String
            },
            render(h){
                return h('a',{attrs: {href: '#'+ this.to}},[this.$slots.default])
            }
        })

        Vue.component('router-view',{
            render: h =>{
            //   console.log(this.app.current)
            //   console.log(this.routerMap)
            //   console.log(this.routerMap[this.app.current])
              if(this.app.current){
                let component = this.routerMap[this.app.current].component
                return h(component)
              } else {
                let component = this.routerMap[this.app.current].component
                return h(component)
              }
            //   let component = this.routerMap[this.app.current].component
            //   return h(component)
            //   if(this.app.current){
            //     let component = this.routerMap[this.app.current].component
            //     return h(component)
            //   }
            
              
            }
        })
    }

}



// 插件的安装

vueRouter.install = function(_vue) {
   // 将传进来的Vue实例 赋值给自己申明的变量
   Vue = _vue
   // Vue 混入的方法 用混入方法的原因确保可以拿到 vue 实例
   Vue.mixin({
       beforeCreate() {
        //    console.log(this.$options)
        if(this.$options.router){
            // 确保是根组件时将router 放进去
            Vue.prototype.$router = this.$options.router
            // 组件的安装
            this.$options.router.init()
            console.log(this.$options.router)
        }
       }

   })
// Vue.mixin({
//     beforeCreate() {
//         // 只有根组件执行一次
//         if (this.$options.router) {
//             // 这里this是vue实例
//             Vue.prototype.$router = this.$options.router;
//             // 执行初始化
//             this.$options.router.init();
//         }
//     }
// })
}

// export default vueRouter
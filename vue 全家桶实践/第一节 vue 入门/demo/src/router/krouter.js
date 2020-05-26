import Vue from 'vue'
import VueRouter from '../until/kRouter.js'
import Home from '../views/Home.vue'
import About from '../views/About.vue'


// console.log(vueRouter ,'类的导入是否成功')

Vue.use(VueRouter)  // 安装vue-router 插件 

//   const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: About
//   }
// ]

// const router = new vueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

export default  new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: About
        }
    ]
})

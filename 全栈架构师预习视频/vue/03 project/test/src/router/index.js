import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index.js'

Vue.use(VueRouter)

  const routes = [
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
    component: () => import(/* webpackChunkName: "about" */ '../components/courseList.vue'),
    meta: {
      auth:true
    },
    beforeEnter(to,from,next) {
      if(to.meta.auth){
        if(store.state.user.isLogin){
          next()
        } else{
          next('/login?redirect=' + to.fullPath)
        }
      }else {
        next()
      }
    }
    
  },
  {
    path: '/detail/:name',
    name: 'detail',
    component: () => import ('../views/detail.vue')
  },
  {
    path: '*',
    component: () => import ('../views/404.vue')
  },
  {
    path: '/login',
    component:() => import('../views/login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// to 即将要进入的目标路由
// from 当前导航将要离开的路由
// next i
// router.beforeEach 是全局的
// router.beforeEach((to,from,next)=> {
//  if(to.meta.auth){
//    if(window.isLogin){
//      next()
//    } else{
//      next('/login?redirect=' + to.fullPath)
//    }
//  }else{
//    next()
//  }

// })

// beforeEnter(to,from,next){
//   if(to.meta.auth){
//    if(window.isLogin){
//      next()
//    }else{
//      next('/login?redirect=' + to.fullPath)
//    }
//   }else{
//      next()
//   }
// }

// 动态添加路由 根据需要动态的添加路由
// this.$router.addRoutes[]

export default router

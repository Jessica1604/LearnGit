import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    component: () => import(/* webpackChunkName: "about" */ '../components/courseList.vue')
  },
  {
    path: '/detail/:name',
    name: 'detail',
    component: () => import ('../views/detail.vue')
  },
  {
    path: '*',
    component: () => import ('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// to 即将要进入的目标路由
// from 当前导航将要离开的路由
// next 
router.beforeEach((to,from,next)=> {

})

export default router

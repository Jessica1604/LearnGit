import Vue from 'vue'
// import VueRouter from 'vue-router'
// import KvueRouter from './krouter'
import KvueRouter from './kvue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(KvueRouter)

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
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About
  }
]

export default new KvueRouter({
  routes
})

// export default router

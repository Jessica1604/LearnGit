import Vue from 'vue'
import Router from 'vue-router'
import order from '../components/order'
import product from '../components/product'
import cart from '../components/cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    }
  ]
})

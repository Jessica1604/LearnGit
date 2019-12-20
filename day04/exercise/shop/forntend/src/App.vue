<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" router>
       <el-menu-item index="/product">商品</el-menu-item>
       <el-menu-item index = "/cart">购物车</el-menu-item>
       <el-menu-item index="/order">订单</el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>
import order from './components/order'
import product from './components/product'
import cart from './components/cart'
export default {
  components: {order, product, cart},
  name: 'App',
  data () {
    return {
      activeIndex: '1'
    }
  },
  mounted () {}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

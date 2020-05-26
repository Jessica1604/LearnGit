import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import router from './router/krouter.js'
import store from './store'

console.log(router)

Vue.config.productionTip = false
// Vue.use(router)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

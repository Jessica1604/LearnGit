import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import router from './router/krouter.js'
import store from './store/kstore.js'

import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

console.log(router)

Vue.config.productionTip = false
// Vue.use(router)
Vue.use(ElementUi)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

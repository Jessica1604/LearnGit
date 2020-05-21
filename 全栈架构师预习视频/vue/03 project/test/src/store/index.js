import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import myPlugin from './plugins/preset'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    user
  },
  plugins: [myPlugin]  // store 中持久化 用户信息 插件的使用
})

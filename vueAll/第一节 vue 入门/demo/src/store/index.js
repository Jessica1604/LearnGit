import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment(state) {
      state.count += 1
    }
  },
  actions: {
    // mutations commit context 上下文
    increment({context}) {
       context.increment()
    }
  },
  modules: {
  }
})

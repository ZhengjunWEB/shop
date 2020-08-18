import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabIndex:0
  },
  mutations: {
    changIndex(state,payload) {
      state.tabIndex = payload
    }
  },
  actions: {
  },
  modules: {
  }
})

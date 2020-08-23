import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabIndex:0,
    cartList: []
  },
  mutations: {
    changIndex(state,payload) {
      state.tabIndex = payload
    },
    addGoods(state, payload) {
      //判断购物车中有无当前商品
      let result = state.cartList.find(item => {
        return item.id == payload.id
      })
      
      if(result) {
        result.count += 1
      } else {
        payload.isChecked = true
        state.cartList.push(payload)
      }
    
      // state.cartList.push(payload)
    },
    deleteCart(state,payload) {
      state.cartList.splice(payload, 1)
    },
    changeChecked(state, payload) {
      let flag = state.cartList[payload].isChecked
      state.cartList[payload].isChecked = !flag
    },
    allClick(state) {
      // state.cartList.forEach(item => {
      //   return item.isChecked = payload
      //  })
      let isAll =state.cartList.some(item => {
        return item.isChecked == false
      })
      if(isAll) {
        state.cartList.forEach(item => {
          return item.isChecked = isAll
        })
      } else {
        state.cartList.forEach(item => {
          return item.isChecked = isAll
        })
      }
    }
  },
  actions: {
  },
  modules: {
  }
})

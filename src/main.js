import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lazy from 'vue-lazyload'

Vue.config.productionTip = false
//图片懒加载
Vue.use(lazy, {
  loading: require('./assets/img/placeholder/placeholder.png')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

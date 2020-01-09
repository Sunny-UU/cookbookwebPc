import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import './styles/element-variables.scss'
import router from './router'
import store from './store'
import './axios/axios'
import './mock/mock'
import './iconfont/index'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

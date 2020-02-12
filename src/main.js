import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import './styles/element-variables.scss'
import router from './router'
import store from './store'
import './axios/axios'
import './mock/mock'
import './iconfont/index'
import Tinymce from './components/Tinymce' // ES6 Module

Vue.use(ElementUI)
Vue.config.productionTip = false
// 注册为全局组件
Vue.component('tinymce', Tinymce)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

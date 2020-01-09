import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import {Message} from "element-ui";

Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/',
    name: 'home',
    meta: {
        title: '首页'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/HomePage/HomePage.vue')
  },
  {
      path: '/login',
      name: 'login',
      meta: {
          title: '登录页'
      },
      component: () => import(/* webpackChunkName: "about" */ '../views/login/login.vue')
  },
  {
    path: '/foodlist',
    name: 'foodlist',
    meta: {
      title: '菜谱大全'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/FoodList/FoodList.vue')
  },
  {
      path: '/401',
      name: 'noAuthority',
      meta: {
          title: '错误页'
      },
      component: () => import(/* webpackChunkName: "about" */ '../views/erroPage/401.vue')
  },
]

// export const routerMap = {
//     'person':() => import('@/views/personal/person'),
//     'product': () => import('@/views/product/product'),
//     'appraisal': () => import('@/views/appraisal/appraisal')
// }

const createRouter = () => new VueRouter({
    mode: 'history',
    routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

router.onReady((to) => {
    const status = store.getters.token
    if (status) {
        store.dispatch('getInfo').then(e => {router.addRoutes(e)})
            .catch(erro => {
                Message.error(erro + '，请重新登录')
                store.dispatch('resetToken')
                router.push(`/login?redirect=${to.path}`)
            })
    }
})

export default router

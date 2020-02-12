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
      path: '/fooddetail',
      name: 'fooddetail',
      meta: {
          title: '制作步骤'
      },
      component: () => import(/* webpackChunkName: "about" */ '../views/FoodDetail/FoodDetail.vue')
  },
  {
      path: '/healthfood',
      name: 'healthfood',
      meta: {
          title: '饮食健康'
      },
      component: () => import(/* webpackChunkName: "about" */ '../views/HealthFood/HealthFood.vue')
  },
  {
      path:'/newsdetail',
      name:'newsdetail',
      mata:{
          title:'健康新闻'
      },
      component:()=> import('../views/NewsDetail/NewsDetail.vue')
  },
  {
     path:'/foodmenu',
     name:'foodmenu',
     mata:{
         title:"美食菜单"
     },
      component:()=>import('../views/FoodMenu/FoodMenu.vue')
  },
  {
      path:'/individualcenter',
      name:'individualcenter',
      mata:{
          title:"美食空间"
      },
      component:()=>import('../views/IndividualCenter/IndividualCenter.vue')
  },
  {
      path:'/editartical',
      name:'editartical',
      mata:{
          title:"发表菜谱"
      },
      component:()=>import('../views/EditArtical/EditArtical.vue')
  },
  {
      path:'/editperson',
      name:'editperson',
      mata:{
          title:"发表菜谱"
      },
      component:()=>import('../views/EditPerson/EditPerson.vue')
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

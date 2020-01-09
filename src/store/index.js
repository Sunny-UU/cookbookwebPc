import Vue from 'vue'
import Vuex from 'vuex'
import { login, getInfo } from '@/api/login'
// eslint-disable-next-line no-unused-vars
import { constantRoutes, routerMap, resetRouter } from '@/router'

Vue.use(Vuex)

export function formatRoutes(routes) {
    routes.forEach(route => {
        route.component = routerMap[route.component]
        if (route.children) {
            formatRoutes(route.children)
        }
    })
}

export default new Vuex.Store({
  state: {
      token: sessionStorage.getItem('token'),
      routers: []
  },
  mutations: {
      SET_TOKEN: (state, token) => {
          state.token = token
      },
      SET_ROUTERS: (state, routers) => {
          state.routers = routers
      },
  },
  actions: {
      login({ commit }, obj) {
          return new Promise((resolve, reject) => {
              login(obj).then(response => {
                  const data = response.data
                  if (data.header.code === '000000') {
                      const userInfo  = data.userInfo
                      commit('SET_TOKEN', userInfo.token)
                      sessionStorage.setItem('token',userInfo.token)
                      resolve()
                  } else {
                      reject(data.header.message)
                  }
              }).catch(error => {
                  reject(error)
              })
          })
      },
      getInfo({ commit, state }) {
          return new Promise((resolve, reject) => {
              getInfo(state.token).then(response => {
                  const data = response.data
                  if (data.header.code === '000000') {
                      const routers  = data.routers
                      formatRoutes(routers)
                      commit('SET_ROUTERS', routers)
                      resolve(routers)
                  } else {
                      reject(data.header.message)
                  }
              }).catch(error => {
                  reject(error)
              })
          })
      },
      logout({ commit }) {
          commit('SET_TOKEN', '')
          commit('SET_ROUTERS', [])
          sessionStorage.clear()
          resetRouter()
      },
      resetToken({ commit }){
          return new Promise((resolve) => {
              commit('SET_TOKEN', '')
              commit('SET_ROUTERS', [])
              sessionStorage.clear()
              resolve()
          })
      }

  },
  getters: {
      token: (state) => state.token,
      routers: (state) => state.routers
  }
})

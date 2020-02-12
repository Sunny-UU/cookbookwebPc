import request from '@/axios/axios.js'

export function getFootListApi (obj) {
  return request({
    url: '/getFootList',
    method: 'post',
    data: obj
  })
}
export function getMainFoodList(obj){
  return request({
    url:'/getMainFoodList',
    method:'post',
    data:obj
  })
}

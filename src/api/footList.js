import request from '@/axios/axios.js'

export function getFootListApi (obj) {
  return request({
    url: '/getFootList',
    method: 'post',
    data: obj
  })
}

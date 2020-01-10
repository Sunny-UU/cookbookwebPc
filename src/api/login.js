import request from '../axios/axios'

export function login (obj) {
  const data = obj;
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function getInfo (obj) {
    const data = obj;
    return request({
        url: '/getInfo',
        method: 'post',
        data
    })
}

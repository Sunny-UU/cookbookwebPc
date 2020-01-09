import Mock from 'mockjs'
import loginAPI from './login'

// 登录相关
Mock.mock(/\/login/, 'post', loginAPI.login)
Mock.mock(/\/getInfo/, 'post', loginAPI.getInfo)

export default Mock

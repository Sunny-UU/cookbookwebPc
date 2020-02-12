import Mock from 'mockjs'
import loginAPI from './login'
// import mainFoodList from './mainfoodlist'

// 登录相关
Mock.mock(/\/login/, 'post', loginAPI.login)
Mock.mock(/\/getInfo/, 'post', loginAPI.getInfo)
//获取首页信息
// Mock.mock(/\/getMainFoodList/,'post',mainFoodList.getMainFoodList)

export default Mock

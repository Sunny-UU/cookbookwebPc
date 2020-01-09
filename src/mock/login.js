// 用户登录模拟数据
const Res = {
    header: {
        code: '',
        message: ''
    },
    userInfo: {
        token: ''
    }
}

// 用户路由表
const Res1 = {
    header: {
        code: '',
        message: ''
    },
    routers: []
}

export default {
    login: obj => {
        // 入参json转换实体
        const Req = JSON.parse(obj.body)
        // 校验
        if (Req.username === 'admin') {
            Res.header.code = '000000'
            Res.header.message = '登录成功！'
            Res.userInfo.token = 'admin'
        } else {
            Res.header.code = '99'
            Res.header.message = '账号密码不符或角色选择有误！'
        }
        return Res
    },
    getInfo: obj => {
        // 入参json转换实体
        const token = JSON.parse(obj.body)
        // 校验
        if (token === 'admin') {
            Res1.header.code = '000000'
            Res1.header.message = '查询成功！'
            Res1.routers = [
                {
                    name: "person",
                    path: "/person",
                    component: "person",
                    meta: {
                        title: '个人中心'
                    }
                },
                {
                    name: "product",
                    path: "/product",
                    component: "product",
                    meta: {
                        title: '产品库'
                    }
                },
                // {
                //     name: "appraisal",
                //     path: "/appraisal",
                //     component: "appraisal",
                //     meta: {
                //         title: '鉴定平台'
                //     }
                // }
            ]
        } else {
            Res1.header.code = '999999'
            Res1.header.message = '没有找到对应权限路由！'
        }
        return Res1
    }
}


<template>
    <div>
        <div class="banner">
            <div class="title">注册美食杰</div>
            <div class="login_other">
                <a href="#"><img src="@/assets/image/wx.png" alt="微信"></a>
                <a href="#"><img src="@/assets/image/kk.png" alt="qq"></a>
                <a href="#"><img src="@/assets/image/wb.png" alt="微博"></a>
            </div>
            <div class="login_kind"><a>第三方登录方式</a></div>
            <div class="login_kind"><img src="@/assets/image/login_or.png" alt=""/></div>
            <div class="login">
                <div class="register">
                    <div class="block">
                        <a href="#">手机注册</a>
                        <a href="#">邮箱注册</a>
                    </div>
                </div>
                <el-form class="form">
                        <el-input  class="input" placeholder="请输入邮箱"></el-input>
                        <el-input  class="input" placeholder="请输入密码"></el-input>
                        <div style="text-align: center">
                            <el-button class="input" type="danger" @click="login">注册</el-button>
                        </div>
                </el-form>
            </div>
            <div class="login_kind"><a>已有账号?  马上登录</a></div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "login",
        data () {
            return {
                userInfo: {
                    username: 'admin'
                }
            }
        },
        methods: {
            login () {
                let _this = this
                this.$store.dispatch('login', this.userInfo)
                    .then(() => {
                        const  path = _this.$route.query.redirect || '/'
                        _this.$router.replace(path)
                    })
                    .catch((erro) => {
                        _this.$message.error(erro)
                    })
            }
        }
    }
</script>

<style scoped>
    a{
        text-decoration: none;
    }
    ul{
        list-style: none;
    }
    .banner {
        width: 1000px;
        background-color: white;
        margin: 40px auto;
        overflow: hidden;
        padding-bottom: 40px;
    }
    .title{
        height: 43px;
        line-height: 42px;
        font-size: 22px;
        text-align: center;
        margin: 40px 0;
    }
    .banner .login_other {
       overflow: auto;
        text-align: center;
    }
    .login_other a {
        display: inline-block;
        margin:0 25px;
    }
    .login_kind{
        margin-top: 20px;
        text-align: center;
        height: 66px;
        line-height: 66px;
    }
    .login_kind a{
        font-size: 15px;
        color: #333;
    }
    /*.banner .zhuce：hover{
        display: block;
        border-radius: 50%;
        background-color: yellow;
    }*/
    .login {
        width: 60%;
        margin: 0px auto;
        padding-bottom: 20px;
        background: #f5f5f5;
        border: 1px solid #eee;
    }
    .register{
        height: 24px;
        margin-top: 30px;
        text-align: center;
    }
    .register .block{
        overflow: auto;
        display: inline-block;
    }
    .register a {
        display: block;
        width: 85px;
        float: left;
        font-size: 18px;
        color: #999;
        text-align: center;
    }
    .register a:first-child {
        border-right: 1px solid #ddd;
    }
    .register a:hover {
        color: black;
        font-weight: 700;
        /*color: #ddd;*/
    }
    .banner .form {
        width: 320px;
        margin: 0 auto;
        margin-top: 30px;
    }
    .banner .form li input {
        display: block;
        background-color: white;
        width: 240px;
        height: 34px;
    }
    .login ul li:nth-child(2) {
        margin: 16px 0 16px 0;
    }
    .button {
        height: 50px;
    }
    .button input {
        display: block;
        width: 70px;
        color: white;
        background-color: #ed5541;
        margin: 0 auto;
        margin-top: 20px;
    }
    .input{
        margin: 15px 0;
        outline: none;
    }
</style>

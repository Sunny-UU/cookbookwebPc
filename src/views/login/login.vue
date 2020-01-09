<template>
    <el-button type="primary" @click="login">登录</el-button>
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

</style>

<template>
    <div>
      <el-button @click="login" v-if="!isLogin">登录</el-button>
      <el-button @click="loginOut" v-else>登出</el-button>
    </div>
</template>

<script>
    import {mapState, mapActions}  from 'vuex'
    export default {
        name: 'login',
        data() {
            return {

            }
        },
        computed:{
            // isLogin() {
            //    return this.$store.state.user.isLogin
            //    return ...mapState('')
            // }
            ...mapState('user',['isLogin'])  // 数据状态的映射
        },
        methods: {
         ...mapActions(['user/login', 'user/logout']), // 方法的映射
         login() {
            //  window.isLogin  = true
           
            // this.$store.commit('login')

            // 开始派发动作
            // this.$store.dispatch('user/login','admin').then(() => {
            //     this.$router.push(this.$route.query.redirect)
            // }).catch(() => {
            //     console.log('用户名或密码错误')
            // })
            this['user/login']('admin').then(() => {
                // console.log(this.$route.query.redirect)
                this.$router.push(this.$route.query.redirect)
            }).catch(() => {
                console.log('用户名或密码错误')
            })
            // console.log(this.$store)
            // console.log(this.$route.query.redirect)

         },
         loginOut(){
            //  window.isLogin = false
            this.$store.commit('user/loginOut')
         }

        }
        
    }
</script>

<style lang="scss" scoped>

</style>
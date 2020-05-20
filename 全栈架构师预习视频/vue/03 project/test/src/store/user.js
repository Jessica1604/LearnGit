export default{
    namespaced: true, // 命名空间 避免命名的重复冲突
    state: {  // 用于存储全局状态
        isLogin: false 
      },
      mutations: { // 用于修改全局状态
        login(state){
          state.isLogin = true
        },
        loginOut(state){
          state.isLogin = false
        }
      },
      actions: {  // action 类似于mutations 不同在于 action 提交的是mutations ,而不是直接更改状态  action 可以包含任意的异步操作
        login({commit}, username) {    // commit 代表上下文 ，username 代表传参
          return new Promise((resolve, reject) => {
             setTimeout(function() {
               if(username === 'admin'){
                 commit('login')
                 resolve()
               } else {
                 reject()
               }
             },1000)
          })
        }
    
      }

}
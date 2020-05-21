export default{
    namespaced: true, // 命名空间 避免命名的重复冲突
    state: {  // 用于存储全局状态
        isLogin: false,
        username: ''
      },
      mutations: { // 用于修改全局状态
        login(state, username){
          state.isLogin = true
          state.username = username
        },
        loginOut(state){
          state.isLogin = false
          state.username = ''
        }
      },
      getters: {    // 派生状态的使用
          welcome:state => {
              return state.username + ',欢迎回来'
          }
      },
      actions: {  // action 类似于mutations 不同在于 action 提交的是mutations ,而不是直接更改状态  action 可以包含任意的异步操作
        login({commit}, username) {    // commit 代表上下文 ，username 代表传参
          return new Promise((resolve, reject) => {
             setTimeout(function() {
               if(username === 'admin'){
                 commit('login', username)
                 resolve()
               } else {
                 reject()
               }
             },1000)
          })
        }
    
      }

}
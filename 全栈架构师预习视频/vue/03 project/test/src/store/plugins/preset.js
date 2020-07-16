

export default store => {
    // 初始化时从localstorege 获取数据
    if(localStorage) {
        // waitForDebugger
    //   const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : ''
    //   const user = localStorage.getItem('user')
      let user = ''
    //   console.log(user)
      if (localStorage.getItem('user') != 'undefined') {
        user = JSON.parse(localStorage.getItem('user'))
      } else {
          user = ''
      }
      console.log(user)
      if (user){
          store.commit('user/login', user)
      }

    }
    // 当状态发生变化时 订阅的api 
    store.subscribe((muation,state)=> {
        console.log(state)
        console.log(muation.type)
        if(muation.type === 'user/login'){
            localStorage.setItem('user', JSON.stringify(state.user.username))
        } else if(muation.type === 'user/loginout'){
            localStorage.removeItem('user')
        }
    })
}
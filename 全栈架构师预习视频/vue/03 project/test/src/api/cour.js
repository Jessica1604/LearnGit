      // 模拟异步数据加载
    //  export function getCourse() {
    //     return new Promise(resolve => {
    //         setTimeout(function(){
    //            resolve([{name:'web 全栈' },{name: 'web 高级'} ])
    //         },2000)

    //     })
    //   }

    import axios from 'axios'
    
    export function getCourse() {
        return axios.get('/api/getData').then(res => res.data)
    }
      // 模拟异步数据加载
     export function getCourse() {
        return new Promise(resolve => {
            setTimeout(function(){
               resolve([{name:'web 全栈' },{name: 'web 高级'} ])
            },2000)

        })
      }
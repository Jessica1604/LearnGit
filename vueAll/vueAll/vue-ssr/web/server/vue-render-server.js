// 创建vue 实例
let Vue = require('vue')
let app = new Vue({
    template: '<div>{{msg}}</div>',
    data() {
        return {
            msg: 'this is my world'
        }
    }
})

// 创建Vue-server-render
let render = require('vue-server-renderer').createRenderer()

render.renderToString(app).then(html => {
    console.log(html)
}).catch(err => {
    console.log(err)
})
// 进行监听
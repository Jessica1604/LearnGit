let server = require('express')()
let path = require('path')
let fs = require('fs')

// 创建vue 实例
let Vue = require('vue')


// 创建Vue-server-render
let render = require('vue-server-renderer').createRenderer()
let favicon = require('serve-favicon')
server.use(favicon(path.join(__dirname, '../public', 'favicon.ico')))


server.get('*', (req, res) => {
    console.log(req.url, '......')
    let template = req.url.substr(1) || 'index'
    // console.log(template)
    let buffer = fs.readFileSync(path.join(__dirname, template + '.html'))
    // console.log(res)
    let app = new Vue({
        template: buffer.toString(),
        data() {
            return {
                msg: 'this is my world hhhh'
            }
        }
    })
    render.renderToString(app).then(html => {
        console.log(html)
        res.send(html)
    }).catch(err => {
        console.log(err)
    })
})

server.listen(3333, () => {
    console.log('server running')
})
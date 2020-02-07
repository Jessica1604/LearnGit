// const Koa = require('koa')
// const { initRouter } = require('./kkb-loader.js')

// const app = new Koa()
// app.use(initRouter().routes())
// app.listen(3030)

const kkb = require('./kkb')
const app = new kkb()
app.start(3032)
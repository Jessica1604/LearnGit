const koa = require('koa')
const app = new koa()
app.use(async(ctx,next)=> {
    const start = new Date().getTime()
    await next()
    const end = new Date().getTime()
    console.log(`🔥耗时${parseInt(end - start)}ms`)
    
})
app.use((ctx,next)=> {
    console.log("=====")
    ctx.body = [{
        name: 'hello world'
    }]
})

app.listen(8080)
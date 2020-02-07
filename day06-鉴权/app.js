const Koa = require('koa')
const app = new Koa()
const session = require('koa-session')
// redis 是一个键值服务器
const redisStore = require('koa-redis')
const redis = require('redis')
const redisClient = redis.createClient(6379, 'localhost')
const wrapper = require('co-redis')
const client = wrapper(redisClient)


app.keys = ['some secret'] // 设置加密   session 会调用node 内部的加密函数 加密函数就是写在keys 里

// 设置配置项
const SESS_CONFIG = {
    key: 'kkb:sess',
    maxAge: 86400000, // 设置有效期
    httpOnly: true, //仅服务器可以修改
    signed: true, // 有签名的
    store: redisStore({client})
}

app.use(session(SESS_CONFIG,app))
app.use(async (ctx, next)=> {
    const keys = await client.keys('*')
    keys.forEach(async key => {
        console.log(await client.get(key))
    })
    await next()
})
app.use(ctx => {
    if(ctx.url === '/favicon.ico'){
        return
    }
    let n = ctx.session.count || 0
    ctx.session.count = ++n
    ctx.body = `第${n}次访问`

})
app.listen(4000)
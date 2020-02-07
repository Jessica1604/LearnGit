module.exports = {
    // 'get /': async ctx => {
    //     ctx.body = '用户首页'
    // },
    // 'get /info': async ctx => {
    //     ctx.body = '用户详细页面'
    // }
    'get /': async app => {
        const name = await app.$service.user.getName()
        app.ctx.body = '用户:' + name
    },
    'get /info': async app => {
        app.ctx.body = '用户年龄:' + await app.$service.user.getAge()
    }
}
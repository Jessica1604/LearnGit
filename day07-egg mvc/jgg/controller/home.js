module.exports = app => ({
    index: async ctx => {
        // ctx.body = '首页controller'
        // console.log(app.$service)
        const name =await app.$service.user.getName()
        app.ctx.body = 'ctrl user' +  name
        // app.ctx.body = name
    },
    detail: async ctx => {
        // ctx.body = '详情页面controller'
        app.ctx.body = 'ctrl detail'
    }
})
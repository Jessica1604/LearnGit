const fs = require('fs')
const path = require('path')
const Router = require('koa-router')
 

// 实现loader
function loader(dir,cb) {
    // 获取绝对路径
    const url = path.resolve(__dirname, dir)
    // 读取路径下的文件 readdirSync 写错
    const files = fs.readdirSync(url)
    files.forEach(filename => {
        // 去掉后缀
        filename = filename.replace('.js', '')
        // export file
        const file = require(url + '/' + filename)
        // 处理逻辑
        cb(filename, file)
    })

}

function initRouter(app) {
    const router = new Router()
    loader('routes', (filename,routes)=> {
        // index 无后缀
        // console.log(filename)
        // console.log(routes)
        // console.log(app)
        const prefix = filename === 'index' ? '' : `/${filename}`
        routes = typeof routes === 'function' ? routes(app) : routes
        // console.log(routes)
        Object.keys(routes).forEach(key => {
            // console.log(key)
            const [method, path] = key.split(' ')
            // console.log(method)
            // router[method](prefix + path, routes[key])
            router[method](prefix + path, async ctx => {
                // console.log(ctx)
                app.ctx = ctx
                await routes[key](app)
                console.log( routes[key](app))

            })

        })
    })
    return router
}

function initController(app) {
    const controllers = {}
    // 读取文件目录
    loader('controller', (filename, controller) => {
        controllers[filename] = controller(app)
    })
    return controllers
}
function initService() {
    const services = {}
    loader('service', (filename, service)=> {
        services[filename] = service
    })
    return services
}

const Sequelize = require('sequelize')

function loadConfig(app) {
    loader('config', (filename, conf) => {
        if (conf.db){
            app.$db = new Sequelize(conf.db)
            // 加载模型
            app.$model ={}
            loader('model', (filename,{schema, options})=> {
                app.$model[filename] = app.$db.define(filename, schema, options)
            })
            // 数据库同步
            app.$db.sync()
        }
        if (conf.middleware) {
            conf.middleware.forEach((mid)=> {
                const midPath = path.resolve(__dirname, 'middleware', mid)
                app.$app.use(require(midPath))
            })
        }
    })
}

const schedule = require('node-schedule')
function initSchedule () {
    // 读取目录
    loader('schedule',(filename, scheduleConfig) => {
        schedule.scheduleJob(scheduleConfig.interval, scheduleConfig.handler)
    })
}
module.exports = { initRouter, initController, initService, loadConfig , initSchedule}
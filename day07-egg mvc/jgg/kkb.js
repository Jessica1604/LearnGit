const Koa = require('koa')
const {initRouter,initController, initService, loadConfig, initSchedule} = require('./kkb-loader')

class KKB {
    constructor(conf) {
        this.$app = new Koa(conf)
        loadConfig(this)
        this.$ctrl = initController(this)
        this.$service = initService()
        this.$router = initRouter(this)
        this.$app.use(this.$router.routes())
        initSchedule()
    }
    start(port) {
        this.$app.listen(port)
    }
}
module.exports = KKB
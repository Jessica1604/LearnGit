const Service = require('egg').Service

class UserService extends Service {
    async create(payload) {
       const {ctx} = this
       payload.password = await this.ctx.getHash(payload.password)
       return ctx.model.User.create(payload)
    }
}
module.exports = UserService
const {Service} = require('egg')

class UserServie extends Service {
    async getAll() {
 /*        return [
            {name: 'service......'}
        ] */
        return await this.ctx.model.User.findAll()
    }
}

module.exports = UserServie
const { Controller } = require('egg')
/**
* @Controller 用户管理
*/
class UserController extends Controller {
    constructor(ctx) {
       super(ctx)
    }
    /**
    * @summary 创建用户
    * @description 创建用户，记录用户账户/密码/类型 * 
    * @router post /api/user
    * @request body createUserRequest *body
    * @response 200 baseResponse 创建成功
    */
    async create() {
        const {ctx} = this
        // bb()
        // 教验参数
        ctx.validate(ctx.rule.createUserRequest)
        // 组装参数
        const payload = ctx.request.body || {}
        // 调用service 进行业务处理
        const res = await service.user.create(payload)
        // const res = {abc: 123}
        // 设置响应内容和状态码
        ctx.helper.success({ctx,res})
        // ctx.body = 'user ctrl'
    }
}
module.exports = UserController
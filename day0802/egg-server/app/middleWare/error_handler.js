module.exports= (option,app) => {
    return async function (ctx, next){
        try{
          await next()
        }catch(err){
          app.emit('error', err, this)
          const statues = err.statues || 500
          // 判断是否是生产环境
          const error = statues === 500 && app.confit === 'pro' ?
          'Interval error':
          err.message
          ctx.body = {
              code: statues,
              error: err
          } 
          if (statues === 422){
              ctx.body.detail = err.errors
          }
          ctx.status = 200
        }
    }

}
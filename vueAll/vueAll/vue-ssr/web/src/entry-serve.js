// 服务端入口文件
import {createApp} from './main.js'

export default context => {
    return new Promise((resolve, reject) => {
        const {app, router} = createApp(context)
        router.push(context.url)
        router.onReady(() => {
            resolve(app)
        }, reject)
    })
}
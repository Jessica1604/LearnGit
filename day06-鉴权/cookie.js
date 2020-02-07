const http = require('http')
const session = {}
http.createServer((req,res)=> {
    if(req.url === '/favicon.ico'){
        res.end('')
        return
    }
    const sessionKey = 'sid'
    const cookie = req.headers.cookie

    if (cookie && cookie.indexOf(sessionKey) > -1){
     res.end('come back')
     // 获取session
     const pattern = new RegExp(`${sessionKey}=([^;]+);?\s*`)
     const sid = pattern.exec(cookie)[1]
     console.log('session', sid, session[sid])
     
    }else {
     // 没有登录
     const sid = Math.random()
     res.setHeader('Set-Cookie',`${sessionKey}=${sid};`)
     session[sid]={name: 'laowang'}
     res.end('hello cookie')
    }
    // console.log(req.headers.cookie)
    // res.setHeader('Set-Cookie', 'abc=1')
    // res.end('hello cookie')
})
.listen(3000)
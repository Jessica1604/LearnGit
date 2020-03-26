const http = require('http')

http.createServer((req,res)=> {
    console.log(req.headers.cookie)
    if (req.url === '/favicon.ico'){
        res.end('')
        return 
    }
    res.setHeader('Set-Cookie', 'cookie=123')
    res.end('hello cookie')

})
.listen('3030')
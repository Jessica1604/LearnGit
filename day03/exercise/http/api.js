const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=> {
    const {method, url } = req
    console.log(url, method)
    if (method === 'GET' && url === '/'){
        fs.readFile('./index.html', (err,data)=> {
            res.setHeader('Content-type', 'text/html')
            res.end(data)
        })
    } else if (method === 'GET' && url === '/api/users') {
        res.setHeader('Content-type', 'application/json')
        // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
        res.end(JSON.stringify({name: 'jessica'}))
    }else if (method === 'OPTIONS') {
        res.writeHead(200,{
            'Access-Control-Allow-Origin':'http://localhost:3000',
            'Access-Control-Allow-Headers':'x-token',
            'Access-Control-Allow-Methods':'PUT'
        })
        res.end()
    } else if (method === 'POST' && url === '/api/save') {
       let size = 0
       let dataList = []
       res.on('data',data=> {
         console.log(on)
         size += size.length
         dataList.push(data)
       })
       res.on('end', function(){
          console.log('end') 
          const data =Buffer.concat(dataList,size)
          console.log('data:', data.toString())
          res.end(`formdata:${data.toString()}`)
          
       })
    }
})
module.exports = server
// server.listen(8080)

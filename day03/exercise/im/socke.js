const net = require('net')
const chartServer = net.createServer()
const clinetList = []
chartServer.on('connection',client => {
   client.write('hi\n')
   clinetList.push(client)
   client.on('data',data=> {
       console.log('receive', data.toString())
       clinetList.forEach(v=> {
           v.write(data)
       })
   })
})
chartServer.listen(9000)
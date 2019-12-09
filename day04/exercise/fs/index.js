const fs = require('fs')

function get(key){
   fs.readFile('./db.json',(err,data)=> {
       let json = JSON.parse(data)
       console.log(json[key])
   })
}
function set(key,value){
    fs.readFile('./db.json',(err,data)=> {
        let json = data ? JSON.parse(data): {}
        json[key] = value
        fs.writeFile('./db.json',JSON.stringify(json),err => {
            if (err){
                console.log('写入失败')
            }else{
                console.log('写入成功')
            }
        })
    })
}
//用命令行的方式写
const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.on('line', function(input){
    console.log(input)
    const [op, key, value] = input.split(" ")
    console.log(op)
    if (op === 'get'){
       get(key)
    }else if (op === 'set') {
       set(key, value)
    } else if (op === 'quit'){
        rl.close()
    } else {
      console.log('没有任何操作')
    }
})
rl.on('close',function() {
    console.log('退出程序')
    process.exit(0)
})
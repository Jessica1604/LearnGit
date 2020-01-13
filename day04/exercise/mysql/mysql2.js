(async ()=>{
    const mysql = require('mysql2')
    // 链接配置
    const conf = {
        host: '106.13.191.217',
        user: 'root',
        password: 'root',
        database: 'jessica'
    }
   const mysqlConnection = await mysql.createConnection(conf)
  // console.log(mysqlConnection)
//    let ret = await mysqlConnection.execute(`
//     CREATE TABLE IF NOT EXIST two(
//         id INT NOT NULL AUTO_INCREMENT,
//         message VARCHAR(50) NULL,
//         PRIMARY KEY (id)
//     )
//    `)
//    console.log(ret)
   
})()
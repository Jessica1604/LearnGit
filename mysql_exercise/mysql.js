(async () => {
    const mysql = require('mysql')
    const conf = {
        host: '106.13.191.217',
        user: 'root',
        password: '123',
        database: 'student'
    }
    const conn =await mysql.createConnection(conf)
    // console.log(conn)
    conn.connect((err)=> {
        if(err){
            console.log('连接失败')
        } else{
            console.log('连接成功')
        }
    })
    // // SQL 语句
    // const SELECT_SQL = `SELECT * FORM students`
    
    // // create sql
    // let ret = await conn.execute(SELECT_SQL)
    
    // console.log(ret)


})()

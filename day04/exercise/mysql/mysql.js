(async () => {
    const mysql = require('mysql2/promise')
    const conf = {
        host: '106.13.191.217',
        user: 'root',
        password: 'root',
        database: 'jessica'
    }
    const connection = await mysql.createConnection(conf)
    console.log(connection)
    let ret = await connection.execute(`
      CREATE TABLE IF NOT EXISTS TEST(
          
      )
    `)

} )()
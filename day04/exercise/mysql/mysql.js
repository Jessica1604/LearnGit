(async () => {
    const mysql = require('mysql2/promise')
    const conf = {
        host: '106.13.191.217',
        user: 'root',
        password: 'root',
        database: 'jessica'
    }
    const connection = await mysql.createConnection(conf)
    // console.log(connection)创建一个表格
    let ret = await connection.execute(`
        CREATE TABLE IF NOT EXISTS test (
            id INT NOT NULL AUTO_INCREMENT,
            message VARCHAR(45) NULL,
        PRIMARY KEY (id))
    `)
    console.log('create', ret)
    // insert one data
    ret = await connection.execute(`
      INSERT INTO test(message) VALUES(?)
    `,['abc'])
    console.log(ret)
    const [rows,fields] = await connection.execute(`
       SELECT * FROM test
    `)
    console.log(JSON.stringify(rows, '' , '\t'))

} )()
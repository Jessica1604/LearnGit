const Sequelize = require('sequelize')

const sequelize = new Sequelize('student', 'root', '123', {
    host: '106.13.191.217',
    dialect: 'mysql'
})

// console.log(sequelize)
// const 

// authenticate 方法用来测试连接是否成功
sequelize
.authenticate()
.then(() => {
    console.log('连接成功')
})
.catch(() => {
    console.log('连接失败')
})

// 关闭数据库的连接  默认情况下如果数据库一直是开启的状态 那么一直保持连接状态
// 可以通过 close() 关闭连接

// sequelize.close()

// 表建模
// 建模的第一种方式
// const Model = Sequelize.Model

// class User extends Model {}
// User.init({
//     // 属性
//     firstName:{
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     lastName: {
//         type:Sequelize.STRING
//     }
// },{
//     sequelize,
//     modelName: 'User'
// })

// 建模的第二种方式
const user = sequelize.define('users',{
    firstName: {
        type:Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type:Sequelize.STRING,
        allowNull: false
    }

}, {
    // 时间戳的设置  默认情况下为 true  若为false 则表明不需要时间戳 更改模型默认参数
    timestamps: false
})

// 将模型与数据库同步
// 如果该表存在  使用 force: true 将删除该表
user.sync({force: true}).then(() => {
    return user.create({
        firstName: 'jessica',
        lastName: 'jin'
    })
})

// 一次同步所有模型  可以通过 sequelize.sync()  

// sequelize.sync()

// 查询
user.findAll().then(users => {
   console.log(users)
})



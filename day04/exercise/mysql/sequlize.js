(async () => {
    const Sequelize = require('sequelize');
    // create connnection 
    // 
    const sequelize = new Sequelize('jessica', 
      'root',
      'root',
      {
          host: '106.13.191.217',
          dialect: 'mysql',
          operatorsAliases: false
      }
    )
    // DINGYI MODULE
    const Fruit = sequelize.define('Fruit',{
        id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV1,
            primaryKey: true
        },  // 这是一个比较重要的知识点
        name: {type: Sequelize.STRING(20), allowNull: false},
        price: {type: Sequelize.FLOAT, allowNull: false},
        stock : {type: Sequelize.INTEGER, defaultValue: 0}
    },{
        timestamps: false, // 时间戳的保留与否
        tableName: 'runAway'

    })
    //  同步数据库
    let ret = await Fruit.sync()
    ret = await Fruit.create({
        name: "香蕉",
        price: 3.6
    })

    ret = await Fruit.update({
        price: 5
    },{
        where: {name: "香蕉"}
    })
    console.log(ret)
    
    const {Op} = Sequelize
    ret = await Fruit.findAll({
        where : {price: {[Op.lt]:4, [Op.gt]: 2}}
    })
    console.log(JSON.stringify(ret, '' , '\t'))


})()

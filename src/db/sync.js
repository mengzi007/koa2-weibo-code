/**
 * @description sequelize 数据库同步
 * @author neil liao
 */

const seq = require('./seq')
//require('./model')

//test connection
seq.authenticate().then()(() => {
    console.log('auth ok')
}).catch(() => {
    console.log('auth err')
})

//执行同步
//force = true表示每次都把苦情掉重新见表
seq.sync({force: true}).then(() => {
    console.log('sync ok')
    process.exit()
})
/**
 * @description sequelize instance
 * @author neil liao
 */

const Sequelize = require('sequelize')
const { MYSQL_CONF } = require('../conf/db')
const { isProd, isTest } = require('../utils/env')

const { host, user, password, database } = MYSQL_CONF

const conf = {
    host,
    dialect: 'mysql'
}

//如果是单元测试，那么关掉sql打印
if(isTest) {
    conf.logging = () => {}
}

//线上环境，使用连接池
if(isProd) {
    conf.pool = {
        max: 5, //连接池中最大连接数
        min: 0, //最小
        idle: 10000 //如果一个连接池 10 秒之内没有被使用，则释放
    }
}


const seq = new Sequelize(database, user, password, conf)

module.exports = seq
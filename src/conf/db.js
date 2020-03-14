/**
 * @description 存储配置
 * @author neil liao
 */

 const { isProd } = require('../utils/env')

 let REDIS_CONF = {
     port: 6379,
     host: '127.0.0.1'
 }

 let MYSQL_CONF = {
     host: 'localhost',
     user: 'root',
     password: 'P@ssw0rd',
     port: '3306',
     database: 'koa2_weibo_db'
 }

 if (isProd) {
     REDIS_CONF = {
         port: 6397,
         host: '127.0.0.1'
     }

     MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'P@ssw0rd',
        port: '3306',
        database: 'koa2_weibo_db'
    }
 }

 module.exports = {
    REDIS_CONF,
    MYSQL_CONF
 }
const mysql = require('mysql');

const Q = require('q');

//创建数据库连接
let connect = mysql.creatConnection(config.mysqlOptions);

//连接数据库
connect.connect();

exports.query = (sql) => {
	//connect: 数据库实例配置
	//query： 操作数据库API
	//sql: 操作数据库sql语句
	//Q.ninvoke返回一个promise
	return Q.ninvoke(connect, 'query',sql);
}
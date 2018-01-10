let server ={
	host:'127.0.0.1',
	port:9000
}

//配置数据库
exports.mysqlOptions = {
	host: server.host,
	user: 'root',
	password: '',
	database: 'shana'
}
//导出server
exports.server = server;
// class RouterController {

// 	validCodeController(req, res) {
// 		let phone = req.query.phone;
// 		res.send(req.query);
// 	}

// }

const Utils = require(__basename + '/utils/utils.js');

const API = require(__basename + '/service/API.js');

const SQL = require(__basename + '/lib/sql/sql.js');

const common = require(__basename + '/common/common.js');
class RouterController {
	constructor(){}

	//发短信验证号码功能
	sendMessageController (req, res){
		//随机生成6位验证码

		let time = new Date().getTime().toString();
		let code = time.slice(time.length - 6);
		// res.send({code});
		//req.query:请求查询参数
		Utils.sendMessage(req.query.phone,code)
			.then((data) => {
				let {Code} = data
				if (Code === 'OK'){
					//处理返回函数
					res.json({code: code,msg: '发送短信验证码成功',status:1});
				}
			}, (err) => {
				console.log(err)
				res.json({msg:'发送短信验证码失败',status:0});
		})
		
	}

	//注册功能
	registerController(req,res) {
		//req.query 请求参数，Get请求携带参数

		//req.body 请求参数,Post请求携带参数

		//查询手机号码是否注册

		let selectSQL = SQL.findOneSQL(req.body,'phone');
		API.query(selectSQL)
		.then(result => {
			if(result[0].length === 1){
				res.json(common.register.info)
			}else{
				//req.body 请求体
				//如果手机号码没有被注册，则执行插入sql语句
				console.log(req.body);
				Utils.addCrypto(req.body, 'pwd');
				let sql = SQL.registerSQL(req.body);
				API.query(sql)
				  .then(result =>{
				  	res.json(common.register.success);
				  })
				  .catch(err =>{
				  	res.send(common.register.error);
				  })
			}
			
		})
		.catch(err =>{
			res.json(common.register.error);
		})		
	}

	//登录功能
	loginController(req,res){
		//req.body{对象形式}
		Utils.addCrypto(req.body,'pwd');//加密密码
		let sql = SQL.loginSQL(req.body);
		console.log(sql)
		API.query(sql[0])
			.then(result => {
				if(result[0].length === 1){					
					API.query(sql[1])
					   .then(result=>{
					   	 if(result[0].length === 1){
					   	 	
					   	 	let Sql = SQL.updateLoginStatusSQL(req.body,1);
					   	 	API.query(Sql)
					   	 		.then(result =>{
					   	 			res.send(common.login.success);

					   	 		})
					   	 		.catch(err =>{
					   	 			res.send(err);
					   	 		})
					   	 }else{
					   	 	res.send(common.login.error);
					   	 }
					   })
					   .catch(err=>{
					   	  res.send(common.login.error);
					   })
					// common.login.success.data = result[0];					
				} else {
					res.send(common.login.info);
				}
			})
			.catch(err => {
				res.json(common.login.error);
			})
	}

	//首页查询
	homeController (req,res){
		let sql = SQL.findHomeSQL();
		API.query(sql)
			.then(result =>{
				let data = {};
				data.banner = result[0];
				let productsql = SQL.findProductSQL();
				API.query(productsql)
					.then(result=>{
						data.product = result[0];
						res.send(data);
					})
					.catch(err => {
						res.send('出错啦');
					})
				
			})
			.catch(err => {
				res.send('出错啦');
			})
	}
}
module.exports = new RouterController();


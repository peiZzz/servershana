// class RouterController {

// 	validCodeController(req, res) {
// 		let phone = req.query.phone;
// 		res.send(req.query);
// 	}

// }

const Utils = require(__basename + '/utils/utils.js');

const API = require(__basename + '/service/API.js');

const SQL = require(__basename + '/lib/sql/sql.js');
class RouterController {
	constructor(){}

	//发短信验证号码功能
	sendMessageController (req, res){
		//随机生成6位验证码

		let time = new Date().getTime().toString();
		let code = time.slice(time.length - 6);
		res.send({code});
		//req.query:请求查询参数
		/*Utils.sendMessage(req.query.phone,code)
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
		*/
	}

	//注册功能
	registerController(req,res) {
		//查询手机号码是否注册

		let selectSQL = SQL.findOneSQL(req.body,'phone');
		API.query(selectSQL)
		.then(result => {
			res.send(result[0]);
		})
		.catch(err =>{
			res.json({msg:'出错了'});
		})
		//req.body 请求体
		// console.log(req.body);
		// Utils.addCrypto(req.body, 'pwd');
		// let sql = SQL.registerSQL(req.body);
		// API.query(sql)
		//   .then(result =>{
		//   	res.send(result[0]);
		//   })
		//   .catch(err =>{
		//   	res.send('出错');
		//   })
	}
}
module.exports = new RouterController();


// class RouterController {

// 	validCodeController(req, res) {
// 		let phone = req.query.phone;
// 		res.send(req.query);
// 	}

// }

const Utils = require(__basename + '/utils/utils.js');

class RouterController {
	constructor(){}

	sendMessageController (req, res){
		//随机生成6位验证码
		let time = new Date().getTime().toString();
		let code = time.slice(time.length - 6);
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
}
module.exports = new RouterController();


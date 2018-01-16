module.exports = {
	/*
		protocal => agree
		100:同意用户协议
		101：不同意用户协议

	*/
	protocal:{
		agree:101
	},
	register:{
		// sendsuccess:{
		// 	msg:'验证码发送成功',
		// 	statusCode:1001
		// },
		success:{
			msg:'注册成功',
			statusCode:200
		},
		info:{
			msg:'该手机已经被注册',
			statusCode:201
		},
		error:{
			msg:'该手机号已被注册',
			statusCode:202
		}
	},

	login:{
		success:{
			msg:'登陆成功',
			statusCode:1300
		},
		info:{
			msg:'用户名或者密码错误',
			statusCode:1301
		},
		error:{
			msg:'登录失败',
			statusCode:1302
		}
		
	}
}
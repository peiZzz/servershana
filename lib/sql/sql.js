class SQL {
	constructor() {}

	//注册
	registerSQL(o){
		return "INSERT INTO `t_user` (`pwd`,`phone`,`registerTime`,`agreement`) VALUES ('" + o.pwd + "','" + o.phone + "','" + o.registerTime + "','" + o.agree + "')";
	}
	//查询t_user表一个字段信息
	findOneSQL(o,field){
		return "SELECT `"+ field +"` FROM `t_user` WHERE `"+field+"` = '"+ o[field] +"'" ;
	}

	//登录
	loginSQL(o){
		return ["SELECT `phone`,`pwd` FROM `t_user` WHERE `phone` = '" + o.phone + "' AND `pwd` = '" + o.pwd + "'",
		        "SELECT `phone`,`pwd` FROM `t_user` WHERE `loginstatus` = '0' AND `phone` = '" + o.phone + "' AND `pwd` = '" + o.pwd + "'"
		];
	}

	//修改t_user loginStatus字段 0：离线， 1：在线
	updateLoginStatusSQL (o,val){
		return "UPDATE `t_user` SET `loginstatus` = '" + val + "' WHERE `phone` = '" + o.phone + "'";
	}
}

module.exports = new SQL();
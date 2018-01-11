class SQL {
	constructor() {}

	//注册
	registerSQL(o){
		return "INSERT INTO `t_user` (`pwd`,`phone`,`registerTime`,`agreement`) VALUES ('" + o.pwd + "','" + o.phone + "','" + o.registerTime + "','" + o.agree + "')";
	}

	findOneSQL(o){
		return "SELECT `phone` FROM `t_user` WHERE `phone` = '"+ o.phone +"'" ;
	}
}

module.exports = new SQL();
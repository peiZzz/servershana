class SQL {
	constructor() {}

	//注册
	registerSQL(o){
		return "INSERT INTO `t_user` (`pwd`,`phone`,`registerTime`,`agreement`) VALUES ('" + o.pwd + "','" + o.phone + "','" + o.registerTime + "','" + o.agree + "')";
	}
}

module.exports = new SQL();
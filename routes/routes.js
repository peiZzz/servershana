const RouteController = require(__basename + '/routerController/routerController.js');

exports.routes = function(app){

	//匹配路由路径

	app.get('/message', RouteController.sendMessageController);

	app.post('/register',RouteController.registerController);

	// app.get('/register',RouteController.registerController);
}	



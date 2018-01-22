const RouteController = require(__basename + '/routerController/routerController.js');

exports.routes = function(app){

	//匹配路由路径

	app.get('/message', RouteController.sendMessageController);

	app.post('/register',RouteController.registerController);

	app.post('/login',RouteController.loginController);
	// app.get('/register',RouteController.registerController);
	app.get('/home',RouteController.homeController);

	app.get('/emailcode',RouteController.emailcodeController);
}

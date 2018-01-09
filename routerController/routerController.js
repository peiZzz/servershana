class RouterController {

	validCodeController(req, res) {
		let phone = req.query.phone;
		res.send(req.query);
	}

}

module.exports = new RouterController();


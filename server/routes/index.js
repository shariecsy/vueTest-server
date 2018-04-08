var express = require('express');
var router = express.Router();

var _checkIsEmpty = function(obj){
	for(var key in obj){
		return false;
	}
	return true;
}

router.use('/:version/:module/:action', function(req, res, next) {
	// 跨域请求
	res.header('Access-Control-Allow-Origin', '*');
	try {
		console.log('../' + req.params.version + '/' + req.params.module + '/' + req.params.action);
		if(_checkIsEmpty(req.body)){
			req.body = req.query;
		}
		var action = require('../' + req.params.version + '/' + req.params.module + '/' + req.params.action);
		action(req, res);
	} catch(e) {
		console.error(e);
	}
});

module.exports = router;

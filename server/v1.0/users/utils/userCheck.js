/**
 * 检查用户是否已注册
 * 
 */
var pool = require('../../../services/db-services.js');
var UserCheck = (function() {
	var _do = function(req, res, fn, isSendMsg) {
		var mobileNo = req.body.mobileNo;
		pool.query('select count(1) as solution from user where mobile_no = ?', [mobileNo], function(error, results, fields) {
			if(error) {
				res.json({
					code: -1,
					result: {
						msg: error
					}
				});
			} else {
				console.log(isSendMsg);
				if(isSendMsg) { //返回结果，不中断流程
					fn(req, res, results[0].solution > 0);
				} else { //返回结果，中断流程
					if(results[0].solution > 0) { //已注册
						res.json({
							code: 1,
							result: {
								msg: '用户已注册!'
							}
						});
					} else {
						fn(req, res);
					}
				}
			}
		});
	}

	return {
		do:_do
	}
})();

module.exports = UserCheck;
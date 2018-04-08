/**
 * 获取用户信息接口 
 */
var pool = require('../../services/db-services.js');
var FetchUserInfo = function(req, res) {
	var userName = req.body.username;
	pool.query('select user_image as  solution from user  where mobile_no = ?', [userName], function(error, results, fields) {
		if(error) {
			res.json({
				code: -1,
				msg: error
			});
		} else {
			res.json({
				code: 0,
				result: results
			});
		}
	});
}

module.exports = FetchUserInfo;
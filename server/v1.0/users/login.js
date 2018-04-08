/**
 * 登陆接口
 * 
 */
var pool = require('../../services/db-services.js');
var Login = function(req, res) {
	var userName = req.body.username;
	var pwd = req.body.pwd;
	pool.query('select user_id,mobile_no,user_img from user  where mobile_no = ? and pwd = ?', [userName, pwd], function(error, results, fields) {
		if(error) {
			res.json({
				code: -1,
				msg: error
			});
		} else {
			if(results.length > 0) {
				res.json({
					code: 0,
					result: {
						userId:results[0].user_id,
						mobileNo:results[0].mobile_no,
						userImg: results[0].user_img ? results[0].user_img.toString('utf-8') : ''
					}
				});
			} else {
				res.json({
					code: 1,
					result: {
						msg: '用户名或者密码错误！'
					}
				});
			}
		}
	});
}

module.exports = Login;
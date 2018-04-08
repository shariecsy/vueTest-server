/**
 * 重置密码 
 */
var pool = require('../../services/db-services.js');
var ResetPassword = function(req, res) {
	var mobileNo = req.body.mobileNo;
	var pwd = req.body.pwd;
	pool.query('update user set pwd = ? where mobile_no = ?', [pwd, mobileNo], function(error, results, fields) {
		if(error) {
			res.json({
				code: -1,
				result: {
					msg: error
				}
			});
		} else {
			res.json({
				code: 0,
				result: {
					id: results.insertId
				}
			});
		}
	});
}

module.exports = ResetPassword;
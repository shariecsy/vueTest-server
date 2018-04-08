/**
 * 用户注册
 * 
 */
var pool = require('../../services/db-services.js');
var UserCheck = require('./utils/userCheck.js')
var Register = function(req, res) {

	//先检查用户是否已注册，再通过回调的方式插入记录
	UserCheck.do(req, res, function(req, res) {
		var mobileNo = req.body.mobileNo;
		var pwd = req.body.pwd;
		pool.query('insert into user set ?', {
			mobile_no: mobileNo,
			pwd: pwd
		}, function(error, results, fields) {
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
						userId: results.insertId
					}
				});
			}
		});
	});
}

module.exports = Register;
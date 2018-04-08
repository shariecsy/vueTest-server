/**
 * 获取当前用户的全部地址列表
 * 
 */
var pool = require('../../services/db-services.js');
var AddressList = function(req, res) {
	var userId = req.body.userId;
	// pool.query('select a.id,a.address,a.name,a.tel_no as telNo,a.is_default as isDefault from address a where user_id =  ?', [userId], function(error, results, fields) {
	pool.query('select * from address where user_id =  ?', [userId], function(error, results, fields) {
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
};

module.exports = AddressList;
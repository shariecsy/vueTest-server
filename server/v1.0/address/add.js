/**
 * 增加地址
 * 
 */
var pool = require('../../services/db-services.js');
var AddAddress = function(req, res) {
	var userId = req.body.userId;
	var address = req.body.address;
	var name = req.body.name;
	var telNo = req.body.telNo;
	var isDefault = req.body.isDefault? 1 : 0;
	pool.query('insert into address set ?', {
		user_id: userId,
		address: address,
		name: name,
		tel_no: telNo,
		is_default: isDefault
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
					id: results.insertId
				}
			});
			// pool.query('update address set is_default=0 where user_id=? and id != ?', [results.insertId,userId], function(error, results, fields) {
			// 	if(error) {
			// 		res.json({
			// 			code: -1,
			// 			result: {
			// 				msg: error
			// 			}
			// 		});
			// 	} else {
			// 		res.json({
			// 			code: 0,
			// 			result: {}
			// 		});
			// 	}
			// });
		}
	});
};

module.exports = AddAddress;
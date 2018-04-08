/**
 * 删除地址
 * 
 */
var pool = require('../../services/db-services.js');
var DeleteAddress = function(req, res) {
	var id = req.body.id;
	pool.query('delete from address where id = ?', [id], function(error, results, fields) {
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
};

module.exports = DeleteAddress;
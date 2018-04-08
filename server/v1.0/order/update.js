/**
 * 修改订单
 * 
 */
var pool = require('../../services/db-services.js');
var UpdateOrder = function(req, res) {
	var id = req.body.id;
	var state = req.body.state;
	pool.query('update orders set order_state = ? where id = ?', [state,id], function(error, results, fields) {
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

module.exports = UpdateOrder;
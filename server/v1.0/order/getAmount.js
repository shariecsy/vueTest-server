/**
 * 增加订单
 * 
 */
var pool = require('../../services/db-services.js');
var GetAmount = function(req, res) {
	var id = req.body.id;
	pool.query('select id, order_amount from orders where id=? and order_state = 0', [id], function(error, results, fields) {
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
					id: results[0].id,
					amount: results[0].order_amount
				}
			});
		}
	});
};

module.exports = GetAmount;
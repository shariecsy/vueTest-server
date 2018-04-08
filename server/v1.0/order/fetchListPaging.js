/**
 * 获取订单列表
 * 
 */
var pool = require('../../services/db-services.js');
var OrdersListPaging = function(req, res) {
	var userId = req.body.userId;
	var currentNo = req.body.currentNo || 1;
	var pageSize = req.body.pageSize || 10;
	pool.query('select a.id,a.order_time as orderTime,a.order_state as orderState,a.order_amount as orderAmount,a.order_no as orderNo, b.order_id, b.medicinal_id, b.medicinal_num, b.medicinal_amount, b.medicinal_info from orders a, order_detail b where a.id = b.order_id and a.user_id = ? limit ? offset ?', [userId,pageSize-0,(pageSize*(currentNo-1))-0], function(error, results, fields) {
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

module.exports = OrdersListPaging;
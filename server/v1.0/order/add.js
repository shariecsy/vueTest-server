/**
 * 增加订单
 * 
 */
var pool = require('../../services/db-services.js');
var AddOrder = function(req, res) {
	var userId = req.body.userId;
	var amount = req.body.amount;
	var orderNo = req.body.orderNo;
	var orderList = JSON.parse(req.body.orderList);
	pool.query('insert into orders set ?', {
		user_id: userId,
		order_amount:amount,
        order_no:orderNo
	}, function(error, results, fields) {
		if(error) {
			res.json({
				code: -1,
				result: {
					msg: error
				}
			});
		} else {
			var orderId = results.insertId;
			res.json({
				code: 0,
				result: {
					id: orderId
				}
			});
			for(var i=0;i<orderList.length;i++){
				var item = orderList[i];
				pool.query('insert into order_detail set ?', {
					order_id:orderId,
					medicinal_id: item.id,
					medicinal_num: item.goodsNum,
					medicinal_amount: item.totalPrice,
					medicinal_info: item.name
				});
			}
		}
	});
};

module.exports = AddOrder;
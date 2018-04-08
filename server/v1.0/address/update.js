/**
 * 修改地址
 * 
 */
var pool = require('../../services/db-services.js');
var UpdateAddress = function(req, res) {
	var id = req.body.id;
	var address = req.body.address;
	var name = req.body.name;
	var telNo = req.body.telNo;
	var isDefault = req.body.isDefault? 1 : 0;
	var userId = req.body.userId;
	if(isDefault === 1) { //设置默认地址，先去掉当前的默认地址状态，再更新信息
		pool.query('update address set is_default=0 where user_id = ? and is_default=1', [userId], function(error, results, fields) {
			if(error) {
				res.json({
					code: -1,
					result: {
						msg: error
					}
				});
			} else { //修改成功后，更新用户信息
				updateFn(address, name, telNo, id, isDefault, res);
			}
		});
	} else { //直接修改用户信息
		updateFn(address, name, telNo, id, isDefault, res);
	}

};

var updateFn = function(address, name, telNo, id, isDefault, res) {
	pool.query('update address set address = ?,name=?,tel_no=?,is_default=? where id = ?', [address, name, telNo, isDefault, id], function(error, results, fields) {
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
				result: {}
			});
		}
	});
}

module.exports = UpdateAddress;
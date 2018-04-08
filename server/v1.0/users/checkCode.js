/**
 * 校验验证码
 * 
 */
var Redis = require('../../services/redis-client.js');
var CheckCode = function(req, res) {
	var mobileNo = req.body.mobileNo;
	var code = req.body.code;
	Redis.get(mobileNo, function(err, value) {
		if(err) {
			res.json({
				code: -1,
				result: {
					msg: err
				}
			})
		} else {
			console.log(mobileNo + ':' + value);
			if(value == code) {
				Redis.del(mobileNo);
				res.json({
					code: 0,
					result: {
						msg: '验证成功！'
					}
				})
			} else {
				res.json({
					code: 1,
					result: {
						msg: '验证码不正确！'
					}
				})
			}
		}
	});
}

module.exports = CheckCode;
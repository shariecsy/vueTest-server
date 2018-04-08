/**
 * 获取验证码
 * 
 */
var UserCheck = require('./utils/userCheck.js');
var Redis = require('../../services/redis-client.js');
var SmsService = require('../../services/sms-service.js');
//创建验证码
var _create_code = function(mobileNo) {
	var num = "";
	for(i = 0; i < 6; i++) {
		num = num + Math.floor(Math.random() * 10);
	}
	console.log(mobileNo + ":" + num);
	return num;
}

var GetCode = function(req, res) {
	var mobileNo = req.body.mobileNo;
	var type = req.body.type || '0'; //0代表注册，1代表重置密码
	var isSendMsg = (type == '1' ? true : false);
	console.log(mobileNo + ":" + type + ":" + isSendMsg);
	UserCheck.do(req, res, function(r, q, result) {
		if(type == '1' && !result) {
			res.json({
				code: 1,
				result: {
					msg: '用户未注册!'
				}
			});
			return;
		}
		var code = _create_code(mobileNo);
		var _callback = function(error, response) {
			if(!error) {
				console.log(response);
				Redis.set(mobileNo, code);
				res.json({
					code: 0,
					result: {
						msg: '验证码已发送'
					}
				});
			} else {
				console.log(error);
				res.json({
					code: 1,
					result: {
						msg: error
					}
				});
			}
		}
		if(type == '0') { //注册
			SmsService.sendRegisterCode(mobileNo, code, _callback);
		} else { //重置
			SmsService.sendModifyPwdCode(mobileNo, code, _callback);
		}
	}, isSendMsg);
}

module.exports = GetCode;
var TopClient = require('./sms/topClient').TopClient;
var client = new TopClient({
	'appkey': '24521198',
	'appsecret': 'bde061f735c7f3cd74165a71b2baa329',
	'REST_URL': 'http://gw.api.taobao.com/router/rest'
});

var SmsService = (function() {
	var _sendRegisterCode = function(mobileNo, code, fn) {
		client.execute('alibaba.aliqin.fc.sms.num.send', {
			'extend': '',
			'sms_type': 'normal',
			'sms_free_sign_name': '医链盟',
			'sms_param': '{\"code\":\"' + code + '\",\"product\":\"医链盟\"}',
			'rec_num': mobileNo,
			'sms_template_code': 'SMS_13026692'
		}, fn)
	}
	var _sendModifyPwdCode = function(mobileNo, code, fn) {
		client.execute('alibaba.aliqin.fc.sms.num.send', {
			'extend': '',
			'sms_type': 'normal',
			'sms_free_sign_name': '医链盟',
			'sms_param': '{\"code\":\"' + code + '\",\"product\":\"医链盟\"}',
			'rec_num': mobileNo,
			'sms_template_code': 'SMS_13026690'
		}, fn)
	}
	return {
		sendRegisterCode: _sendRegisterCode,
		sendModifyPwdCode:_sendModifyPwdCode
	}
})();

module.exports = SmsService;
/**
 * 获取全部消息内容
 * 
 */
var pool = require('../../services/db-services.js');
var MsgQuery = function(req, res) {
	pool.query('select a.id,a.msg_title as title,a.msg_content as content,a.msg_sub_content as subtitle,a.msg_time as btime from msg_center a,user b where a.user_id = b.user_id and b.mobile_no = ?', [req.body.mobileNo], function(error, results, fields) {
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
}

module.exports = MsgQuery;
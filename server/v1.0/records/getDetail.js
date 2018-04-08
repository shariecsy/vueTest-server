/**
 * 获取电子病历详情
 * 
 */
var pool = require('../../services/db-services.js');
var GetDetail = function(req, res) {
	var id = req.body.id;
	pool.query('select hospital, department, doctor, result, visit_time, collect_time, symptom, dosing_hisotry, CT_url, report_url from medical_records where id=?', [id], function(error, results, fields) {
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
				result: results
			});
		}
	});
};

module.exports = GetDetail;
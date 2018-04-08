/**
 * 获取省信息
 * 
 */
var pool = require('../../services/db-services.js');
var GetProvinces = function(req, res) {
	pool.query('select * from area where parent_id is null',function(error, results, fields){
		if(error){
			res.json({
				code:-1,
				msg:error
			})
		}else{
			res.json({
				code:0,
				result:results
			})
		}
	});
};

module.exports = GetProvinces;
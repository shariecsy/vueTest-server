/**
 * 获取全部药品
 * 
 */
var pool = require('../../services/db-services.js');
var GoodsListPaging = function(req, res) {
	var currentNo = req.body.currentNo || 1;
	var pageSize = req.body.pageSize || 10;
	pool.query('select a.id,a.medicinal_code as code,a.medicinal_name as name,a.standard as standard,a.factory as factory,a.unit as unit, a.price as price,a.provider as provider,a.medicinal_type as type,a.img_src as src from medicinal_list a limit ? offset ?', [pageSize-0,(pageSize*(currentNo-1))-0], function(error, results, fields) {
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

module.exports = GoodsListPaging;
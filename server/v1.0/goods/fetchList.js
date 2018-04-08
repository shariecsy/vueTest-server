/**
 * 获取全部药品
 * 
 */
var pool = require('../../services/db-services.js');
var GoodsListQuery = function(req, res) {
	pool.query('select a.id,a.medicinal_code as code,a.medicinal_name as name,a.standard as standard,a.factory as factory,a.unit as unit, a.price as price,a.provider as provider,a.medicinal_type as type,a.img_src as src from medicinal_list a where a.medicinal_name like ?', [req.body.name + "%"], function(error, results, fields) {
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

module.exports = GoodsListQuery;
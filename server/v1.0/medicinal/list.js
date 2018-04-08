/**
 * 创建人：DuHuiling
 * 创建时间：2017/8/25
 * 说明：药品列表
 */

var pool = require('../../services/db-services.js');
var MedicinalList = function(req, res) {
    var _page = req.body.page;
    var _count = 10;
    var _index = (_page - 1) * _count;
    pool.query('select medicinal_name, standard, factory, unit, price, provider, medicinal_type, img_src ' +
        'from medicinal_list order by id limit ?, ?', [_index, _count], function(error, results, fields) {
        if(error) {
            res.json({
                code: -1,
                msg: error
            });
        } else {
            if(results.length > 0) {
                res.json({
                    code: 0,
                    result: results
                });
            } else {
                res.json({
                    code: 1,
                    result: {
                        msg: '暂无数据'
                    }
                });
            }
        }
    });
};

module.exports = MedicinalList;
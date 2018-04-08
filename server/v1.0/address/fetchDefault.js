/**
 * 创建人：DuHuiling
 * 创建时间：2017/8/31
 * 说明：获取默认地址
 */
var pool = require('../../services/db-services.js');
var AddressDefault = function(req, res) {
    var userId = req.body.userId;
    // pool.query('select a.id,a.address,a.name,a.tel_no as telNo,a.is_default as isDefault from address a where user_id =  ?', [userId], function(error, results, fields) {
    pool.query('select address,name,tel_no,is_default from address where user_id = ? and is_default = 1', [userId], function(error, results, fields) {
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

module.exports = AddressDefault;
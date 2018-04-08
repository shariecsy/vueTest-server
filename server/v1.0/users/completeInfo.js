/**
 * 创建人：DuHuiling
 * 创建时间：2017/9/7
 * 说明：完善个人信息
 */
var pool = require('../../services/db-services.js');
var CompleteInfo = function(req, res) {
    var userId = req.body.userId;
    var userName = req.body.userName;
    var certType = req.body.certType;
    var certNo = req.body.certNo;
    var birthdate = req.body.birthdate;
    var sex = req.body.sex;
    console.log(userName);
    console.log(certType);
    console.log(certNo);
    console.log(birthdate);
    console.log(sex);
    pool.query('update user set user_name = ?,cert_type = ?,cert_no = ?,birthdate = ?,sex = ? where user_id = ?',
    // pool.query('select * from user where user_id = ?',[userId],
    [userName, certType, certNo, birthdate, sex, userId],
    function(error, results, fields) {
        if(error) {
            res.json({
                code: -1,
                result: error
            });
        } else {
            res.json({
                code: 0,
                result: {}
            });
        }
    });
};
module.exports = CompleteInfo;

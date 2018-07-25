/*
 * @Author: bianhao 
 * @Date: 2017-12-06 16:38:41 
 * @Last Modified by: bianhao
 * @Last Modified time: 2018-01-02 18:25:37
 */

const db = require('../db'),
  mongoose = db.mongoose,
  Schema = mongoose.Schema;

const adminSchema = new Schema({
  // 主键
  _id: Schema.Types.ObjectId,
  // 创建时间
  createTime: {type: Date, default: Date.now},
  // 账号
  account: {type: String},
  // 密码
  password: {type: String},
  // 权限, 1为超级管理员，2为高级管理员，3为普通管理员
  power: {type: Number, default: 3},
  // 最后登录ip
  lastip: {type: String},
  // 是否禁止登录
  bandrag: {type: Boolean, default: false}
});

exports.adminModel = mongoose.model('admin', adminSchema);
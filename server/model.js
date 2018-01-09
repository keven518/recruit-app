const mongoose = require('mongoose')
// 链接mongo，并且使用recruit集合
const DB_URL = 'mongodb://localhost:27017/recruit-chat'
mongoose.connect(DB_URL)

const models = {
  user: {
    'user': {type: String, require: true},
    'pwd': {type: String, require: true},
    'type': {type: String, require: true},
    // 头像
    'avatar': {type: String},
    // 个人简介或者职位简介
    'desc': {type: String},
    // 职位名称
    'title': {type: String},
    // boss,还有两个字段
    'company': {type: String},
    'money': {type: String}

  },
  chat: {}
}

// 注册models
for(let m in models){
  mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
  getModel: name => mongoose.model(name)
}
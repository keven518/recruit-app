const express = require('express')
const utils = require('utility')

const Router = express.Router()
const models = require('./model')
const User = models.getModel('user')
const _filter = {'pwd':0, '__v':0}

Router.get('/list', (req, res) => {
  User.find({}, (err, doc) => {
    return res.json(doc)
  })
})

Router.post('/login', (req, res) => {
  const {user, pwd} = req.body
  User.findOne({user, pwd:md5Pwd(pwd)}, _filter, (e, d) => {
    // 如果没有记录只会为空，不会为e(即err)
    if(!d) {
      return res.json({code:1, msg:'用户名或密码错误'})
    }
    res.cookie('userid', d._id)
    return res.json({code:0, data:d})
  })
})

Router.post('/register', (req, res) => {
  console.log(req.body)
  const {user, pwd, type} = req.body
  User.findOne({user: user}, (err, doc) => {
    if(doc) {
      return res.json({code:1, msg:'用户名重复'})
    }
    const userModel = new User({user, pwd:md5Pwd(pwd), type})
    userModel.save((e, d) => {
      if (e) {
        return res.json({code:1, msg:'后端出错了'})
      }
      const {user, type, _id} = d
      res.cookie('userid', _id)
      return res.json({code:0, data:{user, type, _id}})
    })
    // User.create({user, pwd:md5Pwd(pwd), type}, (e, d) => {
    //   if (e) {
    //     return res.json({code:1, msg:'后端出错了'})
    //   }
    //   return res.json({code:0})
    // })
  })
})

Router.get('/add', (req, res) => {
  User.create({
    user: 'cw',
    pwd: 'caiwei',
    type: 0
  }).then((doc) => {
    console.log('add success')
  }, (err) => {
    console.log('err')
  })
})

Router.get('/info', (req, res) => {
  const {userid} = req.cookies
  if(!userid){
    // 没有cookie
    return res.json({ code: 1 })
  }
  User.findOne({_id: userid}, _filter, (e, d) => {
    if(e) {
      return res.json({code:1, msg:'后端出错了'})
    }
    if(d) {
      return res.json({code:0, data:d})
    }
  })
})

Router.get('/kv', (req, res) => {
  // 用户有没有cookie
  return res.send('keven')
})

Router.get('/remove', (req, res) => {
  User.remove({}, (e, d) => {
    return res.send(d)
  })
})

function md5Pwd(pwd){
  const salt = 'kezijin_is_good_20110812!$5@1#8'
  return utils.md5(utils.md5(pwd + salt))
}

module.exports = Router
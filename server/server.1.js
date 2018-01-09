const express = require('express')
const mongoose = require('mongoose')
// 链接mongo，并且使用recruit集合
const DB_URL = 'mongodb://localhost:27017/recruit'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', ()=>{
  console.log('mongo connect success')
})
// 类似于mysql的表 mongo里有文档、字段的概念
const User = mongoose.model('user', new mongoose.Schema({
  User: {type:String, require:true},
  age: {type:Number, require:true}
}))
// 新增数据
// User.create({
//   User: 'cw',
//   age: 48,
//   sex: 0
// }).then((doc)=>{
//   console.log('kv success')
// },(err)=>{
//   console.log('err')
// })

// 新建app
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>hello world kewen</h1>')
})

app.get('/data', (req, res)=>{
  User.findOne({User: 'cmm'}).then((doc)=>{
    console.log('user: ', doc)
    return res.json(doc)
  },(err)=>{
    console.log('err: ', err)
  })
})

app.get('/delete', (req, res)=>{
  User.remove({User: '毛泽东'}).then((doc)=>{
    console.log('dele: ', doc)
    res.send('delete')
  }, (err)=>{
    console.log('err: ', err)
    res.send('delete err')
  })
})

app.get('/update', (req, res)=>{
  User.update({User: '周恩来'}, {'$set': {User: 'ksm', age: 200}}).then((doc)=>{
    console.log('update success: ', doc)
    res.send('update success8' + doc.toString())
  }, (err)=>{
    console.log('err: ', err)
  })
})

app.listen(9093,() => {
  console.log('Node app start at port 9093')
})
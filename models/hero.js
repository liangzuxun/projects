const mongoose = require('mongoose')
const db = mongoose.connect('mongodb://localhost:27017/myhero')
const heroSchema = mongoose.Schema({name:String,age:String,sex:String},{collection:'myhero'})
const Hero = module.exports = mongoose.model('hero',heroSchema)
mongoose.connection.once('open',function(){
  console.log('collection success!')
})
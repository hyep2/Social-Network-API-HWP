const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {type: String},  
  email: { type: String },  
  thoughts: { type: Number },  
  friends: { type: Number },
})

const User = mongoose.model('User', 'userSchema')

const handleError = (err) => console.error(err)

module.exports = User
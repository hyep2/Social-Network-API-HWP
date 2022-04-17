const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },  
  email: { 
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!']
  },  
  thoughts: [{ 
    type: Schema.Types.ObjectId,
    ref: 'Thought'
  }],  
  friends: [{ 
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
})

//virtual property friendCount to get number of friends
User.virtual('friendCount').get(function () {
  return this.friends.length
})


const User = mongoose.model('User', 'userSchema')

const handleError = (err) => console.error(err)

module.exports = User
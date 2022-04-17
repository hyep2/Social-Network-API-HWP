const { Schema, model }   = require('mongoose')

const userSchema = new Schema({
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


const User = model('User', userSchema)

//virtual property friendCount to get number of friends
userSchema.virtual('friendCount').get(function () {
  return this.friends.length
})

//seeding
User.create(
  { username: 'hyep2', email: 'hyewon@gmail.com'},
  (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(data);
  }
);

const handleError = (err) => console.error(err)

module.exports = User
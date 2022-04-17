const mongoose = require('mongoose')

//subdocument reactionSchema
const reactionSchema = new mongoose.Schema({
  reactionId: { 
    type: Schema.Types.ObjectId,
    //default value is set ton new ObjectId
    default: () => new Types.ObjectId()
  },
  reactionBody: { 
    type: String, 
    required: true,
    maxLength: 280
  },
  username: { 
    type: String, 
    required: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
})

const thoughtSchema = new mongoose.Schema({
  thoughtText: { 
    type: String, 
    required: true,
    minLength: 1,
    maxLength: 280
  },
  createdAt: { type: Date, default: Date.now},
  username: { 
    type: String,
    required: true
  },
  //array holding all reactions
  reactions: [reactionSchema]
})

//virtual property reactionCount to get number of reactions
Thought.virtual('reactionCount').get(function () {
  return this.reactions.length
})

const Thought = mongoose.model('Thought', 'thoughtSchema')

const handleError = (err) => console.error(err)

module.exports = Thought
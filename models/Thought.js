const { Schema, model }  = require('mongoose')

//subdocument reactionSchema
const reactionSchema = new Schema({
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

const thoughtSchema = new Schema({
  thoughtText: { 
    type: String, 
    required: true,
    minLength: 1,
    maxLength: 280
  },
  createdAt: { type: Date, default: Date.now},
  username: { 
    type: String,
    required: true,
  },
  //array holding all reactions
  reactions: [reactionSchema]
})



const Thought = model('Thought', thoughtSchema)

//virtual property reactionCount to get number of reactions
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length
})

//seeding
Thought.create(
  { thoughtText: 'just testing it out', username: 'hyep2' },
  (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(data);
  }
);


const handleError = (err) => console.error(err)

module.exports = Thought
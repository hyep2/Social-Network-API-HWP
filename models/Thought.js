const mongoose = require('mongoose')

const thoughtSchema = new mongoose.Schema({
  thoughtText: { type: String },
  createdAt: { type: Date, default: Date.now},
  username: { type: String },
  reactions: { type: String },
})

const Thought = mongoose.model('Thought', 'thoughtSchema')

const handleError = (err) => console.error(err)

module.exports = Thought
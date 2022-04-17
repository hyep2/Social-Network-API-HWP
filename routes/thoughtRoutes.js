const router = require('express').Router()
const { Thought, User } = require('../models')

//GET ALL THOUGHTS
router.get('/thoughts', async (req, res) => {
  try {
    const thoughts = await Thought.find({})
    res.json(thoughts)
  } catch (err) {
    res.status(500).json({ err })
  }
})

//GET SINGLE THOUGHT BY ID
router.get('/thoughts/:id', async ({ params: { id } }, res) => {
  try {
    const thought = await Thought.findById(id);
    res.json(thought)
  } catch (error) {
    res.status(500).json({ error })
  }
})

//CREATE NEW THOUGHT AND PLUG TO ASSOCIATED USER BY USERNAME
router.post('/thoughts', async ({ body }, res) => {
  try {
    const thought = await Thought.create(body)
    res.json('Thought successfully created within user')
    return User.findOneAndUpdate(
      {username: thought.username},
      {$push: {thoughts:thought}},
      {new:true}
    )
    
  } catch (error) {
    res.status(500).json({ error })
  }
})

module.exports = router

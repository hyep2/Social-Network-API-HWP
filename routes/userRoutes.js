const router = require('express').Router()
const { User } = require('../models')

router.get('/users', async (req, res) => {
  try {
    const users = await User.find({})
    res.json(users)
  } catch (err) {
    res.status(500).json({ err })
  }
})

router.get('/users/:id', async({params:{id}}, res)=> {
  try {
    const user = await User.findById(id)
    res.json(user)
  } catch (error) {
    res.status(500).json({error})
  }
})

module.exports = router

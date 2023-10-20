const express = require('express');
const router = express.Router();
const User = require('../modals/User')

router.get('/', (req, res) => {
  return res.send("Hello Front-end")
})
// Add User
router.post('/createuser', (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
    })
    newUser.save()
    return res.status(200).json(newUser)
  } catch (error) {
    return console.log(error);
  }
})
// All users
router.get('/fetchalluser', async (req, res) => {
  try {
    const allUser = await User.find()
    return res.send(allUser)
  } catch (error) {
    return res.send(error)
  }
})





module.exports = router
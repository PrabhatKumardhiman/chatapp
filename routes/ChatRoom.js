const express = require('express');
const router = express.Router();
const ChatRoom = require('../modals/chatRoom');
const Message = require('../modals/Message');


router.get('/', (req, res) => {
  return res.send("Hello Front-end")
})
// Create new Chat Room
router.post('/createchatroom', async (req, res) => {
  try {
    const newMessages = await Message.find()
    const chatRoom = new ChatRoom({
      name: req.body.name,
      messages: [newMessages],
    })
    chatRoom.save()
    return res.status(200).json(chatRoom)
  } catch (error) {
    return console.log(error);
  }
})

// Fetch all Chat Rooms
router.get('/fetchallchatroom', async (req, res) => {
  try {
    const chatRoom = await ChatRoom.find()
    return res.send(chatRoom)
  } catch (error) {
    return console.log(error);
  }
})


module.exports = router
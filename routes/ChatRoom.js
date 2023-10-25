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
      group: req.body.group,
      messages: [newMessages],
    })
    chatRoom.save()
    return res.status(200).json(chatRoom)
  } catch (error) {
    return console.log(error);
  }
})


// Update ChatRoom Details
// router.put('/updatechatroom/', (req, res) => {
//   return res.send("Hello Front-end")
// })

// Fetch all Chat Rooms
router.get('/fetchallchatroom', async (req, res) => {
  try {
    const chatRoom = await ChatRoom.find()
    return res.send(chatRoom)
  } catch (error) {
    return console.log(error);
  }
})

// Delete ChatRoom 
router.delete('/deletechatroom/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const chatroom = await ChatRoom.findById(id);
    if (chatroom) {
      const deletechatroom = await ChatRoom.findByIdAndDelete(id)
      return res.status(200).json({ sucess: 'ChatRoom deleted', deletechatroom })
    }
    else {
      return res.status(200).send('No Chat Room Found')
    }
  } catch (error) {
    res.status(500).send('internal server error', error)
  }
})


module.exports = router
const express = require('express');
const router = express.Router();
const Message = require('../modals/Message');

// A message send by 65322f4b306b2110a5eb5433
router.get('/newmessage', async (req, res) => {
  try {
    const message =  await new Message({
      sender : req.body.sender,
      content: req.body.content,
    })
    message.save()
    return res.status(200).json(message)
  } catch (error) {
    return console.log(error);
  }
})



router.get('/fetchallmessage', async(req, res) => {
  try {
   const allmessages = await Message.find()
   return res.send(allmessages)
  } catch (error) {
    return res.send("Internal Server Error")
  }
})


module.exports = router
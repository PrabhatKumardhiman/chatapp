const express = require('express');
const Group = require('../modals/group');
const router = express.Router();
const ChatRoom = require('../modals/chatRoom')

router.get('/', (req,res) => {
  return res.send("Hello Front-end")
})

router.post('/createGroup', async (req,res) => {
  try {
    const chatroom = await ChatRoom.find();
    const group = new Group({
      name : req.body.name,
      member : req.body.member,
      chatRooms : chatroom
    })
    group.save()
    return res.send(group)
  } catch (error) {
    return console.log(error);
  }
})

router.get('/fetchallgroups', async (req,res) => {
  try {
    const group = await Group.find()
    return res.send(group)
  } catch (error) {
    return console.log(error);
  }
})





module.exports = router
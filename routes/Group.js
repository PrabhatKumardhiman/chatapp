const express = require('express');
const Group = require('../modals/group');
const router = express.Router();
const ChatRoom = require('../modals/chatRoom')

router.get('/', (req, res) => {
  return res.send("Hello Front-end")
})
// API to create a Group on http://localhost:3000/api/group/createGroup which will get details from request body
router.post('/createGroup', async (req, res) => {
  try {
    const chatroom = await ChatRoom.find();
    const group = new Group({
      // name : req.body.name,
      // member : req.body.member,
      // chatRooms : chatroom
      groupname: req.body.groupname,
      grouppass: req.body.grouppass,
      chatpass: req.body.chatpass
    })
    group.save()
    return res.send(group)
  } catch (error) {
    return console.log(error);
  }
})

// API to get all Group on http://localhost:3000/api/group/fetchallgroups which will get each and every group created so far
router.get('/fetchallgroups', async (req, res) => {
  try {
    const group = await Group.find()
    return res.send(group)
  } catch (error) {
    return console.log(error);
  }
})

// API to update group info on http://localhost:3000/api/group/updategroup which will update details of groups.
router.put('/updategroup/:id', async (req, res) => {
  try {

    const id = req.params.id;
    const { groupname, grouppass, chatpass } = req.body
    const updatedgroup = {}
    // Change only the object that is present in request body
    if (groupname) {
      updatedgroup.groupname = groupname;
    }
    if (grouppass) {
      updatedgroup.description = grouppass;
    }
    if (chatpass) {
      updatedgroup.tag = chatpass;
    }
    // getting the group to be updated from id in URL
    let grp = await Group.findById(id)

    // if no user is associated with the id
    if (!grp) {
      return res.status(400).send("No group with given information found")
    }
    grp = await Group.findByIdAndUpdate(
      req.params.id,
      updatedgroup,
      { $set: updatedgroup },
      { new: true }
    )
    const grpafterupdation = await Group.findById(id)
    return res.send(grpafterupdation)

  } catch (error) {
    console.error(error);
    res.status(401).send({ error: "Something  went wrong" });
  }
})

// Api to delete a group on http://localhost:3000/api/group/deletegroup
router.delete('/deletegroup/:id', async (req, res) => {
  try {
    // getting the group to be updated from id in URL
    let grp = await Group.findById(req.params.id)
    // if no user is associated with the id
    if (!grp) {
      return res.status(400).send("No group with given information found")
    }
    grp = await Group.findByIdAndDelete(req.params.id)
    return res.status(200).send({ "sucess": "Group deleted sucessfully", grp })
  } catch (error) {
    res.status(401).send({ error: "Something  went wrong" });
  }
})

//api to check for group name avaliablity  http://localhost:3000/api/group/newgroup/:id
router.post('/newgroup', async (req, res) => {

  try {
    const newgroups = await Group.find()
    const avaliable = newgroups.filter((group) => {
      if (group.groupname.toString().trim() === req.body.groupname.toString().trim()) {
        return group;
      }
      else {
        return null
      }
    })
    if (avaliable.length === 0) {
      return res.send("Avaliable")
    }
    else {
      return res.send('user exists')
    }

  } catch (error) {
    res.send(error)
  }
})


//api to check for one particular group http://localhost:3000/api/group/newgroup/:id
router.post('/onegroup', async (req, res) => {

  try {
    const newgroups = await Group.find()
    const avaliable = newgroups.filter((group) => {
      if (group.groupname.toString().trim() === req.body.groupname.toString().trim()) {
        return group;
      }
    })
    if(avaliable.length === 0){
    return res.send("No Group Found")
    }
    else return res.send(avaliable);

  } catch (error) {
    res.send(error)
  }
})


module.exports = router
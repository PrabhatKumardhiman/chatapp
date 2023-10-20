const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  return res.send("Hello Front-end")
})

router.post('/createGroup', (req,res) => {
  try {
    return res.send(req.body)
  } catch (error) {
    return console.log(error);
  }
})





module.exports = router
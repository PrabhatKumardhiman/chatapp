const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose") // Using Mongoose to Handle MongoDB Connection
const dotenv = require('dotenv');

dotenv.config()// receving files form .env

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())
app.use(cors())

// Function to Connect to MONGODB
const connectToMongo = require('./connectToMongo');
connectToMongo()

app.use('/api/groupchat', require('./routes/Group'))
app.use('/api/user', require('./routes/User'))
// app.use('/api/groupchat', require('./routes/Group'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})